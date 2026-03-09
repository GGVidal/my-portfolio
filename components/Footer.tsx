import { personalInfo } from "@/data/portfolio-data";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="section-max-width flex flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row md:px-12 lg:px-24 xl:px-32">
        <p className="text-sm text-muted">
          &copy; {year} {personalInfo.name}. Built with Next.js.
        </p>

        <div className="flex items-center gap-4">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-foreground"
            aria-label="GitHub"
          >
            <SiGithub size={16} />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-foreground"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={16} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-muted transition-colors hover:text-foreground"
            aria-label="Email"
          >
            <HiMail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
