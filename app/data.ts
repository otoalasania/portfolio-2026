import {
  PersonIcon,
  BriefcaseIcon,
  WindowIcon,
  ChatIcon,
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

export const EMAIL = "hi@jacobvos.com";

export const profile = {
  estYear: "1997",
  name: "Jacob Vos",
  role: "Design Engineer",
  bioBefore: "Hey, I'm Jacob a design engineer at",
  company: { name: "Wait", color: "#e4ff3a" },
  bioAfter:
    "based in Lagos, Portugal 🇵🇹 where I specialize in crafting polished web interfaces with a strong focus on accessibility, web animation, and product design.",
};

export const experience = [
  {
    range: "2024 — NOW",
    role: "Design engineer",
    company: { name: "Wait", color: "#e4ff3a" },
    desc: "Designed a real-time waitlist and dashboard for monitoring sign ups with live updates, reducing latency by 15%",
  },
  {
    range: "2024 — NOW",
    role: "Design engineer",
    company: { name: "Omega", color: "#5ec8e8" },
    desc: "Designed and built an admin panel for enterprise clients, scaling to support over 500 active users per instance.",
  },
  {
    range: "2017 — 2020",
    role: "Software engineer",
    company: { name: "Theta", color: "#5fe37f" },
    desc: "Developed the user interface for a crypto payment gateway, ensuring compliance with global accessibility standards.",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Jacob on the React-based design system was a game-changer for our team. His attention to detail ensured a smooth rollout that saved us countless hours.",
    name: "Evelyn Brooks",
    role: "Lead Engineer at Wait",
    avatarColor: "#c9a7d8",
  },
  {
    quote:
      "Jacob doesn't just design solutions—he builds experiences that feel effortless to use. His work on our onboarding flow set a new standard for the team.",
    name: "David Smith",
    role: "UX Researcher at Theta",
    avatarColor: "#8a8f98",
  },
  {
    quote:
      "Working with Jacob on the crypto payment gateway was a privilege. His ability to maintain accessibility while delivering a sleek interface is unmatched.",
    name: "Samuel Davis",
    role: "Product Designer at Omega",
    avatarColor: "#9fb3c8",
  },
];

export const stack = [
  { src: "/vscode.svg", alt: "VS Code" },
  { src: "/claudecode.svg", alt: "Claude Code" },
  { src: "/nextdotjs.svg", alt: "Next.js" },
  { src: "/typescript.svg", alt: "TypeScript" },
  { src: "/figma.svg", alt: "Figma" },
  { src: "/bitbucket.svg", alt: "Bitbucket" },
  { src: "/spotify.svg", alt: "Spotify" },
];

export const ventures = [
  {
    name: "CMD Supply",
    desc: "Framer Template Store",
    color: "#f4f4f0",
    icon: CommandIcon,
    href: "#",
  },
  {
    name: "Best Websites",
    desc: "Website Directory",
    color: "#f4d13a",
    icon: GlobeIcon,
    href: "#",
  },
  {
    name: "Great Fonts",
    desc: "Font Directory",
    color: "#6ee7b7",
    icon: PlusIcon,
    href: "#",
  },
];

export const writing = [
  { date: "21/02/25", title: "How to think like both a designer & engineer", minutes: 2 },
  { date: "16/02/25", title: "UI Performance", minutes: 4 },
  { date: "12/02/25", title: "How AI is changing my workflow", minutes: 2 },
  { date: "11/01/25", title: "Design tokens 101", minutes: 2 },
  { date: "01/01/25", title: "Hello world", minutes: 1 },
];

export const personal = {
  blurb: "In my spare time, I enjoy listening to music and taking photos with my Leica M6",
  music: {
    title: "Luna",
    artist: "Pascal Schumacher, Echo Collective",
    color: "#1f5f63",
  },
  photos: [
    { color: "#8fae7a", rotate: -6 },
    { color: "#3d6b7a", rotate: 3 },
    { color: "#a68a6b", rotate: -2 },
    { color: "#7a6a8f", rotate: 5 },
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
  { id: "top", icon: PersonIcon, label: "Profile" },
  { id: "work", icon: WindowIcon, label: "Work" },
  { id: "experience", icon: BriefcaseIcon, label: "Experience" },
  { id: "testimonials", icon: ChatIcon, label: "Testimonials" },
  { id: "stack", icon: LayersIcon, label: "Stack" },
  { id: "ventures", icon: GridIcon, label: "Ventures" },
  { id: "writing", icon: PencilIcon, label: "Writing" },
  { id: "personal", icon: BoltIcon, label: "Personal" },
  { id: "contact", icon: MailIcon, label: "Contact" },
];
