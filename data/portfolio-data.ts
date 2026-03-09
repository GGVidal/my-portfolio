import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiFirebase,
  SiPostgresql,
  SiGraphql,
  SiJavascript,
  SiExpo,
  SiFigma,
  SiJest,
  SiGithubactions,
  SiRedux,
  SiMongodb,
  SiNestjs,
  SiBitrise,
  SiMysql,
  SiDotnet,
  SiStorybook,
  SiBluetooth,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import type { IconType } from "react-icons";

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string[];
  email: string;
  phone: string;
  location: string;
  socials: {
    github: string;
    linkedin: string;
  };
  highlightStats: { label: string; value: string }[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}

export type ProjectLinkType =
  | "app-store"
  | "google-play"
  | "github"
  | "website"
  | "other";

export interface ProjectLink {
  label: string;
  url: string;
  type: ProjectLinkType;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  links: ProjectLink[];
  images: string[];
  featured?: boolean;
}

export interface Skill {
  name: string;
  icon: IconType;
}

export interface SkillCategory {
  category: string;
  items: Skill[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
}

export const personalInfo: PersonalInfo = {
  name: "Gabriel Gondim",
  title: "Senior Mobile Engineer",
  tagline:
    "Mobile Engineer with 7+ years delivering high-impact React Native apps in healthcare, fintech, and e-commerce — including products generating over R$1M/day.",
  bio: [
    "I'm a mobile engineer with 7 years of experience, specializing in building robust and scalable React Native applications. Over the past few years, I've delivered impactful solutions in healthcare, fintech, and e-commerce — including apps generating over R$1 million/day in revenue and medical tools supporting patients worldwide.",
    "I bring expertise in TypeScript, CI/CD, automated testing (Jest, Detox), and app store deployment, always focused on user experience, maintainability, and team collaboration. I thrive in multicultural teams and agile environments.",
    "I'm currently open to remote opportunities where I can bring my mobile engineering expertise to create user-centric, high-performing digital products.",
  ],
  email: "gabrielvidalgondim@gmail.com",
  phone: "+55 85 99958-3690",
  location: "João Pessoa, PB — Brazil",
  socials: {
    github: "https://github.com/gabrielgondim",
    linkedin: "https://www.linkedin.com/in/gabriel-gondim-584477157/",
  },
  highlightStats: [
    { label: "Years of Experience", value: "7+" },
    { label: "Apps Shipped", value: "15+" },
    { label: "Revenue Generated", value: "R$1M+/day" },
  ],
};

export const experiences: Experience[] = [
  {
    company: "Grupo FCamara",
    role: "Senior Mobile Engineer",
    period: "Aug 2024 — Present",
    description:
      "Leading end-to-end mobile development for enterprise projects with a focus on scalability and performance.",
    highlights: [
      "Led full development cycle of a bus travel booking app from architecture to production",
      "Integrated payment gateways and dynamic seat selection logic",
      "Built modular Expo components, managed builds and OTA updates via Expo EAS",
      "Set up CI/CD pipelines using GitHub Actions and Bitrise",
    ],
  },
  {
    company: "SkillSource (Ohara.ai)",
    role: "Senior Mobile Engineer",
    period: "Mar 2025 — Aug 2025",
    description:
      "Developed for Ohara.ai, a platform that allows users to create mini-apps through natural language prompts.",
    highlights: [
      "Integrated GPT-based app generation features",
      "Enabled tokenization and social sharing for user-generated apps",
      "Collaborated in an AI-driven mobile ecosystem for creative users",
      "Utilized React Native, Expo, TypeScript, and NestJS with full EAS pipeline",
    ],
  },
  {
    company: "BairesDev",
    role: "Senior Mobile Engineer",
    period: "Oct 2023 — Mar 2025",
    description:
      "Worked on Cefaly and Novant Health projects — building a medical device companion app and a major U.S. healthcare system mobile app.",
    highlights: [
      "Built BLE integration for the Cefaly migraine-relief device using Expo Bluetooth plugins",
      "Led migration of a large Novant Health codebase to the latest Expo SDK",
      "Created custom crash/error tracking libraries and automated test suites with Jest and Detox",
      "Managed releases to App Store and Google Play with EAS",
    ],
  },
  {
    company: "Soluevo",
    role: "Mobile Engineer",
    period: "Oct 2022 — Oct 2023",
    description:
      "Contributed to Cobasi's e-commerce app driving R$1M+/day in revenue.",
    highlights: [
      "Developed the app with React Native, TypeScript, and Redux Toolkit",
      "Refactored login module and added social logins (Apple, Google, Facebook)",
      "Implemented push notifications via Salesforce",
      "Increased test coverage from 50% to 90%",
    ],
  },
  {
    company: "Dasa",
    role: "Digital Technology Analyst III",
    period: "Oct 2021 — Oct 2022",
    description:
      "Built mobile solutions for scheduling, exam results, and vaccination at Latin America's largest diagnostic company.",
    highlights: [
      "Developed dynamic components for unified UI across Android/iOS",
      "Used React Native, Styled Components, Storybook, and GraphQL Apollo",
      "Created unit and E2E tests with Detox, Jest, and React Native Testing Library",
      "Streamlined deployments using Expo EAS, GitHub Actions, and AppCenter",
    ],
  },
  {
    company: "act digital",
    role: "Software Engineer",
    period: "Apr 2021 — Oct 2021",
    description:
      "Developed backend microservices and responsive React UIs in the financial sector.",
    highlights: [
      "Developed microservices with .NET Core and integrated AWS SQS, Lambda, and EC2",
      "Built responsive web interfaces using React",
      "Contributed to financial applications with Oracle and MySQL databases",
    ],
  },
  {
    company: "Grupo Portfolio",
    role: "Frontend Developer",
    period: "Nov 2020 — Mar 2021",
    description:
      "Built progressive web applications for enterprise clients.",
    highlights: [
      "Built PWAs for facial recognition, health data, and loyalty programs using Vue.js 3 and Quasar",
      "Developed APIs with Node.js",
    ],
  },
  {
    company: "Polibras Software",
    role: "Junior Mobile Developer",
    period: "Jan 2020 — Nov 2020",
    description:
      "Worked on a B2B sales platform with offline-first architecture and geolocation.",
    highlights: [
      "Developed B2B sales platform with offline-first and geolocation features",
      "Contributed to web integrations ensuring UI consistency across platforms",
    ],
  },
  {
    company: "Grupo Casa Magalhães",
    role: "Software Developer",
    period: "Jul 2019 — Jan 2020",
    description:
      "Developed POS systems for sales and invoice management.",
    highlights: [
      "Built POS systems with Delphi, Firebird, and SQL Server",
      "Initiated modernization efforts via React Native mobile app",
    ],
  },
  {
    company: "Grupo Casa Magalhães",
    role: "Software Development Intern",
    period: "Jul 2018 — Jul 2019",
    description:
      "First professional experience — supported development and testing of POS software.",
    highlights: [
      "Supported development and testing of POS software",
      "Gained early exposure to mobile and desktop solutions",
    ],
  },
];

// To add screenshots: drop images into public/projects/ and reference them here.
// Example: images: ["/projects/bus-app-1.png", "/projects/bus-app-2.png"]
//
// Link types: "app-store", "google-play", "github", "website", "other"
// Example: { label: "App Store", url: "https://apps.apple.com/...", type: "app-store" }
export const projects: Project[] = [
  {
    title: "Vocai — Audio AI Assistant",
    description:
      "An AI-powered voice assistant that turns audio recordings into structured outputs — transcripts, summaries, flashcards, to-do lists, and email drafts. Currently in beta testing. Built both the NestJS backend (OpenAI Whisper + GPT-4o) and the React Native mobile app from scratch. Supports 16+ languages and multiple modes (Standard, Teacher, List).",
    tech: ["React Native", "Expo", "TypeScript", "NestJS", "OpenAI", "Whisper"],
    links: [],
    images: ["/projects/vocai.png"],
    featured: true,
  },
  {
    title: "ArtBeast — Art Marketplace",
    description:
      "A curated art marketplace connecting collectors and artists. Currently in beta testing. I built both the API and the mobile app from the ground up — featuring artwork discovery, artist profiles, Stripe checkout (cards, Apple Pay, Google Pay), and a full artist listing flow with image uploads.",
    tech: ["React Native", "Expo", "TypeScript", "Supabase", "Stripe", "Zustand"],
    links: [
      { label: "GitHub", url: "https://github.com/forgenewco/artbeast-mobile-app", type: "github" },
    ],
    images: ["/projects/artbeast.png"],
    featured: true,
  },
  {
    title: "Lock In — Reset Your Life",
    description:
      "A gamified self-growth app that helps users build habits, track workouts, and level up through an OVR ranking system. Features daily journaling, breathing exercises, AI coaching, streak tracking, and habit heatmaps.",
    tech: ["React Native", "Expo", "TypeScript", "Supabase"],
    links: [
      { label: "App Store", url: "https://apps.apple.com/br/app/lock-in-reset-your-life/id6746586837", type: "app-store" },
      { label: "Website", url: "https://www.trylockin.app", type: "website" },
    ],
    images: ["/projects/Lock-in.png", "/projects/Lock-in_2.png"],
    featured: true,
  },
  {
    title: "Viaje Guanabara — Passagens de Ônibus",
    description:
      "Bus travel booking app for Brazil's largest bus group with 1M+ downloads. Features payment integration with up to 12x installments, dynamic seat selection, e-ticket scanning, and a mobile-first checkout flow covering 2,000+ destinations.",
    tech: ["React Native", "Expo", "TypeScript", "GraphQL", "Bitrise"],
    links: [
      { label: "App Store", url: "https://apps.apple.com/br/app/guanabara-passagens-de-%C3%B4nibus/id1481895003", type: "app-store" },
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.xvision.grupoguanabara", type: "google-play" },
    ],
    images: ["/projects/viaje_guanabara.png"],
    featured: true,
  },
  {
    title: "Ohara.ai — Vibe Coding Platform",
    description:
      "A mobile platform where users create mini-apps through natural language prompts, tokenize their creations, and share them in a vibrant community. AI meets creativity.",
    tech: ["React Native", "Expo", "TypeScript", "NestJS", "AI/LLM"],
    links: [
      { label: "App Store", url: "https://apps.apple.com/us/app/ohara-prompt-share-apps/id6740466247", type: "app-store" },
      { label: "Website", url: "https://ohara.ai", type: "website" },
    ],
    images: ["/projects/ohara_ai.jpg"],
    featured: true,
  },
  {
    title: "CeCe — Cefaly Migraine Management",
    description:
      "Companion app for the CEFALY medical device that helps relieve migraines. Features BLE device pairing, real-time treatment monitoring, migraine logging, and PDF report generation.",
    tech: ["React Native", "Expo", "BLE", "Node.js", "EAS"],
    links: [
      { label: "App Store", url: "https://apps.apple.com/us/app/cece-migraine-management/id6511247902", type: "app-store" },
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.cefaly.ceceApp", type: "google-play" },
      { label: "Website", url: "https://www.cefaly.com", type: "website" },
    ],
    images: ["/projects/cece_cefaly.webp"],
    featured: true,
  },
  {
    title: "MyNovant — Novant Health",
    description:
      "Healthcare app for a major U.S. health system with 100K+ downloads. Features test results, appointment scheduling, video visits, and direct doctor messaging. Led Expo SDK migration and built custom crash-tracking.",
    tech: ["React Native", "Expo", "TypeScript", "Azure", "Detox"],
    links: [
      { label: "App Store", url: "https://apps.apple.com/in/app/mynovant/id1509989439", type: "app-store" },
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=org.novanthealth.mynovant", type: "google-play" },
    ],
    images: ["/projects/myNovant.webp", "/projects/mynovant2.webp"],
  },
  {
    title: "Cobasi — Pet Shop Online",
    description:
      "Brazil's leading pet shop e-commerce app with 5M+ downloads and R$1M+ BRL daily revenue. Features social login, scheduled purchases, push notifications via Salesforce, and a loyalty program.",
    tech: ["React Native", "TypeScript", "Redux Toolkit", "Salesforce"],
    links: [
      { label: "App Store", url: "https://apps.apple.com/br/app/cobasi-pet-shop-online/id1237962997", type: "app-store" },
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.root.cobasi.Activities", type: "google-play" },
      { label: "Website", url: "https://www.cobasi.com.br", type: "website" },
    ],
    images: ["/projects/cobasi_app.gif"],
  },
  {
    title: "Nav Dasa — Exames e Consultas",
    description:
      "Comprehensive health platform for Brazil's largest diagnostic network with 1M+ downloads. Features telemedicine consultations, exam scheduling, vaccine booking, and full medical history with result sharing.",
    tech: ["React Native", "GraphQL", "Storybook", "Detox", "Jest"],
    links: [
      { label: "App Store", url: "https://apps.apple.com/br/app/nav-dasa-exames-e-consultas/id1553834596", type: "app-store" },
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=br.com.nav", type: "google-play" },
      { label: "Website", url: "https://nav.dasa.com.br", type: "website" },
    ],
    images: ["/projects/nav_dasa.svg"],
  },
];

export const skills: SkillCategory[] = [
  {
    category: "Mobile",
    items: [
      { name: "React Native", icon: SiReact },
      { name: "Expo", icon: SiExpo },
      { name: "BLE", icon: SiBluetooth },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Redux", icon: SiRedux },
      { name: "GraphQL", icon: SiGraphql },
      { name: "Storybook", icon: SiStorybook },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "NestJS", icon: SiNestjs },
      { name: ".NET Core", icon: SiDotnet },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Firebase", icon: SiFirebase },
      { name: "AWS", icon: FaAws },
    ],
  },
  {
    category: "DevOps & Testing",
    items: [
      { name: "Git", icon: SiGit },
      { name: "Docker", icon: SiDocker },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Bitrise", icon: SiBitrise },
      { name: "Jest", icon: SiJest },
      { name: "Figma", icon: SiFigma },
    ],
  },
];

export const education: Education[] = [
  {
    institution: "Universidade de Fortaleza (UNIFOR)",
    degree: "Bachelor's Degree in Computer Science",
    period: "2017 — 2021",
    location: "Fortaleza, CE — Brazil",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
