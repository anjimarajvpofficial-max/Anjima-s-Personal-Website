const fs = require('fs');
let content = fs.readFileSync('src/components/sections/Transmissions.tsx', 'utf8');

// Enhance the play button overlay
content = content.replace(
  '<div className="w-16 h-16 rounded-full border border-paper/30 flex items-center justify-center backdrop-blur-sm">',
  '<div className="w-16 h-16 rounded-full border border-paper/30 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 group-hover:border-accent group-hover:shadow-[0_0_30px_rgba(255,0,80,0.5)] transition-all duration-500">'
);
content = content.replace(
  '<div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-paper border-b-[6px] border-b-transparent ml-1" />',
  '<div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-paper group-hover:border-l-accent border-b-[6px] border-b-transparent ml-1 transition-colors duration-500" />'
);

fs.writeFileSync('src/components/sections/Transmissions.tsx', content);
