const fs = require('fs');
const file = 'src/components/sections/Transmissions.tsx';
let content = fs.readFileSync(file, 'utf8');

if (!content.startsWith('"use client";')) {
  content = '"use client";\n\n' + content;
  fs.writeFileSync(file, content);
}
