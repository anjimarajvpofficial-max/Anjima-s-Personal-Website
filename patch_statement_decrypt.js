const fs = require('fs');
let content = fs.readFileSync('src/components/sections/Statement.tsx', 'utf8');

if (!content.includes('DecryptText')) {
  content = content.replace('import { useRef } from "react";', 'import { useRef } from "react";\nimport DecryptText from "@/components/ui/DecryptText";');
}

// Replace the subtitle
content = content.replace(
  'Core Philosophy',
  '<DecryptText text="CORE PHILOSOPHY" delay={300} speed={20} />'
);

fs.writeFileSync('src/components/sections/Statement.tsx', content);
