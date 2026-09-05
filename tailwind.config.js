/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        paper: "#f4f4f0",
        accent: "var(--accent, #ff0050)", // Dynamic theme variable
        "ink-light": "#1a1a1a",
        "paper-dim": "#e0e0dc",
      },
      fontFamily: {
        display: ["Geist", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"], // For control room/broadcast aesthetics
      },
      fontSize: {
        "display-huge": "clamp(5rem, 12vw, 15rem)",
        "display-large": "clamp(3rem, 8vw, 8rem)",
        "display-medium": "clamp(2rem, 5vw, 5rem)",
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        widest: "0.2em",
      }
    },
  },
  plugins: [],
};
