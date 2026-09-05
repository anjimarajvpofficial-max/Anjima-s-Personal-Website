const fs = require('fs');
let content = fs.readFileSync('src/components/sections/About.tsx', 'utf8');

// Replace the placeholder div with the actual image
const imageHtml = `
            <img src="/images/portrait.jpg" alt="Anjima Raj" className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700 z-0" />
            <div className="absolute inset-0 flex items-end p-6 z-10 pointer-events-none">
              <div className="font-mono text-[10px] opacity-0 tracking-widest">[PLACEHOLDER: CLIENT — Professional Portrait]</div>
            </div>`;

content = content.replace(
  /<div className="absolute inset-0 flex items-end p-6">\s*<div className="font-mono text-\[10px\] opacity-30 tracking-widest">\[PLACEHOLDER: CLIENT — Professional Portrait\]<\/div>\s*<\/div>/,
  imageHtml
);

fs.writeFileSync('src/components/sections/About.tsx', content);

