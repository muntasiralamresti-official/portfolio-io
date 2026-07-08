"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin, FaDribbble, FaRegCopy } from "react-icons/fa";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);

  const headerRef = useScrollReveal();
  const cardRef = useScrollReveal();

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("contact@muntasiralamresti.dev"); // Placeholder email, update as needed
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy email", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
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
      e.target.reset();
      setTimeout(() => setSuccess(false), 4000);
    } catch (err) {
      setLoading(false);
      setError(true);
      setTimeout(() => setError(false), 4000);
    }
  };

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden bg-[var(--bg-secondary)]">
      
      {/* Toast Notification for Email Copy */}
      <div
        className={`fixed top-24 left-1/2 -translate-x-1/2 z-[999] px-4 py-2 rounded-full gradient-bg text-white font-semibold text-sm shadow-lg transition-all duration-300 ${
          copied ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        Email Copied!
      </div>

      {/* Success Popup */}
      <div
        className={`fixed top-8 left-1/2 -translate-x-1/2 z-[999] px-6 py-4 rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] shadow-xl transition-all duration-500 ${
          success ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8 pointer-events-none"
        }`}
      >
        <p className="gradient-text font-semibold">Message Sent Successfully ✨</p>
      </div>

      {/* Error Popup */}
      <div
        className={`fixed top-8 left-1/2 -translate-x-1/2 z-[999] px-6 py-4 rounded-2xl border border-red-200 bg-[var(--card-bg)] shadow-xl transition-all duration-500 ${
          error ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8 pointer-events-none"
        }`}
      >
        <p className="text-red-500 font-semibold">Failed To Send Message ❌</p>
      </div>

      {/* Main */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[var(--text-primary)] inline-block relative">
            Let's Build <span className="gradient-text">Something</span>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1.5 gradient-bg rounded-full"></div>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto mt-8 text-lg leading-relaxed">
            Have a project idea, collaboration or creative opportunity? Let’s connect and create modern digital experiences.
          </p>
          
          <button
            onClick={handleCopyEmail}
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[var(--border-color)] bg-white text-[var(--text-primary)] hover:text-[var(--accent)] hover:border-[var(--accent)] hover:bg-[var(--accent-muted)] hover:-translate-y-0.5 transition-all duration-300 group shadow-sm"
          >
            <FaRegCopy className="group-hover:text-[var(--accent)] transition-colors" />
            <span className="text-sm font-semibold">Copy Email Address</span>
          </button>
        </div>

        {/* Contact Card */}
        <div ref={cardRef} className="relative overflow-hidden rounded-[24px] border border-[var(--border-color)] bg-[var(--card-bg)] shadow-[0_8px_40px_rgba(0,0,0,0.04)] p-8 md:p-12 transition-colors">
          
          {/* Decorative Blob */}
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-tr from-[var(--accent)] to-[var(--accent-secondary)] rounded-full blur-[80px] opacity-[0.1] pointer-events-none"></div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)] px-6 py-4 text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all duration-300"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)] px-6 py-4 text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all duration-300"
            />
            <textarea
              rows="5"
              name="message"
              required
              placeholder="Tell me about your project..."
              className="w-full rounded-3xl border border-[var(--border-color)] bg-[var(--bg-primary)] px-6 py-4 text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] outline-none resize-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all duration-300"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full relative overflow-hidden px-8 py-4 rounded-full gradient-bg text-white font-bold tracking-wide shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:hover:translate-y-0 flex items-center justify-center gap-3"
            >
              {loading ? (
                <>
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>

          {/* Socials */}
          <div className="relative z-10 flex items-center justify-center gap-5 mt-10">
            {[
              { icon: <FaGithub size={20} />, link: "https://github.com/muntasiralamresti-official" },
              { icon: <FaLinkedin size={20} />, link: "https://www.linkedin.com/in/muntasir-alam-resti/" },
              { icon: <FaDribbble size={20} />, link: "https://dribbble.com/muntasir-alam-resti-" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)] flex items-center justify-center text-[var(--text-secondary)] hover:text-white hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:-translate-y-1 hover:shadow-md transition-all duration-300"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}