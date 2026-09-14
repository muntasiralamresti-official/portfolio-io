"use client";

import { useEffect, useState } from "react";
import { GitBranch, GitCommit, GitPullRequest, Radio, Star } from "lucide-react";

export default function ActivityFeed() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cacheKey = "github-activity-feed";
    const load = async () => {
      try {
        const cached = typeof window !== "undefined" ? localStorage.getItem(cacheKey) : null;
        if (cached) {
          const parsed = JSON.parse(cached);
          if (Array.isArray(parsed?.data) && Date.now() - parsed.timestamp < 600000) {
            setEvents(parsed.data); setLoading(false); return;
          }
        }
      } catch {}
      try {
        const res = await fetch("https://api.github.com/users/muntasiralamresti-official/events/public?per_page=15");
        if (!res.ok) return;
        const data = await res.json();
        const allowed = new Set(["PushEvent", "WatchEvent", "PullRequestEvent", "CreateEvent"]);
        const formatted = (Array.isArray(data) ? data : []).filter((e) => allowed.has(e?.type)).slice(0, 8).map((e) => {
          const ref = e?.payload?.ref;
          const branch = typeof ref === "string" ? ref.replace("refs/heads/", "") : "";
          let action = "updated";
          let icon = "push";
          if (e.type === "PushEvent") action = branch ? `pushed to ${branch}` : "pushed";
          if (e.type === "WatchEvent") { action = "starred"; icon = "watch"; }
          if (e.type === "PullRequestEvent") { action = `${e?.payload?.action || "updated"} a pull request in`; icon = "pull"; }
          if (e.type === "CreateEvent") { action = `created a ${e?.payload?.ref_type || "resource"} in`; icon = "branch"; }
          return { id: e?.id, repo: e?.repo?.name || "unknown", action, icon, date: e?.created_at ? new Date(e.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric" }) : "" };
        });
        setEvents(formatted);
        try { localStorage.setItem(cacheKey, JSON.stringify({ data: formatted, timestamp: Date.now() })); } catch {}
      } catch {}
      finally { setLoading(false); }
    };
    load();
  }, []);

  const icon = (type) => type === "watch" ? <Star size={14} /> : type === "pull" ? <GitPullRequest size={14} /> : type === "branch" ? <GitBranch size={14} /> : <GitCommit size={14} />;
  if (loading) return <section id="activity" className="relative z-10 px-4 py-28 md:px-8 md:py-40"><div className="mx-auto max-w-[1400px] animate-pulse text-[10px] uppercase tracking-[.35em] text-zinc-700">Receiving city signal...</div></section>;
  if (!events.length) return null;

  return <section id="activity" className="relative z-10 overflow-hidden px-4 py-28 md:px-8 md:py-40">
    <div className="mx-auto max-w-[1400px]">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-5"><div><div className="mb-5 flex items-center gap-3 text-[9px] uppercase tracking-[.4em] text-zinc-600"><Radio size={12} className="text-[#E62429]" /> 005 / live city signal</div><h2 className="text-[clamp(4rem,9vw,8rem)] font-black uppercase leading-[.74] tracking-[-.08em] text-white">Recent <span className="text-[#E62429]">Moves.</span></h2></div><div className="flex items-center gap-2 text-[8px] uppercase tracking-[.3em] text-zinc-600"><span className="h-1.5 w-1.5 rounded-full bg-[#E62429] shadow-[0_0_12px_#E62429]" /> github uplink</div></div>
      <div className="relative border-l border-[#E62429]/25 pl-7 md:pl-10">{events.map((item, i) => <a key={item.id} href={`https://github.com/${item.repo}`} target="_blank" rel="noreferrer" className="group relative block border-b border-white/[.06] py-6 first:pt-2 hover:bg-white/[.015]">
        <span className="absolute -left-[34px] top-8 flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-[#07080b] text-[#E62429] transition group-hover:border-[#E62429]/60 group-hover:shadow-[0_0_25px_rgba(230,36,41,.2)] md:-left-[47px]">{icon(item.icon)}</span>
        <div className="grid gap-2 md:grid-cols-[1fr_auto] md:items-center"><div><div className="text-[10px] uppercase tracking-[.22em] text-zinc-600">signal {String(i + 1).padStart(2, "0")} / {item.date}</div><div className="mt-2 text-sm text-zinc-300"><span className="font-semibold text-white">muntasiralamresti-official</span> {item.action} <span className="font-semibold text-[#E62429] transition group-hover:text-white">{item.repo}</span></div></div><span className="text-[8px] uppercase tracking-[.3em] text-zinc-700">open transmission →</span></div>
      </a>)}</div>
    </div>
  </section>;
}
