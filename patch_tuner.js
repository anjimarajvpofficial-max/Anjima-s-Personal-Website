const fs = require('fs');
let content = fs.readFileSync('src/components/ui/Navigation.tsx', 'utf8');

if (!content.includes('useCyberSound')) {
  content = content.replace('import { useCursor } from "./CustomCursor";', 'import { useCursor } from "./CustomCursor";\nimport { useCyberSound } from "@/lib/useCyberSound";');
  
  content = content.replace('const { setVariant, setText } = useCursor();', 'const { setVariant, setText } = useCursor();\n  const { playHoverBlip, playClickThud } = useCyberSound();');
  
  content = content.replace(
    'onMouseEnter={() => { setVariant("hover"); }}',
    'onMouseEnter={() => { setVariant("hover"); playHoverBlip(); }}'
  );
  
  content = content.replace(
    'onClick={() => handleTune(f.freq, f.id)}',
    'onClick={() => { handleTune(f.freq, f.id); playClickThud(); }}'
  );
  
  // Make the labels visible by default with opacity 50
  content = content.replace(
    'className="absolute right-6 opacity-0 hidden md:block hover:opacity-100 transition-opacity whitespace-nowrap"',
    'className={`absolute right-6 transition-all duration-300 hidden md:block whitespace-nowrap ${activeFreq === f.freq ? "opacity-100 text-accent font-bold" : "opacity-30 group-hover:opacity-100"}`}'
  );
  
  // Add group class
  content = content.replace(
    'className={`w-4 h-1  transition-colors duration-300 ${activeFreq === f.freq ? \'bg-transparent\' : \'bg-paper/50 hover:bg-paper\'}`}',
    'className={`w-4 h-1 cursor-pointer group transition-colors duration-300 ${activeFreq === f.freq ? \'bg-transparent\' : \'bg-paper/50 hover:bg-paper\'}`}'
  );
  
  fs.writeFileSync('src/components/ui/Navigation.tsx', content);
}
