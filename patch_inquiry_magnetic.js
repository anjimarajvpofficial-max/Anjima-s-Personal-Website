const fs = require('fs');
let content = fs.readFileSync('src/components/ui/InquiryForm.tsx', 'utf8');

if (!content.includes('MagneticButton')) {
  content = content.replace('import { useState, useRef } from "react";', 'import { useState, useRef } from "react";\nimport MagneticButton from "./MagneticButton";');
}

// Wrap the submit button
content = content.replace(
  /<button\n          type="submit"[\s\S]*?<\/button>/,
  (match) => `<MagneticButton>\n          ${match}\n        </MagneticButton>`
);

fs.writeFileSync('src/components/ui/InquiryForm.tsx', content);
