const fs = require('fs');

// 1. Remove it from Hero.tsx
let heroContent = fs.readFileSync('src/components/sections/Hero.tsx', 'utf8');
heroContent = heroContent.replace(
  /\{\/\* Scroll indicator - Right side \*\/\}.*?<\/div>\s*<\/div>/s,
  ''
);
fs.writeFileSync('src/components/sections/Hero.tsx', heroContent);

// 2. Add it to HUD.tsx
let hudContent = fs.readFileSync('src/components/ui/HUD.tsx', 'utf8');

if (!hudContent.includes('scrollYProgress')) {
  hudContent = hudContent.replace(
    'import { useEffect, useState } from "react";',
    'import { useEffect, useState } from "react";\nimport { motion, useScroll, useTransform } from "framer-motion";'
  );

  hudContent = hudContent.replace(
    'const [time, setTime] = useState("");',
    'const [time, setTime] = useState("");\n  const { scrollYProgress } = useScroll();\n  const dotY = useTransform(scrollYProgress, [0, 1], [0, 256]);'
  );

  const scrollIndicatorJSX = `
      {/* Global Scroll Indicator - Right side */}
      <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-20 pointer-events-auto">
        <div className="font-mono text-[8px] uppercase tracking-widest text-paper/40 [writing-mode:vertical-rl] mb-4">
          TUNE_FREQ
        </div>
        <div className="w-[1px] h-64 bg-paper/10 relative">
          <motion.div 
            style={{ y: dotY }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent cursor-pointer"
          />
          <div className="absolute top-1/4 -right-1 w-2 h-[1px] bg-paper/30" />
          <div className="absolute top-1/2 -right-1 w-2 h-[1px] bg-paper/30" />
          <div className="absolute top-3/4 -right-1 w-2 h-[1px] bg-paper/30" />
        </div>
      </div>
      
      {/* Center Crosshair */}`;

  hudContent = hudContent.replace('{/* Center Crosshair */}', scrollIndicatorJSX);
  fs.writeFileSync('src/components/ui/HUD.tsx', hudContent);
}

