"use client";

import { motion } from "framer-motion";

export default function GlobalNoise() {
  return (
    <div 
      suppressHydrationWarning
      className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.04]"
      style={{ 
        backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')", 
        backgroundSize: "200px 200px",
        backgroundRepeat: "repeat"
      }}
    />
  );
}
