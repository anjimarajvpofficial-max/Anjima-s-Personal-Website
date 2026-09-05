"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HUD() {
  const [time, setTime] = useState("");
  const [themeIndex, setThemeIndex] = useState(0);
  
  const themes = [
    { label: "CLR", hex: "#ff0050" },
    { label: "CYN", hex: "#00f0ff" },
    { label: "YLW", hex: "#fcee0a" },
    { label: "GRN", hex: "#00ff41" }
  ];
  
  const handleThemeSwitch = () => {
    const nextIndex = (themeIndex + 1) % themes.length;
    setThemeIndex(nextIndex);
    document.documentElement.style.setProperty('--accent', themes[nextIndex].hex);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      const d = new Date();
      setTime(
        `${d.getHours().toString().padStart(2, "0")}:${d.getMinutes().toString().padStart(2, "0")}:${d.getSeconds().toString().padStart(2, "0")}:${Math.floor(d.getMilliseconds() / 10).toString().padStart(2, "0")}`
      );
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9000] text-paper font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] opacity-40">
      
      {/* Top Bar - Pushed to top-12 and left-20 to clear brackets completely */}
      <div className="absolute top-28 left-16 right-24 flex justify-between items-start">
        <div className="flex gap-8">
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" /> 
            <span className="text-accent">REC</span>
          </span>
          <span>{time}</span>
          <span className="hidden md:inline">FPS: 24.000</span>
          <span className="hidden md:inline">ISO: 800</span>
        </div>
        <div className="hidden md:flex gap-8 items-end">
          <span>WB: 5600K</span>
          <span onClick={handleThemeSwitch} className="cursor-pointer hover:text-accent transition-colors pointer-events-auto" title="Switch Theme">ND: {themes[themeIndex].label}</span>
          <span>CH-01 // ANJIMA</span>
        </div>
      </div>

      {/* Bottom Bar - Pushed to bottom-12 to clear brackets */}
      <div className="absolute bottom-16 left-16 right-24 flex justify-between items-end">
        <div className="flex flex-col gap-1">
          <span>LAT: 11.2588 N</span>
          <span>LON: 75.7804 E</span>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className="hidden md:inline">BAT: 14.4V</span>
          <span>TC: {time}</span>
        </div>
      </div>

      {/* Viewfinder Frame Markers - Extreme Corners */}
      {/* Top Left */}
      <div className="absolute top-20 left-8 w-8 h-[1px] bg-paper" />
      <div className="absolute top-20 left-8 w-[1px] h-8 bg-paper" />
      
      {/* Top Right */}
      <div className="absolute top-20 right-12 w-8 h-[1px] bg-paper" />
      <div className="absolute top-20 right-12 w-[1px] h-8 bg-paper" />
      
      {/* Bottom Left */}
      <div className="absolute bottom-8 left-8 w-8 h-[1px] bg-paper" />
      <div className="absolute bottom-8 left-8 w-[1px] h-8 bg-paper" />
      
      {/* Bottom Right */}
      <div className="absolute bottom-8 right-12 w-8 h-[1px] bg-paper" />
      <div className="absolute bottom-8 right-12 w-[1px] h-8 bg-paper" />

      {/* Center Crosshair */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-[1px] bg-paper/50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-4 bg-paper/50" />
      
      {/* Action Safe Area (Dotted Line) */}
      <div className="absolute inset-16 border border-paper/10 border-dashed rounded-3xl hidden md:block" />
    </div>
  );
}
