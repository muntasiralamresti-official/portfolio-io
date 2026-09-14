"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const particles = [
  [7, 18, 2, 7], [14, 72, 1, 9], [23, 34, 1, 8], [31, 82, 2, 10],
  [39, 14, 1, 6], [47, 57, 2, 9], [56, 27, 1, 8], [63, 78, 2, 7],
  [71, 12, 1, 10], [79, 48, 2, 8], [88, 24, 1, 7], [94, 70, 2, 9],
];

const arcs = [
  "M -10 72 C 18 44, 35 44, 55 70 S 92 94, 112 62",
  "M -12 30 C 15 58, 34 56, 52 32 S 88 8, 112 38",
  "M 18 -10 C 40 20, 60 22, 82 -8",
];

export default function WebThreads() {
  const { scrollYProgress } = useScroll();
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const webOpacity = useTransform(scrollYProgress, [0, 0.12, 0.55, 1], [0.75, 1, 0.72, 0.42]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Deep cinematic atmosphere */}
      <div className="absolute inset-0 bg-[#050507]" />
      <motion.div
        style={{ y: glowY }}
        className="absolute -left-[18vw] top-[4vh] h-[55vw] w-[55vw] rounded-full bg-[#E62429]/[0.055] blur-[120px]"
      />
      <motion.div
        style={{ y: glowY }}
        className="absolute -right-[22vw] top-[35vh] h-[60vw] w-[60vw] rounded-full bg-white/[0.025] blur-[140px]"
      />

      {/* Moving technical grid */}
      <motion.div style={{ y: gridY }} className="absolute -inset-y-[18%] inset-x-0 opacity-60">
        <div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.026)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.026)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_78%,transparent)]" />
      </motion.div>

      {/* Slow scanning light */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E62429]/40 to-transparent shadow-[0_0_30px_rgba(230,36,41,.25)]"
        animate={{ top: ["8%", "92%", "8%"] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Spider-web arcs — subtle, organic, not a giant static web */}
      <motion.svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        style={{ opacity: webOpacity }}
      >
        {arcs.map((d, index) => (
          <motion.path
            key={d}
            d={d}
            fill="none"
            stroke="#E62429"
            strokeWidth={index === 0 ? "0.11" : "0.08"}
            strokeOpacity={index === 0 ? "0.32" : "0.18"}
            strokeDasharray="1.5 2.8"
            animate={{ strokeDashoffset: [0, -18] }}
            transition={{ duration: 12 + index * 3, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </motion.svg>

      {/* Floating signal particles */}
      {particles.map(([left, top, size, duration], index) => (
        <motion.span
          key={index}
          className="absolute rounded-full bg-[#E62429] shadow-[0_0_14px_rgba(230,36,41,.65)]"
          style={{ left: `${left}%`, top: `${top}%`, width: size * 2, height: size * 2 }}
          animate={{
            y: [0, -18, 0],
            opacity: [0.12, 0.65, 0.12],
            scale: [0.7, 1.15, 0.7],
          }}
          transition={{ duration, repeat: Infinity, delay: index * 0.45, ease: "easeInOut" }}
        />
      ))}

      {/* Corner HUD markers */}
      <div className="absolute left-5 top-1/2 h-16 w-px bg-gradient-to-b from-transparent via-[#E62429]/35 to-transparent md:left-8" />
      <div className="absolute right-5 top-1/3 h-24 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent md:right-8" />
    </div>
  );
}
