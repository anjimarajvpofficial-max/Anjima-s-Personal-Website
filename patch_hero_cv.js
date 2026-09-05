const fs = require('fs');
let content = fs.readFileSync('src/components/sections/Hero.tsx', 'utf8');

// Find the Download CV button and wrap it or change its onClick / href
// Let's replace the <button> inside MagneticButton with an <a> tag
content = content.replace(
  '<button className="font-mono text-xs tracking-widest uppercase border border-paper text-paper px-8 py-4 hover:bg-paper hover:text-ink transition-colors duration-300">',
  '<a href="/CV_Anjima.pdf" target="_blank" className="inline-block font-mono text-xs tracking-widest uppercase border border-paper text-paper px-8 py-4 hover:bg-paper hover:text-ink transition-colors duration-300">'
);
content = content.replace(
  'Download CV\n            </button>',
  'Download CV\n            </a>'
);

fs.writeFileSync('src/components/sections/Hero.tsx', content);
