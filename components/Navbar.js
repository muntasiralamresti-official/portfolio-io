"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/30 backdrop-blur-2xl"
    >

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

        {/* Logo */}
<div className="flex items-center gap-4">

  
  {/* Logo */}
  <div className="relative">

    <Image
      src="/muntasir-logo.png"
      alt="Muntasir Resti Logo"
      width={120}
      height={120}
      className="object-contain drop-shadow-[0_0_12px_rgba(34,211,238,0.5)]"
    />

  </div>

</div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-3 text-sm font-mono">

          {[
            "About",
            "Skills",
            "Projects",
            "Contact",
          ].map((item, index) => (

            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="group relative px-5 py-3 rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/5 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
            >

              {/* Animated Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-cyan-400/10 to-purple-500/10" />

              {/* Content */}
              <div className="relative flex items-center gap-2">

                {/* Fake Code */}
                <span className="text-cyan-400 group-hover:translate-x-1 transition duration-300">
                  &lt;/
                </span>

                {/* Text */}
                <span className="text-gray-300 group-hover:text-white tracking-wide transition-all duration-300">
                  {item}
                </span>

                {/* Cursor */}
                <span className="opacity-0 group-hover:opacity-100 text-cyan-400 animate-pulse transition-all duration-300">
                  _
                </span>

                {/* Fake Closing Tag */}
                <span className="text-purple-400 opacity-70">
                  &gt;
                </span>

              </div>

            </a>

          ))}

        </div>

      </div>

    </motion.nav>
  );
}