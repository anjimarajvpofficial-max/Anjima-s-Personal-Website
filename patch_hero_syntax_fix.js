const fs = require('fs');
let content = fs.readFileSync('src/components/sections/Hero.tsx', 'utf8');

// 1. Remove the incorrectly placed textX and textY from inside useEffect
content = content.replace(
  '    const textX = useTransform(springX, (val) => -val * 0.3);\n  const textY = useTransform(springY, (val) => -val * 0.3);\n\n  return () => window.removeEventListener("mousemove", handleMouseMove);',
  '    return () => window.removeEventListener("mousemove", handleMouseMove);'
);

// 2. Insert them correctly right before the main return statement
// We look for 'const titleText = "ANJIMA";' which is right after useEffect
content = content.replace(
  '  const titleText = "ANJIMA";',
  '  const titleText = "ANJIMA";\n  const textX = useTransform(springX, (val) => -val * 0.3);\n  const textY = useTransform(springY, (val) => -val * 0.3);'
);

fs.writeFileSync('src/components/sections/Hero.tsx', content);

