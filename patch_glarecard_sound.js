const fs = require('fs');
let content = fs.readFileSync('src/components/ui/GlareCard.tsx', 'utf8');

if (!content.includes('useCyberSound')) {
  content = content.replace('import { useRef } from "react";', 'import { useRef } from "react";\nimport { useCyberSound } from "@/lib/useCyberSound";');
  
  content = content.replace(
    'export default function GlareCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {',
    'export default function GlareCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {\n  const { playHoverBlip } = useCyberSound();'
  );
  
  content = content.replace(
    'onMouseMove={handleMouseMove}',
    'onMouseEnter={() => playHoverBlip()}\n      onMouseMove={handleMouseMove}'
  );
  
  fs.writeFileSync('src/components/ui/GlareCard.tsx', content);
}
