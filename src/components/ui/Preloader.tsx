"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [matrix, setMatrix] = useState("");

  useEffect(() => {
    // Generate random matrix data
    const interval = setInterval(() => {
      setMatrix(Array.from({ length: 150 }).map(() => Math.round(Math.random())).join(""));
    }, 50);

    // Fake progress loader
    let currentProgress = 0;
    const progressInterval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 15) + 5;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(progressInterval);
        setTimeout(() => {
          setLoading(false);
          clearInterval(interval);
        }, 500); // Hold at 100% for a moment
      }
      setProgress(currentProgress);
    }, 150);

    return () => {
      clearInterval(progressInterval);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);



  return (
    <AnimatePresence>
      {loading && (
          <motion.div
            key="top"
            initial={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[99999] bg-ink flex flex-col justify-between p-8 text-paper"
            style={{ clipPath: "inset(0 0 50% 0)" }}
          >
            {/* Top Data (Visible) */}
            <div className="flex justify-between font-mono text-xs opacity-50">
              <span>INITIATING BOOT SEQUENCE</span>
              <span>v 2.0.26 // SYSTEM_LOCK</span>
            </div>

            
            
            <div className="flex flex-col items-center justify-center relative pointer-events-none">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-[20vw] font-display leading-none tracking-tighter text-paper relative z-20 shadow-ink drop-shadow-2xl"
              >
                {progress}%
              </motion.div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl font-mono text-[8px] leading-none text-accent break-all opacity-10 z-0 text-center">
                {matrix}{matrix}{matrix}
              </div>
            </div>



            {/* Bottom Loading Bar (Invisible placeholder) */}
            <div className="w-full h-1 opacity-0 pointer-events-none" />
          </motion.div>
      )}
      {loading && (
          <motion.div
            key="bottom"
            initial={{ y: "0%" }}
            exit={{ y: "100%" }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[99999] bg-ink flex flex-col justify-between p-8 text-paper"
            style={{ clipPath: "inset(50% 0 0 0)" }}
          >
            {/* Top Data (Invisible placeholder) */}
            <div className="flex justify-between font-mono text-xs opacity-0 pointer-events-none">
              <span>INITIATING BOOT SEQUENCE</span>
              <span>v 2.0.26 // SYSTEM_LOCK</span>
            </div>

            
            <div className="flex flex-col items-center justify-center relative pointer-events-none">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-[20vw] font-display leading-none tracking-tighter text-paper relative z-20 shadow-ink drop-shadow-2xl"
              >
                {progress}%
              </motion.div>
              
            </div>


            {/* Bottom Loading Bar (Visible) */}
            <div className="w-full h-1 bg-paper/20 relative overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-accent"
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
          </motion.div>
      )}
    </AnimatePresence>
  );
}
