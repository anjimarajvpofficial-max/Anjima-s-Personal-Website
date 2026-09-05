"use client";

import { ArrowUpRight } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import InquiryForm from "@/components/ui/InquiryForm";
import GlitchText from "@/components/ui/GlitchText";
import DecryptText from "@/components/ui/DecryptText";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <section id="footer" className="relative z-20 bg-ink min-h-screen flex flex-col justify-between pt-32 md:pt-40 overflow-hidden border-t border-paper/10">
      
      <div className="px-4 md:px-12 mb-16 md:mb-20">
        <div className="font-mono text-[10px] tracking-[0.2em] opacity-40 uppercase mb-6"><DecryptText text="Open a Channel // Contact" delay={100} speed={20} /></div>
        <h2 className="text-5xl md:text-8xl font-display font-medium tracking-tighter uppercase leading-[0.9] mb-4 text-paper hover:text-accent transition-colors duration-300">
          <GlitchText text="Let's Work" /><br />
          <GlitchText text="Together" />
        </h2>
        <p className="font-mono text-sm opacity-50 max-w-sm leading-relaxed mt-6">
          Have a project in mind? Fill out the inquiry form below and I'll get back to you within 24–48 hours.
        </p>
      </div>

      <div className="px-4 md:px-12 mb-24">
        <InquiryForm />
      </div>
      
      <div className="px-4 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 mt-auto border-t border-paper/20 pt-8 pb-12 font-mono text-xs uppercase tracking-widest text-paper">
        <div className="flex flex-col gap-1 items-start">
          <div className="opacity-50 mb-4">Direct Signal //</div>
          <MagneticButton className="block w-fit">
            <a href="mailto:anjimarajvp239@gmail.com" className="block text-sm hover:text-accent transition-colors mb-3 normal-case tracking-normal font-mono">
              anjimarajvp239@gmail.com
            </a>
          </MagneticButton>
          <MagneticButton className="block w-fit">
            <a href="tel:+917012310754" className="block text-sm hover:text-accent transition-colors normal-case tracking-normal font-mono">
              +91 7012310754
            </a>
          </MagneticButton>
        </div>
        
        <div>
          <div className="opacity-50 mb-4">Channels //</div>
                    <div className="flex flex-col gap-3 items-start">
            <MagneticButton>
              <a href="https://www.instagram.com/ima.janlie?igsi=dnplZDFwZHU5czZs&utm_source=qr" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors flex items-center gap-2 ">
                Instagram (@ima.janlie) <ArrowUpRight size={12}/>
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href="https://www.instagram.com/ima_presents?igsi=MWw5ZTVxeW5mbG5iaQ==" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors flex items-center gap-2 ">
                Instagram (Portfolio) <ArrowUpRight size={12}/>
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href="https://www.linkedin.com/in/anjima-raj-ba1a9b253?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors flex items-center gap-2 ">
                LinkedIn <ArrowUpRight size={12}/>
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href="https://youtube.com/@imajanlie?si=rml9ooILTlOtpw8z" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors flex items-center gap-2 ">
                YouTube <ArrowUpRight size={12}/>
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href="https://wa.me/917012310754" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors flex items-center gap-2 ">
                WhatsApp <ArrowUpRight size={12}/>
              </a>
            </MagneticButton>
          </div>
        </div>
        
        <div className="md:text-right flex flex-col justify-between md:pr-40 relative z-30">
          <div>
            <div className="opacity-50 mb-4">Amar //</div>
            <div className="opacity-40 leading-relaxed normal-case text-xs">
              Marketing · Media · Creativity<br/>
              Helping brands communicate better.
            </div>
          </div>
          <div className="mt-8 flex flex-col md:items-end gap-2">
            <div className="opacity-30">© {new Date().getFullYear()} Amar. All rights reserved.</div>
            <div className="flex items-center gap-4 opacity-40">
              <Link href="/legal/privacy" className="hover:text-accent hover:opacity-100 transition-colors  normal-case">Privacy Policy</Link>
              <span>/</span>
              <Link href="/legal/cookies" className="hover:text-accent hover:opacity-100 transition-colors  normal-case">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Massive Infinite Footer Marquee */}
      <div className="w-full mt-auto border-t border-paper/10 overflow-hidden py-6 bg-accent text-ink relative z-10 group">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
          className="flex whitespace-nowrap font-display text-5xl md:text-7xl uppercase tracking-tighter font-bold group-hover:[animation-play-state:paused]"
        >
          <span className="px-8">AVAILABLE FOR TRANSMISSION // LET'S CREATE SOMETHING //</span>
          <span className="px-8">AVAILABLE FOR TRANSMISSION // LET'S CREATE SOMETHING //</span>
          <span className="px-8">AVAILABLE FOR TRANSMISSION // LET'S CREATE SOMETHING //</span>
          <span className="px-8">AVAILABLE FOR TRANSMISSION // LET'S CREATE SOMETHING //</span>
        </motion.div>
      </div>
    </section>
  );
}
