"use client";

import { motion } from "framer-motion";

import {
  FaReact,
  FaFigma,
  FaWordpress,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiGoogleads,
} from "react-icons/si";

const techCards = [
  {
    icon: <FaReact />,
    title: "React.js",
    desc: "Interactive UI Systems",
  },

  {
    icon: <SiNextdotjs />,
    title: "Next.js",
    desc: "Modern Web Apps",
  },

  {
    icon: <SiTailwindcss />,
    title: "Tailwind CSS",
    desc: "Utility First Styling",
  },

  {
    icon: <FaWordpress />,
    title: "WordPress",
    desc: "CMS Development",
  },

  {
    icon: <FaFigma />,
    title: "UI/UX Design",
    desc: "Creative Interfaces",
  },

  {
    icon: <SiGoogleads />,
    title: "Marketing",
    desc: "Digital Growth Strategy",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 px-6 overflow-hidden"
    >

      {/* Glow Effects */}


      {/* Main */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-10"
        >

          <p className="text-cyan-400 font-mono mb-4">
            {"// About Me"}
          </p>

          

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg leading-8">

            Passionate about crafting immersive interfaces,
            futuristic web experiences and modern frontend systems.

          </p>

        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative overflow-hidden rounded-[35px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl"
          >

            {/* Terminal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5">

              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>

              <p className="text-xs text-gray-400 font-mono">
                muntasir-profile.js
              </p>

            </div>

            {/* Content */}
            <div className="p-8 md:p-10">

              <p className="text-cyan-400 font-mono mb-5">
                {"const developer = {"}
              </p>

              <div className="space-y-5 text-gray-300 leading-8">

                <p>
                  <span className="text-purple-400">
                    name:
                  </span>{" "}
                  <span className="text-green-400">
                    {'"Muntasir Alam Resti"'}
                  </span>,
                </p>

                <p>
                  <span className="text-purple-400">
                    role:
                  </span>{" "}
                  <span className="text-green-400">
                    {'"Frontend Developer"'}
                  </span>,
                </p>

                <p>
                  <span className="text-purple-400">
                    learning:
                  </span>{" "}
                  <span className="text-green-400">
                    {'"Full Stack Development"'}
                  </span>,
                </p>

                <p>
                  <span className="text-purple-400">
                    passion:
                  </span>{" "}
                  <span className="text-green-400">
                    {'"Modern UI Experiences"'}
                  </span>,
                </p>

                <p>
                  <span className="text-purple-400">
                    focus:
                  </span>{" "}
                  <span className="text-green-400">
                    {'"Performance & Creativity"'}
                  </span>,
                </p>

              </div>

              <p className="text-cyan-400 font-mono mt-8">
                {"}"}
              </p>

              {/* Bottom Text */}
              <p className="mt-10 text-gray-400 leading-8">

                I build modern responsive websites using
                React, Next.js and Tailwind CSS while
                exploring Full Stack Development,
                WordPress, UI/UX Design and Digital Marketing.

              </p>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-2 gap-5"
          >

            {techCards.map((item, index) => (

              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-7 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.12)] transition-all duration-500"
              >

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-cyan-400/5 to-purple-500/10" />

                {/* Icon */}
                <div className="relative z-10 w-16 h-16 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-3xl text-cyan-400 mb-6 group-hover:scale-110 group-hover:rotate-6 transition duration-500">

                  {item.icon}

                </div>

                {/* Text */}
                <div className="relative z-10">

                  <h3 className="text-xl font-bold mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-7">
                    {item.desc}
                  </p>

                </div>

              </motion.div>

            ))}

          </motion.div>

        </div>

      </div>

    </section>
  );
}