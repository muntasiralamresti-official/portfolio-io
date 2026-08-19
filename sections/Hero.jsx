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
        {/* Placeholder for Spider-Man Asset */}
        <div className="w-[300px] h-[500px] md:w-[400px] md:h-[600px] bg-gradient-to-t from-transparent to-[#E62429]/20 rounded-full blur-3xl absolute" />
        <svg viewBox="0 0 24 24" fill="none" stroke="#E62429" strokeWidth="1" className="w-64 h-64 md:w-96 md:h-96 opacity-80">
          <path d="M12 2L2 22h20L12 2z" strokeLinejoin="round" />
          <circle cx="12" cy="14" r="4" />
        </svg>
      </motion.div>

      <div className="z-10 text-center flex flex-col items-center">
        <motion.h1 
          className="text-7xl md:text-[10rem] font-bebas leading-none tracking-tighter uppercase text-white mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Muntasir <span className="text-[#E62429]">Resti</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-3xl font-inter text-zinc-400 max-w-2xl px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Weaving digital experiences.
        </motion.p>
      </div>
    </section>
  );
}
