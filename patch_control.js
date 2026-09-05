const fs = require('fs');
let content = fs.readFileSync('src/components/sections/ControlRoom.tsx', 'utf8');

if (!content.includes('DecryptText')) {
  content = content.replace('import { useCursor } from "@/components/ui/CustomCursor";', 'import { useCursor } from "@/components/ui/CustomCursor";\nimport DecryptText from "@/components/ui/DecryptText";');
}

content = content.replace(
  /<h2 className="text-4xl md:text-6xl font-display leading-\[0.9\] tracking-tighter uppercase mb-6">[\s\S]*?ACTIVE <br\/> SYSTEMS[\s\S]*?<\/h2>/,
  `<h2 className="text-4xl md:text-6xl font-display leading-[0.9] tracking-tighter uppercase mb-6">\n              <DecryptText text="ACTIVE SYSTEMS" delay={200} speed={40} />\n            </h2>`
);

fs.writeFileSync('src/components/sections/ControlRoom.tsx', content);
