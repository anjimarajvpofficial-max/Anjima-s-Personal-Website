const fs = require('fs');
let content = fs.readFileSync('src/components/sections/About.tsx', 'utf8');

content = content.replace(
  '<div className="font-mono text-[10px] opacity-40 tracking-widest uppercase mb-8 border-b border-paper/10 pb-4">Professional Timeline</div>',
  '<div className="font-mono text-[10px] opacity-30 tracking-widest uppercase mb-8 border-b border-paper/10 pb-4">root@anjima:~/career $ ls -l</div>'
);

content = content.replace(
  '<div className="font-mono text-[10px] opacity-40 tracking-widest uppercase mb-8 border-b border-paper/10 pb-4">Academic Background</div>',
  '<div className="font-mono text-[10px] opacity-30 tracking-widest uppercase mb-8 border-b border-paper/10 pb-4">root@anjima:~/education $ cat credentials.txt</div>'
);

content = content.replace(
  '<div className="font-mono text-[10px] opacity-40 tracking-widest uppercase mb-8 border-b border-paper/10 pb-4">Key Milestones & Awards</div>',
  '<div className="font-mono text-[10px] opacity-30 tracking-widest uppercase mb-8 border-b border-paper/10 pb-4">root@anjima:~/achievements $ ./execute</div>'
);

content = content.replace(
  /<div className="w-1\.5 h-1\.5 bg-accent rounded-full mt-1\.5 shrink-0"><\/div>/g,
  '<div className="text-accent font-mono text-xs shrink-0 pt-1">[OK]</div>'
);

fs.writeFileSync('src/components/sections/About.tsx', content);
