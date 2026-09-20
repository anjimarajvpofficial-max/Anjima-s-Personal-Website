const fs = require('fs');
let content = fs.readFileSync('src/components/ui/SiteNav.tsx', 'utf8');

// Move hamburger to the left slightly on mobile
content = content.replace(
  'className="md:hidden  flex flex-col gap-[5px] p-2 relative z-[9999]"',
  'className="md:hidden flex flex-col gap-[5px] p-2 mr-2 relative z-[9999]"'
);

fs.writeFileSync('src/components/ui/SiteNav.tsx', content);

