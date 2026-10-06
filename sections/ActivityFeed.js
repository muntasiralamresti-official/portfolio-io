"use client";
import { useEffect, useState } from "react";
import { ArrowUpRight, GitBranch, GitCommit, GitPullRequest, Star } from "lucide-react";

export default function ActivityFeed() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/muntasiralamresti-official/events/public?per_page=15")
      .then((r) => (r.ok ? r.json() : []))
      .then((data) => {
        const allowed = new Set(["PushEvent", "WatchEvent", "PullRequestEvent", "CreateEvent"]);
        setEvents(
          (Array.isArray(data) ? data : [])
            .filter((e) => allowed.has(e?.type))
            .slice(0, 6)
            .map((e) => ({
              id: e.id,
              repo: e?.repo?.name || "unknown",
              type: e.type,
              date: e?.created_at ? new Date(e.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric" }) : "",
            }))
        );
      })
      .catch(() => {});
  }, []);

  const icon = (type) => {
    if (type === "WatchEvent") return <Star size={14} />;
    if (type === "PullRequestEvent") return <GitPullRequest size={14} />;
    if (type === "CreateEvent") return <GitBranch size={14} />;
    return <GitCommit size={14} />;
  };

  if (!events.length) return null;

  return (
    <section className="neo-section pt-0">
      <div className="neo-container">
        <div className="neo-dark rounded-[28px] p-7 md:p-10">
          <div className="mb-10 flex items-end justify-between gap-5 border-b border-white/10 pb-5">
            <div>
              <div className="neo-kicker text-neutral-500">08 / Live feed</div>
              <h2 className="mt-4 text-4xl font-black md:text-6xl">Recent moves.</h2>
            </div>
            <span className="neo-pill hidden border-white/20 text-neutral-400 md:block">GitHub uplink</span>
          </div>
          <div className="divide-y divide-white/10">
            {events.map((event) => (
              <a key={event.id} href={`https://github.com/${event.repo}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 py-5 text-sm text-neutral-300 transition hover:text-[#c7ff32]">
                <span className="text-[#c7ff32]">{icon(event.type)}</span>
                <span className="flex-1"><b className="text-white">muntasiralamresti-official</b> updated <b className="text-white">{event.repo}</b></span>
                <span className="text-[9px] uppercase tracking-[.15em] text-neutral-600">{event.date}</span>
                <ArrowUpRight size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}