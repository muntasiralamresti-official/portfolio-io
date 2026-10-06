"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import portfolio from "@/data/portfolio.json";

export default function Projects() {
  const projects = portfolio.projects.filter((p) => p.published && p.completed);

  return (
    <section id="projects" className="neo-section">
      <div className="neo-container">
        <div className="mb-16 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <div className="neo-kicker">06 / Selected work</div>
            <h2 className="neo-title mt-5 max-w-4xl">
              A few things
              <br />
              <span className="text-neutral-400">I’ve built.</span>
            </h2>
          </div>
          <div className="max-w-xs text-sm leading-6 text-neutral-500">
            From production-ready web apps to visual experiments — each project is a chance to solve a real problem with a sharper interface.
          </div>
        </div>

        <div className="space-y-20">
          {projects.map((p, i) => (
            <article key={p.id} className="group border-t border-black/10 pt-5">
              <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-neutral-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="neo-kicker">{p.category}</span>
                </div>
                <span className="rounded-full border border-black/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-500">
                  {p.tech[0]}
                </span>
              </div>

              <div className="grid gap-7 lg:grid-cols-[1.45fr_0.55fr] lg:items-end">
                <Link
                  href={p.live || p.github || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="relative block aspect-[16/9] overflow-hidden bg-neutral-200"
                >
                  {p.image && (
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/10" />
                  <div className="absolute right-5 top-5 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-[#c7ff32] text-black opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight size={18} />
                  </div>
                </Link>

                <div className="lg:pb-2">
                  <h3 className="text-3xl font-black tracking-[-0.04em] md:text-5xl">{p.title}</h3>
                  <p className="mt-5 text-sm leading-6 text-neutral-600">{p.desc}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.tech.map((tech) => (
                      <span key={tech} className="neo-pill">{tech}</span>
                    ))}
                  </div>

                  <div className="mt-7 flex items-center gap-5 border-t border-black/10 pt-5">
                    {p.live && (
                      <Link href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] hover:opacity-60">
                        Live site <ExternalLink size={13} />
                      </Link>
                    )}
                    {p.github && (
                      <Link href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] hover:opacity-60">
                        Code <Github size={13} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 flex justify-end">
          <Link href="/projects" className="neo-button">
            View all projects <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
