"use client";

import { useEffect, useRef } from "react";
import { useMotionValue, useSpring } from "framer-motion";

export default function CyberGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const spacing = 40;

    const render = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }

      ctx.clearRect(0, 0, width, height);
      
      const mx = springX.get();
      const my = springY.get();

      ctx.fillStyle = "rgba(255,255,255,0.05)";
      
      for (let x = 0; x <= width; x += spacing) {
        for (let y = 0; y <= height; y += spacing) {
          const dx = mx - x;
          const dy = my - y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 200) {
            // Draw a cross
            const size = 4 - (distance / 200) * 3;
            const opacity = 1 - (distance / 200);
            
            ctx.fillStyle = `rgba(255, 0, 80, ${opacity * 0.5})`;
            
            ctx.fillRect(x - size/2, y - 0.5, size, 1);
            ctx.fillRect(x - 0.5, y - size/2, 1, size);
          } else {
            ctx.fillStyle = "rgba(255,255,255,0.05)";
            ctx.fillRect(x, y, 1, 1);
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(render);
    };
    
    render();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [springX, springY]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 pointer-events-none z-0"
    />
  );
}
