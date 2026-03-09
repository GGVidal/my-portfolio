"use client";

import { personalInfo } from "@/data/portfolio-data";
import { motion } from "framer-motion";
import { HiArrowDown } from "react-icons/hi";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/3 blur-3xl" />
      </div>

      <div className="section-max-width px-6 md:px-12 lg:px-24 xl:px-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="mb-4 text-sm font-medium tracking-widest text-accent uppercase">
            {personalInfo.title}
          </p>

          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Hi, I&apos;m{" "}
            <span className="text-accent">{personalInfo.name.split(" ")[0]}</span>
          </h1>

          <p className="mb-10 max-w-lg text-lg leading-relaxed text-muted md:text-xl">
            {personalInfo.tagline}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-all hover:bg-foreground/85"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground transition-all hover:border-foreground/30 hover:bg-card"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about" aria-label="Scroll to about">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <HiArrowDown className="text-muted" size={20} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
