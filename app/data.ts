import {
  PersonIcon,
  BriefcaseIcon,
  WindowIcon,
  StarIcon,
  LayersIcon,
  GridIcon,
  PencilIcon,
  BoltIcon,
  MailIcon,
  GitHubIcon,
  LinkedInIcon,
  CommandIcon,
  GlobeIcon,
  PlusIcon,
} from "./components/icons";
import type { translations } from "./i18n/translations";
import VsCodeLogo from "@assets/svgs/logos/vscode.svg";
import ClaudeCodeLogo from "@assets/svgs/logos/claudecode.svg";
import ReactLogo from "@assets/svgs/logos/react.svg";
import NextJsLogo from "@assets/svgs/logos/nextdotjs.svg";
import TypeScriptLogo from "@assets/svgs/logos/typescript.svg";
import FigmaLogo from "@assets/svgs/logos/figma.svg";
import GitHubLogo from "@assets/svgs/logos/github.svg";
import BitbucketLogo from "@assets/svgs/logos/bitbucket.svg";

export const EMAIL = "otar.alasania@gmail.com";

export const profile = {
  name: "Otar Alasania",
  company: { name: "Noxtton", logo: "/noxtton-logo.png" },
};

// role/desc text lives in i18n/translations.ts, matched by index
export const experience = [
  { range: "2022 — NOW", company: profile.company },
  { range: "2022", company: profile.company },
];

export const stack = [
  { Icon: VsCodeLogo, name: "VS Code" },
  { Icon: ClaudeCodeLogo, name: "Claude Code" },
  { Icon: ReactLogo, name: "React" },
  { Icon: NextJsLogo, name: "Next.js" },
  { Icon: TypeScriptLogo, name: "TypeScript" },
  { Icon: FigmaLogo, name: "Figma" },
  { Icon: GitHubLogo, name: "GitHub" },
  { Icon: BitbucketLogo, name: "Bitbucket" },
];

export type ProjectSlug = keyof (typeof translations)["en"]["work"]["items"];

export type Project = {
  slug: ProjectSlug;
  year: number;
  stack: string[];
  featured: boolean;
  href?: string;
  images: string[];
};

// TODO: swap for real screenshots — picsum.photos placeholders, stable per project via seed
function projectImages(seed: string, count: number): string[] {
  return Array.from({ length: count }, (_, i) => `https://picsum.photos/seed/${seed}-${i + 1}/960/720`);
}

const projects: Project[] = [
  {
    slug: "aurora-dashboard",
    year: 2025,
    stack: ["Next.js", "TypeScript", "Figma"],
    featured: true,
    href: "#",
    images: projectImages("aurora-dashboard", 5),
  },
  {
    slug: "cedar-commerce",
    year: 2025,
    stack: ["Next.js", "TypeScript"],
    featured: true,
    href: "#",
    images: projectImages("cedar-commerce", 4),
  },
  {
    slug: "pulse-analytics",
    year: 2024,
    stack: ["TypeScript", "Figma"],
    featured: true,
    href: "#",
    images: projectImages("pulse-analytics", 3),
  },
  {
    slug: "wayfarer-app",
    year: 2024,
    stack: ["Next.js", "TypeScript", "Figma"],
    featured: true,
    href: "#",
    images: projectImages("wayfarer-app", 5),
  },
  {
    slug: "meridian-crm",
    year: 2025,
    stack: ["Next.js", "TypeScript"],
    featured: false,
    href: "#",
    images: projectImages("meridian-crm", 3),
  },
  {
    slug: "foundry-blog",
    year: 2023,
    stack: ["Next.js", "TypeScript", "Figma"],
    featured: false,
    href: "#",
    images: projectImages("foundry-blog", 2),
  },
  {
    slug: "northwind-inventory",
    year: 2024,
    stack: ["TypeScript"],
    featured: false,
    images: projectImages("northwind-inventory", 4),
  },
  {
    slug: "lumen-builder",
    year: 2023,
    stack: ["Next.js", "Figma"],
    featured: false,
    href: "#",
    images: projectImages("lumen-builder", 3),
  },
  {
    slug: "tidal-booking",
    year: 2022,
    stack: ["Next.js", "TypeScript"],
    featured: false,
    href: "#",
    images: projectImages("tidal-booking", 1),
  },
  {
    slug: "orbit-notes",
    year: 2022,
    stack: ["TypeScript", "Figma"],
    featured: false,
    href: "#",
    images: projectImages("orbit-notes", 2),
  },
];

const newestFirst = (a: Project, b: Project) => b.year - a.year;

export const featuredProjects = projects.filter((p) => p.featured).sort(newestFirst);
export const moreProjects = projects.filter((p) => !p.featured).sort(newestFirst);

export const allProjects = [...featuredProjects, ...moreProjects];

export function findProject(slug: string) {
  for (const group of [featuredProjects, moreProjects]) {
    const index = group.findIndex((p) => p.slug === slug);
    if (index !== -1) return { project: group[index]!, index, group };
  }
  return null;
}

// desc/title text lives in i18n/translations.ts, matched by index
export const ventures = [
  { name: "CMD Supply", color: "#f4f4f0", icon: CommandIcon, href: "#" },
  { name: "Best Websites", color: "#f4d13a", icon: GlobeIcon, href: "#" },
  { name: "Great Fonts", color: "#6ee7b7", icon: PlusIcon, href: "#" },
];

export const writing = [
  { date: "2025-02-21", minutes: 2 },
  { date: "2025-02-16", minutes: 4 },
  { date: "2025-02-12", minutes: 2 },
  { date: "2025-01-11", minutes: 2 },
  { date: "2025-01-01", minutes: 1 },
];

export const personal = {
  spotifyTrackUrl: "https://open.spotify.com/track/7B1HEa7ROgR3lIcG8MpG8H",
  photos: [
    { src: "https://picsum.photos/seed/personal-1/552/744", rotate: -2 },
    { src: "https://picsum.photos/seed/personal-2/552/744", rotate: 2 },
    { src: "https://picsum.photos/seed/personal-3/552/744", rotate: -2 },
    { src: "https://picsum.photos/seed/personal-4/552/744", rotate: 2 },
  ],
};

export const socials = [
  { label: "Email", value: EMAIL, href: `mailto:${EMAIL}`, icon: MailIcon },
  { label: "GitHub", value: "@otoalasania", href: "https://github.com/otoalasania", icon: GitHubIcon },
  {
    label: "LinkedIn",
    value: "/in/oto-alasania",
    href: "https://www.linkedin.com/in/oto-alasania-437551217",
    icon: LinkedInIcon,
  },
];

export const HIDDEN_SECTIONS: ReadonlySet<string> = new Set(["skills", "ventures", "writing"]);

export const dock = [
  { id: "top", icon: PersonIcon },
  { id: "work", icon: WindowIcon },
  { id: "experience", icon: BriefcaseIcon },
  { id: "skills", icon: StarIcon },
  { id: "stack", icon: LayersIcon },
  { id: "ventures", icon: GridIcon },
  { id: "writing", icon: PencilIcon },
  { id: "personal", icon: BoltIcon },
  { id: "contact", icon: MailIcon },
] as const;
