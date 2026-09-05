const fs = require('fs');
let content = fs.readFileSync('src/components/sections/Testimonials.tsx', 'utf8');

if (!content.includes('DecryptText')) {
  content = content.replace('import { useState, useRef, useEffect } from "react";', 'import { useState, useRef, useEffect } from "react";\nimport DecryptText from "@/components/ui/DecryptText";');
}

content = content.replace(
  /<motion\.h2[\s\S]*?>\s*What Clients<br \/>Say\s*<\/motion\.h2>/,
  `<motion.h2\n            initial={{ y: "100%" }}\n            animate={inView ? { y: "0%" } : {}}\n            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}\n            className="text-5xl md:text-8xl font-display font-medium tracking-tighter uppercase leading-[0.9]"\n          >\n            <DecryptText text="CLIENT" delay={300} speed={40} /><br />\n            <DecryptText text="SIGNALS" delay={600} speed={40} />\n          </motion.h2>`
);

fs.writeFileSync('src/components/sections/Testimonials.tsx', content);
