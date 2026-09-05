const fs = require('fs');
let content = fs.readFileSync('src/components/sections/ControlRoom.tsx', 'utf8');

if (!content.includes('useCyberSound')) {
  content = content.replace('import { useCursor } from "@/components/ui/CustomCursor";', 'import { useCursor } from "@/components/ui/CustomCursor";\nimport { useCyberSound } from "@/lib/useCyberSound";');
  
  content = content.replace('const TiltCard = ({ skill, onClick }: { skill: any, onClick: () => void }) => {', 'const TiltCard = ({ skill, onClick }: { skill: any, onClick: () => void }) => {\n  const { playHoverBlip } = useCyberSound();');
  
  content = content.replace(
    'setVariant("text");\n        setText("ACCESS");',
    'setVariant("text");\n        setText("ACCESS");\n        playHoverBlip();'
  );
  
  fs.writeFileSync('src/components/sections/ControlRoom.tsx', content);
}
