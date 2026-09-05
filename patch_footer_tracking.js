const fs = require('fs');
let content = fs.readFileSync('src/components/sections/Footer.tsx', 'utf8');

content = content.replace(
  '<a href="mailto:anjimarajvp239@gmail.com" className="block text-sm hover:text-accent transition-colors mb-3  normal-case">',
  '<a href="mailto:anjimarajvp239@gmail.com" className="block text-sm hover:text-accent transition-colors mb-3 normal-case tracking-normal font-mono">'
);

content = content.replace(
  '<a href="tel:+917012310754" className="block text-sm hover:text-accent transition-colors ">',
  '<a href="tel:+917012310754" className="block text-sm hover:text-accent transition-colors normal-case tracking-normal font-mono">'
);

fs.writeFileSync('src/components/sections/Footer.tsx', content);
