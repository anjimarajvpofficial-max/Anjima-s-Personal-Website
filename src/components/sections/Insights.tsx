"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import GlareCard from "@/components/ui/GlareCard";
import DecryptText from "@/components/ui/DecryptText";

const insights = [
  {
    num: "01",
    category: "AI & Technology",
    title: "How AI is Reshaping the Marketing Landscape in 2026",
    excerpt: "From content generation to hyper-personalised campaigns, AI is no longer a future concept — it is the present competitive advantage.",
    readTime: "5 min read",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800",
  },
  {
    num: "02",
    category: "Marketing Strategy",
    title: "Why Brand Storytelling Still Wins in a Data-First World",
    excerpt: "Metrics matter. But the brands that endure are the ones that made you feel something first.",
    readTime: "4 min read",
    img: "https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=800",
  },
  {
    num: "03",
    category: "Media & Creativity",
    title: "Short-Form Video: The Architecture of Attention",
    excerpt: "The first 1.5 seconds decide everything. A breakdown of what makes short-form content genuinely work.",
    readTime: "6 min read",
    img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=800",
  },
  {
    num: "04",
    category: "Professional Experience",
    title: "Lessons From the Field: What Marketing School Doesn't Teach You",
    excerpt: "The real curriculum of professional marketing is written in client meetings, failed campaigns, and unexpected wins.",
    readTime: "7 min read",
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800",
  },
];

export default function Insights() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="insights" ref={ref} className="relative z-20 bg-ink text-paper py-32 md:py-48 px-4 md:px-12 overflow-hidden">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-20 md:mb-24 gap-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-mono text-[10px] tracking-[0.2em] opacity-40 uppercase mb-6 flex items-center gap-4"
          >
            <span className="w-8 h-[1px] bg-accent inline-block" />
            Broadcast // Insights
          </motion.div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              animate={inView ? { y: "0%" } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-8xl font-display font-medium tracking-tighter uppercase leading-[0.9]"
            >
              <DecryptText text="THOUGHTS" delay={200} speed={40} /><br />
              & <DecryptText text="IDEAS" delay={500} speed={40} />
            </motion.h2>
          </div>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-mono text-sm opacity-50 max-w-xs leading-relaxed md:text-right"
        >
          Marketing. AI. Creativity.<br />Perspectives from the field.
        </motion.p>
      </div>

      {/* Featured + Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0 border-t border-paper/10">
        
        {/* Featured article */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="md:col-span-7 border-b border-paper/10 md:border-r p-0 "
        >
          <GlareCard className="h-full">
            <div className="overflow-hidden">
              <motion.img loading="lazy"
                src={insights[0].img}
                alt={insights[0].title}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full aspect-video object-cover grayscale opacity-50 group-hover:opacity-70 group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="p-8 md:p-12 relative z-20 pointer-events-none">
              <div className="flex justify-between items-center mb-6">
                <span className="font-mono text-[9px] tracking-widest border border-accent/40 text-accent px-3 py-1 uppercase">{insights[0].category}</span>
                <span className="font-mono text-[9px] opacity-30">{insights[0].readTime}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-display tracking-tight uppercase leading-tight group-hover:text-accent transition-colors duration-300 mb-4">
                {insights[0].title}
              </h3>
              <p className="font-mono text-xs opacity-50 leading-relaxed mb-6">{insights[0].excerpt}</p>
              <div className="font-mono text-[10px] tracking-widest text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase">
                Read Article →
              </div>
            </div>
          </GlareCard>
        </motion.div>

        {/* Side articles */}
        <div className="md:col-span-5 flex flex-col">
          {insights.slice(1).map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="border-b border-paper/10 "
            >
              <GlareCard className="p-6 md:p-8 flex gap-6 hover:bg-paper/[0.02] transition-colors duration-300">
                <div className="w-24 h-24 shrink-0 overflow-hidden relative z-20 pointer-events-none">
                  <motion.img loading="lazy"
                    src={item.img}
                    alt={item.title}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-80 group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="flex flex-col gap-2 min-w-0 relative z-20 pointer-events-none">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[9px] tracking-widest text-accent uppercase">{item.category}</span>
                    <span className="font-mono text-[9px] opacity-30">{item.readTime}</span>
                  </div>
                  <h3 className="font-display text-sm uppercase tracking-tight leading-tight group-hover:text-accent transition-colors duration-300">{item.title}</h3>
                  <p className="font-mono text-[10px] opacity-40 leading-relaxed line-clamp-2">{item.excerpt}</p>
                </div>
              </GlareCard>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
