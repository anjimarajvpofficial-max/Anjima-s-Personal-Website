"use client";

import { useRef, useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function MagneticLetter({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate distance
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      // Only repel if mouse is within 150px of the letter
      if (distance < 150) {
        // The closer the mouse, the stronger the push. Max push is 50px.
        const pushForce = ((150 - distance) / 150) * 50;
        const angle = Math.atan2(distanceY, distanceX);
        
        // Push in opposite direction of mouse
        x.set(Math.cos(angle + Math.PI) * pushForce);
        y.set(Math.sin(angle + Math.PI) * pushForce);
      } else {
        x.set(0);
        y.set(0);
      }
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  return (
    <motion.span
      ref={ref}
      style={{ x: smoothX, y: smoothY, display: "inline-block" }}
      className={className}
    >
      {children}
    </motion.span>
  );
}
