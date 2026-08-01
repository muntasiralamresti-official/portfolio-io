// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import dynamic from "next/dynamic";
// import { ArrowRight } from "lucide-react";
// import { useScrollReveal } from "../hooks/useScrollReveal";

// const TypeAnimation = dynamic(
//   () => import("react-type-animation").then((mod) => mod.TypeAnimation),
//   { ssr: false }
// );

// export default function Hero() {
//   const containerRef = useScrollReveal();

//   return (
//     <section className="relative overflow-hidden px-4 py-10 md:px-6 md:py-14" ref={containerRef}>
//       <div className="relative mx-auto max-w-[1300px] overflow-hidden rounded-[36px] border border-[var(--border-color)] bg-[var(--card-bg)] shadow-[var(--shadow-soft)]">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.16),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.16),_transparent_32%)]" />

//         <div className="relative z-10 grid gap-10 px-6 py-10 md:grid-cols-[1.05fr_0.95fr] md:px-10 lg:px-14">
//           <div className="space-y-8">
//             <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.3em] text-[var(--text-secondary)]">
//               Premium frontend systems
//             </div>

//             <div className="space-y-5">
//               <h1 className="text-4xl font-black leading-[0.95] tracking-[-0.04em] text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
//                 I build premium web interfaces for bold brands.
//               </h1>

//               <div className="text-[1.15rem] font-semibold leading-snug text-[var(--text-secondary)] md:text-2xl">
//                 <TypeAnimation
//                   sequence={[
//                     "High-conversion product pages", 2000,
//                     "Responsive SaaS dashboards", 2000,
//                     "Fast, polished brand experiences", 2000,
//                   ]}
//                   speed={50}
//                   repeat={Infinity}
//                   wrapper="span"
//                   cursor={false}
//                   className="gradient-text"
//                 />
//               </div>

//               <p className="max-w-2xl text-base leading-7 text-[var(--text-secondary)] md:text-lg">
//                 I turn product ideas into fast, modern frontends with intuitive navigation, elegant visuals, and clean engineering.
//               </p>
//             </div>

//             <div className="flex flex-wrap gap-4">
//               <Link
//                 href="#projects"
//                 className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[rgba(9,105,218,0.24)] transition-all hover:-translate-y-0.5"
//               >
//                 View projects
//                 <ArrowRight size={16} />
//               </Link>
//               <Link
//                 href="#contact"
//                 className="inline-flex items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] px-5 py-3 text-sm font-semibold text-[var(--text-primary)] transition hover:border-[var(--accent)]"
//               >
//                 Start a project
//               </Link>
//             </div>

//             <div className="grid gap-3 sm:grid-cols-3">
//               <div className="rounded-[26px] border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5">
//                 <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--text-secondary)]">Focus</p>
//                 <p className="mt-3 text-sm font-semibold text-[var(--text-primary)]">Product-first UI</p>
//               </div>
//               <div className="rounded-[26px] border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5">
//                 <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--text-secondary)]">Stack</p>
//                 <p className="mt-3 text-sm font-semibold text-[var(--text-primary)]">Next.js & React</p>
//               </div>
//               <div className="rounded-[26px] border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5">
//                 <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--text-secondary)]">Output</p>
//                 <p className="mt-3 text-sm font-semibold text-[var(--text-primary)]">Launch-ready builds</p>
//               </div>
//             </div>
//           </div>

//           <div className="relative flex items-center justify-center">
//             <div className="absolute inset-6 rounded-[32px] bg-gradient-to-br from-[var(--accent)]/20 via-transparent to-[var(--accent-secondary)]/20 blur-3xl" />
//             <div className="relative w-full max-w-[360px] rounded-[32px] border border-[var(--border-color)] bg-[var(--bg-secondary)] p-3 shadow-[var(--shadow-strong)]">
//               <div className="relative aspect-[4/5] overflow-hidden rounded-[28px]">
//                 <Image
//                   src="/muntasir.png"
//                   alt="Muntasir Alam Resti"
//                   fill
//                   className="object-cover"
//                   priority
//                 />
//               </div>

//               <div className="mt-4 space-y-3">
//                 <div className="rounded-[24px] border border-[var(--border-color)] bg-[var(--card-bg)] p-4">
//                   <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--text-secondary)]">Featured</p>
//                   <p className="mt-2 text-sm font-semibold text-[var(--text-primary)]">Shopora Commerce</p>
//                   <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
//                     Fast checkout, polished interactions, and a premium brand feel.
//                   </p>
//                 </div>
//                 <div className="flex flex-wrap gap-2">
//                   <span className="rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] px-3 py-2 text-[11px] uppercase tracking-[0.2em] text-[var(--text-secondary)]">
//                     Launch-ready
//                   </span>
//                   <span className="rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] px-3 py-2 text-[11px] uppercase tracking-[0.2em] text-[var(--text-secondary)]">
//                     Elegant flow
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
