const fs = require('fs');
let content = fs.readFileSync('src/components/sections/Testimonials.tsx', 'utf8');

if (!content.includes('useSpring')) {
  content = content.replace(
    'import { motion, AnimatePresence, useInView } from "framer-motion";',
    'import { motion, AnimatePresence, useInView, useSpring, useTransform, useMotionValue } from "framer-motion";'
  );

  content = content.replace(
    'const inView = useInView(ref, { once: true, amount: 0.1 });',
    `const inView = useInView(ref, { once: true, amount: 0.1 });\n\n  const mouseX = useMotionValue(0);\n  const mouseY = useMotionValue(0);\n  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });\n  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });\n  const x = useTransform(smoothX, [0, typeof window !== "undefined" ? window.innerWidth : 1000], [20, -20]);\n  const y = useTransform(smoothY, [0, typeof window !== "undefined" ? window.innerHeight : 1000], [20, -20]);`
  );
  
  content = content.replace(
    '<section id="testimonials" ref={ref} className="relative z-20 bg-ink text-paper py-32 md:py-48 px-4 md:px-12 overflow-hidden">',
    '<section id="testimonials" ref={ref} onMouseMove={(e) => { mouseX.set(e.clientX); mouseY.set(e.clientY); }} className="relative z-20 bg-ink text-paper py-32 md:py-48 px-4 md:px-12 overflow-hidden">'
  );
  
  content = content.replace(
    '<div className="absolute top-0 right-0 font-display text-[30vw] leading-none text-paper/[0.02] pointer-events-none select-none">',
    '<motion.div style={{ x, y }} className="absolute top-0 right-0 font-display text-[30vw] leading-none text-paper/[0.02] pointer-events-none select-none">'
  );
  
  content = content.replace(
    '  </div>\n\n      <div className="mb-20 md:mb-32">',
    '  </motion.div>\n\n      <div className="mb-20 md:mb-32">'
  );

  fs.writeFileSync('src/components/sections/Testimonials.tsx', content);
}
