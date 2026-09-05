"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";

const timeline = [
  { year: "2024 — Present", role: "Founder (Self-Employed)", org: "Turtle Pi Advertising", desc: "Run an independent agency specializing in video production and social media management." },
  { year: "2024", role: "Social Media Manager / Presenter", org: "MarketLube", desc: "Crafting and executing comprehensive social media strategies to enhance brand presence, engagement, and customer acquisition." },
  { year: "2021 — 2024", role: "Content Creator", org: "Iluzia Lab", desc: "Proven track record of boosting brand visibility and audience engagement through innovative strategies." },
];

const education = [
  {
    degree: "Postgraduate Studies in Physics (Grade A+)",
    institution: "MES Ponnani College",
    year: "2019 — 2021",
    desc: "Completed postgraduate studies in Physics with an overall grade of A+."
  },
  {
    degree: "Undergraduate Studies in Physics (Grade A)",
    institution: "MES Mampad College",
    year: "2016 — 2019",
    desc: "Completed undergraduate studies in Physics with an overall grade of A."
  }
];

const achievements = [
  "[PLACEHOLDER: Verified achievement or recognition]",
  "[PLACEHOLDER: Verified achievement or recognition]",
  "[PLACEHOLDER: Verified achievement or recognition]",
];

type Tab = "journey" | "education" | "achievements";

export default function About() {
  const [activeTab, setActiveTab] = useState<Tab>("journey");
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="about" ref={ref} className="relative z-20 bg-ink-light text-paper py-32 md:py-48 px-4 md:px-12 overflow-hidden">

      {/* Huge background text */}
      <div className="absolute bottom-0 left-0 font-display text-[18vw] uppercase tracking-tighter text-paper/[0.02] pointer-events-none select-none leading-none">
        ABOUT
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 relative">

        {/* Left: Identity */}
        <div className="md:col-span-4 flex flex-col gap-10">
          
          {/* Portrait placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="aspect-[3/4] bg-ink border border-paper/10 relative overflow-hidden"
          >
            
            <Image src="/images/portrait.png" alt="Anjima Raj" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700 z-0" />
            <div className="absolute inset-0 flex items-end p-6 z-10 pointer-events-none">
              <div className="font-mono text-[10px] opacity-0 tracking-widest">[PLACEHOLDER: CLIENT — Professional Portrait]</div>
            </div>
            {/* Decorative accent line */}
            <div className="absolute top-0 left-0 w-1 h-full bg-accent/20" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="font-mono text-[10px] tracking-[0.2em] opacity-40 uppercase mb-4 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-accent inline-block" />
              About // Anjima Raj
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tighter uppercase leading-[0.9] mb-6">
              Marketing.<br/>Media.<br/>Creativity.
            </h2>
            <p className="font-mono text-xs opacity-50 leading-relaxed">
              Helping brands communicate better — through strategic storytelling, data-driven campaigns, and cinematic creative production.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 border-t border-paper/10 pt-8 mt-8">
              <div>
                <div className="text-3xl font-display tracking-tighter text-accent">5+</div>
                <div className="font-mono text-[9px] opacity-40 uppercase tracking-widest mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-display tracking-tighter">5</div>
                <div className="font-mono text-[9px] opacity-40 uppercase tracking-widest mt-1">Core Services</div>
              </div>
              <div>
                <div className="text-3xl font-display tracking-tighter text-accent">India<span className="text-paper">+</span></div>
                <div className="font-mono text-[9px] opacity-40 uppercase tracking-widest mt-1">Markets</div>
              </div>
              <div>
                <div className="text-3xl font-display tracking-tighter">24h</div>
                <div className="font-mono text-[9px] opacity-40 uppercase tracking-widest mt-1">Response</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: Tabs */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="md:col-span-8"
        >
          {/* Tab nav */}
          <div className="flex flex-wrap gap-2 md:gap-4 mb-12">
            {(["journey", "education", "achievements"] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`font-mono text-[10px] tracking-widest uppercase px-6 py-3 border transition-all duration-300 flex items-center gap-2 ${activeTab === tab ? "border-accent bg-accent text-ink" : "border-paper/20 text-paper/50 hover:border-paper/50 hover:text-paper"}`}
              >
                {activeTab === tab && <span className="w-1.5 h-3 bg-ink animate-pulse" />}
                {tab === "journey" ? "Career" : tab}
              </button>
            ))}
          </div>

          {activeTab === "journey" && (
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex flex-col gap-0 border border-paper/10 bg-ink-light p-6 md:p-10">
              <div className="font-mono text-[10px] opacity-30 tracking-widest uppercase mb-8 border-b border-paper/10 pb-4">root@anjima:~/career $ ls -l</div>
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="flex flex-col md:grid md:grid-cols-12 md:gap-6 gap-2 pb-8 group relative"
                >
                  <div className="col-span-3 font-mono text-[10px] text-accent pt-1">{item.year}</div>
                  <div className="col-span-9 relative">
                    <div className="absolute -left-6 top-1 font-mono text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity">&gt;</div>
                    <div className="font-display text-xl uppercase tracking-tight group-hover:text-accent transition-colors mb-1">{item.role}</div>
                    <div className="font-mono text-xs opacity-40 mb-3">{item.org}</div>
                    <div className="font-mono text-xs opacity-30 leading-relaxed">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === "education" && (
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex flex-col gap-0 border border-paper/10 bg-ink-light p-6 md:p-10">
              <div className="font-mono text-[10px] opacity-30 tracking-widest uppercase mb-8 border-b border-paper/10 pb-4">root@anjima:~/education $ cat credentials.txt</div>
              {education.map((e, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="pb-8 group relative"
                >
                  <div className="absolute -left-6 top-1 font-mono text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity">&gt;</div>
                  <div className="font-display text-xl uppercase tracking-tight mb-2 group-hover:text-accent transition-colors">{e.degree}</div>
                  <div className="font-mono text-xs opacity-40">{e.institution} // {e.year}</div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === "achievements" && (
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex flex-col gap-0 border border-paper/10 bg-ink-light p-6 md:p-10">
               <div className="font-mono text-[10px] opacity-30 tracking-widest uppercase mb-8 border-b border-paper/10 pb-4">root@anjima:~/achievements $ ./execute</div>
              {achievements.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="flex items-start gap-4 pb-6"
                >
                  <div className="text-accent font-mono text-xs shrink-0 pt-1">[OK]</div>
                  <div className="font-mono text-xs opacity-50 leading-relaxed hover:opacity-100 hover:text-accent transition-colors">{item}</div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* CTA */}
          <div className="mt-16 flex gap-6">
            <button
              onClick={() => { const el = document.getElementById("footer"); if (el) el.scrollIntoView({ behavior: "smooth" }); }}
              className=" font-mono text-xs tracking-widest uppercase border border-paper/30 px-8 py-4 hover:border-accent hover:text-accent transition-all duration-300"
            >
              Work With Me →
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
