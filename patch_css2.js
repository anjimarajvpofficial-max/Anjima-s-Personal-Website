const fs = require('fs');
const file = 'src/app/globals.css';
let content = fs.readFileSync(file, 'utf8');

// Add the pseudo-elements to the body for noise and glow
content += `

/* Zero-Cost Ambient Cyberpunk Effects */
body::before {
  content: "";
  position: fixed;
  inset: 0;
  z-index: 50;
  pointer-events: none;
  background-image: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px);
  opacity: 0.3;
}

body::after {
  content: "";
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background: radial-gradient(circle at 50% 50%, rgba(255, 0, 80, 0.05) 0%, transparent 60%);
}

.text-neon {
  text-shadow: 0 0 15px rgba(255, 0, 80, 0.5);
}
`;

fs.writeFileSync(file, content);
