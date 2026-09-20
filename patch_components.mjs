import fs from 'fs';

// 1. Statement.tsx
let stmt = fs.readFileSync('src/components/sections/Statement.tsx', 'utf-8');
stmt = stmt.replace('const words = ["Helping", "brands", "communicate", "better."];', '');
stmt = stmt.replace('export default function Statement({ cmsData }: { cmsData?: any }) {', `export default function Statement({ cmsData }: { cmsData?: any }) {
  const words = (cmsData?.text || "Helping brands communicate better.").split(" ");
  const labelText = cmsData?.label || "CORE PHILOSOPHY";`);
stmt = stmt.replace('<DecryptText text="CORE PHILOSOPHY" delay={300} speed={20} />', '<DecryptText text={labelText} delay={300} speed={20} />');
fs.writeFileSync('src/components/sections/Statement.tsx', stmt);

// 2. Process.tsx
let proc = fs.readFileSync('src/components/sections/Process.tsx', 'utf-8');
proc = proc.replace(/const steps = \[\s*\{ name: "IDEA"[^\]]*\];/m, `const steps = cmsData?.steps?.length > 0 ? cmsData.steps.map((s: any) => ({ name: s.name, img: s.image?.asset?.url || "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1600" })) : [
    { name: "IDEA", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1600" },
    { name: "SCRIPT", img: "https://images.unsplash.com/photo-1455390582262-044cdead27d8?q=80&w=1600" },
    { name: "SHOOT", img: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1600" },
    { name: "PRESENT", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1600" },
    { name: "EDIT", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600" },
    { name: "PUBLISH", img: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1600" },
  ];
  const labelText = cmsData?.label || "METHODOLOGY";
  const titleText = cmsData?.title || "SYSTEM ARCHITECTURE";`);
proc = proc.replace('<DecryptText text="METHODOLOGY"', '<DecryptText text={labelText}');
proc = proc.replace('text="SYSTEM ARCHITECTURE"', 'text={titleText}');
fs.writeFileSync('src/components/sections/Process.tsx', proc);

