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
import CssModulesLogo from "@assets/svgs/logos/cssmodules.svg";
import JiraLogo from "@assets/svgs/logos/jira.svg";

export const EMAIL = "otar.alasania@gmail.com";
export const FIRST_PORTFOLIO_URL = "https://otoalasania.github.io/portfolio-website/";

export const profile = {
  name: "Otar Alasania",
  company: { name: "Noxtton", logo: "/noxtton-logo.png", url: "https://noxtton.com/" },
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
  company: string;
  client: string;
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
    company: "Noxtton",
    client: "Tetri Kvadrati (White Square)",
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
    company: "Noxtton",
    client: "Digital Academy (XPUP)",
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
      "/assets/screenshots/academy/academy-3.png",
    ],
  },
  {
    slug: "maqro-city",
    title: "Maqro City Tbilisi",
    company: "Noxtton",
    client: "Maqro City",
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
    company: "Noxtton",
    client: "National Agency of Mineral Resources of Georgia (NAMR)",
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
    company: "Noxtton",
    client: "Efes Georgia (Natakhtari)",
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
    company: "Noxtton",
    client: "Maqro Group",
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
    company: "Noxtton",
    client: "Maqro City",
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
    company: "Noxtton",
    client: "Healthy Water",
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
    company: "Noxtton",
    client: "Nabeghlavi",
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
