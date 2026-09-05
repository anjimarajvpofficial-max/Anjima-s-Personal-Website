const fs = require('fs');
let content = fs.readFileSync('src/components/sections/Hero.tsx', 'utf8');

// 1. Import useMotionValue and useSpring
if (!content.includes('useMotionValue')) {
  content = content.replace(
    'import { motion, useScroll, useTransform } from "framer-motion";',
    'import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";'
  );
}

// 2. Add mouse tracking logic
const mouseLogic = `  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      mouseX.set(x * 60); 
      mouseY.set(y * 60);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  
  const titleText = "ANJIMA";`;

content = content.replace('  const titleText = "ANJIMA";', mouseLogic);

// 3. Insert the image behind the typography
const imageHtml = `        <CyberGrid />
        
        {/* Creative Floating Hero Image */}
        <motion.div 
          style={{ 
            x: springX, 
            y: springY,
            scale,
            opacity: useTransform(scrollYProgress, [0, 0.5], [0.4, 0]),
            filter: filter
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] aspect-square z-0 mix-blend-screen pointer-events-none"
        >
          <div className="w-full h-full relative rounded-full overflow-hidden blur-[2px] hover:blur-none transition-all duration-1000">
             <img src="/images/hero-art.png" alt="Creative Hero Art" className="absolute inset-0 w-full h-full object-cover grayscale opacity-80" />
             <div className="absolute inset-0 bg-accent mix-blend-overlay opacity-30" />
          </div>
        </motion.div>`;

content = content.replace('        <CyberGrid />', imageHtml);

fs.writeFileSync('src/components/sections/Hero.tsx', content);

