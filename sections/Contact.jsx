"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Radio } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 mb-24 px-4 py-28 md:px-8 md:py-40">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[36px] border border-white/10 bg-[#090a0d] px-6 py-16 text-center md:px-12 md:py-24"
      >
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#E62429]/10" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#E62429]/15" />
        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 h-px w-[80vw] origin-left bg-gradient-to-r from-transparent via-[#E62429]/70 to-transparent"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        />
        <div className="relative mx-auto max-w-3xl">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-[#E62429]/30 bg-[#E62429]/5 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-[#E62429]">
            <Radio size={13} /> Open communication channel
          </div>
          <h2 className="text-[clamp(4rem,9vw,8rem)] font-black uppercase leading-[0.8] tracking-[-0.06em] text-white">Let's <span className="text-[#E62429]">Connect</span></h2>
          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-zinc-400 md:text-lg md:leading-8">Have a product, interface, or idea worth building? Send the signal. I’ll get back to you as soon as I can.</p>

          <motion.a
            href="mailto:hello@example.com"
            data-cursor="web"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="group relative mt-10 inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#E62429] px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-[0_18px_60px_rgba(230,36,41,.28)]"
          >
            <span className="relative z-10 flex items-center gap-3"><Mail size={17} /> Send the signal <ArrowUpRight size={17} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></span>
            <motion.span className="absolute inset-0 bg-white" initial={{ x: "-105%" }} whileHover={{ x: 0 }} transition={{ duration: 0.35 }} />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
