const fs = require('fs');
let content = fs.readFileSync('src/components/ui/HUD.tsx', 'utf8');

// Remove hidden md:flex to ensure it renders on ALL screen sizes
content = content.replace(
  'className="absolute top-12 left-16 right-16 justify-between items-start hidden md:flex"',
  'className="absolute top-12 left-16 right-16 flex justify-between items-start"'
);

content = content.replace(
  'className="absolute bottom-12 left-16 right-16 justify-between items-end hidden md:flex"',
  'className="absolute bottom-12 left-16 right-16 flex justify-between items-end"'
);

// We need to hide the less important parts on mobile instead of hiding the whole bar
content = content.replace(
  '<span>FPS: 24.000</span>\n          <span>ISO: 800</span>',
  '<span className="hidden md:inline">FPS: 24.000</span>\n          <span className="hidden md:inline">ISO: 800</span>'
);

content = content.replace(
  '<div className="flex gap-8 items-end">',
  '<div className="hidden md:flex gap-8 items-end">'
);

content = content.replace(
  '<span>BAT: 14.4V</span>\n          <span>TC: {time}</span>',
  '<span className="hidden md:inline">BAT: 14.4V</span>\n          <span>TC: {time}</span>'
);

fs.writeFileSync('src/components/ui/HUD.tsx', content);
