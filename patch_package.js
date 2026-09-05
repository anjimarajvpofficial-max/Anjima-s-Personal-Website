const fs = require('fs');
const file = 'package.json';
let content = fs.readFileSync(file, 'utf8');

const pkg = JSON.parse(content);
pkg.scripts.predev = "npx tailwindcss -i src/app/globals.css -o src/app/globals.compiled.css";
pkg.scripts.prebuild = "npx tailwindcss -i src/app/globals.css -o src/app/globals.compiled.css";
fs.writeFileSync(file, JSON.stringify(pkg, null, 2));
