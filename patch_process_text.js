const fs = require('fs');
let content = fs.readFileSync('src/components/sections/Process.tsx', 'utf8');

// Replace text-outline with text-paper/30 for visibility
content = content.replace(
  'text-4xl md:text-6xl font-display uppercase text-outline group-hover:text-paper group-hover:translate-x-4 transition-all duration-300',
  'text-4xl md:text-6xl font-display uppercase text-paper/30 group-hover:text-paper group-hover:translate-x-4 transition-all duration-300'
);

fs.writeFileSync('src/components/sections/Process.tsx', content);
