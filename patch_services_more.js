const fs = require('fs');
let content = fs.readFileSync('src/components/sections/Services.tsx', 'utf8');

// Inject DecryptText and MagneticButton
if (!content.includes('MagneticButton')) {
  content = content.replace('import { useCursor } from "@/components/ui/CustomCursor";', 'import { useCursor } from "@/components/ui/CustomCursor";\nimport DecryptText from "@/components/ui/DecryptText";\nimport MagneticButton from "@/components/ui/MagneticButton";');
}

// Replace title
content = content.replace(
  /<motion\.h2[\s\S]*?>\s*What I<br \/>Deliver\s*<\/motion\.h2>/,
  `<motion.h2\n              initial={{ y: "100%" }}\n              animate={inView ? { y: "0%" } : {}}\n              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}\n              className="text-5xl md:text-8xl font-display font-medium tracking-tighter uppercase leading-[0.9]"\n            >\n              <DecryptText text="WHAT I" delay={200} speed={40} /><br />\n              <DecryptText text="DELIVER" delay={500} speed={40} />\n            </motion.h2>`
);

// Wrap CTA
content = content.replace(
  /<button\n          onClick=\{\(\) => \{ const el = document\.getElementById\("footer"\); if \(el\) el\.scrollIntoView\(\{ behavior: "smooth" \}\); \}\}[\s\S]*?>\s*Start a Project →\s*<\/button>/,
  `<MagneticButton>\n        <button\n          onClick={() => { const el = document.getElementById("footer"); if (el) el.scrollIntoView({ behavior: "smooth" }); }}\n          onMouseEnter={() => { setVariant("hover"); }}\n          onMouseLeave={() => { setVariant("default"); }}\n          className=" font-mono text-xs tracking-widest uppercase bg-ink text-paper px-8 py-4 hover:bg-accent hover:text-ink transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(255,0,80,0.5)]"\n        >\n          Start a Project →\n        </button>\n      </MagneticButton>`
);

fs.writeFileSync('src/components/sections/Services.tsx', content);
