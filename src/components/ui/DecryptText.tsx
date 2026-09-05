"use client";

import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*()";

export default function DecryptText({ text, className = "", delay = 0, speed = 30 }: { text: string, className?: string, delay?: number, speed?: number }) {
  const [displayText, setDisplayText] = useState("");
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (!inView) {
      setDisplayText(text.replace(/[a-zA-Z0-9]/g, "_"));
      return;
    }

    let timeout: NodeJS.Timeout;
    
    // Start delay
    timeout = setTimeout(() => {
      let iteration = 0;
      const maxIterations = text.length * 2;
      
      const interval = setInterval(() => {
        setDisplayText((prev) => {
          return text
            .split("")
            .map((char, index) => {
              if (char === " ") return " ";
              if (index < iteration / 2) return text[index];
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("");
        });

        if (iteration >= maxIterations) {
          clearInterval(interval);
          setDisplayText(text);
        }
        
        iteration += 1;
      }, speed);
      
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [inView, text, delay, speed]);

  return (
    <span ref={ref} className={`font-mono ${className}`}>
      {displayText}
    </span>
  );
}
