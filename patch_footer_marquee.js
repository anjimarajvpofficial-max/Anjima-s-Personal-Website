const fs = require('fs');
let content = fs.readFileSync('src/components/sections/Footer.tsx', 'utf8');

// Wrap marquee in a link
content = content.replace(
  /<div className="overflow-hidden py-6 bg-accent text-ink relative z-10 group">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/,
  (match) => `<a href="mailto:anjimaraj@gmail.com" className="cursor-pointer" onClick={(e) => { if (typeof window !== 'undefined' && (window as any).useCyberSound) (window as any).useCyberSound().playClickThud(); }}>\n        ${match}\n      </a>`
);

fs.writeFileSync('src/components/sections/Footer.tsx', content);
