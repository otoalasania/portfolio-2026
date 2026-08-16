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
