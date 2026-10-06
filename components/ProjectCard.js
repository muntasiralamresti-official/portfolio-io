import Image from "next/image";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <article className="neo-card group h-full overflow-hidden rounded-[26px]">
      <div className="relative h-56 overflow-hidden bg-neutral-900">
        {project.image ? <Image src={project.image} alt={project.title} fill className="object-cover transition duration-700 group-hover:scale-105" /> : <div className="flex h-full items-center justify-center text-sm text-neutral-500">Project preview</div>}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
          <span className="rounded-full bg-[#c7ff32] px-3 py-1 text-[9px] font-black uppercase text-black">{project.category}</span>
          <ArrowUpRight size={18} className="transition group-hover:rotate-45" />
        </div>
      </div>
      <div className="flex h-[calc(100%-14rem)] flex-col p-6">
        <h3 className="text-2xl font-black tracking-[-.04em]">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-neutral-600">{project.desc}</p>
        <div className="mt-5 flex flex-wrap gap-2">{(project.tech || []).map((tech) => <span key={tech} className="neo-pill">{tech}</span>)}</div>
        <div className="mt-auto flex gap-3 pt-7">
          {project.live && <a href={project.live} target="_blank" rel="noreferrer" className="neo-button neo-button-dark">Live <ExternalLink size={13}/></a>}
          {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="neo-button">Code <Github size={13}/></a>}
        </div>
      </div>
    </article>
  );
}