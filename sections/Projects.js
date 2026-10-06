"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import portfolio from "@/data/portfolio.json";

export default function Projects() {
  const projects=portfolio.projects.filter(p=>p.published&&p.featured).slice(0,4);
  return <section id="projects" className="neo-section">
    <div className="neo-container"><div className="mb-12 flex flex-wrap items-end justify-between gap-6"><div><div className="neo-kicker">06 / Selected work</div><h2 className="neo-title mt-5">Built to<br/><span className="text-neutral-400">matter.</span></h2></div><Link href="/projects" className="neo-button">View archive <ArrowUpRight size={14}/></Link></div>
      <div className="grid gap-5 md:grid-cols-2">{projects.map((p,i)=><article key={p.id} className={`group neo-card overflow-hidden rounded-[28px] ${i===0?"md:col-span-2":""}`}>
        <div className={`relative overflow-hidden bg-neutral-900 ${i===0?"aspect-[16/7]":"aspect-[16/10]"}`}>{p.image&&<Image src={p.image} alt={p.title} fill className="object-cover transition duration-700 group-hover:scale-105"/>}<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"/><div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white"><div><div className="neo-kicker text-neutral-300">{p.category}</div><h3 className="mt-2 text-2xl font-black md:text-4xl">{p.title}</h3></div><ArrowUpRight className="transition group-hover:rotate-45" /></div></div>
        <div className="flex flex-wrap items-center justify-between gap-4 p-5"><p className="max-w-2xl text-sm leading-6 text-neutral-600">{p.desc}</p><div className="flex flex-wrap gap-2">{p.tech.slice(0,3).map(t=><span key={t} className="neo-pill">{t}</span>)}</div></div>
      </article>)}</div>
    </div>
  </section>;
}