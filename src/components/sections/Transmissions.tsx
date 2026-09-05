"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { useCursor } from "@/components/ui/CustomCursor";
import { useCyberSound } from "@/lib/useCyberSound";
import GlitchText from "@/components/ui/GlitchText";

export default function Transmissions() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { setVariant, setText } = useCursor();
  const { playHoverBlip, playClickThud } = useCyberSound();
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });
  
  const shorts = [
    { id: "Z9QNH7goiQM", title: "Creative Direction", category: "Commercial Campaign", metric: "2.4M+ Impressions" },
    { id: "-3jb0t13N54", title: "Brand Narrative", category: "Digital Storytelling", metric: "High Engagement" },
    { id: "dtZvK-8fNcQ", title: "Product Launch", category: "Social Strategy", metric: "Key Performance" },
    { id: "2YsGt8mNxyA", title: "Editorial Piece", category: "Brand Identity", metric: "Viral Reach" },
    { id: "sQvhrRsMC8A", title: "Visual Campaign", category: "Content Creation", metric: "Global Audience" },
    { id: "N11yuKp9ADk", title: "Strategic Vision", category: "Creative Media", metric: "Targeted Impact" },
  ];
  
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-83.33%"]);
  const bgX = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  return (
    <section ref={targetRef} id="work" className="relative h-[600vh] bg-ink w-full text-paper">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
        
        {/* Massive Background Typography Parallax */}
        <motion.div 
          style={{ x: bgX }}
          className="absolute top-1/2 -translate-y-1/2 left-0 whitespace-nowrap font-display text-[30vw] uppercase tracking-tighter text-paper/[0.02] pointer-events-none select-none -z-10"
        >
          BROADCAST // TRANSMISSIONS // ARCHIVE // 2026 //
        </motion.div>

        {/* Minimalist Top Header */}
        <div className="absolute top-0 left-0 w-full p-6 md:p-12 flex justify-between items-center z-20 border-b border-paper/10 bg-ink/80 backdrop-blur-md">
          <div className="font-mono text-[10px] md:text-xs tracking-[0.2em] opacity-60 uppercase">
            Selected Works
          </div>
          <div className="font-mono text-[10px] md:text-xs tracking-[0.2em] opacity-40 uppercase">
            2024—2026 Archive
          </div>
        </div>

        <motion.div style={{ x, width: "600%" }} className="flex h-full items-center relative z-10">
          {shorts.map((item, i) => (
            <div 
              key={i} 
              style={{ width: "16.66666%" }}
              className="flex-shrink-0 px-6 md:px-24 flex flex-col md:flex-row items-center justify-center md:justify-between h-full relative border-r border-paper/5"
            >
              
              {/* Professional Text Layout */}
              <div className="w-full md:w-5/12 flex flex-col justify-center mt-24 md:mt-0 mb-12 md:mb-0 z-10 pointer-events-none">
                <div className="flex items-center gap-4 mb-8 md:mb-16">
                  <div className="w-8 h-[1px] bg-accent" />
                  <div className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-accent">
                    Project {String(i + 1).padStart(2, '0')}
                  </div>
                </div>
                
                <h3 className="text-4xl md:text-7xl font-display font-medium tracking-tight leading-[1.1] mb-6">
                  {item.title}
                </h3>
                
                <div className="grid grid-cols-2 gap-8 font-mono text-[10px] md:text-xs mt-8 md:mt-12 pt-8 md:pt-12 border-t border-paper/10">
                  <div>
                    <div className="opacity-40 uppercase tracking-widest mb-2">Category</div>
                    <div className="opacity-90">{item.category}</div>
                  </div>
                  <div>
                    <div className="opacity-40 uppercase tracking-widest mb-2">Performance</div>
                    <div className="opacity-90">{item.metric}</div>
                  </div>
                </div>
              </div>
              
              {/* Premium Image Container */}
              <button 
                onClick={() => { setActiveVideo(item.id); playClickThud(); }}
                onMouseEnter={() => { setVariant("text"); setText("PLAY"); playHoverBlip(); }}
                onMouseLeave={() => { setVariant("default"); setText(""); }}
                className="w-[85%] md:w-auto h-[60vh] md:h-[75vh] aspect-[9/16] relative group overflow-hidden bg-ink-light rounded-sm shadow-2xl"
              >
                 {/* High-end hover state: greyscale to color */}
                 <motion.img loading="lazy" 
                   initial={{ scale: 1.05 }}
                   whileHover={{ scale: 1 }}
                   transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                   src={`https://img.youtube.com/vi/${item.id}/hqdefault.jpg`} 
                   alt={item.title}
                   className="absolute inset-0 w-full h-full object-cover filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                 />
                 
                 {/* Play Button Overlay */}
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-ink/20">
                   <div className="w-16 h-16 rounded-full border border-paper/30 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 group-hover:border-accent group-hover:shadow-[0_0_30px_rgba(255,0,80,0.5)] transition-all duration-500">
                     <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-paper group-hover:border-l-accent border-b-[6px] border-b-transparent ml-1 transition-colors duration-500" />
                   </div>
                 </div>
              </button>

            </div>
          ))}
        </motion.div>
        
        {/* Cinematic Video Modal */}
        <AnimatePresence>
          {activeVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed inset-0 z-[99999] bg-ink/95 backdrop-blur-xl flex flex-col items-center justify-center "
              onClick={() => { setActiveVideo(null); setVariant("default"); setText(""); }}
              onMouseEnter={() => { setVariant("text"); setText("CLOSE"); }}
            >
              {/* Modal Header */}
              <div className="absolute top-0 left-0 w-full p-6 md:p-12 flex justify-between items-center opacity-50 font-mono text-[10px] md:text-xs uppercase tracking-widest pointer-events-none">
                <GlitchText text="SIGNAL ACQUIRED" />
                <span>TERMINATE CONNECTION [X]</span>
              </div>
              
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-[90vw] md:w-[350px] aspect-[9/16] relative bg-ink-light rounded-sm shadow-[0_0_100px_rgba(255,0,80,0.2)] overflow-hidden"
              >
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=${activeVideo}`}
                  title="Video transmission"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />
                
                {/* Custom Overlay to block iframe mouse capture so cursor still works */}
                <div className="absolute inset-0 z-10 bg-transparent" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
