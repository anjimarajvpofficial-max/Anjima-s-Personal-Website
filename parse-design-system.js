const fs = require('fs');
const content = fs.readFileSync('/Users/amarshafanm/Downloads/stitch_anjima_raj_brand_identity/cinematic_editorial/DESIGN.md', 'utf8');

const colors = {};
let inColors = false;
content.split('\n').forEach(line => {
  if (line.startsWith('colors:')) { inColors = true; return; }
  if (inColors && line.startsWith('  ')) {
    const parts = line.split(':');
    if (parts.length === 2) {
      colors[parts[0].trim()] = parts[1].trim().replace(/'/g, '');
    }
  } else if (inColors && !line.startsWith('  ')) {
    inColors = false;
  }
});

const configStr = `
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: ${JSON.stringify(colors, null, 6)},
      borderRadius: {
        "sm": "0.25rem",
        "DEFAULT": "0.5rem",
        "md": "0.75rem",
        "lg": "1rem",
        "xl": "1.5rem",
        "full": "9999px"
      },
      spacing: {
        "margin-page": "max(2rem, 5vw)",
        "gutter-grid": "1.5rem",
        "section-gap": "clamp(8rem, 15vh, 12rem)",
        "stack-sm": "0.5rem",
        "stack-md": "1rem",
        "stack-lg": "2rem"
      },
      fontFamily: {
        "display-hero": ["Geist", "sans-serif"],
        "headline-lg": ["Geist", "sans-serif"],
        "headline-lg-mobile": ["Geist", "sans-serif"],
        "section-header": ["Geist", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "label-md": ["Geist", "sans-serif"]
      },
      fontSize: {
        "display-hero": ["clamp(4rem, 8vw, 9rem)", { lineHeight: "0.95", letterSpacing: "-0.04em", fontWeight: "600" }],
        "headline-lg": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "500" }],
        "headline-lg-mobile": ["2.25rem", { lineHeight: "1.2", fontWeight: "500" }],
        "section-header": ["0.75rem", { lineHeight: "1rem", letterSpacing: "0.2em", fontWeight: "600" }],
        "body-lg": ["1.25rem", { lineHeight: "1.6", fontWeight: "400" }],
        "body-md": ["1rem", { lineHeight: "1.6", fontWeight: "400" }],
        "label-md": ["0.875rem", { lineHeight: "1", letterSpacing: "0.02em", fontWeight: "500" }]
      }
    }
  },
  plugins: [],
};
`;

fs.writeFileSync('tailwind.config.js', configStr);
console.log('tailwind.config.js generated for cinematic_editorial');
