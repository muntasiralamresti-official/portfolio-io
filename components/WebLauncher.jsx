"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function WebLauncher() {
  const [launching, setLaunching] = useState(false);

  useEffect(() => {
    const onClick = (event) => {
      const link = event.target.closest('a[href^="#"]');
      if (!link) return;
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;

      event.preventDefault();
      setLaunching(true);
      window.setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 220);
      window.setTimeout(() => setLaunching(false), 760);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <AnimatePresence>
      {launching && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-[120] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute left-1/2 top-1/2 h-px w-[130vw] origin-left bg-white shadow-[0_0_18px_rgba(230,36,41,.9)]"
            initial={{ scaleX: 0, rotate: -28, opacity: 0 }}
            animate={{ scaleX: 1, rotate: -28, opacity: [0, 1, 1, 0] }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          />
          <motion.div
            className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#E62429]/70"
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ scale: 9, opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />
          <motion.div
            className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_24px_8px_rgba(230,36,41,.55)]"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 2.2, 1] }}
            transition={{ duration: 0.45 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
