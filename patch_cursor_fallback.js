const fs = require('fs');
let content = fs.readFileSync('src/components/ui/CustomCursor.tsx', 'utf8');

// The raw SVG stroke/fill attributes need the fallback color explicitly defined 
// because CSS variables without a fallback will render invisible if the variable hasn't been injected yet.
content = content.replace(/var\(--accent\)/g, 'var(--accent, #ff0050)');

fs.writeFileSync('src/components/ui/CustomCursor.tsx', content);

