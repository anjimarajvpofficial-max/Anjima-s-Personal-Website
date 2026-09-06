"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useCyberSound } from "@/lib/useCyberSound";
import { useCursor } from "./CustomCursor";

export default function MagneticButton({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { setVariant } = useCursor();

  const mouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current!.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };

  const mouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setVariant("default");
  };

  const mouseEnter = () => {
    setVariant("hover");
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      onMouseEnter={mouseEnter}
      animate={{ x: position.x * 0.4, y: position.y * 0.4 }}
      transition={{ type: "spring", stiffness: 350, damping: 20, mass: 0.5 }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}
