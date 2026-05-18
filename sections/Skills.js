"use client";

import { motion } from "framer-motion";

import {
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiGoogleads,
} from "react-icons/si";

const skills = [
  {
    title: "React.js",
    percentage: 90,
    icon: <FaReact />,
    subtitle: "Interactive UI Library",
  },

  {
    title: "Next.js",
    percentage: 92,
    icon: <SiNextdotjs />,
    subtitle: "Modern React Framework",
  },

  {
    title: "Tailwind CSS",
    percentage: 95,
    icon: <SiTailwindcss />,
    subtitle: "Utility First CSS",
  },

  {
    title: "JavaScript",
    percentage: 85,
    icon: <SiJavascript />,
    subtitle: "Dynamic Web Programming",
  },

  {
    title: "WordPress",
    percentage: 75,
    icon: <FaWordpress />,
    subtitle: "CMS Website Development",
  },

  {
    title: "UI/UX Design",
    percentage: 75,
    icon: <FaFigma />,
    subtitle: "Creative Interface Design",
  },

  {
    title: "Digital Marketing",
    percentage: 72,
    icon: <SiGoogleads />,
    subtitle: "Growth & Branding Strategy",
  },

  {
    title: "Full Stack Learning",
    percentage: 50,
    icon: <FaReact />,
    subtitle: "Backend Exploration",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-16 px-6 overflow-hidden"
    >


      {/* Main */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-10 text-center"
        >

          <p className="text-cyan-400 font-mono mb-4">
            {"// Skills"}
          </p>

          <h2 className="text-4xl md:text-6xl font-black leading-tight">

            Developer
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {" "}Power{" "}
            </span>
            Matrix

          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg leading-8">

            Combining frontend technologies,
            creative design systems and modern
            digital solutions into immersive web experiences.

          </p>

        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {skills.map((skill, i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
              }}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8 hover:border-cyan-400/40 hover:translate-y-[-8px] hover:shadow-[0_0_60px_rgba(34,211,238,0.12)] transition-all duration-500"
            >

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-cyan-400/5 to-purple-500/5" />

              {/* Top */}
              <div className="relative z-10 flex items-start justify-between">

                {/* Left */}
                <div className="flex items-center gap-5">

                  {/* Icon */}
                  <div className="relative w-16 h-16 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-3xl text-cyan-400 group-hover:scale-110 group-hover:rotate-6 transition duration-500">

                    {/* Glow */}
                    <div className="absolute inset-0 rounded-2xl bg-cyan-400/10 blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />

                    <div className="relative z-10">
                      {skill.icon}
                    </div>

                  </div>

                  {/* Text */}
                  <div>

                    <h3 className="text-2xl font-bold text-white">
                      {skill.title}
                    </h3>

                    <p className="text-gray-500 text-sm font-mono mt-1">
                      {skill.subtitle}
                    </p>

                  </div>

                </div>

                {/* Percentage */}
                <div className="text-right">

                  <p className="text-cyan-400 text-2xl font-black font-mono">
                    {skill.percentage}%
                  </p>

                  <p className="text-xs text-gray-500 font-mono">
                    POWER
                  </p>

                </div>

              </div>

              {/* Skill Core */}
              <div className="relative mt-8">

                <div className="flex items-center justify-between">

                  {/* Left */}
                  <div className="flex items-center gap-4">

                    {/* Energy Core */}
                    <motion.div
                      animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                      className="relative w-14 h-14 rounded-full flex items-center justify-center"
                    >

                      {/* Glow */}
                      <div className="absolute inset-0 rounded-full bg-cyan-400 blur-xl opacity-40" />

                      {/* Ring */}
                      <div className="absolute inset-0 rounded-full border border-cyan-400/40 animate-spin" />

                      {/* Center */}
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-[0_0_25px_rgba(34,211,238,0.9)]" />

                    </motion.div>

                    {/* Text */}
                    <div>

                      <p className="text-sm text-gray-500 font-mono">
                        Skill Energy
                      </p>

                      <h4 className="text-xl font-black text-cyan-400">
                        {skill.percentage}%
                      </h4>

                    </div>

                  </div>

                  {/* Status */}
                  <div className="px-4 py-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">

                    <p className="text-xs text-gray-400 font-mono">
                      STATUS
                    </p>

                    <p className="text-sm font-bold text-white">
                      Active
                    </p>

                  </div>

                </div>

                {/* Bottom Line */}
                <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-cyan-400/40 via-purple-500/40 to-transparent" />

              </div>

            </motion.div>

          ))}

        </div>

        {/* Learning Next */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-24 relative overflow-hidden rounded-[35px] border border-purple-500/20 bg-white/[0.03] backdrop-blur-2xl p-8 md:p-12"
        >

          {/* Glow */}
          <div className="absolute -top-20 right-0 w-[250px] h-[250px] bg-purple-500/10 blur-[120px]" />

          {/* Header */}
          <div className="relative z-10">

            <p className="text-purple-400 font-mono mb-4">
              {"// Learning Next"}
            </p>

            <h3 className="text-3xl md:text-5xl font-black">

              Full Stack
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {" "}Journey
              </span>

            </h3>

            <p className="text-gray-400 mt-6 max-w-3xl leading-8 text-lg">

              Currently exploring backend technologies,
              databases and mobile development to become
              a complete Full Stack Developer.

            </p>

          </div>

          {/* Cards */}
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">

            {[
              "Node.js",
              "Express.js",
              "MongoDB",
              "React Native",
            ].map((item, i) => (

              <motion.div
                key={i}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 text-center hover:border-purple-400/40 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] transition-all duration-500"
              >

                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-400/5 to-purple-500/10" />

                {/* Orb */}
                <div className="relative z-10 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-5 animate-pulse shadow-[0_0_30px_rgba(168,85,247,0.8)]" />

                <h4 className="relative z-10 text-lg font-bold">
                  {item}
                </h4>

                <p className="relative z-10 text-gray-500 text-sm mt-2 font-mono">
                  In Progress
                </p>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </div>

    </section>
  );
}