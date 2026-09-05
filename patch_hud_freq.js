const fs = require('fs');
let content = fs.readFileSync('src/components/ui/HUD.tsx', 'utf8');

const scrollIndicatorWithFreqs = `
      {/* Global Scroll Indicator - Right side */}
      <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-20 pointer-events-auto hidden md:flex">
        <div className="font-mono text-[8px] uppercase tracking-widest text-paper/40 [writing-mode:vertical-rl] mb-4">
          TUNE_FREQ
        </div>
        <div className="w-[1px] h-64 bg-paper/10 relative">
          <motion.div 
            style={{ y: dotY }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent cursor-pointer"
          />
          <div className="absolute top-0 -right-24 font-mono text-[10px] text-accent opacity-0 md:opacity-100">88.1 MHz</div>
          <div className="absolute top-1/4 -right-2 w-2 h-[1px] bg-paper/30" />
          <div className="absolute top-1/4 -right-24 font-mono text-[10px] opacity-40 hidden md:block">92.5 MHz</div>
          <div className="absolute top-1/2 -right-2 w-2 h-[1px] bg-paper/30" />
          <div className="absolute top-1/2 -right-24 font-mono text-[10px] opacity-40 hidden md:block">104.3 MHz</div>
          <div className="absolute top-3/4 -right-2 w-2 h-[1px] bg-paper/30" />
          <div className="absolute top-3/4 -right-24 font-mono text-[10px] opacity-40 hidden md:block">108.0 MHz</div>
        </div>
      </div>`;

content = content.replace(
  /\{\/\* Global Scroll Indicator - Right side \*\/\}.*?<\/div>\s*<\/div>/s,
  scrollIndicatorWithFreqs
);

fs.writeFileSync('src/components/ui/HUD.tsx', content);
