const fs = require('fs');
let content = fs.readFileSync('src/components/sections/Services.tsx', 'utf8');

// Remove the floating image block entirely
content = content.replace(
  /\{\/\* Floating Mouse Image \*\/\}[\s\S]*?<\/motion\.div>/,
  ''
);

// We should also remove the tracking logic if it's not used for anything else.
// But to be safe and avoid breaking React hooks order or removing something else, 
// simply removing the JSX element is enough to remove the overlay.

fs.writeFileSync('src/components/sections/Services.tsx', content);

