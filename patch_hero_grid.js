const fs = require('fs');
let content = fs.readFileSync('src/components/sections/Hero.tsx', 'utf8');

if (!content.includes('CyberGrid')) {
  content = content.replace('import MagneticButton from "@/components/ui/MagneticButton";', 'import MagneticButton from "@/components/ui/MagneticButton";\nimport CyberGrid from "@/components/ui/CyberGrid";');
  
  content = content.replace(
    '<div \n          className="absolute inset-0 w-full h-full object-cover -z-20 transition-opacity duration-1000 animate-noise opacity-30"\n          style={{ backgroundImage: "url(\'https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png\')", backgroundSize: "cover" }}\n        />',
    '<div \n          className="absolute inset-0 w-full h-full object-cover -z-20 transition-opacity duration-1000 animate-noise opacity-30"\n          style={{ backgroundImage: "url(\'https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png\')", backgroundSize: "cover" }}\n        />\n        <CyberGrid />'
  );
  
  fs.writeFileSync('src/components/sections/Hero.tsx', content);
}
