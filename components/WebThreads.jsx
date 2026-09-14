"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const windows = Array.from({ length: 90 }, (_, i) => ({
  left: `${((i * 17) % 100)}%`,
  bottom: `${8 + ((i * 29) % 48)}%`,
  delay: (i % 11) * 0.37,
  opacity: 0.08 + (i % 5) * 0.025,
}));

const rain = Array.from({ length: 42 }, (_, i) => ({
  left: `${(i * 31) % 100}%`,
  delay: (i % 9) * 0.32,
  duration: 1.8 + (i % 5) * 0.3,
}));

export default function WebThreads() {
  const { scrollYProgress } = useScroll();
  const cityY = useTransform(scrollYProgress, [0, 1], [0, -110]);
  const webY = useTransform(scrollYProgress, [0, 1], [0, -260]);
  const webScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const atmosphere = useTransform(scrollYProgress, [0, 0.45, 1], [0.9, 0.65, 0.82]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#030305]" aria-hidden="true">
      {/* Night sky */}
      <motion.div style={{ opacity: atmosphere }} className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(230,36,41,.16),transparent_25%),radial-gradient(circle_at_18%_55%,rgba(39,68,110,.13),transparent_30%),radial-gradient(circle_at_82%_48%,rgba(230,36,41,.08),transparent_28%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#020204_0%,#05070c_46%,#020203_100%)] opacity-80" />
      </motion.div>

      {/* Moon / cinematic light source */}
      <motion.div
        animate={{ y: [0, -14, 0], scale: [1, 1.03, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[10%] top-[11%] h-28 w-28 rounded-full bg-white/[0.035] blur-[1px] shadow-[0_0_100px_rgba(255,255,255,.07)] md:h-44 md:w-44"
      />

      {/* Distant stars / city atmosphere */}
      <div className="absolute inset-0">
        {Array.from({ length: 55 }, (_, i) => (
          <motion.i
            key={i}
            className="absolute h-[2px] w-[2px] rounded-full bg-white"
            style={{ left: `${(i * 43) % 100}%`, top: `${(i * 67) % 58}%` }}
            animate={{ opacity: [0.04, 0.45, 0.06], scale: [0.7, 1.4, 0.7] }}
            transition={{ duration: 3 + (i % 5), delay: (i % 8) * 0.45, repeat: Infinity }}
          />
        ))}
      </div>

      {/* NYC-style skyline silhouette */}
      <motion.div style={{ y: cityY }} className="absolute inset-x-0 bottom-[-5%] h-[54%] opacity-90">
        <div className="absolute inset-x-0 bottom-0 h-full bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,.25)_35%,#010102_100%)]" />
        {Array.from({ length: 30 }, (_, i) => {
          const width = 3 + (i % 5) * 1.4;
          const height = 12 + ((i * 17) % 46);
          return (
            <div key={i} className="absolute bottom-0 rounded-t-[2px] border-x border-white/[0.025] bg-[#07080b]" style={{ left: `${i * 3.45}%`, width: `${width}%`, height: `${height}%` }}>
              {Array.from({ length: 3 + (i % 5) }, (_, j) => (
                <motion.span key={j} className="absolute h-[2px] w-[3px] rounded-full bg-[#E62429]" style={{ left: `${20 + ((j * 31) % 60)}%`, top: `${12 + j * 14}%`, opacity: 0.12 + (j % 2) * 0.08 }} animate={{ opacity: [0.04, 0.24, 0.05] }} transition={{ duration: 3 + j, delay: i * .08 + j * .3, repeat: Infinity }} />
              ))}
            </div>
          );
        })}
      </motion.div>

      {/* Foreground tower grid */}
      <motion.div style={{ y: cityY }} className="absolute inset-x-[-8%] bottom-[-13%] h-[38%] opacity-70">
        {windows.map((window, i) => (
          <motion.span key={i} className="absolute h-[2px] w-[5px] rounded-full bg-white" style={{ left: window.left, bottom: window.bottom, opacity: window.opacity }} animate={{ opacity: [window.opacity, window.opacity * 3, window.opacity] }} transition={{ duration: 2.5 + (i % 4), delay: window.delay, repeat: Infinity }} />
        ))}
      </motion.div>

      {/* Giant spider web — anchored off-screen like a rooftop web */}
      <motion.div style={{ y: webY, scale: webScale }} className="absolute left-[-26vw] top-[-23vw] h-[100vw] w-[100vw] max-h-[1250px] max-w-[1250px] opacity-75 md:left-[-12vw] md:top-[-18vw]">
        <svg viewBox="0 0 1000 1000" className="h-full w-full overflow-visible">
          <defs>
            <filter id="cinematicWebGlow"><feGaussianBlur stdDeviation="2.2" /></filter>
            <radialGradient id="webCore"><stop offset="0" stopColor="#fff" stopOpacity=".7" /><stop offset=".2" stopColor="#E62429" stopOpacity=".28" /><stop offset="1" stopColor="#E62429" stopOpacity="0" /></radialGradient>
          </defs>
          <circle cx="500" cy="500" r="34" fill="url(#webCore)" filter="url(#cinematicWebGlow)" />
          {Array.from({ length: 20 }, (_, i) => {
            const a = (i / 20) * Math.PI * 2;
            const x = 500 + Math.cos(a) * 760;
            const y = 500 + Math.sin(a) * 760;
            return <line key={i} x1="500" y1="500" x2={x} y2={y} stroke="#fff" strokeOpacity=".075" strokeWidth="1" />;
          })}
          {[75, 130, 200, 285, 390, 515, 655].map((r, i) => (
            <motion.circle key={r} cx="500" cy="500" r={r} fill="none" stroke={i % 2 ? "#E62429" : "#fff"} strokeOpacity={i % 2 ? ".11" : ".055"} strokeWidth={i === 6 ? "1.5" : "1"} strokeDasharray={i === 6 ? "2 10" : undefined} />
          ))}
        </svg>
      </motion.div>

      {/* Falling rain / speed lines */}
      <div className="absolute inset-0 opacity-25">
        {rain.map((drop, i) => (
          <motion.span key={i} className="absolute top-[-12%] h-16 w-px rotate-[14deg] bg-gradient-to-b from-transparent via-white/20 to-transparent" style={{ left: drop.left }} animate={{ y: ["0vh", "125vh"] }} transition={{ duration: drop.duration, delay: drop.delay, repeat: Infinity, ease: "linear" }} />
        ))}
      </div>

      {/* Red spider-sense scan */}
      <motion.div
        animate={{ y: ["-12vh", "112vh"], opacity: [0, 0.55, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 h-24 w-full bg-gradient-to-b from-transparent via-[#E62429]/[0.035] to-transparent"
      />

      {/* Cinematic vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_22%,rgba(0,0,0,.35)_62%,#010102_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.3),transparent_24%,transparent_75%,rgba(0,0,0,.72))]" />
    </div>
  );
}
