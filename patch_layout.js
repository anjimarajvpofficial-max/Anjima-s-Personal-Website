const fs = require('fs');
const file = 'src/app/layout.tsx';
let content = fs.readFileSync(file, 'utf8');

// Remove the components from the DOM tree
content = content.replace('<GlobalNoise />\n', '');
content = content.replace('<Spotlight />\n', '');
// Note: CustomCursor is already removed in the previous step

fs.writeFileSync(file, content);
