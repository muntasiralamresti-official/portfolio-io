import Image from "next/image";
import { Book, Star, GitFork, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project }) {
  const getLanguageColor = (tech) => {
    const techLower = tech.toLowerCase();
    if (techLower.includes("react") || techLower.includes("next")) return "#61dafb";
    if (techLower.includes("javascript")) return "#f1e05a";
    if (techLower.includes("tailwind") || techLower.includes("css")) return "#563d7c";
    if (techLower.includes("html")) return "#e34c26";
    return "#8b949e";
  };

  const getDeterministicNumber = (str, max) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash) % max;
  };

  const primaryLanguage = project.tech && project.tech.length > 0 ? project.tech[0] : "JavaScript";
  const stars = getDeterministicNumber((project.title || "repo") + "stars", 50) + 1;
  const forks = getDeterministicNumber((project.title || "repo") + "forks", 20) + 1;

  return (
    <article className="gh-card flex h-full flex-col overflow-hidden bg-[var(--card-bg)] shadow-[var(--shadow-soft)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-strong)]">
      <div className="relative h-52 overflow-hidden bg-[var(--bg-secondary)]">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-[var(--bg-primary)] text-[var(--text-secondary)]">
            <span className="text-sm uppercase tracking-[0.18em]">Project preview</span>
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-black/30 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/85">
            <Book size={12} />
            Featured work
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="space-y-2">
          <a
            href={project.live || project.github || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-lg font-semibold text-[var(--text-primary)] transition-colors hover:text-[var(--accent)]"
          >
            {project.title}
          </a>
          <p className="text-sm leading-6 text-[var(--text-secondary)]">{project.desc}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {(project.tech || []).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--text-secondary)]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="grid gap-3 border-t border-[var(--border-color)] pt-4 text-[13px] text-[var(--text-secondary)] sm:grid-cols-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-3 w-3 rounded-full" style={{ backgroundColor: getLanguageColor(primaryLanguage) }} />
            <span>{primaryLanguage}</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="inline-flex items-center gap-1 text-[var(--text-secondary)]">
              <Star size={14} />
              <span>{stars}</span>
            </div>
            <div className="inline-flex items-center gap-1 text-[var(--text-secondary)]">
              <GitFork size={14} />
              <span>{forks}</span>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--accent-secondary)]"
            >
              <ExternalLink size={14} />
              Live demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] px-4 py-2 text-sm font-semibold text-[var(--text-primary)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <FaGithub size={14} />
              Source code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
