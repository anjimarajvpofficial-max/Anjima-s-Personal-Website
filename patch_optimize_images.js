const fs = require('fs');

// Optimize Hero.tsx
let hero = fs.readFileSync('src/components/sections/Hero.tsx', 'utf8');
if (!hero.includes('import Image from "next/image"')) {
  hero = hero.replace('import { motion', 'import Image from "next/image";\nimport { motion');
  hero = hero.replace(
    '<img src="/images/hero-art.png" alt="Creative Hero Art" className="absolute inset-0 w-full h-full object-cover grayscale opacity-80" />',
    '<Image src="/images/hero-art.png" alt="Creative Hero Art" fill sizes="(max-width: 768px) 300px, 500px" className="object-cover grayscale opacity-80" priority />'
  );
  fs.writeFileSync('src/components/sections/Hero.tsx', hero);
}

// Optimize About.tsx
let about = fs.readFileSync('src/components/sections/About.tsx', 'utf8');
if (!about.includes('import Image from "next/image"')) {
  about = about.replace('import { motion', 'import Image from "next/image";\nimport { motion');
  about = about.replace(
    '<img src="/images/portrait.jpg" alt="Anjima Raj" className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700 z-0" />',
    '<Image src="/images/portrait.jpg" alt="Anjima Raj" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700 z-0" />'
  );
  fs.writeFileSync('src/components/sections/About.tsx', about);
}

// Optimize Process.tsx
let processFile = fs.readFileSync('src/components/sections/Process.tsx', 'utf8');
if (!processFile.includes('import Image from "next/image"')) {
  processFile = processFile.replace('import { motion', 'import Image from "next/image";\nimport { motion');
  processFile = processFile.replace(
    '<img loading="lazy" src={steps[hoveredIndex].img} alt="" className="w-full h-full object-cover filter grayscale" />',
    '<Image src={steps[hoveredIndex].img} alt="" fill sizes="(max-width: 768px) 100vw, 30vw" className="object-cover filter grayscale" />'
  );
  fs.writeFileSync('src/components/sections/Process.tsx', processFile);
}
