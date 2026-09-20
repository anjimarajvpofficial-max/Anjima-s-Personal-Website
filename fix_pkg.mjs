import fs from 'fs';
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
pkg.scripts.predev = "npx tailwindcss -i 'src/app/(site)/globals.css' -o 'src/app/(site)/globals.compiled.css'";
pkg.scripts.prebuild = "npx tailwindcss -i 'src/app/(site)/globals.css' -o 'src/app/(site)/globals.compiled.css'";
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
