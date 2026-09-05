const fs = require('fs');
const file = 'src/components/ui/SiteNav.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace HoverScrambleText with normal text
content = content.replace(/<HoverScrambleText text=\{l\.label\} \/>/g, '{l.label}');
content = content.replace(/<HoverScrambleText text="Let's Work Together" \/>/g, "Let's Work Together");
content = content.replace(/import HoverScrambleText from "\.\/HoverScrambleText";/g, '');

fs.writeFileSync(file, content);
