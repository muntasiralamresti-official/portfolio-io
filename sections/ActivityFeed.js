"use client";

import { useEffect, useState } from "react";
import { GitCommit, Star, GitMerge, GitPullRequest, GitBranch } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function ActivityFeed() {
  const containerRef = useScrollReveal();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      const cacheKey = "github-activity-feed";
      const cached = localStorage.getItem(cacheKey);

      if (cached) {
        const { data, timestamp } = JSON.parse(cached);
        // 10 minute cache for feed
        if (Date.now() - timestamp < 600 * 1000) {
          setEvents(data);
          setLoading(false);
          return;
        }
      }

      try {
        const res = await fetch("https://api.github.com/users/muntasiralamresti-official/events/public?per_page=15");
        if (!res.ok) throw new Error("Failed to fetch");
        
        const data = await res.json();
        
        // Filter and format the events
        const formattedEvents = data
          .filter(e => ["PushEvent", "WatchEvent", "PullRequestEvent", "CreateEvent"].includes(e.type))
          .slice(0, 8) // Take top 8
          .map(e => {
            let action = "did something";
            let iconType = "default";
            
            if (e.type === "PushEvent") {
              action = `pushed to ${e.payload.ref?.replace('refs/heads/', '')}`;
              iconType = "push";
            } else if (e.type === "WatchEvent") {
              action = "starred";
              iconType = "watch";
            } else if (e.type === "PullRequestEvent") {
              action = `${e.payload.action} a pull request in`;
              iconType = "pull_request";
            } else if (e.type === "CreateEvent") {
              action = `created a ${e.payload.ref_type} in`;
              iconType = "create";
            }

            return {
              id: e.id,
              repo: e.repo.name,
              action,
              date: new Date(e.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
              iconType
            };
          });

        setEvents(formattedEvents);
        localStorage.setItem(cacheKey, JSON.stringify({
          data: formattedEvents,
          timestamp: Date.now()
        }));
      } catch (error) {
        console.error("Failed to fetch GitHub events", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const renderIcon = (type) => {
    switch (type) {
      case "push": return <GitCommit size={14} className="text-green-600 dark:text-green-400" />;
      case "watch": return <Star size={14} className="text-yellow-500" />;
      case "pull_request": return <GitPullRequest size={14} className="text-purple-500" />;
      case "create": return <GitBranch size={14} className="text-blue-500" />;
      default: return <GitCommit size={14} className="text-[var(--text-secondary)]" />;
    }
  };

  if (loading) {
    return (
      <section ref={containerRef}>
        <h2 className="text-[16px] font-semibold text-[var(--text-primary)] mb-4">Recent Activity</h2>
        <div className="animate-pulse space-y-4 relative pl-4">
          {[1,2,3].map(i => (
             <div key={i} className="pl-6 pb-4">
                <div className="h-4 w-48 bg-[var(--border-muted)] rounded mb-2"></div>
                <div className="h-3 w-32 bg-[var(--border-muted)] rounded"></div>
             </div>
          ))}
        </div>
      </section>
    );
  }

  if (events.length === 0) return null;

  return (
    <section id="activity" ref={containerRef}>
      <h2 className="text-[16px] font-semibold text-[var(--text-primary)] mb-4">
        Recent Activity
      </h2>

      <div className="relative pl-4 mt-2">
        {events.map((item, index) => (
          <div key={item.id} className="timeline-item relative pb-6 pl-8 group">
            {/* Timeline Dot */}
            <div className="timeline-dot bg-[var(--bg-primary)] border-[var(--border-color)] group-hover:border-[var(--text-secondary)] transition-colors">
              {renderIcon(item.iconType)}
            </div>

            {/* Content */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-[14px]">
              <span className="text-[var(--text-primary)]">
                muntasiralamresti-official {item.action}
              </span>
              <a 
                href={`https://github.com/${item.repo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[var(--accent)] hover:underline break-words"
              >
                {item.repo}
              </a>
              <span className="text-[12px] text-[var(--text-secondary)] sm:ml-auto">
                {item.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
