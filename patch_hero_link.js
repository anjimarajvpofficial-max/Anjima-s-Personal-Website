const fs = require('fs');
let content = fs.readFileSync('src/components/sections/Hero.tsx', 'utf8');

content = content.replace(
  'href="/documents/cv.pdf"',
  'href="/CV_Anjima.pdf" target="_blank"'
);

fs.writeFileSync('src/components/sections/Hero.tsx', content);
