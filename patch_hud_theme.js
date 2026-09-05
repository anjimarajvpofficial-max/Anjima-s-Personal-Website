const fs = require('fs');
let content = fs.readFileSync('src/components/ui/HUD.tsx', 'utf8');

if (!content.includes('const [themeIndex')) {
  content = content.replace(
    'const [time, setTime] = useState("");',
    `const [time, setTime] = useState("");
  const [themeIndex, setThemeIndex] = useState(0);
  
  const themes = [
    { label: "CLR", hex: "#ff0050" },
    { label: "CYN", hex: "#00f0ff" },
    { label: "YLW", hex: "#fcee0a" },
    { label: "GRN", hex: "#00ff41" }
  ];
  
  const handleThemeSwitch = () => {
    const nextIndex = (themeIndex + 1) % themes.length;
    setThemeIndex(nextIndex);
    document.documentElement.style.setProperty('--accent', themes[nextIndex].hex);
  };`
  );
}

content = content.replace(
  '<span>ND: CLR</span>',
  '<span onClick={handleThemeSwitch} className="cursor-pointer hover:text-accent transition-colors pointer-events-auto" title="Switch Theme">ND: {themes[themeIndex].label}</span>'
);

fs.writeFileSync('src/components/ui/HUD.tsx', content);
