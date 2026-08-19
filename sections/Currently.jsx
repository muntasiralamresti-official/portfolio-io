"use client";
import { motion } from "framer-motion";

export default function Currently() {
  return (
    <section className="py-24 relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl md:text-7xl font-bebas text-white uppercase mb-12 border-b border-[#E62429]/30 pb-4">Status</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#111] p-8 rounded-xl border border-zinc-800 hover:border-[#E62429] transition-colors group">
            <h3 className="text-[#E62429] font-bebas text-3xl mb-4 group-hover:scale-105 transform origin-left transition-transform">Building</h3>
            <p className="text-zinc-400 font-inter leading-relaxed">
              Next-generation web applications using Next.js and Framer Motion, focusing on immersive interactions.
            </p>
          </div>
          
          <div className="bg-[#111] p-8 rounded-xl border border-zinc-800 hover:border-[#E62429] transition-colors group">
            <h3 className="text-[#E62429] font-bebas text-3xl mb-4 group-hover:scale-105 transform origin-left transition-transform">Learning</h3>
            <p className="text-zinc-400 font-inter leading-relaxed">
              Advanced WebGL, Three.js, and deeper architectural patterns for scalable frontend systems.
            </p>
          </div>
          
          <div className="bg-[#111] p-8 rounded-xl border border-zinc-800 hover:border-[#E62429] transition-colors group">
            <h3 className="text-[#E62429] font-bebas text-3xl mb-4 group-hover:scale-105 transform origin-left transition-transform">Open To</h3>
            <p className="text-zinc-400 font-inter leading-relaxed">
              Full-time roles, freelance projects, and collaborations that push the boundaries of web design.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
