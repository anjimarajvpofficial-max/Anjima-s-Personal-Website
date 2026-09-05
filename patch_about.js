const fs = require('fs');

const workExperience = `const experience = [
  {
    role: "Founder / Self-Employed",
    company: "Turtle Pi Advertising",
    year: "2024 — Present",
    desc: "Run an independent agency specializing in video production and social media management."
  },
  {
    role: "Social Media Manager / Presenter",
    company: "MarketLube (HiLITE Business Park)",
    year: "2024",
    desc: "Proficiency in crafting and executing comprehensive social media strategies to enhance brand presence, engagement, and customer acquisition."
  },
  {
    role: "Content Creator",
    company: "Iluzia Lab LLP (Govt CyberPark)",
    year: "2021 — 2024",
    desc: "Proven track record of boosting brand visibility and audience engagement through innovative strategies."
  }
];`;

const education = `const education = [
  {
    degree: "Postgraduate Studies in Physics (Grade A+)",
    school: "MES Ponnani College",
    year: "2019 — 2021",
    desc: "Completed postgraduate studies in Physics with an overall grade of A+."
  },
  {
    degree: "Undergraduate Studies in Physics (Grade A)",
    school: "MES Mampad College",
    year: "2016 — 2019",
    desc: "Completed undergraduate studies in Physics with an overall grade of A."
  }
];`;

let content = fs.readFileSync('src/components/sections/About.tsx', 'utf8');

// Replace the experience array
content = content.replace(/const experience = \[[\s\S]*?\];/, workExperience);

// Replace the education array
content = content.replace(/const education = \[[\s\S]*?\];/, education);

// The bio was already perfectly matched by the placeholder, but let's ensure it's exact:
// Find the bio paragraph
content = content.replace(
  /<p className="text-xl md:text-3xl font-display leading-tight mb-8">[\s\S]*?<\/p>/,
  '<p className="text-xl md:text-3xl font-display leading-tight mb-8">\n          I turn ideas into content that connects — on screen, in writing, and across platforms. With experience spanning video presentation, content creation, writing, and digital marketing, I bring campaigns to life from first concept to final delivery.\n        </p>'
);

fs.writeFileSync('src/components/sections/About.tsx', content);

