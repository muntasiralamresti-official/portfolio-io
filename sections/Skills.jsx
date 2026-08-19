"use client";
import { motion } from "framer-motion";

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "JavaScript"] },
  { category: "Backend", items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"] },
  { category: "Tools", items: ["Git", "Figma", "Vercel", "Docker", "Postman"] }
];

export default function Skills() {
  return (
    <section className="py-24 relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl md:text-7xl font-bebas text-white uppercase mb-12 border-b border-[#E62429]/30 pb-4">Arsenal</h2>
        
        <div className="flex flex-col gap-12">
          {skills.map((skillGroup, i) => (
            <div key={i}>
              <h3 className="text-2xl font-bebas text-[#E62429] mb-6 tracking-wide">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-4">
                {skillGroup.items.map((item, j) => (
                  <span 
                    key={j} 
                    className="px-6 py-3 bg-[#111] border border-zinc-800 rounded-full text-zinc-300 font-inter hover:border-[#E62429] hover:text-white hover:shadow-[0_0_15px_rgba(230,36,41,0.5)] transition-all cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
