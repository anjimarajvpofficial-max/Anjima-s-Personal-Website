const fs = require('fs');

let layout = fs.readFileSync('src/app/layout.tsx', 'utf8');
layout = layout.replace(':wght@100..800&family=Playfair+Display:ital,wght@0,400..900;1,400..900', '');
fs.writeFileSync('src/app/layout.tsx', layout);

let tailwind = fs.readFileSync('tailwind.config.js', 'utf8');
tailwind = tailwind.replace(/\s*serif: \['"Playfair Display"', 'serif'\],/, '');
fs.writeFileSync('tailwind.config.js', tailwind);
