const fs = require('fs');
let content = fs.readFileSync('src/components/sections/Hero.tsx', 'utf8');

content = content.replace(
  'className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col sm:flex-row gap-4 z-20 pointer-events-auto"',
  'className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col sm:flex-row items-center gap-4 z-20 pointer-events-auto"'
);

fs.writeFileSync('src/components/sections/Hero.tsx', content);
