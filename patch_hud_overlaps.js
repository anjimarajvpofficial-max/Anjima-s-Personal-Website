const fs = require('fs');
let content = fs.readFileSync('src/components/ui/HUD.tsx', 'utf8');

// Move Top Bar text further inside and down
content = content.replace(
  '<div className="absolute top-24 left-6 right-6 flex justify-between items-start">',
  '<div className="absolute top-20 left-16 right-16 flex justify-between items-start hidden md:flex">'
);
content = content.replace(
  '<div className="absolute top-24 left-6 right-6 flex justify-between items-start">',
  '<div className="absolute top-20 left-16 right-16 flex justify-between items-start hidden md:flex">'
); // just in case

// Move Bottom Bar text further inside and up
content = content.replace(
  '<div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">',
  '<div className="absolute bottom-20 left-16 right-16 flex justify-between items-end hidden md:flex">'
);

// Move Top Left Bracket out
content = content.replace(
  '<div className="absolute top-20 left-10 w-8 h-[1px] bg-paper" />\n      <div className="absolute top-20 left-10 w-[1px] h-8 bg-paper" />',
  '<div className="absolute top-10 left-10 w-8 h-[1px] bg-paper" />\n      <div className="absolute top-10 left-10 w-[1px] h-8 bg-paper" />'
);

// Move Top Right Bracket out
content = content.replace(
  '<div className="absolute top-20 right-10 w-8 h-[1px] bg-paper" />\n      <div className="absolute top-20 right-10 w-[1px] h-8 bg-paper -translate-x-full" />',
  '<div className="absolute top-10 right-10 w-8 h-[1px] bg-paper" />\n      <div className="absolute top-10 right-10 w-[1px] h-8 bg-paper" style={{ transform: "translateX(-32px)" }} />'
);

// Move Bottom Left Bracket out
content = content.replace(
  '<div className="absolute bottom-20 left-10 w-8 h-[1px] bg-paper" />\n      <div className="absolute bottom-20 left-10 w-[1px] h-8 bg-paper -translate-y-full" />',
  '<div className="absolute bottom-10 left-10 w-8 h-[1px] bg-paper" />\n      <div className="absolute bottom-10 left-10 w-[1px] h-8 bg-paper -translate-y-full" />'
);

// Move Bottom Right Bracket out
content = content.replace(
  '<div className="absolute bottom-20 right-10 w-8 h-[1px] bg-paper" />\n      <div className="absolute bottom-20 right-10 w-[1px] h-8 bg-paper -translate-x-full -translate-y-full" />',
  '<div className="absolute bottom-10 right-10 w-8 h-[1px] bg-paper" />\n      <div className="absolute bottom-10 right-10 w-[1px] h-8 bg-paper -translate-y-full" style={{ transform: "translate(-32px, -100%)" }} />'
);

fs.writeFileSync('src/components/ui/HUD.tsx', content);
