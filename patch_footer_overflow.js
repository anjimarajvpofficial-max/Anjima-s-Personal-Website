const fs = require('fs');
let content = fs.readFileSync('src/components/sections/Footer.tsx', 'utf8');

content = content.replace(
  'className="relative z-20 bg-ink min-h-screen flex flex-col justify-between pt-32 md:pt-40 overflow-hidden border-t border-paper/10"',
  'className="relative z-20 bg-ink min-h-screen flex flex-col justify-between pt-32 md:pt-40 border-t border-paper/10"'
);

fs.writeFileSync('src/components/sections/Footer.tsx', content);

