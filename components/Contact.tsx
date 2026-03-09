"use client";

import { useState } from "react";
import { personalInfo } from "@/data/portfolio-data";
import { motion } from "framer-motion";
import { HiMail, HiLocationMarker } from "react-icons/hi";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-padding">
      <div className="section-max-width">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="mb-2 text-sm font-medium tracking-widest text-accent uppercase">
            Contact
          </h2>
          <h3 className="mb-12 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Let&apos;s work together
          </h3>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="mb-8 max-w-md leading-relaxed text-muted">
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of something great. Feel free to reach
              out.
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-foreground"
              >
                <HiMail className="h-5 w-5 text-accent" />
                {personalInfo.email}
              </a>
              <div className="flex items-center gap-3 text-sm text-muted">
                <HiLocationMarker className="h-5 w-5 text-accent" />
                {personalInfo.location}
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted transition-all hover:border-accent/30 hover:text-foreground"
                aria-label="GitHub"
              >
                <SiGithub size={18} />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted transition-all hover:border-accent/30 hover:text-foreground"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/50 focus:border-accent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/50 focus:border-accent"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/50 focus:border-accent"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-all hover:bg-foreground/85"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
