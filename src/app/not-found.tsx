"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import MagneticButton from "@/components/ui/MagneticButton";

export default function NotFound() {
  const [glitch, setGlitch] = useState("");

  useEffect(() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;':,./<>?";
    const interval = setInterval(() => {
      let result = "";
      for (let i = 0; i < 400; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      setGlitch(result);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="w-full h-screen bg-ink text-accent font-mono flex flex-col justify-center p-8 overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none break-all text-[8px] leading-none z-0">
        {glitch}{glitch}{glitch}
      </div>
      
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-6xl md:text-8xl font-display uppercase tracking-tighter mb-4 animate-pulse">
          ERROR_404
        </h1>
        <div className="text-sm md:text-base opacity-70 mb-8 border-l-2 border-accent pl-4 py-2">
          <p>FATAL EXCEPTION: PAGE_NOT_FOUND</p>
          <p>The requested transmission could not be located in the current server instance.</p>
          <p>Possible causes: Data corruption, unauthorized access, or the signal has been terminated.</p>
        </div>
        
        <MagneticButton>
          <Link 
            href="/"
            className="inline-block border border-accent bg-accent/10 px-8 py-3 text-xs uppercase tracking-widest hover:bg-accent hover:text-ink transition-colors duration-300"
          >
            Re-Establish Connection [Return to Home]
          </Link>
        </MagneticButton>
      </div>
    </main>
  );
}
