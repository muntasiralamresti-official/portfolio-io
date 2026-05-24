"use client";

import { useState } from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import Image from "next/image";

import {
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  const navItems = [
    "About",
    "Skills",
    "Projects",
    "Contact",
  ];

  return (

    <motion.nav
      initial={{
        y: -100,
        opacity: 0,
      }}

      animate={{
        y: 0,
        opacity: 1,
      }}

      transition={{
        duration: 0.8,
      }}

      className="
        fixed
        top-0
        left-0
        w-full
        z-50
      "
    >

      {/* Navbar Container */}
      <div
        className="
          container
          mx-auto

          mt-5

          px-5
          md:px-8

          py-4

          flex
          items-center
          justify-between

          rounded-3xl

          border
          border-white/10

          bg-black/30

          backdrop-blur-2xl

          shadow-[0_0_40px_rgba(34,211,238,0.05)]
        "
      >

        {/* LEFT */}
        <div className="flex items-center gap-4">

          {/* Logo */}
          <div className="relative">

            <Image
              src="/muntasir-logo.png"

              alt="Muntasir Resti Logo"

              width={52}
              height={52}

              priority

              className="
                object-contain

                drop-shadow-[0_0_14px_rgba(34,211,238,0.45)]

                hover:scale-105

                transition
                duration-300
              "
            />

          </div>

          {/* Name */}
          <div className="hidden sm:block">

            <h2 className="text-lg font-bold tracking-wide">

              <span className="text-white">
                Muntasir
              </span>

              <span className="gradient-text">
                {" "}Alam
              </span>

            </h2>

            <p className="text-xs text-gray-500 font-mono">

              Frontend Developer

            </p>

          </div>

        </div>

        {/* DESKTOP NAV */}
        <div
          className="
            hidden
            md:flex
            items-center
            gap-3

            text-sm
            font-mono
          "
        >

          {navItems.map((item, index) => (

            <a
              key={index}

              href={`#${item.toLowerCase()}`}

              className="
                group
                relative

                px-5
                py-3

                rounded-2xl

                border
                border-white/5

                bg-white/[0.03]

                overflow-hidden

                transition-all
                duration-300

                hover:border-cyan-400/40
                hover:bg-cyan-400/5

                hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]
              "
            >

              {/* Glow */}
              <div
                className="
                  absolute
                  inset-0

                  opacity-0
                  group-hover:opacity-100

                  transition
                  duration-500

                  bg-gradient-to-r
                  from-cyan-400/10
                  to-purple-500/10
                "
              />

              {/* Content */}
              <div className="relative flex items-center gap-2">

                <span className="text-cyan-400">
                  &lt;/
                </span>

                <span
                  className="
                    text-gray-300

                    group-hover:text-white

                    transition
                    duration-300
                  "
                >
                  {item}
                </span>

                <span
                  className="
                    opacity-0

                    group-hover:opacity-100

                    text-cyan-400

                    animate-pulse
                  "
                >
                  _
                </span>

                <span className="text-purple-400 opacity-70">
                  &gt;
                </span>

              </div>

            </a>

          ))}

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}

          className="
            md:hidden

            w-12
            h-12

            rounded-2xl

            border
            border-white/10

            bg-white/[0.03]

            flex
            items-center
            justify-center

            text-cyan-400

            hover:border-cyan-400/40

            active:scale-95

            transition-all
            duration-300
          "
        >

          {open
            ? <X size={24} />
            : <Menu size={24} />
          }

        </button>

      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>

        {open && (

          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            exit={{
              opacity: 0,
              y: -20,
            }}

            transition={{
              duration: 0.3,
            }}

            className="
              md:hidden

              max-w-7xl
              mx-auto

              mt-4

              px-5
            "
          >

            <div
              className="
                rounded-3xl

                border
                border-white/10

                bg-black/40

                backdrop-blur-2xl

                overflow-hidden

                shadow-[0_0_40px_rgba(34,211,238,0.05)]
              "
            >

              {navItems.map((item, index) => (

                <motion.a
                  key={index}

                  href={`#${item.toLowerCase()}`}

                  onClick={() => setOpen(false)}

                  whileTap={{
                    scale: 0.97,
                  }}

                  className="
                    group

                    flex
                    items-center
                    gap-3

                    px-6
                    py-5

                    border-b
                    border-white/5

                    text-gray-300

                    active:bg-cyan-400/10
                    active:scale-[0.98]

                    transition-all
                    duration-300
                  "
                >

                  {/* Code Symbol */}
                  <span className="text-cyan-400 font-mono">
                    &lt;/
                  </span>

                  {/* Text */}
                  <span
                    className="
                      group-active:text-white
                    "
                  >
                    {item}
                  </span>

                  {/* End Symbol */}
                  <span className="text-purple-400 font-mono">
                    &gt;
                  </span>

                </motion.a>

              ))}

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.nav>
  );
}