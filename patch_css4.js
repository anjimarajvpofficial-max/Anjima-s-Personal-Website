const fs = require('fs');
const file = 'src/app/globals.css';
let content = fs.readFileSync(file, 'utf8');

// Replace the old noise-flicker keyframes with a new background-position based shuffle
const newAnimation = `
@keyframes noise-flicker {
  0% { background-position: 0 0; }
  10% { background-position: -5% -10%; }
  20% { background-position: -15% 5%; }
  30% { background-position: 7% -25%; }
  40% { background-position: 20% 25%; }
  50% { background-position: -25% 10%; }
  60% { background-position: 15% 5%; }
  70% { background-position: 0% 15%; }
  80% { background-position: 25% 35%; }
  90% { background-position: -10% 10%; }
  100% { background-position: 0 0; }
}

.animate-noise {
  animation: noise-flicker 0.4s infinite steps(1);
}
`;

content = content.replace(/@keyframes noise-flicker \{[\s\S]*?\.animate-noise \{[\s\S]*?\}/, newAnimation.trim());

fs.writeFileSync(file, content);
