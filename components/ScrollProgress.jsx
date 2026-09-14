"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.2 });

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[80] h-[2px] w-full origin-left bg-[#E62429] shadow-[0_0_18px_rgba(230,36,41,.8)]"
      style={{ scaleX }}
    />
  );
}
