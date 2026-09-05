const fs = require('fs');
let content = fs.readFileSync('src/components/sections/About.tsx', 'utf8');

// The image tag is now using Next.js <Image src="/images/portrait.jpg" ... />
content = content.replace(
  'src="/images/portrait.jpg"',
  'src="/images/portrait.png"'
);

fs.writeFileSync('src/components/sections/About.tsx', content);

