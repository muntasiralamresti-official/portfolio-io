"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LockKeyhole, ArrowRight } from "lucide-react";

export default function AdminLogin() {
  const [password,setPassword]=useState("");
  const [error,setError]=useState("");
  const [loading,setLoading]=useState(false);
  const router=useRouter();

  async function submit(e){
    e.preventDefault(); setLoading(true); setError("");
    const res=await fetch("/api/admin/auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password})});
    if(res.ok) router.replace("/admin");
    else {const data=await res.json().catch(()=>({})); setError(data.error||"Login failed");}
    setLoading(false);
  }

  return <main className="min-h-screen bg-[#050507] text-white flex items-center justify-center p-5">
    <div className="w-full max-w-md border border-white/10 bg-[#09090c] p-8 md:p-10">
      <div className="mb-8"><div className="text-[9px] uppercase tracking-[.4em] text-[#E62429]">MUNTASIR / CMS</div><h1 className="mt-3 text-4xl font-black uppercase tracking-[-.05em]">Admin Access.</h1><p className="mt-3 text-sm leading-6 text-zinc-500">Private control panel for your portfolio.</p></div>
      <form onSubmit={submit} className="space-y-4">
        <div className="relative"><LockKeyhole size={16} className="absolute left-4 top-4 text-zinc-600"/><input autoFocus type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Admin password" className="h-12 w-full border border-white/10 bg-black/30 pl-11 pr-4 text-sm outline-none focus:border-[#E62429]/60"/></div>
        {error && <div className="border border-red-500/20 bg-red-500/5 p-3 text-xs text-red-300">{error}</div>}
        <button disabled={loading} className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#E62429] text-xs font-bold uppercase tracking-[.2em] disabled:opacity-60">{loading?"Authenticating...":"Enter Admin"}<ArrowRight size={15}/></button>
      </form>
    </div>
  </main>
}