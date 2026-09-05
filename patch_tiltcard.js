const fs = require('fs');
let content = fs.readFileSync('src/components/sections/ControlRoom.tsx', 'utf8');

// Update TiltCard to add a spotlight layer
const newHover = `
      {/* Dynamic Mouse Spotlight */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useTransform(
            [mouseXSpring, mouseYSpring],
            ([x, y]) => \`radial-gradient(400px circle at \${(x as number + 0.5) * 100}% \${(y as number + 0.5) * 100}%, rgba(255,0,80,0.15), transparent 80%)\`
          )
        }}
      />
      
      {/* Data stream reveal on hover */}
`;

content = content.replace('{/* Data stream reveal on hover */}', newHover);

fs.writeFileSync('src/components/sections/ControlRoom.tsx', content);
