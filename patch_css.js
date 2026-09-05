const fs = require('fs');
const file = 'src/app/globals.css';
let content = fs.readFileSync(file, 'utf8');

if (!content.includes('cursor: none')) {
  content = content.replace('  body {\n    @apply bg-ink', '  body {\n    cursor: none;\n    @apply bg-ink');
}

fs.writeFileSync(file, content);
