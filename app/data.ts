import {
  PersonIcon,
  BriefcaseIcon,
  WindowIcon,
  LayersIcon,
  BoltIcon,
  MailIcon,
  GitHubIcon,
  LinkedInIcon,
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
import CssModulesLogo from "@assets/svgs/logos/cssmodules.svg";
import JiraLogo from "@assets/svgs/logos/jira.svg";

export const SITE_URL = "https://otoalasania.com";
export const EMAIL = "otar.alasania@gmail.com";
export const FIRST_PORTFOLIO_URL = "https://otoalasania.github.io/portfolio-website/";

export const profile = {
  name: "Otar Alasania",
  timeZone: "Europe/Madrid",
  company: { name: "Noxtton", logo: "/noxtton-logo.png", url: "https://noxtton.com/" },
};

export function pageTitle(title: string) {
  return `${title} — ${profile.name}`;
}

export const experience: { start: number; end: number | null }[] = [
  { start: 2022, end: null },
  { start: 2022, end: 2022 },
];

export const stack = [
  { Icon: VsCodeLogo, name: "VS Code" },
  { Icon: ClaudeCodeLogo, name: "Claude Code" },
  { Icon: ReactLogo, name: "React" },
  { Icon: NextJsLogo, name: "Next.js" },
  { Icon: TypeScriptLogo, name: "TypeScript" },
  { Icon: CssModulesLogo, name: "CSS Modules" },
  { Icon: FigmaLogo, name: "Figma" },
  { Icon: GitHubLogo, name: "GitHub" },
  { Icon: BitbucketLogo, name: "Bitbucket" },
  { Icon: JiraLogo, name: "Jira" },
];

export type ProjectSlug = keyof (typeof translations)["en"]["work"]["items"];

export type Project = {
  slug: ProjectSlug;
  title: string;
  year: number;
  period: string;
  featured: boolean;
  role: "built" | "main-contributor" | "contributor";
  status: "live" | "maintained" | "ongoing";
  languages?: string[];
  href: string;
  secondaryHref?: string;
  stack: string[];
  images: string[];
};

const projects: Project[] = [
  {
    slug: "white-square",
    title: "White Square",
    year: 2026,
    period: "2026",
    featured: true,
    role: "built",
    status: "live",
    languages: ["KA", "EN", "RU"],
    href: "https://w2.ge/",
    stack: [
      "Next.js 15 (App Router)",
      "React 19",
      "TypeScript",
      "CSS Modules",
      "framer-motion",
      "React Hook Form",
      "Zod",
      "MapLibre",
      "Puppeteer",
      "in-house CMS",
    ],
    images: [
      "/assets/screenshots/w2/w2ge-1.webp",
      "/assets/screenshots/w2/w2ge-2.webp",
      "/assets/screenshots/w2/w2ge-3.webp",
    ],
  },
  {
    slug: "digital-academy",
    title: "Digital Academy / XPUP",
    year: 2025,
    period: "2025–present",
    featured: true,
    role: "main-contributor",
    status: "ongoing",
    href: "https://xpup.com",
    secondaryHref: "https://digitaledu.ge",
    stack: ["Next.js", "TypeScript", "in-house CMS", "TBC and BOG installment payments"],
    images: [
      "/assets/screenshots/academy/academy-1.webp",
      "/assets/screenshots/academy/academy-2.webp",
      "/assets/screenshots/academy/academy-3.webp",
    ],
  },
  {
    slug: "maqro-city",
    title: "Maqro City Tbilisi",
    year: 2025,
    period: "2025–2026",
    featured: true,
    role: "built",
    status: "maintained",
    languages: ["EN", "KA", "TR", "RU"],
    href: "https://maqrocitytbilisi.com/en/",
    stack: [
      "Next.js 13 (Pages Router)",
      "React 18",
      "TypeScript",
      "styled-jsx",
      "React Hook Form",
      "Zod",
      "Swiper",
      "pdf.js",
      "in-house CMS",
    ],
    images: [
      "/assets/screenshots/maqro-city/maqro-city-1.webp",
      "/assets/screenshots/maqro-city/maqro-city-2.webp",
      "/assets/screenshots/maqro-city/maqro-city-3.webp",
    ],
  },
  {
    slug: "namr-gov",
    title: "National Agency of Mineral Resources",
    year: 2022,
    period: "2022–2023",
    featured: true,
    role: "built",
    status: "live",
    languages: ["KA", "EN"],
    href: "https://www.namr.gov.ge/",
    stack: ["Next.js", "TypeScript", "Swiper", "AOS", "in-house CMS"],
    images: ["/assets/screenshots/namr/namr-1.webp"],
  },
  {
    slug: "efes-georgia",
    title: "Efes Georgia",
    year: 2022,
    period: "2022–2024",
    featured: false,
    role: "main-contributor",
    status: "live",
    languages: ["EN", "KA"],
    href: "https://efesgeorgia.com/",
    stack: ["Next.js 12", "TypeScript", "Swiper", "in-house CMS"],
    images: ["/assets/screenshots/efes/efes-1.webp"],
  },
  {
    slug: "maqro",
    title: "Maqro",
    year: 2025,
    period: "2025–2026",
    featured: false,
    role: "built",
    status: "live",
    languages: ["EN", "KA", "TR", "RU"],
    href: "https://maqro.ge/",
    stack: [
      "Next.js 13 (Pages Router)",
      "TypeScript",
      "styled-jsx",
      "Tailwind",
      "Radix UI",
      "Zod",
      "Swiper",
      "in-house CMS",
    ],
    images: ["/assets/screenshots/maqro/maqro-1.webp"],
  },
  {
    slug: "maqro-promo",
    title: "Maqro City Promo",
    year: 2025,
    period: "2025",
    featured: false,
    role: "built",
    status: "live",
    languages: ["KA", "EN"],
    href: "https://promo.maqrocitytbilisi.com/",
    stack: [
      "Next.js 13 (Pages Router)",
      "TypeScript",
      "styled-jsx",
      "React Hook Form",
      "Zod",
      "Swiper",
      "in-house CMS",
    ],
    images: ["/assets/screenshots/maqro-promo/maqro-promo-1.webp"],
  },
  {
    slug: "healthy-water",
    title: "Healthy Water",
    year: 2022,
    period: "2022–2026",
    featured: false,
    role: "contributor",
    status: "maintained",
    languages: ["KA", "EN"],
    href: "https://healthywater.ge/",
    stack: ["Next.js 12", "TypeScript", "in-house CMS"],
    images: ["/assets/screenshots/healthy-water/healthy-water-1.webp"],
  },
  {
    slug: "nabeghlavi",
    title: "Nabeghlavi",
    year: 2022,
    period: "2022–2024",
    featured: false,
    role: "contributor",
    status: "live",
    languages: ["KA", "EN"],
    href: "https://nabeghlavi.ge/history",
    stack: ["Next.js 12", "TypeScript", "AOS", "Swiper", "in-house CMS"],
    images: ["/assets/screenshots/nabegh/nabegh-1.webp"],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const moreProjects = projects.filter((p) => !p.featured).sort((a, b) => b.year - a.year);

export const allProjects = [...featuredProjects, ...moreProjects];

const heroCardPicks: { slug: ProjectSlug; image: number }[] = [
  { slug: "white-square", image: 1 },
  { slug: "digital-academy", image: 0 },
  { slug: "digital-academy", image: 1 },
  { slug: "maqro-city", image: 1 },
];

export const heroCards = heroCardPicks.map(({ slug, image }) => {
  const project = projects.find((p) => p.slug === slug)!;
  return { slug, image, title: project.title, src: project.images[image]! };
});

export function findProject(slug: string) {
  for (const group of [featuredProjects, moreProjects]) {
    const index = group.findIndex((p) => p.slug === slug);
    if (index !== -1) return { project: group[index]!, index, group };
  }
  return null;
}

export const personal = {
  belt: { stripes: 4 },
  track: {
    title: "NEUROSIS",
    artist: "KoruSe, CHMCL SØUP",
    cover: "/personal/neurosis-cover.jpg",
    audio: "/personal/neurosis.mp3",
    start: 0,
    end: 20.8,
    moments: { drop: 4.85, peak: 13, outro: 19 },
    spotifyUrl: "https://open.spotify.com/track/7B1HEa7ROgR3lIcG8MpG8H",
  },
  showPhotos: false,
  photos: [
    { src: "/personal/image-bjj-1.jpeg", rotate: -2 },
    { src: "/personal/image-bjj-2.jpeg", rotate: 2 },
    { src: "/personal/image-bjj-3.jpeg", rotate: -2 },
    { src: "/personal/image-bjj-4.jpeg", rotate: 2 },
  ],
};

export const socials = [
  { label: "Email", value: EMAIL, href: `mailto:${EMAIL}`, icon: MailIcon },
  { label: "GitHub", value: "@otoalasania", href: "https://github.com/otoalasania", icon: GitHubIcon },
  {
    label: "LinkedIn",
    value: "/in/oto-alasania",
    href: "https://www.linkedin.com/in/otar-alasania-437551217/",
    icon: LinkedInIcon,
  },
];

export const dock = [
  { id: "top", icon: PersonIcon },
  { id: "work", icon: WindowIcon },
  { id: "experience", icon: BriefcaseIcon },
  { id: "stack", icon: LayersIcon },
  { id: "personal", icon: BoltIcon },
  { id: "contact", icon: MailIcon },
] as const;
