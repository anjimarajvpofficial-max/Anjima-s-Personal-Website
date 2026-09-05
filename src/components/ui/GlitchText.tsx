"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function GlitchText({ text, className = "" }: { text: string; className?: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative inline-grid  ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="col-start-1 row-start-1 relative z-10">{text}</span>
      
      {/* Red Channel */}
      <motion.span 
        animate={{ x: isHovered ? -4 : 0, y: isHovered ? 2 : 0, opacity: isHovered ? 0.7 : 0 }}
        className="col-start-1 row-start-1 text-[#ff0000] mix-blend-screen z-0 pointer-events-none"
      >
        {text}
      </motion.span>

      {/* Blue Channel */}
      <motion.span 
        animate={{ x: isHovered ? 4 : 0, y: isHovered ? -2 : 0, opacity: isHovered ? 0.7 : 0 }}
        className="col-start-1 row-start-1 text-[#0000ff] mix-blend-screen z-0 pointer-events-none"
      >
        {text}
      </motion.span>
    </div>
  );
}
