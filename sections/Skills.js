"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import portfolio from "@/data/portfolio.json";

export default function Skills() {
  return <section id="skills" className="neo-section border-y border-black/10">
    <div className="neo-container"><div className="grid gap-12 lg:grid-cols-[.65fr_1.35fr]">
      <div><div className="neo-kicker">05 / Skills</div><h2 className="neo-title mt-6">Tools<br/><span className="text-neutral-400">I trust.</span></h2><p className="mt-8 max-w-sm text-sm leading-7 text-neutral-600">A practical stack built around frontend engineering, product design and digital growth.</p></div>
      <div className="divide-y divide-black/10 border-y border-black/10">{portfolio.skills.filter(s=>s.active).map((skill,i)=><motion.div whileHover={{x:8}} key={skill.id} className="grid grid-cols-[55px_1fr_auto] items-center gap-5 py-6"><span className="neo-kicker">{String(i+1).padStart(2,"0")}</span><div><div className="text-xl font-black">{skill.name}</div><div className="mt-2 h-1 max-w-md bg-black/10"><motion.div initial={{width:0}} whileInView={{width:skill.value+"%"}} viewport={{once:true}} transition={{duration:.8}} className="h-full bg-black"/></div></div><div className="flex items-center gap-3 text-sm font-bold">{skill.value}% <ArrowUpRight size={14}/></div></motion.div>)}</div>
    </div></div>
  </section>;
}