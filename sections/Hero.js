"use client";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, MapPin } from "lucide-react";
import portfolio from "@/data/portfolio.json";

export default function Hero() {
  const p = portfolio.profile;
  return (
    <section className="neo-section overflow-hidden pt-12 md:pt-20">
      <div className="neo-container">
        <div className="mb-8 flex items-center justify-between border-b border-black/10 pb-4">
          <span className="neo-kicker">Independent Web Developer / 2026</span>
          <span className="neo-kicker flex items-center gap-2"><MapPin size={12}/> {p.location}</span>
        </div>
        <div className="grid items-end gap-10 lg:grid-cols-[1.25fr_.75fr]">
          <div>
            <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} className="neo-kicker mb-8">01 / Digital craft, made useful.</motion.div>
            <motion.h1 initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{delay:.1}} className="neo-display">
              Muntasir<br/><span className="neo-outline">Alam</span><br/><span className="neo-lime">Resti.</span>
            </motion.h1>
            <p className="mt-10 max-w-xl text-base leading-7 text-neutral-600 md:text-lg">{p.bio}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="neo-button neo-button-dark">Explore work <ArrowDownRight size={14}/></a>
              <a href={portfolio.socials.linkedin} target="_blank" rel="noreferrer" className="neo-button">LinkedIn <ArrowUpRight size={14}/></a>
            </div>
          </div>
          <motion.div initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} transition={{delay:.2}} className="relative">
            <div className="neo-grid absolute -inset-5 -z-10 rounded-[28px] opacity-50"/>
            <div className="neo-dark relative overflow-hidden rounded-[28px] p-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] bg-neutral-900">
                <img src={p.photo} alt={p.name} className="neo-image h-full w-full object-cover"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"/>
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div><div className="neo-kicker text-neutral-400">Currently</div><div className="mt-1 text-2xl font-black">Frontend / Full-stack</div></div>
                  <span className="rounded-full bg-[#c7ff32] px-3 py-2 text-[9px] font-black uppercase">Available</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="mt-16 grid grid-cols-2 border-y border-black/10 md:grid-cols-4">
          {[["01","Frontend"],["02","UI / UX"],["03","Next.js"],["04","Digital Growth"]].map(([n,t]) => <div key={n} className="border-r border-black/10 px-4 py-5 last:border-0"><div className="neo-kicker">{n}</div><div className="mt-2 text-sm font-bold">{t}</div></div>)}
        </div>
      </div>
    </section>
  );
}