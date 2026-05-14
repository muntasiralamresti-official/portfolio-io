"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto glass rounded-3xl p-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h2 className="text-4xl font-bold gradient-text mb-8">
            About Me
          </h2>

          <p className="text-gray-300 leading-8">
            I'm Muntasir Resti, a passionate Frontend Developer
            crafting immersive digital experiences using modern
            technologies like React, Next.js and Tailwind CSS.
            Currently diving deeper into Full Stack Development
            while also exploring UI/UX Design and Digital Marketing.
          </p>
        </motion.div>
      </div>
    </section>
  );
}