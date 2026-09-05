"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useCursor } from "./CustomCursor";

export default function TerminalContact() {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { setVariant, setText } = useCursor();

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && inputValue.trim()) {
      if (step === 0) {
        setName(inputValue);
        setInputValue("");
        setStep(1);
      } else if (step === 1) {
        setMessage(inputValue);
        setInputValue("");
        setStep(2);
        /* Simulate transmission */
        setTimeout(() => setStep(3), 2000);
      }
    }
  };

  return (
    <div
      className="w-full max-w-2xl mx-auto bg-ink-light p-8 font-mono text-sm md:text-base text-accent relative overflow-hidden"
      onClick={() => inputRef.current?.focus()}
      onMouseEnter={() => {
        setVariant("text");
        setText("TYPE");
      }}
      onMouseLeave={() => {
        setVariant("default");
        setText("");
      }}
    >
      <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 2px, #fff 4px)" }} />
      <div className="mb-8 opacity-50">
        &gt; ESTABLISHING SECURE CONNECTION...<br />
        &gt; CONNECTION ESTABLISHED.<br />
        &gt; TERMINAL V2.0.26 READY.
      </div>
      <div className="flex flex-col gap-4 relative z-10">
        {step >= 0 && (
          <div>
            <span className="opacity-70">SYSTEM: PLEASE ENTER YOUR DESIGNATION (NAME):</span>
            {step > 0 && <div className="text-paper">&gt; {name}</div>}
          </div>
        )}
        {step >= 1 && (
          <div>
            <span className="opacity-70">SYSTEM: ENTER TRANSMISSION DATA (MESSAGE):</span>
            {step > 1 && <div className="text-paper">&gt; {message}</div>}
          </div>
        )}
        {step === 2 && (
          <motion.div animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.5 }} className="text-paper">
            &gt; ENCRYPTING AND TRANSMITTING...
          </motion.div>
        )}
        {step === 3 && (
          <div className="text-paper bg-accent text-ink inline-block px-2">
            &gt; TRANSMISSION SUCCESSFUL. SIGNAL OUT.
          </div>
        )}
        {step < 2 && (
          <div className="flex items-center gap-2 text-paper">
            <span>&gt;</span>
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-transparent outline-none w-full text-paper"
              autoFocus
            />
          </div>
        )}
      </div>
    </div>
  );
}
