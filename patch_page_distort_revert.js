const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

content = content.replace('import ScrollDistortion from "@/components/ui/ScrollDistortion";\n', '');
content = content.replace('<ScrollDistortion>\n        <Hero />', '<Hero />');
content = content.replace('<Footer />\n      </ScrollDistortion>', '<Footer />');

fs.writeFileSync('src/app/page.tsx', content);
