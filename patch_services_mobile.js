const fs = require('fs');
let content = fs.readFileSync('src/components/sections/Services.tsx', 'utf8');

// Fix paragraph visibility on mobile (removed opacity-0 on mobile)
content = content.replace(
  'opacity-0 md:opacity-60',
  'opacity-60'
);

fs.writeFileSync('src/components/sections/Services.tsx', content);

