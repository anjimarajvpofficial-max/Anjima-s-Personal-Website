const fs = require('fs');
let content = fs.readFileSync('src/components/ui/GlareCard.tsx', 'utf8');

if (!content.includes('useCyberSound')) {
  content = content.replace('import { useRef } from "react";', 'import { useRef } from "react";\nimport { useCyberSound } from "@/lib/useCyberSound";');
  
  content = content.replace(
    'export default function GlareCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {',
    'export default function GlareCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {\n  const { playHoverBlip } = useCyberSound();'
  );
  
  content = content.replace(
    'onMouseEnter={() => {}}',
    'onMouseEnter={() => { playHoverBlip(); }}'
  );
  
  // Actually, I need to check if onMouseEnter exists.
  // It doesn't look like it does in the definition.
}
