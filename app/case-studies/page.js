import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";

const caseStudies = [
  {
    title: "Shopora Commerce Experience",
    summary:
      "A futuristic e-commerce experience focused on trust, clarity, and conversion from the very first screen.",
    outcome:
      "Shaped a high-confidence product journey with stronger visual hierarchy and more intuitive browsing.",
    stack: ["React", "Tailwind CSS", "REST API"],
    link: "https://shopora-mun.vercel.app/",
  },
  {
    title: "Purpl-x Social Platform UI",
    summary:
      "A social app concept designed to feel modern, lively, and deeply interactive while staying easy to navigate.",
    outcome:
      "Delivered a polished interface system that balances personality, motion, and content structure.",
    stack: ["Next.js", "Tailwind CSS", "API-driven UI"],
    link: "https://purpl-x.vercel.app/",
  },
];

export const metadata = {
  title: "Case Studies",
  description:
    "A lightweight overview of featured portfolio case studies and product-focused frontend work.",
};

export default function CaseStudiesPage() {
  return (
    <main className="relative min-h-screen w-full bg-[var(--bg-primary)]">
      <Navbar />
      <div className="container mx-auto max-w-[1280px] px-4 pb-12 pt-8 md:px-6">
        <div className="flex flex-col gap-8 lg:flex-row">
          <Sidebar />

          <div className="min-w-0 flex-1">
            <div className="rounded-[28px] border border-[var(--border-color)] bg-[var(--card-bg)] p-6 shadow-[var(--shadow-soft)] md:p-8">
              <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[var(--text-secondary)]">
                    Featured work
                  </p>
                  <h1 className="mt-2 text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">
                    Case studies for thoughtful product builds
                  </h1>
                </div>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] px-4 py-2 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--accent)]"
                >
                  <Sparkles size={15} /> Start a project
                </Link>
              </div>

              <div className="grid gap-5">
                {caseStudies.map((study) => (
                  <article
                    key={study.title}
                    className="rounded-[24px] border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h2 className="text-xl font-semibold text-[var(--text-primary)]">
                          {study.title}
                        </h2>
                        <p className="mt-2 max-w-2xl text-sm leading-7 text-[var(--text-secondary)]">
                          {study.summary}
                        </p>
                      </div>
                      <a
                        href={study.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]"
                      >
                        View live <ExternalLink size={14} />
                      </a>
                    </div>

                    <div className="mt-4 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-primary)] p-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                        Outcome
                      </p>
                      <p className="mt-1 text-sm text-[var(--text-primary)]">
                        {study.outcome}
                      </p>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {study.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)] px-3 py-1 text-[12px] font-medium text-[var(--text-secondary)]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-8 rounded-[24px] border border-dashed border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 text-sm text-[var(--text-secondary)]">
                Interested in a custom build? I can help shape the product
                direction, UI system, and implementation plan from the first
                conversation onward.
                <Link
                  href="#contact"
                  className="ml-2 inline-flex items-center gap-2 font-semibold text-[var(--accent)]"
                >
                  Get in touch <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
