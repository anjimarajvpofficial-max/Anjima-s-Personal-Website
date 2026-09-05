const fs = require('fs');

// 1. Update SiteNav.tsx
let sitenav = fs.readFileSync('src/components/ui/SiteNav.tsx', 'utf8');

sitenav = sitenav.replace(
  'className="px-6 md:px-12 h-16 flex items-center justify-between mt-[2px]"',
  'className="px-6 md:pl-16 md:pr-24 h-16 flex items-center justify-between mt-[2px]"'
);

// Also remove the padding on the "Let's Work Together" button so it aligns perfectly flush with the right edge
sitenav = sitenav.replace(
  'className=" font-mono text-xs tracking-widest uppercase text-accent px-5 py-2 hover:bg-accent hover:text-ink transition-all duration-300"',
  'className=" font-mono text-xs tracking-widest uppercase text-accent pl-5 py-2 hover:text-white transition-all duration-300"'
);

fs.writeFileSync('src/components/ui/SiteNav.tsx', sitenav);

