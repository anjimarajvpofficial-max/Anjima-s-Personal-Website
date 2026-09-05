const fs = require('fs');
let content = fs.readFileSync('src/app/layout.tsx', 'utf8');

// Remove HUD and GlobalSpotlight imports
content = content.replace('import HUD from "@/components/ui/HUD";\n', '');
content = content.replace('import GlobalSpotlight from "@/components/ui/GlobalSpotlight";\n', '');

// Remove HUD and GlobalSpotlight components
content = content.replace('<HUD />\n', '');
content = content.replace('<GlobalSpotlight />\n', '');

fs.writeFileSync('src/app/layout.tsx', content);

let pageContent = fs.readFileSync('src/app/page.tsx', 'utf8');
pageContent = pageContent.replace('import HUD from "@/components/ui/HUD";\n', '');
pageContent = pageContent.replace('<HUD />\n', '');
fs.writeFileSync('src/app/page.tsx', pageContent);

