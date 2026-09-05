const fs = require('fs');
let content = fs.readFileSync('src/components/sections/Process.tsx', 'utf8');

if (!content.includes('useCyberSound')) {
  content = content.replace('import { useCursor } from "@/components/ui/CustomCursor";', 'import { useCursor } from "@/components/ui/CustomCursor";\nimport { useCyberSound } from "@/lib/useCyberSound";');
  
  content = content.replace('const { setVariant, setText } = useCursor();', 'const { setVariant, setText } = useCursor();\n  const { playHoverBlip } = useCyberSound();');
  
  content = content.replace(
    'onMouseEnter={() => {',
    'onMouseEnter={() => {\n              playHoverBlip();'
  );
  
  fs.writeFileSync('src/components/sections/Process.tsx', content);
}
