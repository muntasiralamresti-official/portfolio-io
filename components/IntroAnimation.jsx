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
      // Auto hide after animation
      const timer = setTimeout(() => {
        handleComplete();
      }, 3500); // 1.5s hold + fade out
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A0A0A]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, clipPath: "circle(0% at 50% 50%)" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bebas text-white tracking-widest cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              textShadow: "0px 0px 20px rgba(230, 36, 41, 0.8)" 
            }}
            transition={{ duration: 1, ease: "easeOut" }}
            onClick={handleComplete}
          >
            Hello
          </motion.h1>
          <button 
            onClick={handleComplete}
            className="absolute bottom-10 text-white/50 hover:text-white uppercase tracking-widest text-sm transition-colors"
          >
            Skip
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
