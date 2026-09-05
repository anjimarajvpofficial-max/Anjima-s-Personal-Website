"use client";

import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import { useCursor } from "@/components/ui/CustomCursor";
import { useCyberSound } from "@/lib/useCyberSound";
import DecryptText from "@/components/ui/DecryptText";

// Individual Card Component with 3D Tilt Physics
const TiltCard = ({ skill, onClick }: { skill: any, onClick: () => void }) => {
  const { playHoverBlip } = useCyberSound();
  const { setVariant, setText } = useCursor();
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setVariant("default");
    setText("");
  };

  return (
    <motion.div
      ref={ref}
      layoutId={`card-${skill.code}`}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => {
        setVariant("text");
        setText("ACCESS");
        playHoverBlip();
      }}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      whileHover={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="bg-ink text-paper p-6 aspect-square flex flex-col justify-between hover:bg-accent hover:text-ink transition-colors duration-300  group relative overflow-hidden"
    >
      
      {/* Dynamic Mouse Spotlight */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useTransform(
            [mouseXSpring, mouseYSpring],
            ([x, y]) => `radial-gradient(400px circle at ${(x as number + 0.5) * 100}% ${(y as number + 0.5) * 100}%, rgba(255,0,80,0.15), transparent 80%)`
          )
        }}
      />
      
      {/* Data stream reveal on hover */}

      <div 
        style={{ transform: "translateZ(30px)" }}
        className="absolute inset-0 bg-ink opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-300 flex items-center justify-center font-mono text-[8px] break-all p-4 leading-none text-paper"
      >
        01010101001010111010101010100010101011111010101010001
      </div>
      
      <motion.div 
        layoutId={`header-${skill.code}`} 
        style={{ transform: "translateZ(20px)" }}
        className="font-mono text-[10px] flex justify-between opacity-50 relative z-10"
      >
        <span>{skill.code}</span>
        <span className="flex items-center gap-1">
          {skill.status === "LIVE" && <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse group-hover:bg-ink" />}
          {skill.status}
        </span>
      </motion.div>
      
      <motion.div 
        layoutId={`title-${skill.code}`} 
        style={{ transform: "translateZ(40px)" }}
        className="font-display text-xl md:text-3xl uppercase leading-none tracking-tight relative z-10"
      >
        {skill.skill.split(" ").map((word: string, j: number) => <div key={j}>{word}</div>)}
      </motion.div>
    </motion.div>
  );
};

export default function ControlRoom() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { setVariant, setText } = useCursor();
  const [selectedSkill, setSelectedSkill] = useState<any>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  
  const xMarquee = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const skills = [
    { skill: "VIDEO PRESENTATION", status: "LIVE", code: "V.PRS_01", desc: "Expertise in front-of-camera performance, ensuring clear, engaging, and highly professional delivery for brand messaging and corporate communications." },
    { skill: "CONTENT CREATION", status: "ACTIVE", code: "C.CRT_02", desc: "End-to-end production of digital assets, balancing aesthetic appeal with algorithmic optimization to maximize reach." },
    { skill: "CONTENT WRITING", status: "ACTIVE", code: "C.WRT_03", desc: "Crafting compelling narratives, from video scripts to editorial pieces, prioritizing storytelling and audience retention." },
    { skill: "DIGITAL MARKETING", status: "ACTIVE", code: "D.MRK_04", desc: "Strategic deployment of campaigns across digital channels, utilizing data-driven insights to measure and scale impact." },
    { skill: "SOCIAL MEDIA", status: "RUNNING", code: "S.MED_05", desc: "Community management and platform-specific strategy execution, building brand loyalty and consistent growth." },
    { skill: "PHOTOGRAPHY", status: "EXP.", code: "P.HTO_06", desc: "Visual storytelling through high-end photography, capturing behind-the-scenes moments and campaign stills." },
  ];

  return (
    <section ref={containerRef} id="control" className="relative z-20 bg-paper text-ink py-40 overflow-hidden" style={{ perspective: "1200px" }}>
      <motion.div style={{ x: xMarquee }} className="absolute top-10 whitespace-nowrap font-display text-8xl md:text-[12rem] uppercase tracking-tighter text-ink/5 -z-10 pointer-events-none">
        THE CONTROL ROOM // THE CONTROL ROOM //
      </motion.div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10">
        <div className="md:col-span-4 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl md:text-6xl font-display leading-[0.9] tracking-tighter uppercase mb-6">
              <DecryptText text="ACTIVE SYSTEMS" delay={200} speed={40} />
            </h2>
            <p className="font-mono text-sm opacity-60 max-w-xs">
              Monitoring creative output channels and real-time processing capabilities. Click nodes for diagnostics.
            </p>
          </div>
          <div className="mt-20 font-mono text-xs flex items-center gap-2">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" /> ALL SYSTEMS OPTIMAL
          </div>
        </div>
        
        <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-1" style={{ perspective: "1000px" }}>
          {skills.map((skill, i) => (
            <TiltCard key={i} skill={skill} onClick={() => setSelectedSkill(skill)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedSkill && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-ink/90 backdrop-blur-sm "
            onClick={() => { setSelectedSkill(null); setVariant("default"); setText(""); }}
            onMouseEnter={() => { setVariant("text"); setText("CLOSE"); }}
          >
            <motion.div 
              layoutId={`card-${selectedSkill.code}`}
              className="bg-ink text-paper w-full max-w-4xl min-h-[60vh] md:min-h-0 md:aspect-video p-8 md:p-12 flex flex-col justify-between relative overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              onMouseEnter={() => { setVariant("default"); setText(""); }}
            >
              <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 2px, #fff 4px)" }} />
              
              <motion.div layoutId={`header-${selectedSkill.code}`} className="font-mono text-xs flex justify-between opacity-50 text-accent">
                <span>DIAGNOSTICS // {selectedSkill.code}</span>
                <span>STATUS: {selectedSkill.status}</span>
              </motion.div>
              
              <div className="relative z-10 max-w-xl">
                <motion.div layoutId={`title-${selectedSkill.code}`} className="font-display text-5xl md:text-7xl uppercase leading-none tracking-tight mb-8">
                  {selectedSkill.skill}
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="font-mono text-sm md:text-base opacity-70 leading-relaxed"
                >
                  {selectedSkill.desc}
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="font-mono text-xs opacity-30 mt-8"
              >
                CLICK ANYWHERE TO TERMINATE PROCESS
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
