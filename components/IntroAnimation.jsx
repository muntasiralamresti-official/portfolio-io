"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroAnimation({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");
    if (hasSeenIntro) {
      setIsVisible(false);
      if (onComplete) onComplete();
    } else {
      const timer = setTimeout(() => {
        handleComplete();
      }, 4000); 
      return () => clearTimeout(timer);
    }
  }, [onComplete]);

  const handleComplete = () => {
    sessionStorage.setItem("hasSeenIntro", "true");
    setIsVisible(false);
    if (onComplete) onComplete();
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050814]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <p className="text-zinc-400 font-inter text-lg md:text-2xl italic mb-4">
              "With great power..."
            </p>
            <motion.h1
              className="text-5xl md:text-7xl font-bebas text-white tracking-widest uppercase"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                textShadow: "0px 0px 30px rgba(230, 36, 41, 0.8)" 
              }}
              transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
            >
              Comes Great <span className="text-[#E62429]">Code.</span>
            </motion.h1>
          </motion.div>
          
          <button 
            onClick={handleComplete}
            className="absolute bottom-10 text-zinc-600 hover:text-white uppercase tracking-widest text-sm transition-colors font-bebas"
          >
            Skip Intro
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
