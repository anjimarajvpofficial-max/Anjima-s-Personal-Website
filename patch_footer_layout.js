const fs = require('fs');
let content = fs.readFileSync('src/components/sections/Footer.tsx', 'utf8');

// Fix the email/phone stacking
content = content.replace(
  '<div>\n          <div className="opacity-50 mb-4">Direct Signal //</div>\n          <MagneticButton className="block w-fit">',
  '<div className="flex flex-col gap-1 items-start">\n          <div className="opacity-50 mb-4">Direct Signal //</div>\n          <MagneticButton className="block w-fit">'
);

// Add right padding to the footer info block so it doesn't overlap the scroll indicator
content = content.replace(
  '<div className="md:text-right flex flex-col justify-between">',
  '<div className="md:text-right flex flex-col justify-between md:pr-16 relative z-30">'
);

fs.writeFileSync('src/components/sections/Footer.tsx', content);
