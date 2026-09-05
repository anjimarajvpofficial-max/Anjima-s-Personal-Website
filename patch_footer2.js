const fs = require('fs');
let content = fs.readFileSync('src/components/sections/Footer.tsx', 'utf8');

if (!content.includes('DecryptText')) {
  content = content.replace('import GlitchText from "@/components/ui/GlitchText";', 'import GlitchText from "@/components/ui/GlitchText";\nimport DecryptText from "@/components/ui/DecryptText";');
}

// Just add it to the small Open a channel text
content = content.replace('Open a Channel // Contact', '<DecryptText text="Open a Channel // Contact" delay={100} speed={20} />');

fs.writeFileSync('src/components/sections/Footer.tsx', content);
