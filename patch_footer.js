const fs = require('fs');
const file = 'src/components/sections/Footer.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/<GlitchText text="Let's Work" \/>/g, "Let's Work");
content = content.replace(/<GlitchText text="Together" \/>/g, "Together");
content = content.replace(/import GlitchText from "@\/components\/ui\/GlitchText";/g, '');

fs.writeFileSync(file, content);
