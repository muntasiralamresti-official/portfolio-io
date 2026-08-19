"use client";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section className="py-24 relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl md:text-7xl font-bebas text-white uppercase mb-12 border-b border-[#E62429]/30 pb-4 tracking-wider">
          Missions <span className="text-[#E62429]">Completed</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <a 
              key={i}
              href={proj.live || proj.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-[#0A0D14] p-8 rounded-xl border border-[#1A2235] hover:border-[#E62429] hover:shadow-[0_0_30px_rgba(230,36,41,0.25)] hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              {/* Halftone/web overlay effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none bg-[radial-gradient(circle_at_center,_#E62429_1px,_transparent_1px)] bg-[size:10px_10px]" />
              
              <h3 className="text-3xl font-bebas text-white mb-3 group-hover:text-[#E62429] transition-colors tracking-wide relative z-10">{proj.title}</h3>
              <p className="text-zinc-400 font-inter mb-6 text-sm leading-relaxed relative z-10">{proj.desc}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                {proj.tech.map((t, j) => (
                  <span key={j} className="text-xs font-inter uppercase tracking-wider text-zinc-300 bg-[#E62429]/10 px-3 py-1 rounded-sm border border-[#E62429]/30 group-hover:border-[#E62429]/60 transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
