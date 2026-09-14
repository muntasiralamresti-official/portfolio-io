"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, ShieldCheck } from "lucide-react";

const certificates = [
  { title: "Digital Marketing Level 1 & 2", desc: "Professional training across social media marketing, branding strategy and audience engagement.", image: "/de.jpeg", certificate: "/de.jpeg", issuer: "Professional Training", year: "2024" },
  { title: "UI/UX Design Using Figma", desc: "Creative UI/UX learning focused on modern interfaces, layouts and user experience design.", image: "/ui.jpeg", certificate: "/ui.jpeg", issuer: "Design Learning", year: "2025" },
];

export default function Certificates() {
  return <section id="certificates" className="relative z-10 overflow-hidden px-4 py-28 md:px-8 md:py-40">
    <div className="mx-auto max-w-[1400px]">
      <div className="mb-14 grid gap-6 md:grid-cols-[1fr_auto] md:items-end"><div><div className="mb-5 flex items-center gap-3 text-[9px] uppercase tracking-[.4em] text-zinc-600"><ShieldCheck size={12} className="text-[#E62429]" /> 006 / suit tech acquired</div><h2 className="text-[clamp(4rem,9vw,8rem)] font-black uppercase leading-[.74] tracking-[-.08em] text-white">Proof <span className="text-[#E62429]">Files.</span></h2></div><p className="max-w-sm text-right text-[9px] uppercase leading-5 tracking-[.28em] text-zinc-600">Credentials / learning / continuous upgrade</p></div>
      <div className="grid gap-6 md:grid-cols-2">{certificates.map((item, i) => <motion.article key={item.title} initial={{ opacity: 0, y: 45 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: .7, delay: i * .1 }} className="group overflow-hidden border border-white/10 bg-[#08090c] transition duration-500 hover:-translate-y-2 hover:border-[#E62429]/50">
        <div className="relative aspect-[16/10] overflow-hidden bg-black"><Image src={item.image} alt={item.title} fill loading="lazy" className="object-cover grayscale-[.35] transition duration-700 group-hover:scale-105 group-hover:grayscale-0" /><div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-[#E62429]/10" /><div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/50 px-3 py-1.5 text-[8px] uppercase tracking-[.28em] text-white/60 backdrop-blur">credential {String(i + 1).padStart(2, "0")}</div></div>
        <div className="p-7 md:p-9"><div className="flex justify-between gap-4 text-[9px] uppercase tracking-[.24em] text-zinc-600"><span>{item.issuer}</span><span>{item.year}</span></div><h3 className="mt-4 text-2xl font-black uppercase leading-[.9] tracking-[-.04em] text-white transition group-hover:text-[#E62429] md:text-3xl">{item.title}</h3><p className="mt-5 text-sm leading-7 text-zinc-500">{item.desc}</p><a href={item.certificate} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 border-b border-[#E62429]/40 pb-2 text-[9px] font-bold uppercase tracking-[.25em] text-zinc-300 transition hover:text-[#E62429]">Verify credential <ExternalLink size={13} /></a></div>
      </motion.article>)}</div>
    </div>
  </section>;
}
