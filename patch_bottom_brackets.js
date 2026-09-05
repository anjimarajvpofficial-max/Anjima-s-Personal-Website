const fs = require('fs');
let content = fs.readFileSync('src/components/ui/HUD.tsx', 'utf8');

// Fix Bottom Left Bracket
content = content.replace(
  '<div className="absolute bottom-6 left-6 w-8 h-[1px] bg-paper" />\n      <div className="absolute bottom-14 left-6 w-[1px] h-8 bg-paper" />',
  '<div className="absolute bottom-6 left-6 w-8 h-[1px] bg-paper" />\n      <div className="absolute bottom-6 left-6 w-[1px] h-8 bg-paper" />'
);

// Fix Bottom Right Bracket
content = content.replace(
  '<div className="absolute bottom-6 right-6 w-8 h-[1px] bg-paper" />\n      <div className="absolute bottom-14 right-6 w-[1px] h-8 bg-paper" />',
  '<div className="absolute bottom-6 right-6 w-8 h-[1px] bg-paper" />\n      <div className="absolute bottom-6 right-6 w-[1px] h-8 bg-paper" />'
);

fs.writeFileSync('src/components/ui/HUD.tsx', content);
