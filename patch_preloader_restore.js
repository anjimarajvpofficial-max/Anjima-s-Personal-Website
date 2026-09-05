const fs = require('fs');
let content = fs.readFileSync('src/components/ui/Preloader.tsx', 'utf8');

// Restore the matrix text in CenterContent
const inlineJsx = `
            <div className="flex flex-col items-center justify-center relative pointer-events-none">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-[20vw] font-display leading-none tracking-tighter text-paper relative z-20 shadow-ink drop-shadow-2xl"
              >
                {progress}%
              </motion.div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl font-mono text-[8px] leading-none text-accent break-all opacity-10 z-0 text-center">
                {matrix}{matrix}{matrix}
              </div>
            </div>
`;

content = content.replace(
  /<div className="flex flex-col items-center justify-center relative pointer-events-none">\s*<motion\.div\s*initial=\{\{ opacity: 0 \}\}\s*animate=\{\{ opacity: 1 \}\}\s*className="text-\[20vw\] font-display leading-none tracking-tighter text-paper relative z-20"\s*>\s*\{progress\}%\s*<\/motion\.div>\s*<\/div>/g,
  inlineJsx
);

// Restore the timing
content = content.replace('}, 30);', '}, 150);');
content = content.replace('}, 200);', '}, 500); // Hold at 100% for a moment');

fs.writeFileSync('src/components/ui/Preloader.tsx', content);
