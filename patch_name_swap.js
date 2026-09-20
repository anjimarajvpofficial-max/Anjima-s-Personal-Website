const fs = require('fs');

function replaceInFile(filePath, search, replacement) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(search, replacement);
    fs.writeFileSync(filePath, content);
  } catch(e) {}
}

const files = [
  'src/app/layout.tsx',
  'src/components/ui/HUD.tsx',
  'src/components/ui/InquiryForm.tsx',
  'src/components/ui/SiteNav.tsx',
  'src/components/sections/Hero.tsx',
  'src/components/sections/Formula.tsx',
  'src/components/sections/Footer.tsx',
  'src/components/sections/Testimonials.tsx',
  'src/components/sections/About.tsx'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/Amar/g, 'Anjima Raj');
  content = content.replace(/AMAR/g, 'ANJIMA');
  content = content.replace(/amar/g, 'anjima');
  fs.writeFileSync(file, content);
}
