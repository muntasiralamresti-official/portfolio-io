"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Mail, Radio, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const EMAIL = "muntasiralamresti@gmail.com";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); setLoading(true);
    const form = e.currentTarget;
    const formData = { name: form.elements.name?.value || "", email: form.elements.email?.value || "", message: form.elements.message?.value || "" };
    try {
      await fetch("https://script.google.com/macros/s/AKfycbxmmWNAl3s2LthnZzZ3Aljg7SngM91DzPw1hpF2Bmp_GSR4Gucpsmt4yohyMkLQXam3tg/exec", { method: "POST", mode: "no-cors", body: JSON.stringify(formData) });
      setSuccess(true); form.reset(); setTimeout(() => setSuccess(false), 5000);
    } catch { setError(true); setTimeout(() => setError(false), 5000); }
    finally { setLoading(false); }
  };

  return <section id="contact" className="relative z-10 px-4 py-28 md:px-8 md:py-40">
    <div className="mx-auto max-w-[1400px] overflow-hidden border border-white/10 bg-[#07080b]">
      <div className="relative grid lg:grid-cols-[.85fr_1.15fr]">
        <div className="relative overflow-hidden border-b border-white/10 p-7 md:p-12 lg:border-b-0 lg:border-r"><div className="absolute -left-20 top-1/2 h-72 w-72 rounded-full bg-[#E62429]/10 blur-[100px]" /><div className="relative"><div className="mb-6 flex items-center gap-3 text-[9px] uppercase tracking-[.4em] text-zinc-600"><Radio size={12} className="text-[#E62429]" /> 007 / rooftop radio</div><h2 className="text-[clamp(4rem,8vw,7.5rem)] font-black uppercase leading-[.74] tracking-[-.08em] text-white">Send the <span className="text-[#E62429]">Signal.</span></h2><p className="mt-7 max-w-xl text-sm leading-7 text-zinc-400">Got a product, interface or idea worth building? Fire the web. The communication channel is open.</p><div className="mt-10 flex flex-wrap gap-3"><a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 rounded-full bg-[#E62429] px-5 py-3 text-[10px] font-bold uppercase tracking-[.18em] text-white shadow-[0_15px_50px_rgba(230,36,41,.25)]"><Mail size={15} /> {EMAIL}</a><a href="https://github.com/muntasiralamresti-official" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-3 text-[10px] uppercase tracking-[.18em] text-zinc-400 hover:border-[#E62429]/50 hover:text-white"><FaGithub size={14} /> GitHub</a><a href="https://www.linkedin.com/in/muntasir-alam-resti" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-3 text-[10px] uppercase tracking-[.18em] text-zinc-400 hover:border-[#E62429]/50 hover:text-white"><FaLinkedin size={14} /> LinkedIn</a></div></div></div>
        <div className="relative p-6 md:p-12"><div className="absolute right-0 top-0 h-60 w-60 bg-[#E62429]/8 blur-[100px]" /><form onSubmit={handleSubmit} className="relative"><div className="mb-8 flex items-center justify-between"><div className="text-[9px] uppercase tracking-[.3em] text-zinc-600">Transmission form</div><div className="flex items-center gap-2 text-[8px] uppercase tracking-[.25em] text-[#E62429]"><span className="h-1.5 w-1.5 rounded-full bg-[#E62429] shadow-[0_0_12px_#E62429]" /> online</div></div><div className="grid gap-4 md:grid-cols-2"><input name="name" required placeholder="Your name" className="h-14 border border-white/10 bg-white/[.025] px-4 text-sm text-white outline-none placeholder:text-zinc-700 focus:border-[#E62429]/60" /><input name="email" type="email" required placeholder="Your email" className="h-14 border border-white/10 bg-white/[.025] px-4 text-sm text-white outline-none placeholder:text-zinc-700 focus:border-[#E62429]/60" /></div><textarea name="message" required rows="7" placeholder="Project brief / idea / timeline..." className="mt-4 w-full resize-none border border-white/10 bg-white/[.025] p-4 text-sm text-white outline-none placeholder:text-zinc-700 focus:border-[#E62429]/60" /><div className="mt-5 flex flex-wrap items-center justify-between gap-4"><p className="text-[9px] uppercase tracking-[.2em] text-zinc-700">Reply window / 1–2 business days</p><motion.button type="submit" disabled={loading} whileHover={{ y: -2 }} whileTap={{ scale: .98 }} data-cursor="web" className="inline-flex items-center gap-3 rounded-full bg-[#E62429] px-6 py-3.5 text-[10px] font-bold uppercase tracking-[.18em] text-white disabled:opacity-60">{loading ? "Transmitting..." : "Fire the web"}<Send size={14} /></motion.button></div>{success && <div className="mt-5 flex items-center gap-2 border border-emerald-500/20 bg-emerald-500/5 p-4 text-sm text-emerald-300"><CheckCircle2 size={16} /> Transmission received.</div>}{error && <div className="mt-5 border border-red-500/20 bg-red-500/5 p-4 text-sm text-red-300">Transmission failed. Please email directly.</div>}</form></div>
      </div>
      <div className="flex items-center justify-between border-t border-white/10 px-6 py-4 text-[8px] uppercase tracking-[.3em] text-zinc-700 md:px-12"><span>Friendly neighborhood developer</span><span className="flex items-center gap-2">End of transmission <ArrowUpRight size={12} /></span></div>
    </div>
  </section>;
}
