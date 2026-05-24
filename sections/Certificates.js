"use client";

import Link from "next/link";

import Image from "next/image";

import {
  LazyMotion,
  domAnimation,
  m,
} from "framer-motion";

import {
  ArrowLeft,
  ExternalLink,
} from "lucide-react";

const certificates = [

  {
    title: "Digital Marketing Level 1 & 2",

    desc:
      "Professional training focused on social media marketing, branding strategies and audience engagement.",

    image: "/de.jpeg",

    certificate: "/de.jpeg",

    issuer: "Professional Training",

    year: "2024",
  },

  {
    title: "UI/UX Design Using Figma",

    desc:
      "Creative UI/UX design learning focused on modern interfaces, layouts and user experience design.",

    image: "/ui.jpeg",

    certificate: "/ui.jpeg",

    issuer: "Design Learning",

    year: "2025",
  },

];

export default function CertificatesPage() {

  return (

    <LazyMotion features={domAnimation}>

      <section
        className="
          relative
          min-h-screen

          overflow-hidden

          py-16
          px-6
        "
      >

        {/* Main */}
        <div className="relative z-10 container mx-auto">

          {/* Header */}
          <m.header
            initial={{
              opacity: 0,
              y: 30,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.7,
            }}

            className="text-center mb-20"
          >

            <p className="text-cyan-400 font-mono mb-4">

              {"// Certificates"}

            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">

              Learning &
              <span className="gradient-text">

                {" "}Achievements

              </span>

            </h1>

            <p
              className="
                text-gray-300

                max-w-3xl
                mx-auto

                mt-6

                text-lg
                leading-8
              "
            >

              A collection of certifications and
              creative learning milestones reflecting
              my journey in digital marketing and
              UI/UX design.

            </p>

          </m.header>

          {/* Grid */}
          <div
            className="
              grid
              md:grid-cols-2

              gap-8
            "
          >

            {certificates.map((item, index) => (

              <m.article
                key={index}

                initial={{
                  opacity: 0,
                  y: 40,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                viewport={{
                  once: true,
                }}

                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}

                whileHover={{
                  y: -6,
                }}

                className="
                  group
                  relative

                  overflow-hidden

                  rounded-[30px]

                  border
                  border-white/10

                  bg-white/[0.03]

                  backdrop-blur-sm

                  hover:border-cyan-400/40

                  hover:shadow-[0_0_30px_rgba(34,211,238,0.10)]

                  transition-all
                  duration-300
                "
              >

                {/* Image */}
                <div
  className="
    relative

    w-full

    h-[340px]

    md:h-[420px]

    overflow-hidden
  "
>

  <Image
    src={item.image}

    alt={item.title}

    fill

    sizes="
      (max-width: 768px) 100vw,
      50vw
    "

    className="
      object-cover

      group-hover:scale-[1.03]

      transition
      duration-500
    "
  />

</div>

                {/* Content */}
                <div className="p-8">

                  {/* Top */}
                  <div
                    className="
                      flex
                      items-center
                      justify-between

                      mb-5
                    "
                  >

                    <span
                      className="
                        px-4
                        py-2

                        rounded-full

                        border
                        border-cyan-400/30

                        bg-cyan-400/10

                        text-cyan-400

                        text-xs
                        font-mono
                      "
                    >

                      {item.issuer}

                    </span>

                    <span className="text-gray-400 text-sm">

                      {item.year}

                    </span>

                  </div>

                  {/* Title */}
                  <h2
                    className="
                      text-2xl
                      font-bold

                      mb-4

                      text-white
                    "
                  >

                    {item.title}

                  </h2>

                  {/* Description */}
                  <p
                    className="
                      text-gray-300

                      leading-8
                    "
                  >

                    {item.desc}

                  </p>

                  {/* Bottom */}
                  <div
                    className="
                      mt-8

                      flex
                      items-center
                      justify-between
                    "
                  >

                    <div
                      aria-hidden="true"

                      className="
                        h-[1px]
                        flex-1

                        bg-gradient-to-r
                        from-cyan-400/40
                        via-purple-500/40
                        to-transparent
                      "
                    />

                    {/* View Certificate */}
                    <a
                      href={item.certificate}

                      target="_blank"

                      rel="noopener noreferrer"

                      aria-label={`View ${item.title} Certificate`}

                      className="
                        ml-5

                        w-12
                        h-12

                        rounded-2xl

                        border
                        border-white/10

                        bg-white/5

                        flex
                        items-center
                        justify-center

                        text-cyan-400

                        hover:border-cyan-400/40
                        hover:bg-cyan-400/10

                        hover:scale-105

                        transition-all
                        duration-300
                      "
                    >

                      <ExternalLink size={18} />

                    </a>

                  </div>

                </div>

              </m.article>

            ))}

          </div>

        </div>

      </section>

    </LazyMotion>

  );
}