"use client";
import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Mail, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import portfolio from "@/data/portfolio.json";

export default function Contact() {
  const [loading,setLoading]=useState(false);
  const [success,setSuccess]=useState(false);
  const [error,setError]=useState(false);
  const c=portfolio.contact;
  const s=portfolio.socials;

  const submit=async(event)=>{
    event.preventDefault();
    setLoading(true);
    setError(false);
    const form=event.currentTarget;
    try{
      await fetch("https://script.google.com/macros/s/AKfycbxmmWNAl3s2LthnZzZ3Aljg7SngM91DzPw1hpF2Bmp_GSR4Gucpsmt4yohyMkLQXam3tg/exec",{
        method:"POST",mode:"no-cors",
        body:JSON.stringify({name:form.elements.name?.value||"",email:form.elements.email?.value||"",message:form.elements.message?.value||""})
      });
      setSuccess(true);
      form.reset();
      setTimeout(()=>setSuccess(false),5000);
    }catch{setError(true)}
    finally{setLoading(false)}
  };

  return (
    <section id="contact" className="neo-section">
      <div className="neo-container">
        <div className="mb-12 flex items-end justify-between gap-6 border-b border-black/10 pb-6">
          <div>
            <div className="neo-kicker">10 / Contact</div>
            <h2 className="neo-title mt-5">Have an<br/><span className="text-neutral-400">idea?</span></h2>
          </div>
          <div className="hidden text-right md:block">
            <div className="neo-kicker">Open channel</div>
            <div className="mt-2 flex items-center gap-2 text-sm font-bold"><span className="h-2 w-2 rounded-full bg-[#9acd00]"/> Available for work</div>
          </div>
        </div>

        <div className="grid overflow-hidden rounded-[30px] border border-black/10 bg-white lg:grid-cols-[.8fr_1.2fr]">
          <div className="neo-dark relative overflow-hidden p-7 md:p-12">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#c7ff32]/10 blur-3xl"/>
            <div className="relative">
              <div className="neo-kicker text-neutral-500">Let's make something useful.</div>
              <p className="mt-7 max-w-md text-sm leading-8 text-neutral-400">{c.description}</p>

              <div className="mt-12 space-y-5 border-t border-white/10 pt-6">
                <a href={`mailto:${c.email}`} className="group flex items-center justify-between border-b border-white/10 pb-5 text-white">
                  <span><span className="neo-kicker text-neutral-500">Email</span><span className="mt-2 block text-sm font-semibold">{c.email}</span></span>
                  <ArrowUpRight className="text-neutral-500 transition group-hover:text-[#c7ff32] group-hover:rotate-45"/>
                </a>
                <div className="flex items-center gap-3 text-sm text-neutral-300"><MapPin size={16} className="text-[#c7ff32]"/> Bangladesh</div>
              </div>

              <div className="mt-10 flex gap-3">
                <a href={s.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-neutral-300 transition hover:border-[#c7ff32] hover:text-[#c7ff32]"><FaGithub/></a>
                <a href={s.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-neutral-300 transition hover:border-[#c7ff32] hover:text-[#c7ff32]"><FaLinkedin/></a>
              </div>
            </div>
          </div>

          <div className="p-7 md:p-12">
            <div className="mb-8 flex items-center justify-between">
              <div><div className="text-xl font-black">Start a conversation</div><div className="mt-1 text-xs text-neutral-500">Tell me about the project, timeline and goal.</div></div>
              <span className="neo-pill hidden sm:block">01 / 03</span>
            </div>

            <form onSubmit={submit}>
              <div className="grid gap-5 md:grid-cols-2">
                <label className="block"><span className="neo-kicker">Name</span><input name="name" required placeholder="Your name" className="mt-2 h-14 w-full border-b border-black/15 bg-transparent px-0 text-sm outline-none transition placeholder:text-neutral-400 focus:border-black"/></label>
                <label className="block"><span className="neo-kicker">Email</span><input name="email" type="email" required placeholder="you@email.com" className="mt-2 h-14 w-full border-b border-black/15 bg-transparent px-0 text-sm outline-none transition placeholder:text-neutral-400 focus:border-black"/></label>
              </div>
              <label className="mt-8 block"><span className="neo-kicker">Project brief</span><textarea name="message" required rows="6" placeholder="What are you building?" className="mt-2 w-full resize-none border-b border-black/15 bg-transparent px-0 py-4 text-sm outline-none transition placeholder:text-neutral-400 focus:border-black"/></label>
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                <span className="text-[10px] font-bold uppercase tracking-[.12em] text-neutral-400">Reply within {c.replyWindow}</span>
                <button disabled={loading} className="neo-button neo-button-dark">{loading?"Sending...":"Send inquiry"} <Send size={14}/></button>
              </div>
              {success&&<div className="mt-6 flex items-center gap-2 text-sm font-semibold text-green-700"><CheckCircle2 size={16}/> Thanks — your message is on its way.</div>}
              {error&&<div className="mt-6 text-sm text-red-600">Something went wrong. Please email directly.</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}