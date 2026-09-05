"use client";

import { motion, AnimatePresence, useInView, useSpring, useTransform, useMotionValue } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import DecryptText from "@/components/ui/DecryptText";

const testimonials = [
  {
    quote: "Anjima has a rare ability to combine strategic thinking with creative execution. She doesn't just create content — she builds narratives that genuinely connect with audiences.",
    name: "[PLACEHOLDER: CLIENT NAME]",
    role: "[PLACEHOLDER: ROLE]",
    org: "[PLACEHOLDER: ORGANISATION]",
  },
  {
    quote: "Working with Anjima transformed how we communicated our brand online. Her understanding of digital platforms and audience psychology is exceptional.",
    name: "[PLACEHOLDER: CLIENT NAME]",
    role: "[PLACEHOLDER: ROLE]",
    org: "[PLACEHOLDER: ORGANISATION]",
  },
  {
    quote: "The level of professionalism and creative vision Anjima brings to every project is outstanding. She elevated our entire marketing presence.",
    name: "[PLACEHOLDER: CLIENT NAME]",
    role: "[PLACEHOLDER: ROLE]",
    org: "[PLACEHOLDER: ORGANISATION]",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const x = useTransform(smoothX, [0, typeof window !== "undefined" ? window.innerWidth : 1000], [20, -20]);
  const y = useTransform(smoothY, [0, typeof window !== "undefined" ? window.innerHeight : 1000], [20, -20]);

  const next = () => setActive((p) => (p + 1) % testimonials.length);
  const prev = () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length);

  // Auto-play timer
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActive((p) => (p + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isHovered]);

  return (
    <section id="testimonials" ref={ref} onMouseMove={(e) => { mouseX.set(e.clientX); mouseY.set(e.clientY); }} className="relative z-20 bg-ink text-paper py-32 md:py-48 px-4 md:px-12 overflow-hidden">
      
      {/* Huge background quote mark */}
      <motion.div style={{ x, y }} className="absolute top-0 right-0 font-display text-[30vw] leading-none text-paper/[0.02] pointer-events-none select-none">
        "
      </motion.div>

      <div className="mb-20 md:mb-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-mono text-[10px] tracking-[0.2em] opacity-40 uppercase mb-6 flex items-center gap-4"
        >
          <span className="w-8 h-[1px] bg-accent inline-block" />
          Signal Received // Testimonials
        </motion.div>
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: "100%" }}
            animate={inView ? { y: "0%" } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-8xl font-display font-medium tracking-tighter uppercase leading-[0.9]"
          >
            <DecryptText text="CLIENT" delay={300} speed={40} /><br />
            <DecryptText text="SIGNALS" delay={600} speed={40} />
          </motion.h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
        
        {/* Quote */}
        <div 
          className="md:col-span-8 min-h-[280px] flex flex-col justify-between"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 50, filter: "blur(8px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -50, filter: "blur(8px)" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) * velocity.x;
                if (swipe < -1000) {
                  next();
                } else if (swipe > 1000) {
                  prev();
                }
              }}
              className="cursor-grab active:cursor-grabbing"
            >
              <p className="text-2xl md:text-4xl font-display tracking-tight leading-[1.2] uppercase mb-10 pointer-events-none">
                &ldquo;{testimonials[active].quote}&rdquo;
              </p>
              <div className="font-mono text-xs border-t border-paper/10 pt-6 pointer-events-none">
                <div className="text-accent mb-1">{testimonials[active].name}</div>
                <div className="opacity-40">{testimonials[active].role} // {testimonials[active].org}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center gap-6 mt-16" role="group" aria-label="Testimonial navigation">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className=" font-mono text-xs tracking-widest border border-paper/20 w-12 h-12 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
            >
              ←
            </button>
            <div className="flex gap-3" role="tablist" aria-label="Testimonials">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Testimonial ${i + 1}`}
                  onClick={() => setActive(i)}
                  className=" h-[2px] transition-all duration-500"
                  style={{ width: i === active ? 40 : 16, background: i === active ? "var(--accent, #ff0050)" : "rgba(244,244,240,0.2)" }}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className=" font-mono text-xs tracking-widest border border-paper/20 w-12 h-12 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
            >
              →
            </button>
            <span className="font-mono text-[10px] opacity-30 ml-4">
              {String(active + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Side stat panel */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="md:col-span-4 border border-paper/10 p-8 flex flex-col gap-8"
        >
          <div className="font-mono text-[10px] tracking-widest uppercase opacity-40">Client Trust //</div>
          <div>
            <div className="text-5xl font-display tracking-tighter text-accent">100%</div>
            <div className="font-mono text-xs opacity-40 mt-1">Project Satisfaction</div>
          </div>
          <div>
            <div className="text-5xl font-display tracking-tighter">24hr</div>
            <div className="font-mono text-xs opacity-40 mt-1">Response Time</div>
          </div>
          <div>
            <div className="text-5xl font-display tracking-tighter">India<span className="text-accent">+</span></div>
            <div className="font-mono text-xs opacity-40 mt-1">Markets Served</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
