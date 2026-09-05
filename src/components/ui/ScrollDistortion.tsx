"use client";

import { motion, useScroll, useSpring, useTransform, useVelocity } from "framer-motion";

export default function ScrollDistortion({ children }: { children: React.ReactNode }) {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });

  const skewVelocity = useTransform(smoothVelocity, [-1000, 1000], [-3, 3]);
  const skew = useTransform(skewVelocity, (v) => `skewY(${v}deg)`);
  
  const blurAmount = useTransform(smoothVelocity, [-1500, 0, 1500], [4, 0, 4]);
  const blur = useTransform(blurAmount, (v) => `blur(${v}px)`);

  return (
    <motion.div style={{ transform: skew, filter: blur }} className="w-full origin-center">
      {children}
    </motion.div>
  );
}
