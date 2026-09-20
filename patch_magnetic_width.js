const fs = require('fs');
let content = fs.readFileSync('src/components/ui/MagneticButton.tsx', 'utf8');

content = content.replace(
  'className={`inline-block  ${className}`}',
  'className={`block sm:inline-block w-full sm:w-auto ${className}`}'
);

fs.writeFileSync('src/components/ui/MagneticButton.tsx', content);

