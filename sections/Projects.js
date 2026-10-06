"use client";

import Link from "next/link";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import portfolio from "@/data/portfolio.json";

export default function Projects() {
  const projects = portfolio.projects.filter((p) => p.published && p.completed).slice(0, 4);

  return (
    <section id="projects" className="neo-section">
      <div className="neo-container">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-8">
          <div>
            <div className="neo-kicker text-neutral-500">06 / Selected work</div>
            <h2 className="neo-title mt-5 max-w-4xl">
              PROJECT
              <br />
              <span className="text-neutral-400">ARCHIVE.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-neutral-500">
            Selected builds, experiments and digital products. Each case file is a record of what I built, how it works and the tools behind it.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group relative min-h-[500px] overflow-hidden rounded-[4px] border border-[#ef233c]/50 bg-[#07080b] p-8 text-white shadow-[0_20px_70px_rgba(0,0,0,0.16)] md:p-10"
            >
              <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:28px_28px]" />
              <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#ef233c]/10 blur-3xl transition duration-700 group-hover:bg-[#ef233c]/20" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050608] to-transparent" />

              <div className="relative flex h-full min-h-[420px] flex-col">
                <div className="flex items-start justify-between">
                  <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-neutral-500">
                    Case file / {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="font-black text-6xl leading-none tracking-[-0.08em] text-white/[0.045] transition duration-500 group-hover:text-[#ef233c]/10">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                <div className="mt-auto">
                  <div className="mb-6 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.28em] text-neutral-500">
                    <span className="h-2 w-2 rounded-full bg-[#ef233c] shadow-[0_0_14px_#ef233c]" />
                    Operation complete
                  </div>

                  <h3 className="max-w-[90%] text-4xl font-black uppercase leading-[0.9] tracking-[-0.055em] text-white transition duration-300 group-hover:text-[#ef233c] md:text-5xl">
                    {project.title}
                  </h3>

                  <p className="mt-7 max-w-2xl text-sm leading-7 text-neutral-400">
                    {project.desc}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="border border-white/10 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.16em] text-neutral-400 transition group-hover:border-[#ef233c]/30 group-hover:text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex items-center gap-5 border-t border-white/10 pt-5">
                    {project.live && (
                      <Link
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-300 transition hover:text-[#ef233c]"
                      >
                        Live site <ExternalLink size={13} />
                      </Link>
                    )}
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-300 transition hover:text-[#ef233c]"
                      >
                        Source <Github size={13} />
                      </Link>
                    )}
                    <Link
                      href={project.live || project.github || "#"}
                      target="_blank"
                      rel="noreferrer"
                      className="ml-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-neutral-400 transition duration-300 group-hover:border-[#ef233c] group-hover:bg-[#ef233c] group-hover:text-black"
                      aria-label={`Open ${project.title}`}
                    >
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-end">
          <Link href="/projects" className="neo-button">
            View project archive <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
