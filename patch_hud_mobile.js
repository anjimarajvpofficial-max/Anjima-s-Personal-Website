const fs = require('fs');
let content = fs.readFileSync('src/components/ui/HUD.tsx', 'utf8');

// Fix Top Bar
content = content.replace(
  'className="absolute top-28 left-16 right-24 flex justify-between items-start"',
  'className="absolute top-24 md:top-28 left-4 md:left-16 right-4 md:right-24 flex justify-between items-start"'
);

// Fix Bottom Bar
content = content.replace(
  'className="absolute bottom-16 left-16 right-24 flex justify-between items-end"',
  'className="absolute bottom-8 md:bottom-16 left-4 md:left-16 right-4 md:right-24 flex justify-between items-end"'
);

// Fix Viewfinder Brackets
content = content.replace(/left-8/g, 'left-2 md:left-8');
content = content.replace(/right-12/g, 'right-2 md:right-12');
content = content.replace(/top-20/g, 'top-16 md:top-20');

fs.writeFileSync('src/components/ui/HUD.tsx', content);

