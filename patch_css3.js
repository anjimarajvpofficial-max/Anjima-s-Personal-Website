const fs = require('fs');
const file = 'src/app/globals.css';
let content = fs.readFileSync(file, 'utf8');

if (!content.includes('noise-flicker')) {
  content += `

@keyframes noise-flicker {
  0% { transform: translate(0, 0); opacity: 0.15; }
  10% { transform: translate(-2%, -2%); opacity: 0.12; }
  20% { transform: translate(-4%, 2%); opacity: 0.18; }
  30% { transform: translate(2%, -4%); opacity: 0.14; }
  40% { transform: translate(-2%, 4%); opacity: 0.16; }
  50% { transform: translate(4%, -2%); opacity: 0.13; }
  60% { transform: translate(-4%, 4%); opacity: 0.17; }
  70% { transform: translate(2%, 2%); opacity: 0.14; }
  80% { transform: translate(-2%, -4%); opacity: 0.16; }
  90% { transform: translate(4%, 4%); opacity: 0.12; }
  100% { transform: translate(0, 0); opacity: 0.15; }
}

.animate-noise {
  animation: noise-flicker 0.4s infinite linear;
}
`;
  fs.writeFileSync(file, content);
}
