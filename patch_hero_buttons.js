const fs = require('fs');
let content = fs.readFileSync('src/components/sections/Hero.tsx', 'utf8');

// Fix buttons layout on mobile
content = content.replace(
  'className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col sm:flex-row items-center gap-4 z-20 pointer-events-auto"',
  'className="absolute bottom-16 left-1/2 -translate-x-1/2 w-[90vw] max-w-md flex flex-col sm:flex-row items-center justify-center gap-4 z-20 pointer-events-auto"'
);

// Make the buttons scale down padding and text on mobile
content = content.replace(
  'className="inline-block font-mono text-xs tracking-widest uppercase bg-accent text-ink px-8 py-4',
  'className="w-full sm:w-auto text-center inline-block font-mono text-[10px] sm:text-xs tracking-widest uppercase bg-accent text-ink px-4 sm:px-8 py-3 sm:py-4'
);

content = content.replace(
  'className="inline-block font-mono text-xs tracking-widest uppercase border border-paper/50 text-paper px-8 py-4',
  'className="w-full sm:w-auto text-center inline-block font-mono text-[10px] sm:text-xs tracking-widest uppercase border border-paper/50 text-paper px-4 sm:px-8 py-3 sm:py-4'
);

fs.writeFileSync('src/components/sections/Hero.tsx', content);

