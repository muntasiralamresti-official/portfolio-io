"use client";

import { useState } from "react";
import Image from "next/image";
import { Bold, Italic, Link as LinkIcon, Code, List, Heading, CheckCircle2 } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [activeTab, setActiveTab] = useState("write");

  const containerRef = useScrollReveal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target.title.value, // Using Title as Name
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
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setLoading(false);
      setError(true);
      setTimeout(() => setError(false), 5000);
    }
  };

  return (
    <section id="contact" ref={containerRef} className="pt-4 border-t border-[var(--border-color)]">
      
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-[24px] font-normal text-[var(--text-primary)]">
          Open a new issue
        </h2>
        <p className="text-[14px] text-[var(--text-secondary)]">
          Want to discuss a project or opportunity? Leave a message below.
        </p>
      </div>

      {success && (
        <div className="mb-4 px-4 py-3 gh-card flex items-center gap-2 border-[var(--success-light)] bg-[#e6ffed] dark:bg-[var(--success)] dark:bg-opacity-10 text-[var(--success)] text-[14px]">
          <CheckCircle2 size={16} />
          Issue successfully submitted! I will get back to you soon.
        </div>
      )}

      {error && (
        <div className="mb-4 px-4 py-3 gh-card border-red-400 bg-red-50 dark:bg-red-900 dark:bg-opacity-10 text-red-600 text-[14px]">
          Failed to submit issue. Please try again or email me directly.
        </div>
      )}

      <div className="flex gap-4">
        
        {/* Mock Avatar (Left Column) */}
        <div className="hidden sm:block shrink-0">
          <div className="relative w-10 h-10 rounded-full overflow-hidden bg-[var(--bg-secondary)] border border-[var(--border-color)]">
            <Image
              src="/muntasir.png"
              alt="Avatar"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Issue Editor Form */}
        <form onSubmit={handleSubmit} className="flex-1 space-y-3">
          
          {/* Title Input */}
          <div>
            <input
              type="text"
              id="title"
              name="title"
              required
              placeholder="Add a title (Your Name)"
              className="gh-input w-full px-3 py-[5px] text-[16px] font-medium placeholder-[var(--text-secondary)]"
            />
          </div>

          {/* Email Input */}
          <div>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Your email address (for replies)"
              className="gh-input w-full px-3 py-[5px] text-[14px] placeholder-[var(--text-secondary)]"
            />
          </div>

          {/* Comment Box Card */}
          <div className="gh-card overflow-hidden">
            
            {/* Tabs Header */}
            <div className="flex items-center justify-between px-2 pt-2 bg-[var(--bg-secondary)] border-b border-[var(--border-color)]">
              <div className="flex">
                <button
                  type="button"
                  onClick={() => setActiveTab("write")}
                  className={`px-4 py-2 text-[14px] font-medium border border-transparent rounded-t-md transition-colors ${
                    activeTab === "write"
                      ? "bg-[var(--bg-primary)] border-[var(--border-color)] border-b-transparent text-[var(--text-primary)] -mb-px z-10"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  Write
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("preview")}
                  className={`px-4 py-2 text-[14px] font-medium border border-transparent rounded-t-md transition-colors ${
                    activeTab === "preview"
                      ? "bg-[var(--bg-primary)] border-[var(--border-color)] border-b-transparent text-[var(--text-primary)] -mb-px z-10"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  Preview
                </button>
              </div>
            </div>

            {/* Markdown Toolbar (Decorative) */}
            {activeTab === "write" && (
              <div className="px-2 py-2 flex items-center gap-1 border-b border-[var(--border-color)] bg-[var(--bg-primary)]">
                <button type="button" className="p-1 text-[var(--text-secondary)] hover:text-[var(--accent)] rounded hover:bg-[var(--bg-secondary)]"><Heading size={14} /></button>
                <button type="button" className="p-1 text-[var(--text-secondary)] hover:text-[var(--accent)] rounded hover:bg-[var(--bg-secondary)]"><Bold size={14} /></button>
                <button type="button" className="p-1 text-[var(--text-secondary)] hover:text-[var(--accent)] rounded hover:bg-[var(--bg-secondary)]"><Italic size={14} /></button>
                <div className="w-px h-4 bg-[var(--border-color)] mx-1" />
                <button type="button" className="p-1 text-[var(--text-secondary)] hover:text-[var(--accent)] rounded hover:bg-[var(--bg-secondary)]"><Code size={14} /></button>
                <button type="button" className="p-1 text-[var(--text-secondary)] hover:text-[var(--accent)] rounded hover:bg-[var(--bg-secondary)]"><LinkIcon size={14} /></button>
                <div className="w-px h-4 bg-[var(--border-color)] mx-1" />
                <button type="button" className="p-1 text-[var(--text-secondary)] hover:text-[var(--accent)] rounded hover:bg-[var(--bg-secondary)]"><List size={14} /></button>
              </div>
            )}

            {/* Textarea / Preview Body */}
            <div className="p-2 bg-[var(--bg-primary)]">
              {activeTab === "write" ? (
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="6"
                  placeholder="Leave a comment"
                  className="w-full px-2 py-1 text-[14px] bg-transparent resize-y outline-none font-mono"
                  style={{ minHeight: '120px' }}
                />
              ) : (
                <div className="px-2 py-4 text-[14px] text-[var(--text-secondary)] min-h-[120px] italic">
                  Nothing to preview
                </div>
              )}
            </div>
            
            {/* Footer / Drag Drop mock */}
            <div className="px-3 py-2 bg-[var(--bg-primary)] border-t border-dashed border-[var(--border-color)] text-[12px] text-[var(--text-secondary)]">
              Attach files by dragging & dropping, selecting or pasting them. (Mock)
            </div>

          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <span className="text-[12px] text-[var(--text-secondary)] mr-auto">
              <span className="hidden sm:inline">Markdown is supported</span>
            </span>
            <button
              type="submit"
              disabled={loading}
              className="gh-btn-primary px-4 py-[5px] text-[14px] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Submit new issue"}
            </button>
          </div>

        </form>
      </div>

    </section>
  );
}