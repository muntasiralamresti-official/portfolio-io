"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MapPin, Mail, Link as LinkIcon, Building, Users, Disc3 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Sidebar() {
  const sidebarRef = useScrollReveal();
  const [stats, setStats] = useState({ followers: 0, following: 0, public_repos: 0 });
  const [spotifyData, setSpotifyData] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      const cacheKey = "github-profile-stats";
      const cached = localStorage.getItem(cacheKey);

      if (cached) {
        const { data, timestamp } = JSON.parse(cached);
        if (Date.now() - timestamp < 3600 * 1000) {
          setStats(data);
          return;
        }
      }

      try {
        const res = await fetch("https://api.github.com/users/muntasiralamresti-official");
        if (!res.ok) throw new Error("Failed to fetch");
        const json = await res.json();
        
        const fetchedStats = {
          followers: json.followers || 0,
          following: json.following || 0,
          public_repos: json.public_repos || 0,
        };

        setStats(fetchedStats);
        localStorage.setItem(cacheKey, JSON.stringify({
          data: fetchedStats,
          timestamp: Date.now()
        }));
      } catch (err) {
        console.error("Failed to fetch GitHub stats", err);
      }
    };

    const fetchSpotify = async () => {
      try {
        const res = await fetch("/api/spotify");
        if (res.ok) {
          const data = await res.json();
          setSpotifyData(data);
        }
      } catch (err) {
        console.error("Failed to fetch Spotify status", err);
      }
    };

    fetchStats();
    fetchSpotify();
  }, []);

  return (
    <aside ref={sidebarRef} className="w-full lg:w-[296px] shrink-0">
      <div className="lg:sticky lg:top-[90px]">
        {/* Profile Image & Name */}
        <div className="flex items-center gap-4 lg:block lg:gap-0 mb-4">
          <div className="relative w-24 h-24 lg:w-full lg:h-auto lg:aspect-square rounded-full border border-[var(--border-color)] overflow-hidden shrink-0 z-10 bg-[var(--bg-primary)]">
            <Image
              src="/muntasir.png"
              alt="Muntasir Alam Resti"
              fill
              className="object-cover"
              priority
            />
            {/* PRO Badge overlay on image */}
            {/* <div className="absolute bottom-[8%] left-[12%] hidden lg:flex">
              <span className="px-2 py-0.5 rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)] text-[12px] font-semibold text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors cursor-default shadow-sm">
                PRO
              </span>
            </div> */}
          </div>
          <div className="lg:mt-4">
            <h1 className="text-2xl lg:text-[26px] font-semibold text-[var(--text-primary)] leading-tight">
              Muntasir Alam Resti
            </h1>
            <h2 className="text-xl text-[var(--text-secondary)] font-light">
              muntasiralamresti-official
            </h2>
          </div>
        </div>

        {/* Bio */}
        <div className="mb-4">
          <p className="text-[16px] text-[var(--text-primary)]">
            Frontend Developer passionate about crafting modern web experiences. UI/UX Designer & Full Stack Learner.
          </p>
        </div>

        {/* Action Button */}
        <div className="mb-4">
          <a
            href="#contact"
            className="block w-full gh-btn-secondary py-[5px] text-sm text-center"
          >
            Contact Me
          </a>
        </div>

        {/* Followers / Stats */}
        <div className="flex items-center gap-1 text-[14px] text-[var(--text-secondary)] mb-4 hover:text-[var(--accent)] transition-colors cursor-pointer w-fit">
          <Users size={16} />
          <span className="font-semibold text-[var(--text-primary)] ml-1">{stats.followers}</span> followers
          <span className="mx-1">·</span>
          <span className="font-semibold text-[var(--text-primary)]">{stats.following}</span> following
        </div>

        {/* Info List */}
        <ul className="text-[14px] text-[var(--text-primary)] space-y-2 mb-6">
          <li className="flex items-center gap-2">
            <Building size={16} className="text-[var(--text-secondary)] shrink-0" />
            <span className="font-semibold">Freelance</span>
          </li>
          <li className="flex items-center gap-2">
            <MapPin size={16} className="text-[var(--text-secondary)] shrink-0" />
            <span>Dhaka, Bangladesh</span>
          </li>
          <li className="flex items-center gap-2">
            <Mail size={16} className="text-[var(--text-secondary)] shrink-0" />
            <a href="mailto:contact@muntasiralamresti.dev" className="hover:text-[var(--accent)] hover:underline break-all">
              contact@muntasiralamresti.dev
            </a>
          </li>
          <li className="flex items-center gap-2">
            <LinkIcon size={16} className="text-[var(--text-secondary)] shrink-0" />
            <a href="https://muntasiralamresti.vercel.app" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-[var(--accent)] hover:underline">
              muntasiralamresti.vercel.app
            </a>
          </li>
          <li className="flex items-center gap-2">
            <FaGithub size={16} className="text-[var(--text-secondary)] shrink-0" />
            <a href="https://github.com/muntasiralamresti-official" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] hover:underline">
              @muntasiralamresti-official
            </a>
          </li>
          <li className="flex items-center gap-2">
            <FaLinkedin size={16} className="text-[var(--text-secondary)] shrink-0" />
            <a href="https://linkedin.com/in/muntasir-alam-resti" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] hover:underline">
              in/muntasir-alam-resti
            </a>
          </li>
        </ul>

        {/* Highlights / Badges */}
        <div className="border-t border-[var(--border-color)] pt-4 mb-6">
          <h3 className="font-semibold text-[16px] text-[var(--text-primary)] mb-3">Highlights</h3>
          <div className="flex flex-wrap gap-2">
            {["React", "Next.js", "Tailwind CSS", "UI/UX", "JavaScript"].map((tag) => (
              <span key={tag} className="px-2.5 py-1 text-xs font-medium bg-[var(--accent)] bg-opacity-10 text-black rounded-full border border-[var(--accent)] border-opacity-20 hover:bg-[var(--accent)] hover:text-white transition-colors cursor-pointer">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Spotify Currently Playing Widget */}
        <div className="pt-4 border-t border-[var(--border-color)]">
          <h2 className="text-[16px] font-semibold text-[var(--text-primary)] mb-3 flex items-center gap-2">
            Currently Playing
          </h2>
          <div className="p-3 flex items-center gap-3 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg">
            {spotifyData?.isPlaying ? (
              <>
                <img 
                  src={spotifyData.albumImageUrl} 
                  alt={spotifyData.album} 
                  className="w-10 h-10 rounded-sm shadow-sm"
                />
                <div className="min-w-0 flex-1">
                  <a 
                    href={spotifyData.songUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[14px] font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] hover:underline truncate block"
                  >
                    {spotifyData.title}
                  </a>
                  <p className="text-[12px] text-[var(--text-secondary)] truncate">
                    {spotifyData.artist}
                  </p>
                </div>
                <Disc3 size={16} className="text-green-500 animate-spin flex-shrink-0" style={{ animationDuration: '3s' }} />
              </>
            ) : (
              <div className="flex items-center gap-3 w-full opacity-60">
                <div className="w-10 h-10 rounded-sm bg-[var(--bg-primary)] border border-[var(--border-color)] flex items-center justify-center">
                  <Disc3 size={20} className="text-[var(--text-secondary)]" />
                </div>
                <div className="flex-1">
                  <p className="text-[14px] font-medium text-[var(--text-primary)]">Not Playing</p>
                  <p className="text-[12px] text-[var(--text-secondary)]">Spotify Offline</p>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </aside>
  );
}
