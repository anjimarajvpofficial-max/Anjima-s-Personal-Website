const fs = require('fs');
const file = 'src/app/globals.css';
let content = fs.readFileSync(file, 'utf8');

const glitchCSS = `
/* Cyberpunk Glitch Hover Effect */
.glitch-hover {
  position: relative;
  transition: all 0.2s ease;
}

.glitch-hover:hover {
  text-shadow: 2px 0 0 rgba(255,0,80,0.8), -2px 0 0 rgba(0,255,255,0.7);
  color: #fff;
}
`;

if (!content.includes('.glitch-hover')) {
  content += glitchCSS;
  fs.writeFileSync(file, content);
}
