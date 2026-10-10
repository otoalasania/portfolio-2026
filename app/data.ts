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
  XIcon,
  GitHubIcon,
  LinkedInIcon,
  CommandIcon,
  GlobeIcon,
  PlusIcon,
} from "./components/icons";
import type { translations } from "./i18n/translations";
import VsCodeLogo from "@assets/svgs/logos/vscode.svg";
import ClaudeCodeLogo from "@assets/svgs/logos/claudecode.svg";
import NextJsLogo from "@assets/svgs/logos/nextdotjs.svg";
import TypeScriptLogo from "@assets/svgs/logos/typescript.svg";
import FigmaLogo from "@assets/svgs/logos/figma.svg";
import BitbucketLogo from "@assets/svgs/logos/bitbucket.svg";
import SpotifyLogo from "@assets/svgs/logos/spotify.svg";

export const EMAIL = "otoalasania@gmail.com";

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
  { Icon: VsCodeLogo, alt: "VS Code" },
  { Icon: ClaudeCodeLogo, alt: "Claude Code" },
  { Icon: NextJsLogo, alt: "Next.js" },
  { Icon: TypeScriptLogo, alt: "TypeScript" },
  { Icon: FigmaLogo, alt: "Figma" },
  { Icon: BitbucketLogo, alt: "Bitbucket" },
  { Icon: SpotifyLogo, alt: "Spotify" },
];

// title/summary/about/built text lives in i18n/translations.ts under
// work.items, keyed by slug — the slug type below makes a missing entry a type error
export type ProjectSlug = keyof (typeof translations)["en"]["work"]["items"];

export type Project = {
  slug: ProjectSlug;
  year: number;
  stack: string[]; // display names, rendered as mono pills
  featured: boolean; // true → Work's hero deck, false → ProjectIndex
  href?: string; // omit for NDA/client work — rendered as a plain row, not a link
  images: string[]; // screenshots — first is the cover/main image, all show as thumbnails in the detail sheet
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

// Work's fan is hand-tuned for exactly 4 cards — see DESIGN_SYSTEM.md before changing how many are featured
export const featuredProjects = projects.filter((p) => p.featured).sort(newestFirst);
export const moreProjects = projects.filter((p) => !p.featured).sort(newestFirst);

// Only featured projects get a /work/[slug] page — anything else 404s
export function findFeaturedProject(slug: string) {
  const index = featuredProjects.findIndex((p) => p.slug === slug);
  return index === -1 ? null : { project: featuredProjects[index]!, index };
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
  music: {
    title: "Luna",
    artist: "Pascal Schumacher, Echo Collective",
    color: "#1f5f63",
  },
  photos: [
    { color: "#8fae7a", rotate: -2 },
    { color: "#3d6b7a", rotate: 2 },
    { color: "#a68a6b", rotate: -2 },
    { color: "#7a6a8f", rotate: 2 },
  ],
};

export const socials = [
  { label: "Email", value: EMAIL, href: `mailto:${EMAIL}`, icon: MailIcon },
  { label: "X.com", value: "@jacob", href: "#", icon: XIcon },
  { label: "GitHub", value: "@jv", href: "#", icon: GitHubIcon },
  { label: "LinkedIn", value: "/in/jacobvos", href: "#", icon: LinkedInIcon },
];

export const footerMeta = {
  location: "Lagos, Portugal",
  weatherC: 25,
};

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
