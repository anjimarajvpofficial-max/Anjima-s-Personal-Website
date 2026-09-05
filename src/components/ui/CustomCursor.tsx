"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { create } from "zustand";

interface CursorStore {
  variant: "default" | "hover" | "text" | "hidden";
  text: string;
  setVariant: (variant: "default" | "hover" | "text" | "hidden") => void;
  setText: (text: string) => void;
}

export const useCursor = create<CursorStore>((set) => ({
  variant: "default",
  text: "",
  setVariant: (variant) => set({ variant }),
  setText: (text) => set({ text }),
}));

const ViewfinderBrackets = ({ color = "var(--accent, #ff0050)" }) => (
  <svg width="100%" height="100%" viewBox="0 0 100 100" className="absolute inset-0 z-0 overflow-visible">
    <path d="M 0,20 L 0,0 L 20,0" fill="none" stroke={color} strokeWidth="4" strokeLinecap="square" />
    <path d="M 80,0 L 100,0 L 100,20" fill="none" stroke={color} strokeWidth="4" strokeLinecap="square" />
    <path d="M 0,80 L 0,100 L 20,100" fill="none" stroke={color} strokeWidth="4" strokeLinecap="square" />
    <path d="M 80,100 L 100,100 L 100,80" fill="none" stroke={color} strokeWidth="4" strokeLinecap="square" />
  </svg>
);

export default function CustomCursor() {
  const { variant, text } = useCursor();
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const smoothX = useSpring(mouseX, { stiffness: 600, damping: 40, mass: 0.5 });
  const smoothY = useSpring(mouseY, { stiffness: 600, damping: 40, mass: 0.5 });
  const slowX = useSpring(mouseX, { stiffness: 100, damping: 20, mass: 1 });
  const slowY = useSpring(mouseY, { stiffness: 100, damping: 20, mass: 1 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  const ringVariants = {
    default: {
      width: 48,
      height: 48,
      rotate: 0,
      backgroundColor: "transparent",
      mixBlendMode: "difference" as const,
    },
    hover: {
      width: 32, 
      height: 32,
      rotate: 90, 
      backgroundColor: "transparent",
      mixBlendMode: "difference" as const,
    },
    text: {
      width: 120,
      height: 120,
      rotate: 0,
      backgroundColor: "var(--accent, #ff0050)",
      mixBlendMode: "normal" as const,
    },
    hidden: {
      opacity: 0,
    },
  };

  const centerVariants = {
    default: { opacity: 1, scale: 1 },
    hover: { opacity: 1, scale: 0.5 }, 
    text: { opacity: 0, scale: 0 },
    hidden: { opacity: 0 },
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] flex items-center justify-center text-ink font-mono text-[10px] font-bold text-center leading-none cursor-ring hidden md:flex"
        style={{ x: smoothX, y: smoothY, translateX: "-50%", translateY: "-50%", borderRadius: variant === "text" ? "9999px" : "0px", willChange: "transform" }}
        variants={ringVariants}
        animate={variant}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      >
        <motion.div 
          initial={{ opacity: 1 }} 
          animate={{ opacity: variant === "text" ? 0 : 1 }} 
          className="absolute inset-0"
        >
          <ViewfinderBrackets color={variant === "hover" ? "#f4f4f0" : "var(--accent, #ff0050)"} />
        </motion.div>

        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: variant === "text" ? 1 : 0, scale: variant === "text" ? 1 : 0.5 }}
          transition={{ duration: 0.2 }}
          className="whitespace-pre-wrap px-4 relative z-10"
        >
          {text}
        </motion.span>
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-accent pointer-events-none z-[9997] mix-blend-difference hidden md:block rounded-full"
        style={{ x: slowX, y: slowY, translateX: "-50%", translateY: "-50%", willChange: "transform" }}
        animate={{ opacity: variant === "text" ? 0 : 0.5 }}
      />

      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] cursor-dot mix-blend-difference items-center justify-center hidden md:flex"
        style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%", willChange: "transform" }}
        variants={centerVariants}
        animate={variant}
      >
        <svg width="100%" height="100%" viewBox="0 0 24 24" className="absolute inset-0">
          <path d="M 12,2 L 12,10 M 12,14 L 12,22" stroke="var(--accent, #ff0050)" strokeWidth="1.5" />
          <path d="M 2,12 L 10,12 M 14,12 L 22,12" stroke="var(--accent, #ff0050)" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="1" fill="var(--accent, #ff0050)" />
        </svg>
      </motion.div>
    </>
  );
}
