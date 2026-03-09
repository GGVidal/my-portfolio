"use client";

import { personalInfo } from "@/data/portfolio-data";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="section-max-width">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="mb-2 text-sm font-medium tracking-widest text-accent uppercase">
            About
          </h2>
          <h3 className="mb-12 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            A bit about me
          </h3>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-3"
          >
            <div className="space-y-5">
              {personalInfo.bio.map((paragraph, i) => (
                <p key={i} className="leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-2"
          >
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="space-y-6">
                {personalInfo.highlightStats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl font-bold text-foreground">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-border pt-6">
                <p className="text-sm text-muted">
                  <span className="font-medium text-foreground">Based in</span>{" "}
                  {personalInfo.location}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
