function Icon({ children, size = 16 }: { children: React.ReactNode; size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width={size} height={size} style={{ flexShrink: 0 }}>
      {children}
    </svg>
  );
}

export const PersonIcon = () => (
  <Icon>
    <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M5 20c1.2-4 4-6 7-6s5.8 2 7 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </Icon>
);

export const WindowIcon = () => (
  <Icon>
    <rect x="4" y="5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M4 9h16" stroke="currentColor" strokeWidth="1.6" />
  </Icon>
);

export const BriefcaseIcon = () => (
  <Icon>
    <rect x="3.5" y="8" width="17" height="11" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M8.5 8V6.5A1.5 1.5 0 0 1 10 5h4a1.5 1.5 0 0 1 1.5 1.5V8" stroke="currentColor" strokeWidth="1.6" />
  </Icon>
);

export const LayersIcon = () => (
  <Icon>
    <path d="M12 4 4 8l8 4 8-4-8-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M4 12l8 4 8-4M4 16l8 4 8-4" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  </Icon>
);

export const BoltIcon = () => (
  <Icon>
    <path d="M13 3 5 13h5l-1 8 8-10h-5l1-8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  </Icon>
);

export const MailIcon = ({ size = 16 }: { size?: number }) => (
  <Icon size={size}>
    <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M4.5 7l7.5 6 7.5-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </Icon>
);

export const PinIcon = () => (
  <Icon>
    <path
      d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="9.5" r="2.2" stroke="currentColor" strokeWidth="1.75" />
  </Icon>
);

export const CloudIcon = () => (
  <Icon>
    <path
      d="M7.5 17.5h9a3.5 3.5 0 0 0 .5-6.96A5 5 0 0 0 7.6 9.55 4 4 0 0 0 7.5 17.5Z"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinejoin="round"
    />
  </Icon>
);

const raisedCloud = "M7.5 14.5h9a3.5 3.5 0 0 0 .5-6.96A5 5 0 0 0 7.6 6.55 4 4 0 0 0 7.5 14.5Z";

export const SunIcon = () => (
  <Icon>
    <circle cx="12" cy="12" r="3.75" stroke="currentColor" strokeWidth="1.75" />
    <path
      d="M12 3.5v1.75M12 18.75v1.75M3.5 12h1.75M18.75 12h1.75M6 6l1.24 1.24M16.76 16.76 18 18M6 18l1.24-1.24M16.76 7.24 18 6"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
    />
  </Icon>
);

export const MoonIcon = () => (
  <Icon>
    <path
      d="M19.5 14.6A7.75 7.75 0 0 1 9.4 4.5a7.75 7.75 0 1 0 10.1 10.1Z"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinejoin="round"
    />
  </Icon>
);

export const PartlyCloudyIcon = () => (
  <Icon>
    <path
      d="M12.6 8.1A3.25 3.25 0 1 0 6.9 11.5M9 3.25v1.25M3.25 9H4.5M4.9 4.9l.9.9M13.1 4.9l-.9.9"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
    />
    <path
      d="M9.5 19.5h7.25a3 3 0 0 0 .45-5.97 4.25 4.25 0 0 0-8.06-1.23A3.6 3.6 0 0 0 9.5 19.5Z"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinejoin="round"
    />
  </Icon>
);

export const FogIcon = () => (
  <Icon>
    <path d="M4 8h16M6 12h14M4 16h12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
  </Icon>
);

export const RainIcon = () => (
  <Icon>
    <path d={raisedCloud} stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
    <path d="M9 17.5 8 20M12.5 17.5l-1 2.5M16 17.5l-1 2.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
  </Icon>
);

export const StormIcon = () => (
  <Icon>
    <path d={raisedCloud} stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
    <path
      d="M12.5 15.5 10.75 18.5h2.75L11.75 21.5"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);

export const SnowIcon = () => (
  <Icon>
    <path d={raisedCloud} stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
    <path d="M8.5 18h.01M12 19.5h.01M15.5 18h.01M10.25 21.5h.01M13.75 21.5h.01" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" />
  </Icon>
);

export const GitHubIcon = ({ size = 16 }: { size?: number }) => (
  <Icon size={size}>
    <path
      d="M12 3.5a8.5 8.5 0 0 0-2.69 16.57c.42.08.58-.19.58-.4v-1.44c-2.37.51-2.87-1.14-2.87-1.14-.39-.98-.95-1.24-.95-1.24-.77-.53.06-.52.06-.52.86.06 1.31.88 1.31.88.76 1.3 1.99.92 2.48.71.08-.55.3-.92.54-1.14-1.89-.21-3.88-.95-3.88-4.2 0-.93.33-1.68.87-2.28-.09-.21-.38-1.07.08-2.24 0 0 .71-.23 2.34.87a8.05 8.05 0 0 1 4.26 0c1.63-1.1 2.34-.87 2.34-.87.46 1.17.17 2.03.08 2.24.54.6.87 1.35.87 2.28 0 3.26-1.99 3.98-3.89 4.19.31.27.58.79.58 1.6v2.37c0 .21.16.48.59.4A8.5 8.5 0 0 0 12 3.5Z"
      fill="currentColor"
    />
  </Icon>
);

export const LinkedInIcon = ({ size = 16 }: { size?: number }) => (
  <Icon size={size}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="3" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="8" cy="8.2" r="1.2" fill="currentColor" />
    <path d="M8 11v6M12 11v6M12 13.5c0-1.4 1-2.5 2.3-2.5S16.5 12.1 16.5 13.5V17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </Icon>
);

export const GlobeIcon = () => (
  <Icon>
    <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
    <path d="M3.5 12h17M12 3.5c2.4 2.3 3.6 5.3 3.6 8.5s-1.2 6.2-3.6 8.5c-2.4-2.3-3.6-5.3-3.6-8.5S9.6 5.8 12 3.5Z" stroke="currentColor" strokeWidth="1.6" />
  </Icon>
);

export const CloseIcon = () => (
  <Icon>
    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </Icon>
);

export const ChevronIcon = () => (
  <Icon>
    <path d="M6 15l6-6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </Icon>
);

export const ArrowUpRight = ({ size = 14, strokeWidth = 1.8 }: { size?: number; strokeWidth?: number }) => (
  <svg viewBox="0 0 24 24" fill="none" width={size} height={size} style={{ flexShrink: 0 }}>
    <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const PlayIcon = () => (
  <Icon>
    <path d="M8 5.5v13l10.5-6.5L8 5.5Z" fill="currentColor" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  </Icon>
);

export const PauseIcon = () => (
  <Icon>
    <path d="M8.5 6v12M15.5 6v12" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
  </Icon>
);

export const ArrowDownIcon = ({ size = 14 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" fill="none" width={size} height={size} style={{ flexShrink: 0 }}>
    <path d="M12 5v14M6 13l6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const DocumentDownIcon = () => (
  <Icon size={20}>
    <path d="M7.5 3.5h6L18 8v11a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 19V5a1.5 1.5 0 0 1 1.5-1.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M13 3.5V8h5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path data-arrow d="M12 10.5v6M9.5 14l2.5 2.5 2.5-2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </Icon>
);
