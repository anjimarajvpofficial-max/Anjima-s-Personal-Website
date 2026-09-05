"use client";

import { motion, useInView, useSpring, useMotionValue } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useCursor } from "@/components/ui/CustomCursor";
import DecryptText from "@/components/ui/DecryptText";
import MagneticButton from "@/components/ui/MagneticButton";

const services = [
  { 
    num: "01", 
    title: "Video Presenting & Hosting", 
    desc: "Confident, camera-ready presenting for brand videos, product explainers, UGC and ads.", 
    tags: ["On-Camera", "UGC", "Hosting"],
    img: "https://images.unsplash.com/photo-1516280440502-6c361e2b5e0c?q=80&w=600"
  },
  { 
    num: "02", 
    title: "Video Production", 
    desc: "End-to-end video creation — scripting, shooting, editing, and final delivery.", 
    tags: ["Cinematography", "Editing", "Production"],
    img: "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=600"
  },
  { 
    num: "03", 
    title: "Content Creation", 
    desc: "Short-form video content tailored for Instagram, Reels, TikTok, and YouTube Shorts.", 
    tags: ["Short-Form", "Reels", "TikTok"],
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600"
  },
  { 
    num: "04", 
    title: "Social Media Management", 
    desc: "Planning, posting, and managing brand presence and community across platforms.", 
    tags: ["Community", "Strategy", "Management"],
    img: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=600"
  },
  { 
    num: "05", 
    title: "Digital Marketing", 
    desc: "Content strategy, campaign support, and integrated marketing for brand growth.", 
    tags: ["Strategy", "Campaigns", "Growth"],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600"
  },
  { 
    num: "06", 
    title: "SEO Content Writing", 
    desc: "Keyword-optimized blog articles, website copywriting, and digital web content.", 
    tags: ["Copywriting", "SEO", "Blogs"],
    img: "https://images.unsplash.com/photo-1455390582262-044cdead27d8?q=80&w=600"
  },
  { 
    num: "07", 
    title: "Script Writing", 
    desc: "Engaging and high-retention scripts for social media campaigns and video ads.", 
    tags: ["Scripts", "Ads", "Retention"],
    img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600"
  },
  { 
    num: "08", 
    title: "Team Coordination", 
    desc: "Assembling and managing a freelance crew for larger scale video projects.", 
    tags: ["Management", "Crew", "Logistics"],
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600"
  }
];

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const { setVariant, setText } = useCursor();

  /* Floating Image Physics */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="services" ref={ref} className="relative z-20 bg-paper text-ink py-32 md:py-48 px-4 md:px-12 overflow-hidden">
      
      {/* Huge background text */}
      <div className="absolute top-0 right-0 font-display text-[20vw] uppercase tracking-tighter text-ink/[0.03] pointer-events-none select-none leading-none">
        SERVICES
      </div>

      <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-20 md:mb-32 gap-8 relative">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-mono text-[10px] tracking-[0.2em] opacity-40 uppercase mb-6 flex items-center gap-4"
          >
            <span className="w-8 h-[1px] bg-ink/30 inline-block" /> Services // Capabilities
          </motion.div>
          
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              animate={inView ? { y: "0%" } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-8xl font-display font-medium tracking-tighter uppercase leading-[0.9]"
            >
              <DecryptText text="WHAT I" delay={200} speed={40} /><br />
              <DecryptText text="DELIVER" delay={500} speed={40} />
            </motion.h2>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-mono text-sm opacity-60 max-w-xs leading-relaxed md:text-right"
        >
          Eight core disciplines.<br />One integrated approach.
        </motion.p>
      </div>

      <div className="relative">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => {
              setHovered(i);
              setVariant("text");
              setText("VIEW");
            }}
            onMouseLeave={() => {
              setHovered(null);
              setVariant("default");
              setText("");
            }}
            className="group py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8  relative overflow-hidden"
          >
            {/* Hover background sweep */}
            <motion.div
              initial={false}
              animate={{ scaleX: hovered === i ? 1 : 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 bg-accent origin-left pointer-events-none z-0"
            />
            
            <div className={`font-mono text-xs opacity-30 md:col-span-1 z-10 transition-colors duration-300 ${hovered === i ? "opacity-100 text-ink" : ""}`}>
              {s.num}
            </div>
            
            <h3 className={`text-2xl md:text-4xl font-display tracking-tight uppercase md:col-span-4 z-10 transition-all duration-300 ${hovered === i ? "text-ink translate-x-2" : ""}`}>
              {s.title}
            </h3>
            
            <p className={`font-mono text-xs leading-relaxed md:col-span-4 z-10 transition-colors duration-300 ${hovered === i ? "text-ink/80" : "opacity-0 md:opacity-60"}`}>
              {s.desc}
            </p>
            
            <div className="flex flex-wrap gap-2 md:col-span-3 justify-start md:justify-end items-start z-10">
              {s.tags.map((tag, t) => (
                <span key={t} className={`font-mono text-[9px] tracking-widest px-3 py-1 uppercase border border-transparent transition-all duration-300 ${hovered === i ? "text-ink border-ink/20" : ""}`}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}

        

      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-16 flex items-center gap-8"
      >
        <MagneticButton>
        <button
          onClick={() => { const el = document.getElementById("footer"); if (el) el.scrollIntoView({ behavior: "smooth" }); }}
          onMouseEnter={() => { setVariant("hover"); }}
          onMouseLeave={() => { setVariant("default"); }}
          className=" font-mono text-xs tracking-widest uppercase bg-ink text-paper px-8 py-4 hover:bg-accent hover:text-ink transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(255,0,80,0.5)]"
        >
          Start a Project →
        </button>
      </MagneticButton>
      </motion.div>
    </section>
  );
}
