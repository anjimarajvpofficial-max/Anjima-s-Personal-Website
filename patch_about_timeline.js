const fs = require('fs');
let content = fs.readFileSync('src/components/sections/About.tsx', 'utf8');

const newTimeline = `const timeline = [
  { year: "2024 — Present", role: "Founder (Self-Employed)", org: "Turtle Pi Advertising", desc: "Run an independent agency specializing in video production and social media management." },
  { year: "2024", role: "Social Media Manager / Presenter", org: "MarketLube", desc: "Crafting and executing comprehensive social media strategies to enhance brand presence, engagement, and customer acquisition." },
  { year: "2021 — 2024", role: "Content Creator", org: "Iluzia Lab", desc: "Proven track record of boosting brand visibility and audience engagement through innovative strategies." },
];`;

content = content.replace(/const timeline = \[[\s\S]*?\];/, newTimeline);
fs.writeFileSync('src/components/sections/About.tsx', content);
