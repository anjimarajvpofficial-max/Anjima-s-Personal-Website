const fs = require('fs');
const file = 'src/app/layout.tsx';
let content = fs.readFileSync(file, 'utf8');

if (!content.includes('import Spotlight')) {
  content = content.replace("import CookieBanner from '@/components/ui/CookieBanner';", "import CookieBanner from '@/components/ui/CookieBanner';\nimport Spotlight from '@/components/ui/Spotlight';\nimport GlobalNoise from '@/components/ui/GlobalNoise';");
}

if (!content.includes('<GlobalNoise />')) {
  content = content.replace("<body>\n        <SmoothScroll>", "<body>\n        <GlobalNoise />\n        <SmoothScroll>\n          <Spotlight />");
}

fs.writeFileSync(file, content);
