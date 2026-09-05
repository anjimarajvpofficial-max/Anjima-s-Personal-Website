"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import DecryptText from "@/components/ui/DecryptText";

const words = ["Helping", "brands", "communicate", "better."];

export default function Statement() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="relative z-20 bg-ink py-32 md:py-48 px-4 md:px-12 overflow-hidden">
      
      {/* Subtle top rule */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 left-0 w-full h-[1px] bg-paper/10 origin-left"
      />

      <div className="max-w-6xl">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-mono text-[10px] tracking-[0.2em] opacity-40 uppercase mb-12 flex items-center gap-4"
        >
          <span className="w-8 h-[1px] bg-accent inline-block" />
          <DecryptText text="CORE PHILOSOPHY" delay={300} speed={20} />
        </motion.div>

        {/* Word-by-word animated headline */}
        <h2 className="text-[clamp(3rem,8vw,8rem)] font-display uppercase tracking-tight leading-[1.0]" aria-label="Helping brands communicate better.">
          {words.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden mr-[0.25em]" aria-hidden="true">
              <motion.span
                className="inline-block"
                initial={{ y: "110%", opacity: 0 }}
                animate={isInView ? { y: "0%", opacity: 1 } : {}}
                transition={{
                  duration: 0.9,
                  delay: 0.2 + i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {word === "better." ? (
                  <span className="text-accent italic">{word}</span>
                ) : word}
              </motion.span>
            </span>
          ))}
        </h2>

        {/* Sub-text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 flex flex-col md:flex-row gap-12 md:gap-24"
        >
          <p className="font-mono text-sm opacity-50 max-w-xs leading-relaxed">
            Strategic marketing meets cinematic creativity. Every campaign, every piece of content, every brand story — built to connect with real people.
          </p>
          <p className="font-mono text-sm opacity-50 max-w-xs leading-relaxed">
            Marketing · Media · Creativity — three disciplines, one integrated approach. Built for India. Built for the world.
          </p>
        </motion.div>
      </div>

      {/* Bottom rule */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-0 w-full h-[1px] bg-paper/10 origin-left"
      />
    </section>
  );
}
