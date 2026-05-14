"use client";

import { motion } from "framer-motion";

import { TypeAnimation } from "react-type-animation";

import {
  FaGithub,
  FaLinkedin,
  FaTelegramPlane,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen  overflow-hidden flex items-center justify-center px-6 pt-32 pb-20">

      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      {/* Glow Effects */}
      <div className="absolute top-[-200px] left-[-100px] w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full" />


      {/* Main */}
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-6xl"
      >

        {/* Terminal */}
        <div className="glass border border-white/10 rounded-[30px] overflow-hidden shadow-[0_0_80px_rgba(34,211,238,0.08)]">

          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5">

            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>

            <p className="text-xs text-gray-400 font-mono">
              muntasir-alam-resti.dev
            </p>

          </div>

          {/* Body */}
          <div className="p-8 md:p-14">

            <div className="font-mono space-y-6">
                

              <p className="text-gray-500">
                // Frontend Developer
              </p>

              {/* Intro */}
              <p className="text-cyan-400 text-sm md:text-xl">
                Hi, I'm
              </p>

              {/* Name */}
              <h1 className="text-5xl md:text-7xl font-black tracking-[-0.05em] leading-none">

                Muntasir Alam <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Resti
                </span>

              </h1>

              {/* Typing Animation */}
              <div className="text-gray-400 text-lg md:text-2xl h-[40px]">

                <TypeAnimation
                  sequence={[
                    "A Frontend Developer",
                    2000,
                    "Learning Full Stack Web Development",
                    2000,
                    "Crafting Modern UI Experiences",
                    2000,
                    "React & Next.js Enthusiast",
                    2000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />

              </div>

            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5 mt-10">

              <button className="px-7 py-4 rounded-2xl bg-cyan-400 text-black font-semibold hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(34,211,238,0.35)]">

                View Projects

              </button>

              <button className="px-7 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-300">

                Contact Me

              </button>

            </div>

            {/* Socials */}
            <div className="flex gap-4 mt-12">

              <a
                href="#"
                className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center hover:border-cyan-400 hover:scale-110 transition-all duration-300"
              >
                <FaGithub size={18} color="white" />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center hover:border-cyan-400 hover:scale-110 transition-all duration-300"
              >
                <FaLinkedin size={18} color="white" />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center hover:border-cyan-400 hover:scale-110 transition-all duration-300"
              >
                <FaTelegramPlane size={18} color="white" />
              </a>

            </div>

          </div>

        </div>

      </motion.div>

    </section>
  );
}