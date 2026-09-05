const fs = require('fs');

const newProjectTypes = `const PROJECT_TYPES = [
  "Video Presenting & Hosting",
  "Video Production",
  "Content Creation",
  "Social Media Management",
  "Digital Marketing",
  "SEO Content Writing",
  "Script Writing",
  "Team Coordination",
  "Other"
];`;

let content = fs.readFileSync('src/components/ui/InquiryForm.tsx', 'utf8');

content = content.replace(/const PROJECT_TYPES = \[[\s\S]*?\];/, newProjectTypes);

fs.writeFileSync('src/components/ui/InquiryForm.tsx', content);

