"use client";

import { motion } from "framer-motion";

import {
  FaCertificate,
  FaGoogle,
  FaLaptopCode,
} from "react-icons/fa";

const certificates = [
  {
    title: "Digital Marketing Level 1",
    desc: "Professional training focused on social media marketing and branding strategies.",
    icon: <FaGoogle />,
  },

  {
    title: "Digital Marketing Level 2",
    desc: "Advanced marketing techniques, audience targeting and campaign optimization.",
    icon: <FaCertificate />,
  },

  {
    title: "Frontend Development Learning",
    desc: "Hands-on learning journey in React, Next.js and modern frontend technologies.",
    icon: <FaLaptopCode />,
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="relative py-32 px-6 overflow-hidden"
    >

      {/* Glow Effects */}
      {/* <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full" /> */}

      {/* <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-500/10 blur-[120px] rounded-full" /> */}

      {/* Main */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >

          <p className="text-cyan-400 font-mono mb-4">
            {"// Certificates"}
          </p>

          <h2 className="text-4xl md:text-6xl font-black">

            Learning &
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {" "}Achievements
            </span>

          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg leading-8">

            Certifications and learning milestones
            that reflect my continuous growth in
            frontend development and digital creativity.

          </p>

        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {certificates.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8 hover:border-cyan-400/40 hover:translate-y-[-8px] hover:shadow-[0_0_60px_rgba(34,211,238,0.12)] transition-all duration-500"
            >

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-cyan-400/5 to-purple-500/10" />

              {/* Icon */}
              <div className="relative z-10 w-16 h-16 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-3xl text-cyan-400 mb-8 group-hover:scale-110 group-hover:rotate-6 transition duration-500">

                {item.icon}

              </div>

              {/* Content */}
              <div className="relative z-10">

                <h3 className="text-2xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-8">
                  {item.desc}
                </p>

              </div>

              {/* Bottom Line */}
              <div className="relative z-10 mt-8 h-[1px] w-full bg-gradient-to-r from-cyan-400/40 via-purple-500/40 to-transparent" />

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}