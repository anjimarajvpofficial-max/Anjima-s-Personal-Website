const fs = require('fs');

// Revert MagneticButton.tsx
let mb = fs.readFileSync('src/components/ui/MagneticButton.tsx', 'utf8');
mb = mb.replace(
  'className={`block sm:inline-block w-full sm:w-auto ${className}`}',
  'className={`inline-block ${className}`}'
);
fs.writeFileSync('src/components/ui/MagneticButton.tsx', mb);

// Explicitly pass full width to Hero CTAs instead
let hero = fs.readFileSync('src/components/sections/Hero.tsx', 'utf8');
hero = hero.replace(/<MagneticButton>/g, '<MagneticButton className="w-full sm:w-auto">');
fs.writeFileSync('src/components/sections/Hero.tsx', hero);

