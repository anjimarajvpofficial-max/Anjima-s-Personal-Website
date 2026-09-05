const fs = require('fs');
let content = fs.readFileSync('src/components/sections/Hero.tsx', 'utf8');

if (!content.includes('MagneticLetter')) {
  content = content.replace('import CyberGrid from "@/components/ui/CyberGrid";', 'import CyberGrid from "@/components/ui/CyberGrid";\nimport MagneticLetter from "@/components/ui/MagneticLetter";');
  
  const oldMap = `{titleText.split("").map((letter, i) => (
              <motion.span
                key={i}
                aria-hidden="true"
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: i * 0.05 }}
                className="inline-block text-outline hover:text-paper transition-colors duration-700"
              >
                {letter}
              </motion.span>
            ))}`;

  const newMap = `{titleText.split("").map((letter, i) => (
              <motion.span
                key={i}
                aria-hidden="true"
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: i * 0.05 }}
                className="inline-block"
              >
                <MagneticLetter className="text-outline hover:text-paper transition-colors duration-700">
                  {letter}
                </MagneticLetter>
              </motion.span>
            ))}`;
            
  content = content.replace(oldMap, newMap);
  fs.writeFileSync('src/components/sections/Hero.tsx', content);
}
