const fs = require('fs');
let content = fs.readFileSync('src/components/sections/Services.tsx', 'utf8');

// Import DecryptText
if (!content.includes('DecryptText')) {
  content = content.replace('import { useRef, useState } from "react";', 'import { useRef, useState } from "react";\nimport DecryptText from "@/components/ui/DecryptText";');
}

// Replace the word "SERVICES" with DecryptText
content = content.replace(
  /<motion\.h2[\s\S]*?>\s*SERVICES\s*<\/motion\.h2>/,
  '<motion.h2\n              initial={{ y: "100%" }}\n              animate={inView ? { y: "0%" } : {}}\n              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}\n              className="text-6xl md:text-8xl font-display font-medium tracking-tighter uppercase leading-none"\n            >\n              <DecryptText text="SERVICES" delay={500} speed={40} />\n            </motion.h2>'
);

fs.writeFileSync('src/components/sections/Services.tsx', content);
