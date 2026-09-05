const fs = require('fs');

let content = `"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLenis } from "@studio-freight/react-lenis";
import { useCursor } from "./CustomCursor";
import { useCyberSound } from "@/lib/useCyberSound";

export default function Navigation() {
  const lenis = useLenis();
  const [activeFreq, setActiveFreq] = useState("88.1");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isTuning, setIsTuning] = useState(false);
  
  const { setVariant, setText } = useCursor();
  const { playHoverBlip, playClickThud } = useCyberSound();

  const frequencies = [
    { freq: "88.1", id: "hero" },
    { freq: "92.5", id: "work" },
    { freq: "104.3", id: "control" },
    { freq: "108.0", id: "footer" }
  ];

  // Smoothly track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress(totalScroll / windowHeight);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
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
    };
  }, []);

  const handleTune = (freq: string, id: string) => {
    setActiveFreq(freq);
    setIsTuning(true);
    
    // Smooth scroll to the section
    lenis?.scrollTo(\`#\${id}\`);
    
    setTimeout(() => setIsTuning(false), 800);
  };

  return (
    <>
      {/* Visual Static Transition Overlay */}
      {isTuning && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.5, 1, 0] }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9998] pointer-events-none "
          style={{ backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png")', backgroundRepeat: 'repeat' }}
        />
      )}

      {/* Right Side Frequency Tuner */}
      <div className="fixed right-6 md:right-12 top-1/2 -translate-y-1/2 z-[9999] flex flex-col items-center gap-8 text-paper font-mono text-xs">
        <div className="rotate-90 origin-center mb-8 opacity-50 hidden md:block tracking-widest whitespace-nowrap">TUNE_FREQ</div>
        
        <div className="relative h-64 w-1 bg-paper/20 rounded-full flex flex-col justify-between items-center py-2">
          {/* Active slider indicator */}
          <motion.div 
            layout
            className="absolute w-3 h-3 bg-accent rounded-full -left-1 pointer-events-none"
            initial={false}
            animate={{ 
              top: \`\${scrollProgress * 100}%\`,
              y: "-50%" 
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />

          {frequencies.map((f, i) => (
            <div 
              key={f.freq}
              onClick={() => { handleTune(f.freq, f.id); playClickThud(); }}
              onMouseEnter={() => { setVariant("hover"); playHoverBlip(); }}
              onMouseLeave={() => { setVariant("default"); }}
              className={\`w-4 h-1 cursor-pointer group transition-colors duration-300 \${activeFreq === f.freq ? 'bg-transparent' : 'bg-paper/50 hover:bg-paper'}\`}
            >
              <div className={\`absolute right-6 transition-all duration-300 hidden md:block whitespace-nowrap \${activeFreq === f.freq ? "opacity-100 text-accent font-bold" : "opacity-30 group-hover:opacity-100"}\`}>
                {f.freq} MHz
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
`

fs.writeFileSync('src/components/ui/Navigation.tsx', content);
