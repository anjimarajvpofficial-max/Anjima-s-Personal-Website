const fs = require('fs');
let content = fs.readFileSync('src/components/ui/MagneticButton.tsx', 'utf8');

if (!content.includes('useCyberSound')) {
  content = content.replace('import { useRef, useState } from "react";', 'import { useRef, useState } from "react";\nimport { useCyberSound } from "@/lib/useCyberSound";');
  
  content = content.replace('export default function MagneticButton({ children, className = "" }: { children: React.ReactElement, className?: string }) {', 'export default function MagneticButton({ children, className = "" }: { children: React.ReactElement, className?: string }) {\n  const { playHoverBlip, playClickThud } = useCyberSound();');
  
  content = content.replace('const handleMouseEnter = () => setIsHovered(true);', 'const handleMouseEnter = () => {\n    setIsHovered(true);\n    playHoverBlip();\n  };');
  
  // Attach onClick to children if it doesn't exist, or intercept it
  // Actually, since we cloneElement, we can just intercept onClick
  content = content.replace(
    'onMouseLeave: handleMouseLeave,',
    'onMouseLeave: handleMouseLeave,\n        onClick: (e: any) => {\n          playClickThud();\n          if (children.props.onClick) children.props.onClick(e);\n        },'
  );
  
  fs.writeFileSync('src/components/ui/MagneticButton.tsx', content);
}
