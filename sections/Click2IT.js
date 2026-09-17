"use client";

import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare, FaCode, FaRocket } from "react-icons/fa6";

const stats = [
  { value: "3+", label: "Projects Handed Over", note: "Delivered to production" },
  { value: "2", label: "Projects Running", note: "Active development" },
  { value: "01", label: "Role", note: "Web Developer" },
];

export default function Click2IT() {
  return (
    <section id="click2it" className="relative px-4 py-8 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#08080b]/85 p-6 shadow-[0_30px_100px_rgba(0,0,0,.4)] backdrop-blur-xl md:p-10"
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#E62429]/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-red-950/20 blur-3xl" />
          <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] [background-size:42px_42px]" />

          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.28em] text-red-400">
                <span className="h-px w-8 bg-[#E62429]" />
                Current Role / Field Work
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/10 text-[#ff5960] shadow-[0_0_30px_rgba(230,36,41,.12)]">
                  <FaCode />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[.2em] text-zinc-500">Web Developer at</p>
                  <h2 className="mt-1 text-4xl font-black tracking-[-.05em] text-white md:text-6xl">CLICK2IT</h2>
                </div>
              </div>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-400 md:text-base">
                Building and improving production web experiences with a focus on responsive interfaces,
                full-stack development, e-commerce workflows and real client delivery.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {[
                  "Production Work",
                  "Client Delivery",
                  "Full-Stack Development",
                  "E-commerce",
                ].map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/[.035] px-3 py-2 text-[10px] uppercase tracking-[.16em] text-zinc-400">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 p-4 transition-colors hover:border-red-500/30"
                >
                  <div>
                    <div className="text-3xl font-black tracking-tight text-white">{stat.value}</div>
                    <div className="mt-1 text-xs font-semibold text-zinc-300">{stat.label}</div>
                    <div className="mt-1 text-[10px] uppercase tracking-[.14em] text-zinc-600">{stat.note}</div>
                  </div>
                  {index === 0 ? <FaArrowUpRightFromSquare className="text-zinc-600 transition-colors group-hover:text-[#E62429]" /> : <FaRocket className="text-zinc-600 transition-colors group-hover:text-[#E62429]" />}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
