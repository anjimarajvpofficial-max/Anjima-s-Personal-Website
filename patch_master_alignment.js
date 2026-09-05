const fs = require('fs');

// 1. HUD.tsx
let hud = fs.readFileSync('src/components/ui/HUD.tsx', 'utf8');

// Top Bar: Pushed to left-16 right-24
hud = hud.replace(
  'className="absolute top-24 left-20 right-20 flex justify-between items-start"',
  'className="absolute top-16 left-16 right-24 flex justify-between items-start"'
);

// Bottom Bar: Pushed to left-16 right-24
hud = hud.replace(
  'className="absolute bottom-12 left-20 right-20 flex justify-between items-end"',
  'className="absolute bottom-16 left-16 right-24 flex justify-between items-end"'
);

// Viewfinder Brackets: Push outwards to left-8, right-12, top-8, bottom-8 to frame the text
// Top Left
hud = hud.replace('className="absolute top-20 left-12 w-8 h-[1px] bg-paper"', 'className="absolute top-8 left-8 w-8 h-[1px] bg-paper"');
hud = hud.replace('className="absolute top-20 left-12 w-[1px] h-8 bg-paper"', 'className="absolute top-8 left-8 w-[1px] h-8 bg-paper"');
// Top Right
hud = hud.replace('className="absolute top-20 right-12 w-8 h-[1px] bg-paper"', 'className="absolute top-8 right-12 w-8 h-[1px] bg-paper"');
hud = hud.replace('className="absolute top-20 right-12 w-[1px] h-8 bg-paper"', 'className="absolute top-8 right-12 w-[1px] h-8 bg-paper"');
// Bottom Left
hud = hud.replace('className="absolute bottom-6 left-12 w-8 h-[1px] bg-paper"', 'className="absolute bottom-8 left-8 w-8 h-[1px] bg-paper"');
hud = hud.replace('className="absolute bottom-6 left-12 w-[1px] h-8 bg-paper"', 'className="absolute bottom-8 left-8 w-[1px] h-8 bg-paper"');
// Bottom Right
hud = hud.replace('className="absolute bottom-6 right-12 w-8 h-[1px] bg-paper"', 'className="absolute bottom-8 right-12 w-8 h-[1px] bg-paper"');
hud = hud.replace('className="absolute bottom-6 right-12 w-[1px] h-8 bg-paper"', 'className="absolute bottom-8 right-12 w-[1px] h-8 bg-paper"');

fs.writeFileSync('src/components/ui/HUD.tsx', hud);


// 2. Hero.tsx
let hero = fs.readFileSync('src/components/sections/Hero.tsx', 'utf8');

// PRESENTER text: Align exactly to left-16
hero = hero.replace(
  'className="absolute top-1/4 left-10 md:left-24 opacity-50 hidden md:block  z-20 text-paper"',
  'className="absolute top-1/4 left-8 md:left-16 opacity-50 hidden md:block z-20 text-paper"'
);

// SCROLL TO text: Align exactly to right-24
hero = hero.replace(
  'className="absolute bottom-1/4 right-10 md:right-24 opacity-50 text-right hidden md:block  z-20 text-paper"',
  'className="absolute bottom-1/4 right-12 md:right-24 opacity-50 text-right hidden md:block z-20 text-paper"'
);

fs.writeFileSync('src/components/sections/Hero.tsx', hero);


// 3. Navigation.tsx
let nav = fs.readFileSync('src/components/ui/Navigation.tsx', 'utf8');

// Ensure tuner stays at right-6 so it doesn't collide with the right-24 text or right-12 brackets
nav = nav.replace(
  'className="fixed right-6 md:right-12 top-1/2',
  'className="fixed right-4 md:right-6 top-1/2'
);

fs.writeFileSync('src/components/ui/Navigation.tsx', nav);

