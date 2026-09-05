const fs = require('fs');
let content = fs.readFileSync('src/components/sections/Hero.tsx', 'utf8');

content = content.replace(
  'className="text-outline hover:text-paper transition-colors duration-700"',
  'className="text-paper drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:text-accent hover:drop-shadow-[0_0_30px_rgba(255,0,80,0.5)] transition-all duration-500"'
);

fs.writeFileSync('src/components/sections/Hero.tsx', content);
