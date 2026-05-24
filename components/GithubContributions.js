"use client";

import { useEffect, useState } from "react";

import dynamic from "next/dynamic";

import { motion } from "framer-motion";

import { FaGithub } from "react-icons/fa";

/* Dynamic Import */
const GitHubCalendar = dynamic(

  () =>
    import("react-github-calendar").then(
      (mod) => mod.GitHubCalendar
    ),

  {
    ssr: false,
  }

);

export default function GithubContributions() {

  const [mounted, setMounted] =
    useState(false);

  useEffect(() => {

    setMounted(true);

  }, []);

  /* Prevent Hydration Error */
  if (!mounted) return null;

  return (

    <section
      id="github"

      className="
        relative

        py-20
        px-6

        overflow-hidden
      "
    >

      {/* Glow */}
      <div
        aria-hidden="true"

        className="
          absolute
          top-0
          left-0

          w-[280px]
          h-[280px]

          bg-cyan-500/10

          blur-[90px]

          rounded-full
        "
      />

      <div
        aria-hidden="true"

        className="
          absolute
          bottom-0
          right-0

          w-[280px]
          h-[280px]

          bg-purple-500/10

          blur-[90px]

          rounded-full
        "
      />

      {/* Main */}
      <div className="relative z-10 container mx-auto">

        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.7,
          }}

          className="text-center mb-16"
        >

          {/* Badge */}
          <div
            className="
              inline-flex
              items-center
              gap-3

              px-5
              py-2

              rounded-full

              border
              border-cyan-400/20

              bg-cyan-400/5

              mb-6
            "
          >

            <FaGithub
              className="
                text-cyan-400
              "
            />

            <span
              className="
                text-cyan-300
                text-sm
                tracking-widest
                uppercase
              "
            >

              GitHub Activity

            </span>

          </div>

          {/* Title */}
          <h2
            className="
              text-4xl
              md:text-6xl

              font-black

              leading-tight
            "
          >

            Contribution{" "}

            <span
              className="
                bg-gradient-to-r
                from-cyan-400
                to-purple-500

                bg-clip-text
                text-transparent
              "
            >

              Timeline

            </span>

          </h2>

          {/* Description */}
          <p
            className="
              text-gray-300

              max-w-2xl
              mx-auto

              mt-6

              text-lg
              leading-8
            "
          >

            My coding consistency,
            open-source journey and
            GitHub contribution history.

          </p>

        </motion.div>

        {/* Card */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.7,
          }}

          className="
            relative

            glass

            rounded-[35px]

            border
            border-white/10

            bg-white/[0.03]

            backdrop-blur-xl

            overflow-hidden

            shadow-[0_0_35px_rgba(34,211,238,0.06)]
          "
        >

          {/* Top */}
          <div
            className="
              flex
              flex-col
              md:flex-row

              items-start
              md:items-center

              justify-between

              gap-6

              px-6
              md:px-10

              py-6

              border-b
              border-white/10
            "
          >

            <div>

              <h3
                className="
                  text-2xl
                  font-bold

                  text-white
                "
              >

                GitHub Contributions

              </h3>

              <p
                className="
                  text-gray-400
                  mt-2
                "
              >

                Live contribution graph
                from GitHub profile.

              </p>

            </div>

            {/* GitHub Button */}
            <a
              href="https://github.com/muntasiralamresti-official"

              target="_blank"

              rel="noopener noreferrer"

              className="
                inline-flex
                items-center
                gap-3

                px-5
                py-3

                rounded-2xl

                border
                border-white/10

                bg-white/[0.03]

                text-white

                hover:border-cyan-400/40
                hover:bg-cyan-400/5

                hover:shadow-[0_0_20px_rgba(34,211,238,0.08)]

                transition-all
                duration-300
              "
            >

              <FaGithub />

              Visit GitHub

            </a>

          </div>

          {/* Calendar */}
          <div
            className="
              p-6
              md:p-10

              overflow-x-auto
            "
          >

            <div
              className="
                min-w-[780px]
              "
            >

              <GitHubCalendar
                username="muntasiralamresti-official"

                blockSize={16}

                blockMargin={6}

                fontSize={15}

                colorScheme="dark"

                theme={{
                  dark: [

                    "#0f172a",

                    "#083344",

                    "#155e75",

                    "#06b6d4",

                    "#22d3ee",

                  ],
                }}
              />

            </div>

          </div>

          {/* Bottom */}
          <div
            className="
              border-t
              border-white/10

              px-6
              md:px-10

              py-5

              flex
              flex-col
              md:flex-row

              items-start
              md:items-center

              justify-between

              gap-4
            "
          >

            <p
              className="
                text-gray-400
                text-sm
              "
            >

              Consistency builds mastery ⚡

            </p>

            <p
              className="
                text-cyan-400
                text-sm
              "
            >

              muntasiralamresti-official

            </p>

          </div>

        </motion.div>

      </div>

    </section>

  );

}