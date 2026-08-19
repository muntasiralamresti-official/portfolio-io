"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Senior Frontend Engineer",
    company: "Tech Corp",
    period: "2022 - Present",
    desc: "Leading the frontend architecture for the core product. Improved performance by 40%."
  },
  {
    role: "Web Developer",
    company: "Creative Studio",
    period: "2020 - 2022",
    desc: "Built award-winning interactive websites for high-profile clients."
  },
  {
    role: "Freelance Developer",
    company: "Self-Employed",
    period: "2018 - 2020",
    desc: "Delivered full-stack solutions for small to medium businesses."
  }
];

export default function Experience() {
  return (
    <section className="py-24 relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl md:text-7xl font-bebas text-white uppercase mb-12 border-b border-[#E62429]/30 pb-4">History</h2>
        
        <div className="space-y-12 pl-4 md:pl-8 border-l border-zinc-800 relative">
          {experiences.map((exp, i) => (
            <div key={i} className="relative">
              {/* Timeline dot */}
              <div className="absolute -left-[21px] md:-left-[37px] top-2 w-3 h-3 bg-[#E62429] rounded-full shadow-[0_0_10px_rgba(230,36,41,0.8)]" />
              
              <div className="bg-[#111] p-8 rounded-xl border border-zinc-800 ml-4 md:ml-8 hover:border-[#E62429]/50 transition-colors">
                <span className="text-[#E62429] font-inter text-sm font-bold tracking-widest uppercase mb-2 block">{exp.period}</span>
                <h3 className="text-3xl font-bebas text-white mb-1">{exp.role}</h3>
                <h4 className="text-xl font-inter text-zinc-300 mb-4">{exp.company}</h4>
                <p className="text-zinc-400 font-inter leading-relaxed">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
