const fs = require('fs');
let content = fs.readFileSync('src/components/ui/HUD.tsx', 'utf8');

// Push the Top Bar text from top-12 down to top-24 so it clears the SiteNav
content = content.replace(
  'className="absolute top-12 left-16 right-16 flex justify-between items-start"',
  'className="absolute top-24 left-16 right-16 flex justify-between items-start"'
);

// Push the Top brackets down so they are below the Nav
content = content.replace(
  '<div className="absolute top-6 left-6 w-8 h-[1px] bg-paper" />\n      <div className="absolute top-6 left-6 w-[1px] h-8 bg-paper" />',
  '<div className="absolute top-20 left-6 w-8 h-[1px] bg-paper" />\n      <div className="absolute top-20 left-6 w-[1px] h-8 bg-paper" />'
);

content = content.replace(
  '<div className="absolute top-6 right-6 w-8 h-[1px] bg-paper" />\n      <div className="absolute top-6 right-6 w-[1px] h-8 bg-paper" />',
  '<div className="absolute top-20 right-6 w-8 h-[1px] bg-paper" />\n      <div className="absolute top-20 right-6 w-[1px] h-8 bg-paper" />'
);

// Make sure HUD is above most things but below nav (z-[9000] is safe)
content = content.replace(
  'className="fixed inset-0 pointer-events-none z-50 text-paper font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] opacity-40"',
  'className="fixed inset-0 pointer-events-none z-[9000] text-paper font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] opacity-40"'
);

fs.writeFileSync('src/components/ui/HUD.tsx', content);
