const fs = require('fs');
let hud = fs.readFileSync('src/components/ui/HUD.tsx', 'utf8');

// Move the Top Text down to top-28 (112px)
hud = hud.replace(
  'className="absolute top-16 left-16 right-24 flex justify-between items-start"',
  'className="absolute top-28 left-16 right-24 flex justify-between items-start"'
);

// Move the Top Brackets down to top-20 (80px) so they clear the 64px SiteNav
// Top Left
hud = hud.replace('className="absolute top-8 left-8 w-8 h-[1px] bg-paper"', 'className="absolute top-20 left-8 w-8 h-[1px] bg-paper"');
hud = hud.replace('className="absolute top-8 left-8 w-[1px] h-8 bg-paper"', 'className="absolute top-20 left-8 w-[1px] h-8 bg-paper"');

// Top Right
hud = hud.replace('className="absolute top-8 right-12 w-8 h-[1px] bg-paper"', 'className="absolute top-20 right-12 w-8 h-[1px] bg-paper"');
hud = hud.replace('className="absolute top-8 right-12 w-[1px] h-8 bg-paper"', 'className="absolute top-20 right-12 w-[1px] h-8 bg-paper"');

fs.writeFileSync('src/components/ui/HUD.tsx', hud);
