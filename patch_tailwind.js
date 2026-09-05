const fs = require('fs');
let content = fs.readFileSync('tailwind.config.js', 'utf8');

// Change accent color to use a CSS variable with a fallback
content = content.replace(
  'accent: "#ff0050", // Electric magenta/red',
  'accent: "var(--accent, #ff0050)", // Dynamic theme variable'
);
fs.writeFileSync('tailwind.config.js', content);
