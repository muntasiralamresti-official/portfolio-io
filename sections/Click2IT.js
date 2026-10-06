"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";

export default function Click2IT() {
  const stats=[["3+","Projects delivered"],["2","Active builds"],["01","Current role"]];
  return <section className="neo-section pt-0">
    <div className="neo-container"><motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="neo-dark overflow-hidden rounded-[30px]">
      <div className="grid lg:grid-cols-[1.2fr_.8fr]">
        <div className="p-7 md:p-12"><div className="neo-kicker text-neutral-500">04 / Field work</div><div className="mt-8 flex gap-4"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#c7ff32] text-black"><Code2 size={20}/></div><div><div className="neo-kicker text-neutral-500">Web Developer at</div><h2 className="mt-1 text-4xl font-black md:text-6xl">CLICK2IT</h2></div></div><p className="mt-8 max-w-2xl text-sm leading-8 text-neutral-400">Building production web experiences, e-commerce workflows and client-facing digital products with a strong focus on clean interfaces and reliable delivery.</p></div>
        <div className="grid border-t border-white/10 sm:grid-cols-3 lg:grid-cols-1 lg:border-l lg:border-t-0">{stats.map(([value,label])=><div key={label} className="border-b border-white/10 p-6 last:border-0"><div className="text-4xl font-black text-[#c7ff32]">{value}</div><div className="mt-2 text-xs uppercase tracking-[.15em] text-neutral-400">{label}</div></div>)}</div>
      </div>
    </motion.div></div>
  </section>;
}