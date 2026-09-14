"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function WebSwing() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 20, mass: 0.25 });
  const y = useTransform(progress, [0, 1], ["-8vh", "108vh"]);
  const rotate = useTransform(progress, [0, 1], [-8, 10]);
  const opacity = useTransform(progress, [0, 0.03, 0.94, 1], [0, 0.75, 0.75, 0]);

  return (
    <motion.div className="pointer-events-none fixed inset-0 z-[4] hidden overflow-hidden md:block" style={{ opacity }} aria-hidden="true">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1440 900" preserveAspectRatio="none">
        <defs>
          <filter id="swingGlow"><feGaussianBlur stdDeviation="2" /></filter>
        </defs>
        <motion.path d="M1120 -80 C 1060 180, 1180 320, 1010 520 S 820 740, 920 980" fill="none" stroke="#E62429" strokeOpacity=".16" strokeWidth="1.5" filter="url(#swingGlow)" />
        <path d="M1120 -80 C 1060 180, 1180 320, 1010 520 S 820 740, 920 980" fill="none" stroke="#fff" strokeOpacity=".07" strokeWidth="1" strokeDasharray="2 9" />
      </svg>
      <motion.div style={{ y, rotate }} className="absolute right-[17%] top-0">
        <div className="h-2 w-2 rounded-full bg-[#E62429] shadow-[0_0_18px_#E62429]" />
        <div className="mt-2 h-20 w-px origin-top bg-gradient-to-b from-[#E62429]/70 to-transparent" />
      </motion.div>
      <motion.div style={{ y }} className="absolute bottom-8 left-8 text-[8px] uppercase tracking-[.4em] text-white/20">web trajectory / {""}active</motion.div>
    </motion.div>
  );
}
