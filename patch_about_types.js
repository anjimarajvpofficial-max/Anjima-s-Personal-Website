const fs = require('fs');
let content = fs.readFileSync('src/components/sections/About.tsx', 'utf8');

// Replace the incorrect 'school' property with 'institution' so the TypeScript types match the JSX
content = content.replace(/school: "MES Ponnani College"/g, 'institution: "MES Ponnani College"');
content = content.replace(/school: "MES Mampad College"/g, 'institution: "MES Mampad College"');

fs.writeFileSync('src/components/sections/About.tsx', content);
