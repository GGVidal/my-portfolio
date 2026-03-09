"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { projects, type ProjectLink } from "@/data/portfolio-data";
import { motion, AnimatePresence } from "framer-motion";
import { HiPhotograph } from "react-icons/hi";
import {
  FaApple,
  FaGooglePlay,
  FaGithub,
  FaGlobe,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import ImageLightbox from "./ImageLightbox";

function LinkBadge({ link }: { link: ProjectLink }) {
  const config = {
    "app-store": {
      icon: FaApple,
      bg: "bg-black hover:bg-black/80",
      text: "text-white",
    },
    "google-play": {
      icon: FaGooglePlay,
      bg: "bg-[#01875f] hover:bg-[#01875f]/85",
      text: "text-white",
    },
    github: {
      icon: FaGithub,
      bg: "bg-[#24292e] hover:bg-[#24292e]/85",
      text: "text-white",
    },
    website: {
      icon: FaGlobe,
      bg: "bg-accent hover:bg-accent/85",
      text: "text-white",
    },
    other: {
      icon: FaExternalLinkAlt,
      bg: "bg-foreground/10 hover:bg-foreground/15",
      text: "text-foreground",
    },
  }[link.type];

  const Icon = config.icon;

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-all ${config.bg} ${config.text}`}
    >
      <Icon size={14} />
      {link.label}
    </a>
  );
}

function ImageCarousel({
  images,
  title,
  onImageClick,
}: {
  images: string[];
  title: string;
  onImageClick: (index: number) => void;
}) {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setCurrent((c) => (c - 1 + images.length) % images.length);
    },
    [images.length],
  );

  const next = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setCurrent((c) => (c + 1) % images.length);
    },
    [images.length],
  );

  const hasMultiple = images.length > 1;

  return (
    <div
      className="relative h-full w-full cursor-pointer"
      onClick={() => onImageClick(current)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="relative h-full w-full"
        >
          <Image
            src={images[current]}
            alt={`${title} screenshot ${current + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 420px"
          />
        </motion.div>
      </AnimatePresence>

      {hasMultiple && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
            aria-label="Previous image"
          >
            <FaChevronLeft size={12} />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
            aria-label="Next image"
          >
            <FaChevronRight size={12} />
          </button>

          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrent(i);
                }}
                className={`h-1.5 rounded-full transition-all ${
                  i === current
                    ? "w-5 bg-white"
                    : "w-1.5 bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Projects() {
  const [lightbox, setLightbox] = useState<{
    projectIndex: number;
    imageIndex: number;
  } | null>(null);

  const openLightbox = (projectIndex: number, imageIndex: number) => {
    setLightbox({ projectIndex, imageIndex });
  };

  const closeLightbox = () => setLightbox(null);

  const currentProject =
    lightbox !== null ? projects[lightbox.projectIndex] : null;

  const goToPrev = () => {
    if (!lightbox || !currentProject) return;
    setLightbox({
      ...lightbox,
      imageIndex:
        (lightbox.imageIndex - 1 + currentProject.images.length) %
        currentProject.images.length,
    });
  };

  const goToNext = () => {
    if (!lightbox || !currentProject) return;
    setLightbox({
      ...lightbox,
      imageIndex: (lightbox.imageIndex + 1) % currentProject.images.length,
    });
  };

  return (
    <section id="projects" className="section-padding">
      <div className="section-max-width">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="mb-2 text-sm font-medium tracking-widest text-accent uppercase">
            Projects
          </h2>
          <h3 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Things I&apos;ve built
          </h3>
          <p className="mb-12 max-w-xl text-muted">
            A selection of products I&apos;ve helped ship. Click screenshots to
            expand, or visit them on the stores.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true, margin: "-80px" }}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="flex flex-col lg:flex-row">
                <div className="relative w-full shrink-0 overflow-hidden bg-foreground/[0.02] lg:w-[420px]">
                  <div className="relative aspect-[4/3] w-full lg:aspect-auto lg:h-full">
                    {project.images.length > 0 ? (
                      <ImageCarousel
                        images={project.images}
                        title={project.title}
                        onImageClick={(imgIndex) =>
                          openLightbox(index, imgIndex)
                        }
                      />
                    ) : (
                      <div className="flex h-full min-h-[220px] items-center justify-center">
                        <div className="text-center">
                          <HiPhotograph
                            className="mx-auto mb-2 text-muted/30"
                            size={40}
                          />
                          <p className="text-xs text-muted/50">
                            Screenshots coming soon
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between p-6 lg:p-8">
                  <div>
                    <div className="mb-3">
                      {project.featured && (
                        <span className="mb-2 inline-block rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                          Featured
                        </span>
                      )}
                      <h4 className="text-xl font-semibold text-foreground">
                        {project.title}
                      </h4>
                    </div>

                    <p className="mb-6 text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {project.links.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-2.5 border-t border-border pt-5">
                        {project.links.map((link) => (
                          <LinkBadge key={link.label} link={link} />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {lightbox !== null && currentProject && (
        <ImageLightbox
          images={currentProject.images}
          currentIndex={lightbox.imageIndex}
          isOpen
          onClose={closeLightbox}
          onPrev={goToPrev}
          onNext={goToNext}
          title={currentProject.title}
        />
      )}
    </section>
  );
}
