"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";


const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
  const directionFactor = useRef<number>(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    
    // Change direction if scrolling up
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="whitespace-nowrap flex flex-nowrap overflow-hidden" aria-label={children}>
      <motion.div className="flex whitespace-nowrap flex-nowrap" style={{ x }} aria-hidden="true">
        <span className="block mr-10">{children} </span>
        <span className="block mr-10">{children} </span>
        <span className="block mr-10">{children} </span>
        <span className="block mr-10">{children} </span>
      </motion.div>
    </div>
  );
}

export default function Formula() {
  const words = ["CURIOSITY", "+", "STORY", "+", "CAMERA", "+", "STRATEGY", "=", "CONNECTION", "//"];
  const marqueeText = words.join(" ");

  return (
    <section className="relative z-20 bg-accent text-ink py-32 flex flex-col items-center justify-center overflow-hidden">
      <div className="font-mono text-xs tracking-widest mb-20 text-ink/80 font-bold">THE AMAR FORMULA // ACADEMIC PHYSICS FOUNDATION</div>
      
      <div className="w-full flex flex-col gap-2 rotate-[-2deg] scale-110 text-paper">
        {/* Track 1 - Moves Left */}
        <div className="text-[10vw] font-display uppercase tracking-tighter leading-none">
          <ParallaxText baseVelocity={-2}>{marqueeText}</ParallaxText>
        </div>

        {/* Track 2 - Moves Right */}
        <div className="text-[10vw] font-display uppercase tracking-tighter leading-none opacity-80 text-outline">
          <ParallaxText baseVelocity={2}>{marqueeText}</ParallaxText>
        </div>
        
        {/* Track 3 - Moves Left */}
        <div className="text-[10vw] font-display uppercase tracking-tighter leading-none font-bold underline decoration-8 underline-offset-8">
          <ParallaxText baseVelocity={-3}>{marqueeText}</ParallaxText>
        </div>
      </div>
    </section>
  );
}
