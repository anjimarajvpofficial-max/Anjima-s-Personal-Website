const fs = require('fs');
let content = fs.readFileSync('src/app/layout.tsx', 'utf8');

if (!content.includes('GlobalSpotlight')) {
  content = content.replace('import GlobalNoise from "@/components/ui/GlobalNoise";', 'import GlobalNoise from "@/components/ui/GlobalNoise";\nimport GlobalSpotlight from "@/components/ui/GlobalSpotlight";');
  
  content = content.replace(
    '<CustomCursor />',
    '<CustomCursor />\n          <GlobalSpotlight />'
  );
  
  fs.writeFileSync('src/app/layout.tsx', content);
}
