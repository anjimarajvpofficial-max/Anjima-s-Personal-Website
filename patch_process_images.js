const fs = require('fs');
let content = fs.readFileSync('src/components/sections/Process.tsx', 'utf8');

content = content.replace(
  '"https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1600"',
  '"/images/uploads/media_1788251311013.png"'
);
content = content.replace(
  '"https://images.unsplash.com/photo-1455390582262-044cdead27d8?q=80&w=1600"',
  '"/images/uploads/media_1787512066739.png"'
);
content = content.replace(
  '"https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1600"',
  '"/images/uploads/media_1788247750590.png"'
);
content = content.replace(
  '"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1600"',
  '"/images/uploads/media_1788253527984.png"'
);
content = content.replace(
  '"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600"',
  '"/images/uploads/media_1788262993855.png"'
);
content = content.replace(
  '"https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1600"',
  '"/images/uploads/media_1788263033509.png"'
);

fs.writeFileSync('src/components/sections/Process.tsx', content);
