const fs = require('fs');
let content = fs.readFileSync('src/components/sections/Testimonials.tsx', 'utf8');

content = content.replace(/var\(--accent\)/g, 'var(--accent, #ff0050)');

fs.writeFileSync('src/components/sections/Testimonials.tsx', content);

