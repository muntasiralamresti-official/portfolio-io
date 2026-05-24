"use client";

import { useState } from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaDribbble,
} from "react-icons/fa";

export default function Contact() {

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  const [error, setError] =
    useState(false);

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    const formData = {

      name: e.target.name.value,

      email: e.target.email.value,

      message: e.target.message.value,

    };

    try {

      await fetch(

        "https://script.google.com/macros/s/AKfycbxmmWNAl3s2LthnZzZ3Aljg7SngM91DzPw1hpF2Bmp_GSR4Gucpsmt4yohyMkLQXam3tg/exec",

        {
          method: "POST",

          mode: "no-cors",

          body: JSON.stringify(formData),
        }
      );

      setLoading(false);

      setSuccess(true);

      e.target.reset();

      setTimeout(() => {

        setSuccess(false);

      }, 4000);

    } catch (err) {

      setLoading(false);

      setError(true);

      setTimeout(() => {

        setError(false);

      }, 4000);

    }

  };

  return (

    <section
      id="contact"

      className="
        relative

        py-20
        px-6

        overflow-hidden
      "
    >

      {/* Success Popup */}
      <AnimatePresence>

        {success && (

          <motion.div
            initial={{
              opacity: 0,
              y: -50,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            exit={{
              opacity: 0,
              y: -50,
            }}

            className="
              fixed
              top-8
              left-1/2
              -translate-x-1/2

              z-[999]

              px-6
              py-4

              rounded-2xl

              border
              border-cyan-400/30

              bg-black/70

              backdrop-blur-2xl

              shadow-[0_0_40px_rgba(34,211,238,0.25)]
            "
          >

            <p className="text-cyan-400 font-semibold">

              Message Sent Successfully ✨

            </p>

          </motion.div>

        )}

      </AnimatePresence>

      {/* Error Popup */}
      <AnimatePresence>

        {error && (

          <motion.div
            initial={{
              opacity: 0,
              y: -50,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            exit={{
              opacity: 0,
              y: -50,
            }}

            className="
              fixed
              top-28
              left-1/2
              -translate-x-1/2

              z-[999]

              px-6
              py-4

              rounded-2xl

              border
              border-red-400/30

              bg-black/70

              backdrop-blur-2xl

              shadow-[0_0_40px_rgba(248,113,113,0.25)]
            "
          >

            <p className="text-red-400 font-semibold">

              Failed To Send Message ❌

            </p>

          </motion.div>

        )}

      </AnimatePresence>

      {/* Main */}
      <div className="relative z-10 max-w-5xl mx-auto">

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
            duration: 1,
          }}

          className="text-center mb-16"
        >

          <p className="text-cyan-400 font-mono mb-4">

            {"// Contact"}

          </p>

          <h2 className="text-4xl md:text-6xl font-black">

            {"Let's Build"}

            <span
              className="
                bg-gradient-to-r
                from-cyan-400
                to-purple-500

                bg-clip-text
                text-transparent
              "
            >

              {" "}Something{" "}

            </span>

            Amazing

          </h2>

          <p
            className="
              text-gray-400

              max-w-2xl
              mx-auto

              mt-6

              text-lg
              leading-8
            "
          >

            Have a project idea,
            collaboration or creative
            opportunity?

            Let’s connect and create
            modern digital experiences.

          </p>

        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 1,
          }}

          className="
            relative

            overflow-hidden

            rounded-[35px]

            border
            border-white/10

            bg-white/[0.03]

            backdrop-blur-2xl

            p-8
            md:p-10
          "
        >

          {/* Glow */}
          <div
            className="
              absolute
              inset-0

              bg-gradient-to-br
              from-cyan-400/5
              to-purple-500/10

              opacity-60
            "
          />

          {/* Form */}
          <form
            onSubmit={handleSubmit}

            className="
              relative
              z-10

              space-y-6
            "
          >

            {/* Name */}
            <input
              type="text"

              name="name"

              required

              placeholder="Your Name"

              className="
                w-full

                rounded-2xl

                border
                border-white/10

                bg-white/[0.03]

                px-5
                py-4

                text-white

                placeholder:text-gray-500

                outline-none

                focus:border-cyan-400/40

                transition
                duration-300
              "
            />

            {/* Email */}
            <input
              type="email"

              name="email"

              required

              placeholder="Your Email"

              className="
                w-full

                rounded-2xl

                border
                border-white/10

                bg-white/[0.03]

                px-5
                py-4

                text-white

                placeholder:text-gray-500

                outline-none

                focus:border-cyan-400/40

                transition
                duration-300
              "
            />

            {/* Message */}
            <textarea
              rows="6"

              name="message"

              required

              placeholder="Tell me about your project..."

              className="
                w-full

                rounded-2xl

                border
                border-white/10

                bg-white/[0.03]

                px-5
                py-4

                text-white

                placeholder:text-gray-500

                outline-none
                resize-none

                focus:border-cyan-400/40

                transition
                duration-300
              "
            />

            {/* Button */}
            <button
              type="submit"

              disabled={loading}

              className="
                group
                relative

                overflow-hidden

                px-8
                py-4

                rounded-2xl

                bg-cyan-400

                text-black
                font-semibold

                hover:scale-105

                transition-all
                duration-300

                shadow-[0_0_40px_rgba(34,211,238,0.25)]

                disabled:opacity-70
              "
            >

              <span
                className="
                  relative
                  z-10
                "
              >

                {loading ? (

                  <span className="flex items-center gap-3">

                    <span
                      className="
                        w-4
                        h-4

                        border-2
                        border-black
                        border-t-transparent

                        rounded-full

                        animate-spin
                      "
                    />

                    Sending...

                  </span>

                ) : (

                  "Send Message"

                )}

              </span>

            </button>

          </form>

          {/* Socials */}
          <div
            className="
              relative
              z-10

              flex
              items-center
              justify-center

              gap-6

              mt-12
            "
          >

            {[
              {
                icon:
                  <FaGithub size={40} />,

                link:
                  "https://github.com/muntasiralamresti-official",
              },

              {
                icon:
                  <FaLinkedin size={40} />,

                link:
                  "https://www.linkedin.com/in/muntasir-alam-resti/",
              },

              {
                icon:
                  <FaDribbble size={40} />,

                link:
                  "https://dribbble.com/muntasir-alam-resti-",
              },

            ].map((item, index) => (

              <motion.a
                key={index}

                href={item.link}

                target="_blank"

                whileHover={{
                  y: -8,
                  scale: 1.08,
                  rotate: 4,
                }}

                whileTap={{
                  scale: 0.95,
                }}

                className="
                  group
                  relative

                  w-20
                  h-20

                  rounded-3xl

                  border
                  border-white/10

                  bg-white/[0.03]

                  backdrop-blur-xl

                  flex
                  items-center
                  justify-center

                  overflow-hidden

                  hover:border-cyan-400/40

                  hover:shadow-[0_0_40px_rgba(34,211,238,0.18)]

                  transition-all
                  duration-500
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

                    bg-gradient-to-br
                    from-cyan-400/10
                    to-purple-500/10
                  "
                />

                {/* Icon */}
                <div
                  className="
                    relative
                    z-10

                    text-cyan-400

                    group-hover:scale-110

                    transition
                    duration-300
                  "
                >

                  {item.icon}

                </div>

              </motion.a>

            ))}

          </div>

        </motion.div>

      </div>

    </section>
  );
}