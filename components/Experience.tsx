"use client";

import { experiences } from "@/data/portfolio-data";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-card">
      <div className="section-max-width">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="mb-2 text-sm font-medium tracking-widest text-accent uppercase">
            Experience
          </h2>
          <h3 className="mb-16 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Where I&apos;ve worked
          </h3>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 top-0 hidden h-full w-px bg-border md:left-1/2 md:block" />

          <div className="space-y-12 md:space-y-0">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`relative md:flex md:pb-16 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="hidden md:absolute md:left-1/2 md:top-0 md:block md:-translate-x-1/2">
                    <div className="h-3 w-3 rounded-full border-2 border-accent bg-card" />
                  </div>

                  <div
                    className={`md:w-1/2 ${
                      isLeft ? "md:pr-16 md:text-right" : "md:pl-16"
                    }`}
                  >
                    <div
                      className={`rounded-2xl border border-border bg-background p-6 transition-colors hover:border-accent/30 ${
                        isLeft ? "" : ""
                      }`}
                    >
                      <p className="mb-1 text-xs font-medium tracking-wider text-accent uppercase">
                        {exp.period}
                      </p>
                      <h4 className="text-lg font-semibold text-foreground">
                        {exp.role}
                      </h4>
                      <p className="mb-4 text-sm text-muted">{exp.company}</p>
                      <p className="mb-4 text-sm leading-relaxed text-muted">
                        {exp.description}
                      </p>
                      <ul
                        className={`space-y-2 ${isLeft ? "md:ml-auto" : ""}`}
                      >
                        {exp.highlights.map((h, hi) => (
                          <li
                            key={hi}
                            className={`flex items-start gap-2 text-sm text-muted ${
                              isLeft ? "md:flex-row-reverse md:text-right" : ""
                            }`}
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/40" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
