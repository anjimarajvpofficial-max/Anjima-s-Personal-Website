const fs = require('fs');
let content = fs.readFileSync('src/components/ui/HUD.tsx', 'utf8');

// Hide brackets on mobile
content = content.replace(/className="absolute top-16 md:top-20/g, 'className="hidden md:block absolute top-16 md:top-20');
content = content.replace(/className="absolute bottom-8/g, 'className="hidden md:block absolute bottom-8');

// Hide the right scroll tracker on mobile
content = content.replace(
  '<div className="absolute right-4 md:right-12 top-1/4 bottom-1/4 w-[1px] bg-paper/10 flex flex-col justify-between items-center py-4">',
  '<div className="hidden md:flex absolute right-4 md:right-12 top-1/4 bottom-1/4 w-[1px] bg-paper/10 flex-col justify-between items-center py-4">'
);

// Hide the center crosshairs on mobile
content = content.replace(/className="absolute top-1\/2 left-1\/2 -translate-x-1\/2 -translate-y-1\/2/g, 'className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2');

// Make the top REC and bottom coordinates hidden on mobile (they overlap too much text)
content = content.replace(
  'className="absolute top-24 md:top-28 left-4 md:left-16 right-4 md:right-24 flex justify-between items-start"',
  'className="hidden md:flex absolute top-24 md:top-28 left-4 md:left-16 right-4 md:right-24 justify-between items-start"'
);

content = content.replace(
  'className="absolute bottom-8 md:bottom-16 left-4 md:left-16 right-4 md:right-24 flex justify-between items-end"',
  'className="hidden md:flex absolute bottom-8 md:bottom-16 left-4 md:left-16 right-4 md:right-24 justify-between items-end"'
);

fs.writeFileSync('src/components/ui/HUD.tsx', content);

