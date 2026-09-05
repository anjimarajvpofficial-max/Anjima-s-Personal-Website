const fs = require('fs');
let content = fs.readFileSync('src/components/ui/Preloader.tsx', 'utf8');

// Remove matrix text
content = content.replace(
  /<div className="absolute top-1\/2 left-1\/2 -translate-x-1\/2 -translate-y-1\/2 w-full max-w-2xl font-mono text-\[8px\] leading-none text-accent break-all opacity-10 z-0 text-center">\s*\{matrix\}\{matrix\}\{matrix\}\s*<\/div>/g,
  ''
);

// Remove the red drop shadow from the loading text
content = content.replace(
  'className="text-[20vw] font-display leading-none tracking-tighter text-paper relative z-20 shadow-ink drop-shadow-2xl"',
  'className="text-[20vw] font-display leading-none tracking-tighter text-paper relative z-20"'
);

// Speed it up (from 150ms per tick to 50ms per tick)
content = content.replace('}, 150);', '}, 30);');
content = content.replace('setTimeout(() => {', 'setTimeout(() => {');
content = content.replace('}, 500); // Hold at 100% for a moment', '}, 200);');

fs.writeFileSync('src/components/ui/Preloader.tsx', content);
