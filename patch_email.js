const fs = require('fs');

const files = [
  'src/app/api/contact/route.ts',
  'src/components/sections/Footer.tsx'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/anjimarajvp239@gmail\.com/g, 'anjimarajvp.official@gmail.com');
  fs.writeFileSync(file, content);
}

