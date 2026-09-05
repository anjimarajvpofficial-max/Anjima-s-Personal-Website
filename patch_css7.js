const fs = require('fs');
const file = 'src/app/globals.css';
let content = fs.readFileSync(file, 'utf8');

// Replace the previous noise and radial gradient with the new premium grid and light
const newBackgrounds = `
/* Premium Editorial Environment */
body::before {
  content: "";
  position: fixed;
  inset: 0;
  z-index: 999;
  pointer-events: none;
  /* Swiss 12-column architectural grid */
  background-image: 
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 8.333% 8.333%;
}

@keyframes volumetric-spin {
  0% { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
}

body::after {
  content: "";
  position: fixed;
  top: 50%;
  left: 50%;
  width: 200vw;
  height: 200vh;
  z-index: -1;
  pointer-events: none;
  background: conic-gradient(from 90deg at 50% 50%, 
    transparent 0deg, 
    rgba(255, 255, 255, 0.02) 60deg, 
    transparent 120deg, 
    transparent 180deg, 
    rgba(255, 0, 80, 0.03) 240deg, 
    transparent 300deg, 
    transparent 360deg
  );
  animation: volumetric-spin 60s linear infinite;
}
`;

// Remove the old pseudo elements
content = content.replace(/\/\* Zero-Cost Ambient Cyberpunk Effects \*\/[\s\S]*?body::after \{[\s\S]*?\}/, newBackgrounds);

fs.writeFileSync(file, content);
