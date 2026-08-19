"use client";
import { motion } from "framer-motion";

const timelineData = [
  {
    title: "Web Development",
    org: "Self-Directed Learning",
    date: "2025 — Present",
    desc: "Building modern, performant, and responsive web applications using React, Next.js, and Tailwind CSS — focused on writing clean, maintainable code and delivering seamless user experiences.",
  },
  {
    title: "UI/UX Design with Figma",
    org: "Design Certification",
    date: "2025",
    desc: "Completed structured training in UI/UX design principles, covering wireframing, prototyping, design systems, and user-centered interface design in Figma.",
  },
  {
    title: "Digital Marketing Level 1 & 2",
    org: "Professional Training",
    date: "2024",
    desc: "Completed professional-level training in digital marketing, covering social media strategy, brand positioning, and audience growth and engagement techniques.",
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
        <h2 className="text-5xl md:text-7xl font-bebas text-white uppercase mb-12 border-b border-[#E62429]/30 pb-4 tracking-wider">
          Origin <span className="text-[#E62429]">Story</span>
        </h2>
        
        <div className="space-y-12 pl-4 md:pl-8 border-l-2 border-[#1A2235] relative">
          {timelineData.map((exp, i) => (
            <div key={i} className="relative group">
              {/* Glowing Timeline dot */}
              <div className="absolute -left-[23px] md:-left-[39px] top-2 w-4 h-4 bg-[#0A0D14] border-2 border-[#E62429] rounded-full group-hover:bg-[#E62429] group-hover:shadow-[0_0_15px_rgba(230,36,41,0.8)] transition-all duration-300" />
              
              <div className="bg-[#0A0D14] p-8 rounded-xl border border-[#1A2235] ml-6 md:ml-10 group-hover:border-[#E62429]/50 transition-colors relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#E62429]/5 rounded-bl-full pointer-events-none" />
                
                <span className="text-[#E62429] font-bebas text-lg font-bold tracking-widest uppercase mb-2 block">{exp.date}</span>
                <h3 className="text-3xl font-bebas text-white mb-1 tracking-wide">{exp.title}</h3>
                <h4 className="text-sm font-inter text-zinc-400 mb-4 uppercase tracking-widest">{exp.org}</h4>
                <p className="text-zinc-300 font-inter text-sm leading-relaxed">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
