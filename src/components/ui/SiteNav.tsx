"use client";

import { motion, AnimatePresence, useScroll } from "framer-motion";
import { useState, useEffect } from "react";
import MagneticButton from "./MagneticButton";
import HoverScrambleText from "./HoverScrambleText";

const navLinks = [
  { label: "Work", href: "work" },
  { label: "Services", href: "services" },
  { label: "About", href: "about" },
  { label: "Insights", href: "insights" },
  { label: "Contact", href: "footer" },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Active section tracker via IntersectionObserver */
  useEffect(() => {
    const ids = navLinks.map((l) => l.href);
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const scrollTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Top Bar */}
      <header
        className={`fixed top-0 left-0 w-full z-[9990] transition-all duration-500 bg-ink/70 backdrop-blur-md border-b border-paper/5`}
      >
        {/* Global Scroll Progress */}
        <motion.div 
          className="absolute top-0 left-0 h-[2px] bg-accent origin-left w-full z-[9991]"
          style={{ scaleX: scrollYProgress }}
        />
        
        <div className="px-6 md:pl-16 md:pr-24 h-16 flex items-center justify-between mt-[2px]">
          {/* Wordmark */}
          <MagneticButton>
            <button
              onClick={() => scrollTo("hero")}
              className=" font-display text-sm md:text-base tracking-widest uppercase text-paper hover:text-accent transition-colors block py-2"
            >
              Amar
            </button>
          </MagneticButton>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-10" aria-label="Main navigation">
            {navLinks.map((l) => (
              <MagneticButton key={l.label}>
                <button
                  onClick={() => scrollTo(l.href)}
                  className={` font-mono text-xs tracking-widest uppercase transition-all duration-300 relative block py-2 ${
                    active === l.href ? "text-accent opacity-100" : "opacity-50 hover:opacity-100"
                  }`}
                >
                  <HoverScrambleText text={l.label} />
                  {active === l.href && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-0 w-full h-[1px] bg-accent"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              </MagneticButton>
            ))}
            
            <MagneticButton>
              <button
                onClick={() => scrollTo("footer")}
                className=" font-mono text-xs tracking-widest uppercase text-accent pl-5 py-2 hover:text-white transition-all duration-300"
              >
                <HoverScrambleText text="Let's Work Together" />
              </button>
            </MagneticButton>
          </nav>

          {/* Mobile Hamburger */}
          <MagneticButton>
            <button
              onClick={() => setOpen((p) => !p)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="md:hidden  flex flex-col gap-[5px] p-2 relative z-[9999]"
            >
              <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }} className="block w-6 h-[1px] bg-paper origin-center" />
              <motion.span animate={{ opacity: open ? 0 : 1, scaleX: open ? 0 : 1 }} className="block w-4 h-[1px] bg-paper" />
              <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }} className="block w-6 h-[1px] bg-paper origin-center" />
            </button>
          </MagneticButton>
        </div>
      </header>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at calc(100% - 40px) 32px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 40px) 32px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 40px) 32px)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[9980] bg-ink flex flex-col justify-center px-8"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {navLinks.map((l, i) => (
                <div key={l.label} className="overflow-hidden">
                  <motion.button
                    initial={{ y: "110%", rotateZ: 5 }}
                    animate={{ y: "0%", rotateZ: 0 }}
                    transition={{ delay: 0.15 + i * 0.08, duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                    onClick={() => scrollTo(l.href)}
                    className={` text-left text-5xl font-display uppercase tracking-tighter py-3 transition-colors origin-bottom-left ${
                      active === l.href ? "text-accent" : "text-paper/70 hover:text-paper"
                    }`}
                  >
                    {l.label}
                  </motion.button>
                </div>
              ))}
              <div className="overflow-hidden mt-6 pt-8 border-t border-paper/10">
                <motion.button
                  initial={{ y: "110%", rotateZ: 5 }}
                  animate={{ y: "0%", rotateZ: 0 }}
                  transition={{ delay: 0.15 + navLinks.length * 0.08, duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                  onClick={() => scrollTo("footer")}
                  className=" text-left text-4xl font-display uppercase tracking-tighter text-accent py-3 origin-bottom-left"
                >
                  Let's Work Together →
                </motion.button>
              </div>
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-10 left-8 right-8 flex justify-between font-mono text-[10px] opacity-20"
            >
              <span>Amar</span>
              <span>Marketing · Media · Creativity</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
