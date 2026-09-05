const fs = require('fs');

// 1. Remove the duplicate Scroll Indicator from HUD.tsx
let hudContent = fs.readFileSync('src/components/ui/HUD.tsx', 'utf8');
hudContent = hudContent.replace(
  /\{\/\* Global Scroll Indicator - Right side \*\/\}.*?<\/div>\s*<\/div>/s,
  ''
);
// Also remove the native scroll listener I added to HUD.tsx earlier to keep it clean
hudContent = hudContent.replace(
  /const \[scrollProgress.*?\], \[\]\);/s,
  ''
);
fs.writeFileSync('src/components/ui/HUD.tsx', hudContent);

// 2. Upgrade Navigation.tsx to use smooth scroll tracking
let navContent = fs.readFileSync('src/components/ui/Navigation.tsx', 'utf8');

// Replace the activeFreq logic with smooth scroll tracking
navContent = navContent.replace(
  'const [activeFreq, setActiveFreq] = useState("88.1");',
  `const [activeFreq, setActiveFreq] = useState("88.1");
  const [scrollProgress, setScrollProgress] = useState(0);

  // Smoothly track scroll progress
  import { useEffect as UseEffect } from "react";
  UseEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress(totalScroll / windowHeight);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);`
);

// We need to fix the import of useEffect since I just injected it
navContent = navContent.replace(
  'import { useState } from "react";',
  'import { useState, useEffect } from "react";'
);
// Remove the hacky UseEffect
navContent = navContent.replace(/import \{ useEffect as UseEffect \} from "react";\n\s*UseEffect/g, 'useEffect');

// Now, update the dot animation to use scrollProgress
navContent = navContent.replace(
  'animate={{ \n              top: frequencies.findIndex(f => f.freq === activeFreq) * (100 / (frequencies.length - 1)) + "%",\n              y: "-50%" \n            }}',
  'animate={{ \n              top: `${scrollProgress * 100}%`,\n              y: "-50%" \n            }}'
);

// We also need activeFreq to update based on scroll position so the text highlights!
navContent = navContent.replace(
  'handleScroll();\n    return () =>',
  `handleScroll();
    
    // Intersection Observer to highlight active text
    const observers = frequencies.map(f => {
      const el = document.getElementById(f.id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveFreq(f.freq); },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
      );
      obs.observe(el);
      return obs;
    });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observers.forEach(o => o && o.disconnect());
    }`
);

fs.writeFileSync('src/components/ui/Navigation.tsx', navContent);
