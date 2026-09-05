const fs = require('fs');
const html = fs.readFileSync('home.html', 'utf8');
const match = html.match(/tailwind\.config = (\{[\s\S]*?\});/);
if (match) {
  const code = 'module.exports = ' + match[1];
  fs.writeFileSync('tailwind-extracted.js', code);
}
