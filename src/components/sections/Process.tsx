"use client";

import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState } from "react";

export default function Process() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // Parallax setup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  
  // Translate [-0.5, 0.5] range to pixels for parallax shift
  const x = useTransform(springX, [-0.5, 0.5], ["-2%", "2%"]);
  const y = useTransform(springY, [-0.5, 0.5], ["-2%", "2%"]);

  const steps = [
    { name: "IDEA", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1600" },
    { name: "SCRIPT", img: "https://images.unsplash.com/photo-1455390582262-044cdead27d8?q=80&w=1600" },
    { name: "SHOOT", img: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1600" },
    { name: "PRESENT", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1600" },
    { name: "EDIT", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600" },
    { name: "PUBLISH", img: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1600" },
  ];

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth - 0.5);
    mouseY.set(clientY / innerHeight - 0.5);
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative z-20 bg-ink py-40 px-4 md:px-12 flex flex-col md:flex-row items-center gap-20 overflow-hidden"
    >
      
      {/* Massive Background Image Reveal */}
      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.3, scale: 1.05 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            style={{ x, y }}
            className="absolute -inset-10 z-0 pointer-events-none"
          >
            <Image src={steps[hoveredIndex].img} alt="" fill sizes="(max-width: 768px) 100vw, 30vw" className="object-cover filter grayscale" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full md:w-1/2 relative z-10">
        <h2 className="text-[clamp(3rem,8vw,6rem)] font-display leading-[0.8] tracking-tighter uppercase text-accent mb-8">
          SIGNAL <br/>TO NOISE
        </h2>
        <p className="text-xl md:text-3xl font-display max-w-lg leading-tight opacity-90 uppercase relative z-10 bg-ink/50 backdrop-blur-md p-4 -ml-4">
          "I turn ideas into content that connects — on screen, in writing, and across platforms."
        </p>
        <p className="font-mono text-sm opacity-50 max-w-md mt-8">
          With experience spanning video presentation, content creation, writing, and digital marketing, bringing campaigns to life from first concept to final delivery.
        </p>
      </div>
      
      <div className="w-full md:w-1/2 flex flex-col gap-4 border-l border-paper/20 pl-8 relative z-10">
        <div className="font-mono text-xs tracking-widest text-accent mb-4">PRODUCTION PIPELINE //</div>
        {steps.map((step, i) => (
          <div 
            key={i} 
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="flex items-center gap-8 group  w-fit"
          >
            <span className="font-mono text-xs opacity-30 group-hover:opacity-100 group-hover:text-accent transition-all">0{i+1}</span>
            <span className="text-4xl md:text-6xl font-display uppercase text-paper/30 group-hover:text-paper group-hover:translate-x-4 transition-all duration-300">
              {step.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
