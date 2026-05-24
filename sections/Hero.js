"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import Image from "next/image";

import {
  FaGithub,
  FaLinkedin,
  FaDribbble,
} from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-6 pt-32 pb-10">

      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      {/* Glow Effects */}
      <div className="absolute top-[-200px] left-[-100px] w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full" />


      {/* Main Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-[1.3fr_0.7fr] gap-8 xl:gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="glass border border-white/10 rounded-[30px] overflow-hidden shadow-[0_0_80px_rgba(34,211,238,0.08)]"
        >

          <div className="p-8 md:p-16">

            {/* Terminal Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-8">

              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>

              <p className="text-xs text-gray-400 font-mono">
                muntasir-alam-resti.dev
              </p>

            </div>

            {/* Hero Content */}
            <div className="font-mono space-y-6">

              {/* Small Intro */}
              <p className="text-gray-500">
                / Frontend Developer
              </p>

              {/* Hi */}
              <p className="text-cyan-400 text-lg">
                Hi, Im
              </p>

              {/* Name */}
              <h1 className="text-3xl md:text-4xl font-black tracking-[-0.05em] leading-none font-sans">

                Muntasir Alam  <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
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

              <Link href="/projects">
              <button className="px-7 py-4 rounded-2xl bg-cyan-400 text-black font-semibold hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(34,211,238,0.35)]">

                View Projects

              </button>
              </Link>

              <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"

  className="
    px-7
    py-4

    rounded-2xl

    border
    border-white/10

    bg-white/5

    backdrop-blur-xl

    hover:bg-white/10
    hover:scale-105

    transition-all
    duration-300

    inline-flex
    items-center
    justify-center
  "
>

  Resume

</a>

            </div>

            {/* Socials */}
            <div className="flex gap-4 mt-12">

              <a
                href="https://github.com/muntasiralamresti-official"
                className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center hover:border-cyan-400 hover:scale-110 transition-all duration-300"
              >
                <FaGithub size={18} color="white" />
              </a>

              <a
                href="https://www.linkedin.com/in/muntasir-alam-resti"
                className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center hover:border-cyan-400 hover:scale-110 transition-all duration-300"
              >
                <FaLinkedin size={18} color="white" />
              </a>

              
              <a
                href="https://dribbble.com/muntasir-alam-resti-"
                className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center hover:border-cyan-400 hover:scale-110 transition-all duration-300"
              >
                <FaDribbble size={18} color="white" />
              </a>

            </div>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >

          {/* Glow Behind */}
          <div className="absolute w-[350px] h-[350px] bg-cyan-500/20 blur-[120px] rounded-full" />

          {/* Glass Image Card */}
          <div className="relative glass border border-white/10 rounded-[30px] p-4 shadow-[0_0_80px_rgba(34,211,238,0.08)]">

            <Image
              src="/muntasir.png"
              alt="Developer"
              width={380}
              height={550}
              priority
              className="rounded-[24px] object-cover relative z-10"
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
}