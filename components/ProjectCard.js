import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <div className="glass-card relative overflow-hidden group flex flex-col">
      
      {/* Decorative blurred blob */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-[var(--accent)] rounded-full blur-[50px] opacity-10 pointer-events-none transition-opacity duration-300 group-hover:opacity-20"></div>

      {/* Image Container */}
      <div className="relative w-full aspect-video overflow-hidden rounded-t-[19px]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          loading="lazy"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        {/* Subtle overlay gradient to blend image with card */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--card-bg)] to-transparent opacity-80 pointer-events-none"></div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 relative z-10 bg-[var(--card-bg)]">
        
        {/* Title */}
        <h3 className="text-xl font-bold mb-2 text-[var(--text-primary)] transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed transition-colors">
          {project.desc}
        </p>

        {/* Push Bottom */}
        <div className="flex-1" />

        {/* Tech Stack Pills */}
        <div className="flex gap-2 flex-wrap mb-5">
          {project.tech.map((item, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 bg-[var(--accent-muted)] border border-[var(--border-color)] rounded-full text-[11px] font-semibold text-[var(--accent)] transition-colors"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          {/* Live Demo */}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 gradient-bg rounded-full text-white text-sm text-center font-semibold shadow-md shadow-[var(--accent-muted)] hover:-translate-y-0.5 hover:shadow-lg transition-all"
            >
              Live Demo
            </a>
          )}

          {/* GitHub */}
          {project.github && project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[var(--accent)] bg-white flex items-center justify-center text-[var(--accent)] hover:text-white hover:bg-[var(--accent)] hover:border-transparent transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <FaGithub size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}