const fs = require('fs');
let content = fs.readFileSync('src/components/sections/Testimonials.tsx', 'utf8');

content = content.replace(/#ff0050/g, 'var(--accent)');

fs.writeFileSync('src/components/sections/Testimonials.tsx', content);

