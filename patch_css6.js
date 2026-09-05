const fs = require('fs');
const file = 'src/app/globals.css';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/\/\* Cyberpunk Glitch Hover Effect \*\/[\s\S]*?\.glitch-hover:hover \{[\s\S]*?\}/, '');

fs.writeFileSync(file, content);
