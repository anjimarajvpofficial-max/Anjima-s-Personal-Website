const fs = require('fs');
let content = fs.readFileSync('src/components/sections/Hero.tsx', 'utf8');

if (!content.includes('MagneticButton')) {
  content = content.replace('import DecryptText from "@/components/ui/DecryptText";', 'import DecryptText from "@/components/ui/DecryptText";\nimport MagneticButton from "@/components/ui/MagneticButton";');
}

// Wrap CTAs in MagneticButton
content = content.replace(
  /<button\n            onClick=\{\(\) => \{ const el = document.getElementById\("footer"\); if \(el\) el.scrollIntoView\(\{ behavior: "smooth" \}\); \}\}\n            className="font-mono text-xs tracking-widest uppercase bg-accent text-ink px-8 py-4 hover:bg-paper hover:scale-105 transition-all duration-300 whitespace-nowrap shadow-\[0_0_30px_rgba\(255,0,80,0.3\)\] hover:shadow-\[0_0_50px_rgba\(255,255,255,0.5\)\]"\n          >\n            Let&apos;s Work Together\n          <\/button>/,
  `<MagneticButton>\n            <button\n              onClick={() => { const el = document.getElementById("footer"); if (el) el.scrollIntoView({ behavior: "smooth" }); }}\n              className="font-mono text-xs tracking-widest uppercase bg-accent text-ink px-8 py-4 hover:bg-paper hover:scale-105 transition-all duration-300 whitespace-nowrap shadow-[0_0_30px_rgba(255,0,80,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)]"\n            >\n              Let&apos;s Work Together\n            </button>\n          </MagneticButton>`
);

content = content.replace(
  /<a\n            href="\/documents\/cv\.pdf"\n            download\n            className="font-mono text-xs tracking-widest uppercase border border-paper\/50 text-paper px-8 py-4 hover:border-paper hover:bg-paper hover:text-ink hover:scale-105 transition-all duration-300 whitespace-nowrap text-center backdrop-blur-sm"\n          >\n            Download CV\n          <\/a>/,
  `<MagneticButton>\n            <a\n              href="/documents/cv.pdf"\n              download\n              className="font-mono text-xs tracking-widest uppercase border border-paper/50 text-paper px-8 py-4 hover:border-paper hover:bg-paper hover:text-ink hover:scale-105 transition-all duration-300 whitespace-nowrap text-center backdrop-blur-sm"\n            >\n              Download CV\n            </a>\n          </MagneticButton>`
);

fs.writeFileSync('src/components/sections/Hero.tsx', content);
