"use client";
import { useState } from "react";
import { CheckCircle2, Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import portfolio from "@/data/portfolio.json";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const c = portfolio.contact;
  const s = portfolio.socials;

  const submit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(false);
    const form = event.currentTarget;
    try {
      await fetch("https://script.google.com/macros/s/AKfycbxmmWNAl3s2LthnZzZ3Aljg7SngM91DzPw1hpF2Bmp_GSR4Gucpsmt4yohyMkLQXam3tg/exec", {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({
          name: form.elements.name?.value || "",
          email: form.elements.email?.value || "",
          message: form.elements.message?.value || "",
        }),
      });
      setSuccess(true);
      form.reset();
      setTimeout(() => setSuccess(false), 5000);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="neo-section border-t border-black/10">
      <div className="neo-container">
        <div className="neo-dark overflow-hidden rounded-[30px]">
          <div className="grid lg:grid-cols-[.85fr_1.15fr]">
            <div className="p-7 md:p-12">
              <div className="neo-kicker text-neutral-500">10 / Contact</div>
              <h2 className="mt-8 text-[clamp(4rem,8vw,8rem)] font-black leading-[.78] tracking-[-.08em]">
                Let's<br /><span className="text-[#c7ff32]">build.</span>
              </h2>
              <p className="mt-8 max-w-md text-sm leading-7 text-neutral-400">{c.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`mailto:${c.email}`} className="neo-button neo-button-primary">Email <Mail size={14}/></a>
                <a href={s.github} target="_blank" rel="noreferrer" className="neo-button border-white/20 text-white">GitHub <FaGithub/></a>
                <a href={s.linkedin} target="_blank" rel="noreferrer" className="neo-button border-white/20 text-white">LinkedIn <FaLinkedin/></a>
              </div>
            </div>
            <div className="border-t border-white/10 p-7 md:p-12 lg:border-l lg:border-t-0">
              <form onSubmit={submit}>
                <div className="grid gap-4 md:grid-cols-2">
                  <input name="name" required placeholder="Your name" className="h-14 rounded-xl border border-white/10 bg-white/[.04] px-4 text-sm text-white outline-none focus:border-[#c7ff32]"/>
                  <input name="email" type="email" required placeholder="Your email" className="h-14 rounded-xl border border-white/10 bg-white/[.04] px-4 text-sm text-white outline-none focus:border-[#c7ff32]"/>
                </div>
                <textarea name="message" required rows="7" placeholder="Tell me what you want to build..." className="mt-4 w-full resize-none rounded-xl border border-white/10 bg-white/[.04] p-4 text-sm text-white outline-none focus:border-[#c7ff32]"/>
                <button disabled={loading} className="neo-button neo-button-primary mt-5">{loading ? "Sending..." : "Send message"} <Send size={14}/></button>
                {success && <div className="mt-5 flex items-center gap-2 text-sm text-[#c7ff32]"><CheckCircle2 size={16}/> Message received.</div>}
                {error && <div className="mt-5 text-sm text-red-300">Could not send. Please email directly.</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}