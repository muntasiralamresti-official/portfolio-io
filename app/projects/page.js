"use client";

import { motion } from "framer-motion";

import Link from "next/link";

import { ArrowLeft } from "lucide-react";

import {
  FaReact,
  FaGithub,
} from "react-icons/fa";

import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <section className="relative min-h-screen py-15 px-6 overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-500/10 blur-[120px] rounded-full" />

      {/* Back Button */}
      <div className="relative z-20 max-w-7xl mx-auto mb-12">

        <Link
          href="/"
          className="group inline-flex items-center gap-3 px-6 py-3 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)] transition-all duration-500"
        >

          <ArrowLeft
            size={18}
            className="text-cyan-400 group-hover:-translate-x-1 transition duration-300"
          />

          <span className="font-medium text-white">
            Back To Home
          </span>

        </Link>

      </div>

      {/* Main */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >

          <p className="text-cyan-400 font-mono mb-4">
            {"// All Projects"}
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">

            Frontend 
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {" "}&{" "}
            </span>
             UI/UX Lab

          </h1>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 text-lg leading-8">

            A showcase of  Frontend and UI experiences.

          </p>

        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
              }}
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-7 hover:border-cyan-400/40 hover:translate-y-[-8px] hover:shadow-[0_0_60px_rgba(34,211,238,0.12)] transition-all duration-500"
            >

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-cyan-400/5 to-purple-500/10" />

              {/* Preview */}
              <div className="relative z-10 h-[220px] rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-400/10 to-purple-500/10 flex items-center justify-center mb-6 overflow-hidden">

                <div className="absolute inset-0 bg-grid opacity-20" />

                <div className="text-7xl text-cyan-400 opacity-80">
                  <FaReact />
                </div>

              </div>

              {/* Content */}
              <div className="relative z-10">

                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-7 text-sm">
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mt-6">

                  {project.tech.map((tech, index) => (

                    <span
                      key={index}
                      className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-cyan-400"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-8">

                  <a
                    href={project.live}
                    className="flex-1 py-3 rounded-2xl bg-cyan-400 text-black font-semibold hover:scale-105 transition duration-300 text-center"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    className="w-14 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center hover:border-cyan-400/40 transition duration-300"
                  >
                    <FaGithub />
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}