const fs = require('fs');
let content = fs.readFileSync('src/components/sections/Transmissions.tsx', 'utf8');

content = content.replace(
  'className="w-[85%] md:w-auto h-[60vh] md:h-[75vh] aspect-[9/16] relative group overflow-hidden bg-ink-light rounded-sm shadow-2xl"',
  'className="w-[80vw] md:w-auto h-auto md:h-[75vh] aspect-[9/16] relative group overflow-hidden bg-ink-light rounded-sm shadow-2xl"'
);

fs.writeFileSync('src/components/sections/Transmissions.tsx', content);
