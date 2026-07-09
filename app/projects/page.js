"use client";

import { useEffect, useMemo, useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { projects } from "@/data/projects";
import { Star, GitFork, ExternalLink, Book } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function ProjectsPage() {
  const [query, setQuery] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const [sortBy, setSortBy] = useState("stars"); // stars | forks | title

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
    if (techLower.includes("react") || techLower.includes("next"))
      return "#61dafb";
    if (techLower.includes("javascript")) return "#f1e05a";
    if (techLower.includes("tailwind") || techLower.includes("css"))
      return "#563d7c";
    if (techLower.includes("html")) return "#e34c26";
    return "#8b949e";
  };

  useEffect(() => {
    // Used only to keep date output stable during render.
    // eslint-disable-next-line no-underscore-dangle
    window.__BB_PROJECTS_NOW = Date.now();
  }, []);

  const languages = useMemo(() => {
    const set = new Set();
    projects.forEach((p) => {
      if (Array.isArray(p.tech) && p.tech.length > 0) set.add(p.tech[0]);
    });
    return ["All", ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    let list = projects.filter((project) => {
      const primaryLanguage =
        project.tech && project.tech.length > 0
          ? project.tech[0]
          : "JavaScript";

      const matchesQuery =
        !q ||
        (project.title || "").toLowerCase().includes(q) ||
        (project.desc || "").toLowerCase().includes(q) ||
        (project.tech || []).some((t) => String(t).toLowerCase().includes(q));

      const matchesLang =
        selectedLanguage === "All" || primaryLanguage === selectedLanguage;

      return matchesQuery && matchesLang;
    });

    const scoreStars = (project) =>
      getDeterministicNumber((project.title || "repo") + "stars", 50) + 1;
    const scoreForks = (project) =>
      getDeterministicNumber((project.title || "repo") + "forks", 20);

    list = list.slice().sort((a, b) => {
      if (sortBy === "forks") return scoreForks(b) - scoreForks(a);
      if (sortBy === "title")
        return (a.title || "").localeCompare(b.title || "");
      return scoreStars(b) - scoreStars(a);
    });

    return list;
  }, [query, selectedLanguage, sortBy]);

  const safeNow = typeof window !== "undefined" ? window.__BB_PROJECTS_NOW : 0;

  return (
    <main className="relative w-full min-h-screen bg-[var(--bg-primary)]">
      <Navbar />

      <div className="container mx-auto px-4 md:px-6 pt-6 pb-12 max-w-[1280px]">
        <div className="flex flex-col lg:flex-row gap-8">
          <Sidebar />

          <div className="flex-1 min-w-0">
            {/* Search and Filters Header */}
            <div className="flex flex-col md:flex-row gap-4 border-b border-[var(--border-color)] pb-4 mb-4">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                placeholder="Find a repository..."
                className="gh-input px-3 py-1.5 flex-1 text-[14px]"
              />

              <div className="flex gap-2 flex-wrap">
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="gh-btn-secondary px-4 py-1.5 text-[14px] flex items-center gap-2"
                  aria-label="Language filter"
                >
                  {languages.map((lang) => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="gh-btn-secondary px-4 py-1.5 text-[14px] flex items-center gap-2"
                  aria-label="Sort"
                >
                  <option value="stars">Sort: Stars</option>
                  <option value="forks">Sort: Forks</option>
                  <option value="title">Sort: Title</option>
                </select>

                <button
                  type="button"
                  className="gh-btn-primary px-4 py-1.5 text-[14px] flex items-center gap-2"
                  onClick={() => {
                    setQuery("");
                    setSelectedLanguage("All");
                    setSortBy("stars");
                  }}
                >
                  <Book size={14} className="hidden sm:block" /> Reset
                </button>
              </div>
            </div>

            {/* Repositories List */}
            <div>
              {filtered.map((project, i) => {
                const primaryLanguage =
                  project.tech && project.tech.length > 0
                    ? project.tech[0]
                    : "JavaScript";
                const stars =
                  getDeterministicNumber(
                    (project.title || "repo") + "stars",
                    50,
                  ) + 1;
                const forks = getDeterministicNumber(
                  (project.title || "repo") + "forks",
                  20,
                );

                return (
                  <div
                    key={project.title || i}
                    className="py-6 border-b border-[var(--border-color)] flex flex-col md:flex-row md:items-start justify-between gap-4"
                  >
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
                        <div className="flex items-center gap-1.5">
                          <span
                            className="w-3 h-3 rounded-full border border-[rgba(27,31,36,0.04)]"
                            style={{
                              backgroundColor:
                                getLanguageColor(primaryLanguage),
                            }}
                          />
                          <span>{primaryLanguage}</span>
                        </div>

                        {project.github && (
                          <a
                            href={project.github}
                            className="flex items-center gap-1 hover:text-[var(--accent)] transition-colors"
                          >
                            <Star size={14} />
                            <span>{stars}</span>
                          </a>
                        )}

                        {project.github && (
                          <a
                            href={project.github}
                            className="flex items-center gap-1 hover:text-[var(--accent)] transition-colors"
                          >
                            <GitFork size={14} />
                            <span>{forks}</span>
                          </a>
                        )}

                        <span className="ml-2">
                          Updated on{" "}
                          {new Date(
                            safeNow -
                              getDeterministicNumber(project.title || "d", 30) *
                                86400000,
                          ).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 md:flex-col md:items-end">
                      <div className="flex items-center bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-md overflow-hidden">
                        <button
                          type="button"
                          className="px-3 py-1 text-[12px] font-medium text-[var(--text-primary)] hover:bg-[var(--border-color)] transition-colors flex items-center gap-1 border-r border-[var(--border-color)]"
                          onClick={() =>
                            project.github &&
                            window.open(
                              project.github,
                              "_blank",
                              "noopener,noreferrer",
                            )
                          }
                        >
                          <Star
                            size={14}
                            className="text-[var(--text-secondary)]"
                          />
                          Star
                        </button>
                        <button
                          type="button"
                          className="px-2 py-1 text-[12px] text-[var(--text-secondary)] hover:bg-[var(--border-color)] transition-colors"
                          aria-label="More actions"
                          onClick={() =>
                            project.github &&
                            window.open(
                              project.github,
                              "_blank",
                              "noopener,noreferrer",
                            )
                          }
                        >
                          <span className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[4px] border-transparent border-t-current inline-block mt-0.5"></span>
                        </button>
                      </div>

                      <div className="flex items-center gap-3 text-[12px] font-medium">
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-[var(--text-secondary)] hover:text-[var(--accent)]"
                          >
                            <ExternalLink size={14} /> Live
                          </a>
                        )}
                        {project.github && project.github !== "#" && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-[var(--text-secondary)] hover:text-[var(--accent)]"
                          >
                            <FaGithub size={14} /> Repo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}

              {filtered.length === 0 && (
                <div className="py-10 text-center text-[var(--text-secondary)]">
                  No repositories found.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
