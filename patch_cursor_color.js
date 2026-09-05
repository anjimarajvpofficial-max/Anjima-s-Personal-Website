const fs = require('fs');
let content = fs.readFileSync('src/components/ui/CustomCursor.tsx', 'utf8');

// Replace all instances of the hardcoded red hex with the dynamic CSS variable
content = content.replace(/#ff0050/g, 'var(--accent)');

fs.writeFileSync('src/components/ui/CustomCursor.tsx', content);

