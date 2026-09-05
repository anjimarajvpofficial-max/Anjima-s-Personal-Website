const fs = require('fs');
let content = fs.readFileSync('src/components/sections/Hero.tsx', 'utf8');

// Button 1: Add border border-transparent to match the border box size of Button 2, and make it inline-block
content = content.replace(
  'className="font-mono text-xs tracking-widest uppercase bg-accent text-ink px-8 py-4 hover:bg-paper hover:scale-105 transition-all duration-300 whitespace-nowrap shadow-[0_0_30px_rgba(255,0,80,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)]"',
  'className="inline-block font-mono text-xs tracking-widest uppercase bg-accent text-ink px-8 py-4 border border-transparent hover:bg-paper hover:scale-105 transition-all duration-300 whitespace-nowrap shadow-[0_0_30px_rgba(255,0,80,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)]"'
);

// Button 2: Add inline-block so vertical padding works correctly
content = content.replace(
  'className="font-mono text-xs tracking-widest uppercase border border-paper/50 text-paper px-8 py-4 hover:border-paper hover:bg-paper hover:text-ink hover:scale-105 transition-all duration-300 whitespace-nowrap text-center backdrop-blur-sm"',
  'className="inline-block font-mono text-xs tracking-widest uppercase border border-paper/50 text-paper px-8 py-4 hover:border-paper hover:bg-paper hover:text-ink hover:scale-105 transition-all duration-300 whitespace-nowrap text-center backdrop-blur-sm"'
);

fs.writeFileSync('src/components/sections/Hero.tsx', content);
