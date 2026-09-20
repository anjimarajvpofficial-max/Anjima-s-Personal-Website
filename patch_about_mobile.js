const fs = require('fs');
let content = fs.readFileSync('src/components/sections/About.tsx', 'utf8');

// Fix off-screen bullet points causing horizontal scroll on mobile
content = content.replace(
  /<div className="absolute -left-6 top-1 font-mono text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity">\&gt;<\/div>/g,
  '<div className="hidden md:block absolute -left-6 top-1 font-mono text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity">&gt;</div>'
);

fs.writeFileSync('src/components/sections/About.tsx', content);

