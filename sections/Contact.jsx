"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-24 relative z-10 px-6 md:px-12 max-w-7xl mx-auto mb-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2 className="text-6xl md:text-8xl font-bebas text-white uppercase mb-6">Let's Connect</h2>
        <p className="text-xl font-inter text-zinc-400 max-w-2xl mx-auto mb-12">
          Ready to weave something amazing together? My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <a 
          href="mailto:hello@example.com" 
          className="inline-block px-10 py-5 bg-[#E62429] text-white font-bebas text-2xl tracking-widest uppercase rounded-full hover:bg-white hover:text-[#E62429] transition-colors duration-300 shadow-[0_0_20px_rgba(230,36,41,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]"
        >
          Say Hello
        </a>
      </motion.div>
    </section>
  );
}
