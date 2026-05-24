"use client";

import Link from "next/link";

import Image from "next/image";

import dynamic from "next/dynamic";

import {
  LazyMotion,
  domAnimation,
  m,
} from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaDribbble,
} from "react-icons/fa";

/* Dynamic Type Animation */
const TypeAnimation = dynamic(
  () =>
    import("react-type-animation").then(
      (mod) => mod.TypeAnimation
    ),

  {
    ssr: false,
  }
);

export default function Hero() {

  const socials = [

    {
      icon: <FaGithub size={18} />,

      link:
        "https://github.com/muntasiralamresti-official",

      label:
        "GitHub Profile",
    },

    {
      icon: <FaLinkedin size={18} />,

      link:
        "https://www.linkedin.com/in/muntasir-alam-resti",

      label:
        "LinkedIn Profile",
    },

    {
      icon: <FaDribbble size={18} />,

      link:
        "https://dribbble.com/muntasir-alam-resti-",

      label:
        "Dribbble Profile",
    },

  ];

  return (

    <LazyMotion features={domAnimation}>

      <section
        className="
          relative

          min-h-screen

          overflow-hidden

          flex
          items-center
          justify-center

          px-6
          pt-32
          pb-10
        "
      >

        {/* Grid Background */}
        <div
          aria-hidden="true"

          className="
            absolute
            inset-0

            bg-grid

            opacity-20
          "
        />

        {/* Glow */}
        <div
          aria-hidden="true"

          className="
            absolute

            top-[-180px]
            left-[-100px]

            w-[300px]
            h-[300px]

            bg-cyan-500/10

            blur-[70px]

            rounded-full
          "
        />

        {/* Main */}
        <div
          className="
            relative
            z-10

            w-full

            container
            mx-auto

            grid
            lg:grid-cols-[1.3fr_0.7fr]

            gap-8
            xl:gap-16

            items-center
          "
        >

          {/* LEFT SIDE */}
          <m.div
            initial={{
              opacity: 0,
              x: -40,
            }}

            animate={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              duration: 0.7,
            }}

            className="
              glass

              border
              border-white/10

              rounded-[30px]

              overflow-hidden

              shadow-[0_0_25px_rgba(34,211,238,0.05)]
            "
          >

            <div className="p-8 md:p-16">

              {/* Terminal Header */}
              <div
                className="
                  flex
                  items-center
                  justify-between

                  border-b
                  border-white/10

                  pb-5
                  mb-8
                "
              >

                <div className="flex gap-2">

                  <div
                    aria-hidden="true"

                    className="
                      w-3
                      h-3

                      rounded-full

                      bg-red-400
                    "
                  />

                  <div
                    aria-hidden="true"

                    className="
                      w-3
                      h-3

                      rounded-full

                      bg-yellow-400
                    "
                  />

                  <div
                    aria-hidden="true"

                    className="
                      w-3
                      h-3

                      rounded-full

                      bg-green-400
                    "
                  />

                </div>

                <p className="text-xs text-gray-400 font-mono">

                  muntasir-alam-resti.dev

                </p>

              </div>

              {/* Content */}
              <div className="font-mono space-y-6">

                {/* Small Intro */}
                <p className="text-gray-400">

                  / Frontend Developer

                </p>

                {/* Intro */}
                <p className="text-cyan-400 text-lg">

                  {"Hi, I'm"}

                </p>

                {/* Name */}
                <h1
                  className="
                    text-4xl
                    md:text-5xl

                    font-black

                    tracking-[-0.05em]

                    leading-none

                    font-sans
                  "
                >

                  Muntasir Alam{" "}

                  <span
                    className="
                      bg-gradient-to-r
                      from-cyan-400
                      to-purple-500

                      bg-clip-text
                      text-transparent
                    "
                  >

                    Resti

                  </span>

                </h1>

                {/* Typing */}
                <div
                  className="
                    text-gray-300

                    text-lg
                    md:text-2xl

                    min-h-[70px]
                  "
                >

                  <TypeAnimation
                    sequence={[
                      "A Frontend Developer",
                      1800,

                      "Learning Full Stack Web Development",
                      1800,

                      "Crafting Modern UI Experiences",
                      1800,

                      "React & Next.js Enthusiast",
                      1800,
                    ]}

                    speed={60}

                    repeat={Infinity}
                  />

                </div>

              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-5 mt-10">

                {/* Projects */}
                <Link
                  href="/projects"

                  aria-label="View Projects"

                  className="
                    px-7
                    py-4

                    rounded-2xl

                    bg-cyan-400

                    text-black
                    font-semibold

                    hover:scale-[1.03]

                    transition-all
                    duration-300

                    shadow-[0_0_20px_rgba(34,211,238,0.15)]
                  "
                >

                  View Projects

                </Link>

                {/* Resume */}
                <a
                  href="/Resume.pdf"

                  target="_blank"

                  rel="noopener noreferrer"

                  aria-label="Open Resume"

                  className="
                    px-7
                    py-4

                    rounded-2xl

                    border
                    border-white/10

                    bg-white/5

                    backdrop-blur-sm

                    hover:bg-white/10

                    hover:scale-[1.03]

                    transition-all
                    duration-300

                    inline-flex
                    items-center
                    justify-center

                    focus:outline-none
                    focus:ring-2
                    focus:ring-cyan-400
                  "
                >

                  Resume

                </a>

              </div>

              {/* Socials */}
              <div className="flex gap-4 mt-12">

                {socials.map((item, index) => (

                  <a
                    key={index}

                    href={item.link}

                    target="_blank"

                    rel="noopener noreferrer"

                    aria-label={item.label}

                    className="
                      w-12
                      h-12

                      rounded-xl

                      border
                      border-white/10

                      bg-white/5

                      flex
                      items-center
                      justify-center

                      text-white

                      hover:border-cyan-400

                      hover:scale-105

                      transition-all
                      duration-300

                      focus:outline-none
                      focus:ring-2
                      focus:ring-cyan-400
                    "
                  >

                    {item.icon}

                  </a>

                ))}

              </div>

            </div>

          </m.div>

          {/* RIGHT SIDE */}
          <m.div
            initial={{
              opacity: 0,
              x: 40,
            }}

            animate={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              duration: 0.7,
            }}

            className="
              relative

              flex
              justify-center
            "
          >

            {/* Glow */}
            <div
              aria-hidden="true"

              className="
                absolute

                w-[250px]
                h-[250px]

                bg-cyan-500/10

                blur-[70px]

                rounded-full
              "
            />

            {/* Image Card */}
            <div
              className="
                relative

                glass

                border
                border-white/10

                rounded-[30px]

                p-4

                shadow-[0_0_25px_rgba(34,211,238,0.05)]
              "
            >

              <Image
                src="/muntasir.png"

                alt="Muntasir Alam Resti"

                width={380}

                height={550}

                priority

                className="
                  rounded-[24px]

                  object-cover

                  relative
                  z-10
                "
              />

            </div>

          </m.div>

        </div>

      </section>

    </LazyMotion>

  );
}