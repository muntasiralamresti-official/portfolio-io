"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden z-10 pt-20">
      <motion.div 
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
        style={{ y, opacity }}
      >
        {/* Massive glowing red web behind */}
        <div className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-[radial-gradient(circle,_rgba(230,36,41,0.15)_0%,_transparent_70%)] absolute" />
        
        {/* Spider Web SVG Graphic */}
        <svg viewBox="0 0 100 100" fill="none" stroke="#E62429" strokeWidth="0.2" className="w-[800px] h-[800px] opacity-20 absolute rotate-45">
          <circle cx="50" cy="50" r="10" />
          <circle cx="50" cy="50" r="20" />
          <circle cx="50" cy="50" r="30" />
          <circle cx="50" cy="50" r="40" />
          <path d="M50 0 L50 100 M0 50 L100 50 M15 15 L85 85 M15 85 L85 15" />
        </svg>

        {/* Profile Image if provided, else just glowing center */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#E62429] shadow-[0_0_50px_rgba(230,36,41,0.5)] z-10">
          <img src="/muntasir.png" alt="Muntasir Resti" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#E62429]/50 to-transparent mix-blend-multiply" />
        </div>
      </motion.div>

      <div className="z-10 text-center flex flex-col items-center mt-[350px] md:mt-[400px]">
        <motion.h1 
          className="text-7xl md:text-[9rem] font-bebas leading-none tracking-tighter uppercase text-white mb-2 drop-shadow-[0_5px_5px_rgba(0,0,0,1)]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          Muntasir <span className="text-[#E62429]">Alam</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl font-inter text-zinc-300 max-w-2xl px-4 uppercase tracking-widest font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Your Friendly Neighborhood <span className="text-[#E62429]">Developer</span>
        </motion.p>
      </div>
    </section>
  );
}
