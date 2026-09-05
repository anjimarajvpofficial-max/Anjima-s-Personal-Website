const fs = require('fs');
let content = fs.readFileSync('src/components/sections/Transmissions.tsx', 'utf8');

if (!content.includes('useCyberSound')) {
  content = content.replace('import { useCursor } from "@/components/ui/CustomCursor";', 'import { useCursor } from "@/components/ui/CustomCursor";\nimport { useCyberSound } from "@/lib/useCyberSound";');
  
  content = content.replace('const { setVariant, setText } = useCursor();', 'const { setVariant, setText } = useCursor();\n  const { playHoverBlip, playClickThud } = useCyberSound();');
  
  content = content.replace(
    'onMouseEnter={() => { setVariant("text"); setText("PLAY"); }}',
    'onMouseEnter={() => { setVariant("text"); setText("PLAY"); playHoverBlip(); }}'
  );
  
  content = content.replace(
    'onClick={() => setActiveVideo(item.id)}',
    'onClick={() => { setActiveVideo(item.id); playClickThud(); }}'
  );
  
  fs.writeFileSync('src/components/sections/Transmissions.tsx', content);
}
