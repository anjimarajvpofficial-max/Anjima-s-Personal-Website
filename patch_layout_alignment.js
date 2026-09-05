const fs = require('fs');

// 1. Fix HUD.tsx Frequencies
let hudContent = fs.readFileSync('src/components/ui/HUD.tsx', 'utf8');

// Change frequencies to anchor to the LEFT of the line, so they don't clip off the right side of the screen
hudContent = hudContent.replace(
  '<div className="absolute top-0 -right-24 font-mono text-[10px] text-accent opacity-0 md:opacity-100">88.1 MHz</div>',
  '<div className="absolute top-0 right-full pr-4 font-mono text-[10px] text-accent opacity-0 md:opacity-100 whitespace-nowrap">88.1 MHz</div>'
);
hudContent = hudContent.replace(
  '<div className="absolute top-1/4 -right-24 font-mono text-[10px] opacity-40 hidden md:block">92.5 MHz</div>',
  '<div className="absolute top-1/4 right-full pr-4 font-mono text-[10px] opacity-40 hidden md:block whitespace-nowrap">92.5 MHz</div>'
);
hudContent = hudContent.replace(
  '<div className="absolute top-1/2 -right-24 font-mono text-[10px] opacity-40 hidden md:block">104.3 MHz</div>',
  '<div className="absolute top-1/2 right-full pr-4 font-mono text-[10px] opacity-40 hidden md:block whitespace-nowrap">104.3 MHz</div>'
);
hudContent = hudContent.replace(
  '<div className="absolute top-3/4 -right-24 font-mono text-[10px] opacity-40 hidden md:block">108.0 MHz</div>',
  '<div className="absolute top-3/4 right-full pr-4 font-mono text-[10px] opacity-40 hidden md:block whitespace-nowrap">108.0 MHz</div>'
);
fs.writeFileSync('src/components/ui/HUD.tsx', hudContent);

// 2. Fix Footer.tsx overlap
let footerContent = fs.readFileSync('src/components/sections/Footer.tsx', 'utf8');
footerContent = footerContent.replace(
  '<div className="md:text-right flex flex-col justify-between md:pr-16 relative z-30">',
  '<div className="md:text-right flex flex-col justify-between md:pr-40 relative z-30">'
);
fs.writeFileSync('src/components/sections/Footer.tsx', footerContent);

