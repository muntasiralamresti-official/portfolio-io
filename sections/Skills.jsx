"use client";
import { motion } from "framer-motion";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section className="py-24 relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl md:text-7xl font-bebas text-white uppercase mb-12 border-b border-[#E62429]/30 pb-4 tracking-wider">
          Combat <span className="text-[#E62429]">Abilities</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skills.map((skill, i) => (
            <div key={i} className="group">
              <div className="flex justify-between items-end mb-2">
                <h3 className="text-2xl font-bebas text-white tracking-wide group-hover:text-[#E62429] transition-colors">{skill.title}</h3>
                <span className="text-zinc-500 font-bebas text-xl">{skill.percentage}%</span>
              </div>
              
              {/* Progress bar */}
              <div className="h-2 w-full bg-[#0A0D14] rounded-full overflow-hidden border border-[#1A2235]">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-[#E62429] relative"
                >
                  {/* Glowing tip */}
                  <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/50 blur-[2px]" />
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
