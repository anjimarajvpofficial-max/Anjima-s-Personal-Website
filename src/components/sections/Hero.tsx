"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import GlitchText from "@/components/ui/GlitchText";
import DecryptText from "@/components/ui/DecryptText";
import MagneticButton from "@/components/ui/MagneticButton";
import CyberGrid from "@/components/ui/CyberGrid";
import MagneticLetter from "@/components/ui/MagneticLetter";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const filter = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(20px)"]);

  const lineY = useTransform(scrollYProgress, [0.6, 1], ["0vh", "50vh"]);
  const lineWidth = useTransform(scrollYProgress, [0.8, 1], ["2px", "100%"]);
  const lineOpacity = useTransform(scrollYProgress, [0.5, 0.7, 1], [0, 1, 1]);
  const [streamActive, setStreamActive] = useState(false);

  useEffect(() => {
    // Camera feed disabled to prevent hardware throttling and lag
  }, []);

  const mouseX = useMotionValue(0);
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
  
  const titleText = "AMAR";
  const textX = useTransform(springX, (val) => -val * 0.3);
  const textY = useTransform(springY, (val) => -val * 0.3);

  return (
    <section ref={containerRef} id="hero" className="h-[150vh] relative w-full bg-ink">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* Fallback Static Noise Background */}
        <div 
          className="absolute inset-0 w-full h-full object-cover -z-20 transition-opacity duration-1000 animate-noise opacity-30"
          style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')", backgroundSize: "cover" }}
        />
        <CyberGrid />
        
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
             <Image src="/images/hero-art.png" alt="Creative Hero Art" fill sizes="(max-width: 768px) 300px, 500px" className="object-cover grayscale opacity-80" priority />
             <div className="absolute inset-0 bg-accent mix-blend-overlay opacity-30" />
          </div>
        </motion.div>
        
        <motion.div style={{ scale, y, opacity, filter, x: textX }} className="w-full text-center z-10 pointer-events-auto">
          <h1 className="text-[18vw] leading-[0.75] font-display font-bold tracking-tighter uppercase flex justify-center overflow-hidden">
            <span className="sr-only">Amar — Digital Marketer, Content Creator & Presenter</span>
            {titleText.split("").map((letter, i) => (
              <motion.span
                key={i}
                aria-hidden="true"
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: i * 0.05 }}
                className="inline-block"
              >
                <MagneticLetter className="text-paper drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:text-accent hover:drop-shadow-[0_0_30px_rgba(255,0,80,0.5)] transition-all duration-500">
                  {letter}
                </MagneticLetter>
              </motion.span>
            ))}
          </h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.19, 1, 0.22, 1] }}
            className="text-[12vw] leading-[0.8] font-display tracking-tighter uppercase text-accent italic pr-8 md:pr-24 mt-4"
          >
            <GlitchText text="ON AIR" />
          </motion.div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col sm:flex-row items-center gap-4 z-20 pointer-events-auto"
        >
          <MagneticButton>
            <button
              onClick={() => { const el = document.getElementById("footer"); if (el) el.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-block font-mono text-xs tracking-widest uppercase bg-accent text-ink px-8 py-4 border border-transparent hover:bg-paper hover:scale-105 transition-all duration-300 whitespace-nowrap shadow-[0_0_30px_rgba(255,0,80,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)]"
            >
              Let&apos;s Work Together
            </button>
          </MagneticButton>
          <MagneticButton>
            <a
              href="/CV_Anjima.pdf" target="_blank"
              download
              className="inline-block font-mono text-xs tracking-widest uppercase border border-paper/50 text-paper px-8 py-4 hover:border-paper hover:bg-paper hover:text-ink hover:scale-105 transition-all duration-300 whitespace-nowrap text-center backdrop-blur-sm"
            >
              Download CV
            </a>
          </MagneticButton>
        </motion.div>

        <motion.div 
          style={{ y: lineY, width: lineWidth, opacity: lineOpacity }}
          className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] bg-paper/20 z-0"
        />
        
        <motion.div style={{ opacity }} className="absolute top-1/4 left-8 md:left-16 opacity-50 hidden md:block z-20 text-paper">
          <DecryptText text="PRESENTER" className="font-mono text-[10px] md:text-xs tracking-widest block" delay={800} />
          <DecryptText text="CONTENT CREATOR" className="font-mono text-[10px] md:text-xs tracking-widest block" delay={1000} />
          <DecryptText text="DIGITAL MARKETER" className="font-mono text-[10px] md:text-xs tracking-widest block" delay={1200} />
          <DecryptText text="[ MULTIDISCIPLINARY ]" className="font-mono text-[10px] md:text-xs tracking-widest block mt-2 text-accent" delay={1400} />
        </motion.div>
        
        <motion.div style={{ opacity }} className="absolute bottom-1/4 right-12 md:right-24 opacity-50 text-right hidden md:block z-20 text-paper">
          <DecryptText text="SCROLL TO" className="font-mono text-[10px] md:text-xs tracking-widest block" delay={1800} />
          <DecryptText text="INITIATE" className="font-mono text-[10px] md:text-xs tracking-widest block" delay={1900} />
          <DecryptText text="TRANSMISSION" className="font-mono text-[10px] md:text-xs tracking-widest block text-accent" delay={2000} />
        </motion.div>

      </div>
    </section>
  );
}
