"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    /* Check if user has already acknowledged */
    const consent = localStorage.getItem("anjima-cookie-consent");
    if (!consent) {
      /* Slight delay so it doesn't appear immediately on boot */
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("anjima-cookie-consent", "accepted");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="fixed bottom-0 left-0 w-full z-[9990] bg-ink border-t border-paper/10 p-4 md:p-6 "
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="font-mono text-[10px] md:text-xs opacity-60 leading-relaxed max-w-2xl text-paper">
              This site uses strictly necessary cookies to ensure the best experience and track UI preferences. By continuing to use the site, you agree to our{" "}
              <Link href="/legal/privacy" className="text-accent hover:underline">Privacy Policy</Link> and{" "}
              <Link href="/legal/cookies" className="text-accent hover:underline">Cookie Policy</Link>.
            </div>
            
            <button
              onClick={accept}
              className=" shrink-0 font-mono text-[10px] tracking-widest uppercase border border-paper/30 text-paper px-8 py-3 hover:border-accent hover:text-accent transition-all duration-300 whitespace-nowrap"
            >
              Acknowledge
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
