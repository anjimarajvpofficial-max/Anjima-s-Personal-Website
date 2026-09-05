const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

if (!content.includes('ScrollDistortion')) {
  content = content.replace(
    'import Navigation from "@/components/ui/Navigation";',
    'import Navigation from "@/components/ui/Navigation";\nimport ScrollDistortion from "@/components/ui/ScrollDistortion";'
  );

  content = content.replace(
    '<Hero />',
    '<ScrollDistortion>\n        <Hero />'
  );
  
  content = content.replace(
    '<Footer />',
    '<Footer />\n      </ScrollDistortion>'
  );

  fs.writeFileSync('src/app/page.tsx', content);
}
