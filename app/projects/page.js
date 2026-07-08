"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { projects } from "@/data/projects";
import { Star, GitFork, ExternalLink, Book } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function ProjectsPage() {
  
  // Deterministic number generator to avoid hydration errors
  const getDeterministicNumber = (str, max) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash) % max;
  };

  // Map standard tech stack to GitHub style language dots
  const getLanguageColor = (tech) => {
    const techLower = tech.toLowerCase();
    if (techLower.includes("react") || techLower.includes("next")) return "#61dafb";
    if (techLower.includes("javascript")) return "#f1e05a";
    if (techLower.includes("tailwind") || techLower.includes("css")) return "#563d7c";
    if (techLower.includes("html")) return "#e34c26";
    return "#8b949e";
  };

  return (
    <main className="relative w-full min-h-screen bg-[var(--bg-primary)]">
      
      {/* Top Navbar */}
      <Navbar />

      <div className="container mx-auto px-4 md:px-6 pt-6 pb-12 max-w-[1280px]">
        
        {/* Responsive Grid Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Sidebar */}
          <Sidebar />

          {/* Right Main Content Stream */}
          <div className="flex-1 min-w-0">
            
            {/* Search and Filters Header */}
            <div className="flex flex-col md:flex-row gap-4 border-b border-[var(--border-color)] pb-4 mb-4">
              <input 
                type="text" 
                placeholder="Find a repository..." 
                className="gh-input px-3 py-1.5 flex-1 text-[14px]"
              />
              <div className="flex gap-2">
                <button className="gh-btn-secondary px-4 py-1.5 text-[14px] flex items-center gap-2">
                  Type <span className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[4px] border-transparent border-t-current inline-block ml-1"></span>
                </button>
                <button className="gh-btn-secondary px-4 py-1.5 text-[14px] flex items-center gap-2">
                  Language <span className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[4px] border-transparent border-t-current inline-block ml-1"></span>
                </button>
                <button className="gh-btn-secondary px-4 py-1.5 text-[14px] flex items-center gap-2">
                  Sort <span className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[4px] border-transparent border-t-current inline-block ml-1"></span>
                </button>
              </div>
              <button className="gh-btn-primary px-4 py-1.5 text-[14px] flex items-center gap-2">
                <Book size={14} className="hidden sm:block" /> New
              </button>
            </div>

            {/* Repositories List */}
            <div>
              {projects.map((project, i) => {
                const primaryLanguage = project.tech && project.tech.length > 0 ? project.tech[0] : "JavaScript";
                const stars = getDeterministicNumber((project.title || "repo") + "stars", 50) + 1;
                const forks = getDeterministicNumber((project.title || "repo") + "forks", 20);

                return (
                  <div key={i} className="py-6 border-b border-[var(--border-color)] flex flex-col md:flex-row md:items-start justify-between gap-4">
                    
                    {/* Left Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <a
                          href={project.live || project.github || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[20px] font-semibold text-[var(--accent)] hover:underline break-words"
                        >
                          {project.title}
                        </a>
                        <span className="px-2 py-0.5 text-[12px] font-medium text-[var(--text-secondary)] border border-[var(--border-color)] rounded-full bg-transparent">
                          Public
                        </span>
                      </div>

                      <p className="text-[14px] text-[var(--text-secondary)] mb-4 md:pr-12">
                        {project.desc}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 text-[12px] text-[var(--text-secondary)]">
                        {/* Language */}
                        <div className="flex items-center gap-1.5">
                          <span 
                            className="w-3 h-3 rounded-full border border-[rgba(27,31,36,0.04)]" 
                            style={{ backgroundColor: getLanguageColor(primaryLanguage) }}
                          />
                          <span>{primaryLanguage}</span>
                        </div>
                        
                        {/* Stars */}
                        {project.github && (
                          <a href={project.github} className="flex items-center gap-1 hover:text-[var(--accent)] transition-colors">
                            <Star size={14} />
                            <span>{stars}</span>
                          </a>
                        )}

                        {/* Forks */}
                        {project.github && (
                          <a href={project.github} className="flex items-center gap-1 hover:text-[var(--accent)] transition-colors">
                            <GitFork size={14} />
                            <span>{forks}</span>
                          </a>
                        )}
                        
                        {/* Mock Updated Date */}
                        <span className="ml-2">Updated on {new Date(Date.now() - getDeterministicNumber(project.title || "d", 30) * 86400000).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
                      </div>
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-3 md:flex-col md:items-end">
                      
                      <div className="flex items-center bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-md overflow-hidden">
                        <button className="px-3 py-1 text-[12px] font-medium text-[var(--text-primary)] hover:bg-[var(--border-color)] transition-colors flex items-center gap-1 border-r border-[var(--border-color)]">
                          <Star size={14} className="text-[var(--text-secondary)]" />
                          Star
                        </button>
                        <button className="px-2 py-1 text-[12px] text-[var(--text-secondary)] hover:bg-[var(--border-color)] transition-colors">
                          <span className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[4px] border-transparent border-t-current inline-block mt-0.5"></span>
                        </button>
                      </div>

                      <div className="flex items-center gap-3 text-[12px] font-medium">
                        {project.live && (
                          <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[var(--text-secondary)] hover:text-[var(--accent)]">
                            <ExternalLink size={14} /> Live
                          </a>
                        )}
                        {project.github && project.github !== "#" && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[var(--text-secondary)] hover:text-[var(--accent)]">
                            <FaGithub size={14} /> Repo
                          </a>
                        )}
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}