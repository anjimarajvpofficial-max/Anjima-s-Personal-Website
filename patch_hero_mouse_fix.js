const fs = require('fs');
let content = fs.readFileSync('src/components/sections/Hero.tsx', 'utf8');

// Insert the textX / textY transforms right above the return statement
content = content.replace(
  '  return (',
  '  const textX = useTransform(springX, (val) => -val * 0.3);\n  const textY = useTransform(springY, (val) => -val * 0.3);\n\n  return ('
);

// Replace the motion.div props
content = content.replace(
  '<motion.div style={{ scale, y, opacity, filter }} className="w-full text-center z-10 pointer-events-none ">',
  '<motion.div style={{ scale, y, opacity, filter, x: textX }} className="w-full text-center z-10 pointer-events-auto">'
);

fs.writeFileSync('src/components/sections/Hero.tsx', content);
