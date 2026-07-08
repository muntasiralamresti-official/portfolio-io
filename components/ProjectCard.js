import { Book, Star, GitFork, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project }) {
  // Map standard tech stack to GitHub style language dots
  const getLanguageColor = (tech) => {
    const techLower = tech.toLowerCase();
    if (techLower.includes("react") || techLower.includes("next")) return "#61dafb"; // React blue
    if (techLower.includes("javascript")) return "#f1e05a"; // JS yellow
    if (techLower.includes("tailwind") || techLower.includes("css")) return "#563d7c"; // CSS purple
    if (techLower.includes("html")) return "#e34c26"; // HTML red
    return "#8b949e"; // default gray
  };

  // Deterministic number generator to avoid hydration errors
  const getDeterministicNumber = (str, max) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash) % max;
  };

  // Primary language representation
  const primaryLanguage = project.tech && project.tech.length > 0 ? project.tech[0] : "JavaScript";
  
  // Deterministic fake stats
  const stars = getDeterministicNumber((project.title || "repo") + "stars", 50) + 1;
  const forks = getDeterministicNumber((project.title || "repo") + "forks", 20);

  return (
    <div className="gh-card p-4 flex flex-col h-full hover:shadow-sm">
      
      {/* Title / Repo Name */}
      <div className="flex items-center gap-2 mb-2">
        <Book size={16} className="text-[var(--text-secondary)] shrink-0" />
        <a
          href={project.live || project.github || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[14px] font-semibold text-[var(--accent)] hover:underline break-words"
        >
          {project.title}
        </a>
        <span className="ml-2 px-2 py-0.5 text-[12px] font-medium text-[var(--text-secondary)] border border-[var(--border-color)] rounded-full bg-transparent">
          Public
        </span>
      </div>

      {/* Description */}
      <p className="text-[12px] text-[var(--text-secondary)] mb-4 flex-1">
        {project.desc}
      </p>

      {/* Bottom Row - Tech & Stats */}
      <div className="flex flex-wrap items-center gap-4 text-[12px] text-[var(--text-secondary)] mt-auto pt-2 mb-3">
        {/* Language Dot */}
        <div className="flex items-center gap-1.5">
          <span 
            className="w-3 h-3 rounded-full border border-[rgba(27,31,36,0.04)]" 
            style={{ backgroundColor: getLanguageColor(primaryLanguage) }}
          />
          <span>{primaryLanguage}</span>
        </div>
        
        {/* Mocked Stars */}
        {project.github && (
          <a href={project.github} className="flex items-center gap-1 hover:text-[var(--accent)] transition-colors">
            <Star size={14} />
            <span>{stars}</span>
          </a>
        )}

        {/* Mocked Forks */}
        {project.github && (
          <a href={project.github} className="flex items-center gap-1 hover:text-[var(--accent)] transition-colors">
            <GitFork size={14} />
            <span>{forks}</span>
          </a>
        )}
      </div>

      {/* Explicit Action Links added as per request */}
      <div className="flex items-center gap-4 pt-3 mt-1 border-t border-[var(--border-color)] text-[12px] font-medium">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
          >
            <ExternalLink size={14} />
            View Live
          </a>
        )}
        
        {project.github && project.github !== "#" && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
          >
            <FaGithub size={14} />
            View on GitHub
          </a>
        )}
      </div>

    </div>
  );
}