"use client";

import { education } from "@/data/portfolio-data";
import { motion } from "framer-motion";
import { HiAcademicCap } from "react-icons/hi";

export default function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="section-max-width">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="mb-2 text-sm font-medium tracking-widest text-accent uppercase">
            Education
          </h2>
          <h3 className="mb-12 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Academic background
          </h3>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-80px" }}
              className="flex gap-5 rounded-2xl border border-border bg-card p-6 md:p-8"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                <HiAcademicCap className="text-accent" size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground">
                  {edu.degree}
                </h4>
                <p className="mt-1 text-sm font-medium text-accent">
                  {edu.institution}
                </p>
                <p className="mt-2 text-sm text-muted">
                  {edu.period} &middot; {edu.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
