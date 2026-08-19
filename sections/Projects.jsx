"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Project Alpha",
    desc: "A high-performance e-commerce dashboard with real-time analytics.",
    tech: ["Next.js", "Tailwind", "Recharts"],
    link: "#"
  },
  {
    title: "Project Beta",
    desc: "Interactive portfolio for a creative agency, heavily reliant on WebGL.",
    tech: ["React", "Three.js", "GSAP"],
    link: "#"
  },
  {
    title: "Project Gamma",
    desc: "A decentralized social platform with end-to-end encryption.",
    tech: ["Node.js", "Express", "Web3.js"],
    link: "#"
  }
];

export default function Projects() {
  return (
    <section className="py-24 relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl md:text-7xl font-bebas text-white uppercase mb-12 border-b border-[#E62429]/30 pb-4">Missions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <a 
              key={i}
              href={proj.link}
              className="group block bg-[#111] p-8 rounded-xl border border-zinc-800 hover:border-[#E62429] hover:shadow-[0_0_30px_rgba(230,36,41,0.2)] hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-3xl font-bebas text-white mb-3 group-hover:text-[#E62429] transition-colors">{proj.title}</h3>
              <p className="text-zinc-400 font-inter mb-6 line-clamp-3">{proj.desc}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {proj.tech.map((t, j) => (
                  <span key={j} className="text-xs font-inter uppercase tracking-wider text-zinc-500 bg-black px-3 py-1 rounded-full border border-zinc-800">
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
