const fs = require('fs');
let content = fs.readFileSync('src/app/globals.css', 'utf8');

content = content.replace(/\/\* Premium Editorial Environment \*\/[\s\S]*?body::after \{[\s\S]*?\}/, '');
content = content.replace(/@keyframes volumetric-spin \{[\s\S]*?\}/, '');

fs.writeFileSync('src/app/globals.css', content);
