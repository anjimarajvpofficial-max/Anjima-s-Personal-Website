const fs = require('fs');
let content = fs.readFileSync('src/components/sections/Insights.tsx', 'utf8');

if (!content.includes('DecryptText')) {
  content = content.replace('import GlareCard from "@/components/ui/GlareCard";', 'import GlareCard from "@/components/ui/GlareCard";\nimport DecryptText from "@/components/ui/DecryptText";');
}

content = content.replace(
  /<motion\.h2[\s\S]*?>\s*Thoughts<br \/>&amp; Ideas\s*<\/motion\.h2>/,
  `<motion.h2\n              initial={{ y: "100%" }}\n              animate={inView ? { y: "0%" } : {}}\n              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}\n              className="text-5xl md:text-8xl font-display font-medium tracking-tighter uppercase leading-[0.9]"\n            >\n              <DecryptText text="THOUGHTS" delay={200} speed={40} /><br />\n              & <DecryptText text="IDEAS" delay={500} speed={40} />\n            </motion.h2>`
);

fs.writeFileSync('src/components/sections/Insights.tsx', content);
