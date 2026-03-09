"use client";

import { skills } from "@/data/portfolio-data";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-card">
      <div className="section-max-width">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="mb-2 text-sm font-medium tracking-widest text-accent uppercase">
            Skills
          </h2>
          <h3 className="mb-12 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Technologies I work with
          </h3>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2">
          {skills.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <h4 className="mb-5 text-sm font-semibold tracking-wider text-foreground uppercase">
                {group.category}
              </h4>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2.5 rounded-xl border border-border bg-background px-4 py-2.5 transition-all duration-200 hover:border-accent/30 hover:shadow-sm"
                    >
                      <Icon className="h-4 w-4 text-muted" />
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
