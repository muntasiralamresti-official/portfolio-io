"use client";

import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-5xl mx-auto glass rounded-3xl p-10">
        <h2 className="text-4xl font-bold gradient-text mb-10">
          Contact Me
        </h2>

        <form className="space-y-6">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-transparent border border-white/10 p-4 rounded-xl"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            className="w-full bg-transparent border border-white/10 p-4 rounded-xl"
          />

          <button className="px-8 py-4 rounded-xl bg-cyan-500 text-black font-semibold glow">
            Send Message
          </button>
        </form>

        <div className="flex gap-5 mt-10">
          <FaGithub />
<FaLinkedin />
<FaTelegram />
        </div>
      </div>
    </section>
  );
}