const fs = require('fs');

function replaceInFile(path) {
  if (!fs.existsSync(path)) return;
  let content = fs.readFileSync(path, 'utf8');
  
  // Replace standard names
  content = content.replace(/Anjima Raj/g, "Amar");
  content = content.replace(/Anjima/g, "Amar");
  content = content.replace(/ANJIMA/g, "AMAR");
  content = content.replace(/anjima/g, "amar");
  
  // We need to restore specific email/github/linkedin links if they broke, 
  // but replacing 'anjima' globally will break the URLs. 
  // Let's do it carefully instead.
  
}

// Let's do selective replace to prevent breaking URLs
const files = [
  'src/components/sections/Hero.tsx',
  'src/components/ui/SiteNav.tsx',
  'src/components/sections/About.tsx',
  'src/components/sections/Footer.tsx',
  'src/components/ui/HUD.tsx',
  'src/components/sections/Formula.tsx',
  'src/components/sections/Testimonials.tsx',
  'src/components/ui/InquiryForm.tsx',
  'src/app/layout.tsx'
];

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf8');
  
  // Only replace display texts, avoid breaking emails/URLs
  content = content.replace(/Anjima Raj/g, "Amar");
  content = content.replace(/THE ANJIMA FORMULA/g, "THE AMAR FORMULA");
  content = content.replace(/titleText = "ANJIMA"/g, 'titleText = "AMAR"');
  content = content.replace(/CH-01 \/\/ ANJIMA/g, "CH-01 // AMAR");
  content = content.replace(/Anjima has a rare/g, "Amar has a rare");
  content = content.replace(/Working with Anjima/g, "Working with Amar");
  content = content.replace(/vision Anjima brings/g, "vision Amar brings");
  content = content.replace(/root@anjima/g, "root@amar");
  content = content.replace(/placeholder="Anjima Raj"/g, 'placeholder="Amar"');
  
  // SEO Meta
  content = content.replace(/Anjima Raj — Marketing/g, "Amar — Marketing");
  content = content.replace(/\| Anjima Raj/g, "| Amar");
  content = content.replace(/name: 'Anjima Raj'/g, "name: 'Amar'");
  content = content.replace(/creator: 'Anjima Raj'/g, "creator: 'Amar'");
  content = content.replace(/siteName: 'Anjima Raj'/g, "siteName: 'Amar'");

  fs.writeFileSync(file, content);
}
