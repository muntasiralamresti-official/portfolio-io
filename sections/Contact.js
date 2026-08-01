"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Mail, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const containerRef = useScrollReveal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = {
      name: form.elements.namedItem("name")?.value || "",
      email: form.elements.namedItem("email")?.value || "",
      message: form.elements.namedItem("message")?.value || "",
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxmmWNAl3s2LthnZzZ3Aljg7SngM91DzPw1hpF2Bmp_GSR4Gucpsmt4yohyMkLQXam3tg/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify(formData),
        }
      );
      setLoading(false);
      setSuccess(true);
      form.reset();
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setLoading(false);
      setError(true);
      setTimeout(() => setError(false), 5000);
    }
  };

  return (
    <section id="contact" ref={containerRef} className="pt-4">
      <div className="rounded-[28px] border border-[var(--border-color)] bg-[var(--card-bg)] p-6 shadow-[var(--shadow-soft)] md:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[var(--text-secondary)]">
                Let&apos;s build something memorable
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">
                Ready to turn an idea into a polished product?
              </h2>
              <p className="mt-3 max-w-xl text-[15px] leading-7 text-[var(--text-secondary)]">
                I&apos;m available for freelance work, product collaborations, and thoughtful frontend builds that feel as good as they perform.
              </p>
            </div>

            <div className="rounded-[24px] border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)]">
                  <Image src="/muntasir.png" alt="Muntasir Alam Resti" fill className="object-cover" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">Open for select opportunities</p>
                  <p className="text-sm text-[var(--text-secondary)]">Fast turnarounds for MVPs and polished product launches</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="mailto:contact@muntasiralamresti.dev" className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] px-4 py-2 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--accent)]">
                <Mail size={16} /> Email me
              </a>
              <a href="https://www.linkedin.com/in/muntasir-alam-resti" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] px-4 py-2 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--accent)]">
                <FaLinkedin size={15} /> LinkedIn
              </a>
              <a href="https://github.com/muntasiralamresti-official" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] px-4 py-2 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--accent)]">
                <FaGithub size={15} /> GitHub
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">Availability</p>
                <p className="mt-1 text-sm font-semibold text-[var(--text-primary)]">1–2 weeks for product-ready builds</p>
              </div>
              <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">Focus</p>
                <p className="mt-1 text-sm font-semibold text-[var(--text-primary)]">Fast UI, strong UX, clear product decisions</p>
              </div>
            </div>

            <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">
              <Sparkles size={15} /> Explore a couple of featured case studies
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="space-y-4">
            {success && (
              <div className="flex items-center gap-2 rounded-2xl border border-[var(--success-light)] bg-[#e6ffed] px-4 py-3 text-sm text-[var(--success)] dark:bg-[var(--success)]/10">
                <CheckCircle2 size={16} />
                Thanks! Your message is on its way.
              </div>
            )}

            {error && (
              <div className="rounded-2xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-600 dark:bg-red-950/20">
                Something went wrong. Please email me directly instead.
              </div>
            )}

            <form onSubmit={handleSubmit} className="rounded-[24px] border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="gh-input w-full rounded-2xl px-3 py-3 text-sm placeholder-[var(--text-secondary)]"
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Your email"
                  className="gh-input w-full rounded-2xl px-3 py-3 text-sm placeholder-[var(--text-secondary)]"
                />
              </div>

              <textarea
                id="message"
                name="message"
                required
                rows="6"
                placeholder="Tell me about the project, timeline, or idea you have in mind..."
                className="mt-4 min-h-[140px] w-full rounded-2xl border border-[var(--border-color)] bg-[var(--bg-primary)] px-3 py-3 text-sm text-[var(--text-primary)] outline-none placeholder-[var(--text-secondary)]"
              />

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm text-[var(--text-secondary)]">I typically reply within 1–2 business days.</p>
                <button type="submit" disabled={loading} className="gh-btn-primary rounded-full px-4 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-70">
                  {loading ? "Sending..." : "Send message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}