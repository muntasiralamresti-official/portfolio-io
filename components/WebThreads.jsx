"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const stars = Array.from({ length: 34 }, (_, i) => ({
  left: `${(i * 37) % 100}%`,
  top: `${(i * 61) % 100}%`,
  delay: (i % 7) * 0.45,
  size: i % 5 === 0 ? 2 : 1,
}));

export default function WebThreads() {
  const { scrollYProgress } = useScroll();
  const drift = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const webOpacity = useTransform(scrollYProgress, [0, 0.2, 0.7, 1], [0.75, 0.45, 0.6, 0.28]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Deep cinematic atmosphere */}
      <motion.div
        style={{ y: drift }}
        className="absolute -left-[18vw] top-[8vh] h-[55vw] w-[55vw] rounded-full bg-[#E62429]/10 blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 25, 0], scale: [1, 1.08, 0.96, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-[15vw] top-[28vh] h-[45vw] w-[45vw] rounded-full bg-[#E62429]/[0.07] blur-[110px]"
      />

      {/* Floating city lights */}
      <div className="absolute inset-0">
        {stars.map((star, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-white"
            style={{ left: star.left, top: star.top, width: star.size, height: star.size }}
            animate={{ opacity: [0.08, 0.55, 0.12], scale: [0.8, 1.5, 0.8] }}
            transition={{ duration: 3.5 + (i % 4), delay: star.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Large dimensional spider-web */}
      <motion.div style={{ opacity: webOpacity }} className="absolute left-1/2 top-[-8%] h-[120vw] w-[120vw] max-h-[1500px] max-w-[1500px] -translate-x-1/2">
        <svg viewBox="0 0 1000 1000" className="h-full w-full">
          <defs>
            <radialGradient id="webGlow" cx="50%" cy="0%" r="75%">
              <stop offset="0%" stopColor="#E62429" stopOpacity="0.65" />
              <stop offset="0.45" stopColor="#E62429" stopOpacity="0.18" />
              <stop offset="1" stopColor="#E62429" stopOpacity="0" />
            </radialGradient>
            <filter id="softGlow"><feGaussianBlur stdDeviation="3" /></filter>
          </defs>
          <circle cx="500" cy="60" r="55" fill="url(#webGlow)" filter="url(#softGlow)" />
          {[90, 170, 260, 360, 475].map((r) => (
            <motion.circle key={r} cx="500" cy="60" r={r} fill="none" stroke="#E62429" strokeOpacity={0.12} strokeWidth="1" />
          ))}
          {Array.from({ length: 18 }, (_, i) => {
            const angle = (i / 18) * Math.PI * 2;
            const x = 500 + Math.cos(angle) * 520;
            const y = 60 + Math.sin(angle) * 520;
            return <line key={i} x1="500" y1="60" x2={x} y2={y} stroke="#E62429" strokeOpacity="0.11" strokeWidth="1" />;
          })}
          <motion.circle cx="500" cy="60" r="520" fill="none" stroke="#fff" strokeOpacity="0.035" strokeWidth="2" strokeDasharray="2 14" animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} />
        </svg>
      </motion.div>

      {/* Slow horizontal scan */}
      <motion.div
        animate={{ y: ["-10vh", "110vh"] }}
        transition={{ duration: 11, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 h-px w-full bg-gradient-to-r from-transparent via-[#E62429]/20 to-transparent blur-[1px]"
      />

      {/* Technical grid */}
      <motion.div
        style={{ y: drift }}
        className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]"
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_15%,rgba(5,5,7,0.45)_70%,#050507_100%)]" />
    </div>
  );
}
