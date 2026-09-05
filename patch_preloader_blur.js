const fs = require('fs');
let content = fs.readFileSync('src/components/ui/Preloader.tsx', 'utf8');

// Remove mix-blend-difference and z-10 from the massive text
content = content.replace(
  'className="text-[20vw] font-display leading-none tracking-tighter mix-blend-difference z-10"',
  'className="text-[20vw] font-display leading-none tracking-tighter text-paper relative z-20 shadow-ink drop-shadow-2xl"'
);

// Reduce matrix opacity from 20 to 10
content = content.replace(
  'className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl font-mono text-[8px] leading-none text-accent break-all opacity-20 -z-10 text-center"',
  'className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl font-mono text-[8px] leading-none text-accent break-all opacity-10 z-0 text-center"'
);

fs.writeFileSync('src/components/ui/Preloader.tsx', content);
