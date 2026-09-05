const fs = require('fs');
let content = fs.readFileSync('src/app/layout.tsx', 'utf8');

if (!content.includes('HUD')) {
  content = content.replace(
    'import GlobalNoise from "@/components/ui/GlobalNoise";',
    'import GlobalNoise from "@/components/ui/GlobalNoise";\nimport HUD from "@/components/ui/HUD";\nimport GlobalSpotlight from "@/components/ui/GlobalSpotlight";'
  );
  
  content = content.replace(
    '<CustomCursor />',
    '<CustomCursor />\n          <GlobalSpotlight />'
  );
  
  fs.writeFileSync('src/app/layout.tsx', content);
}

let pageContent = fs.readFileSync('src/app/page.tsx', 'utf8');
if (!pageContent.includes('HUD')) {
  pageContent = pageContent.replace(
    'import Navigation from "@/components/ui/Navigation";',
    'import Navigation from "@/components/ui/Navigation";\nimport HUD from "@/components/ui/HUD";'
  );
  pageContent = pageContent.replace(
    '<Navigation />',
    '<Navigation />\n      <HUD />'
  );
  fs.writeFileSync('src/app/page.tsx', pageContent);
}

