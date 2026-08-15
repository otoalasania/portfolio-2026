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

export const ChatIcon = () => (
  <Icon>
    <path
      d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7a2.5 2.5 0 0 1-2.5 2.5H10l-4.5 4v-4H6.5A2.5 2.5 0 0 1 4 13.5v-7Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </Icon>
);

export const LayersIcon = () => (
  <Icon>
    <path d="M12 4 4 8l8 4 8-4-8-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M4 12l8 4 8-4M4 16l8 4 8-4" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  </Icon>
);

export const GridIcon = () => (
  <Icon>
    {[3.5, 10.5, 17.5].flatMap((x) =>
      [3.5, 10.5, 17.5].map((y) => (
        <rect key={`${x}-${y}`} x={x} y={y} width="3" height="3" rx="0.6" stroke="currentColor" strokeWidth="1.4" />
      ))
    )}
  </Icon>
);

export const PencilIcon = () => (
  <Icon>
    <path
      d="M15 4.5 19.5 9 8 20.5H3.5V16L15 4.5Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path d="M12.5 7 17 11.5" stroke="currentColor" strokeWidth="1.6" />
  </Icon>
);

export const BoltIcon = () => (
  <Icon>
    <path d="M13 3 5 13h5l-1 8 8-10h-5l1-8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  </Icon>
);

export const MailIcon = () => (
  <Icon>
    <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M4.5 7l7.5 6 7.5-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </Icon>
);

export const ClockIcon = () => (
  <Icon>
    <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
    <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </Icon>
);

export const PinIcon = () => (
  <Icon>
    <path
      d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="9.5" r="2.2" stroke="currentColor" strokeWidth="1.6" />
  </Icon>
);

export const CloudIcon = () => (
  <Icon>
    <path
      d="M7.5 17.5h9a3.5 3.5 0 0 0 .5-6.96A5 5 0 0 0 7.6 9.55 4 4 0 0 0 7.5 17.5Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </Icon>
);

export const XIcon = () => (
  <Icon>
    <path d="M5 4.5h3.6l4 5.4 4.6-5.4H19l-6.3 7.3L19.4 19.5H15.8l-4.3-5.8-5 5.8H4.4l6.7-7.8L5 4.5Z" fill="currentColor" />
  </Icon>
);

export const GitHubIcon = () => (
  <Icon>
    <path
      d="M12 3.5a8.5 8.5 0 0 0-2.69 16.57c.42.08.58-.19.58-.4v-1.44c-2.37.51-2.87-1.14-2.87-1.14-.39-.98-.95-1.24-.95-1.24-.77-.53.06-.52.06-.52.86.06 1.31.88 1.31.88.76 1.3 1.99.92 2.48.71.08-.55.3-.92.54-1.14-1.89-.21-3.88-.95-3.88-4.2 0-.93.33-1.68.87-2.28-.09-.21-.38-1.07.08-2.24 0 0 .71-.23 2.34.87a8.05 8.05 0 0 1 4.26 0c1.63-1.1 2.34-.87 2.34-.87.46 1.17.17 2.03.08 2.24.54.6.87 1.35.87 2.28 0 3.26-1.99 3.98-3.89 4.19.31.27.58.79.58 1.6v2.37c0 .21.16.48.59.4A8.5 8.5 0 0 0 12 3.5Z"
      fill="currentColor"
    />
  </Icon>
);

export const LinkedInIcon = () => (
  <Icon>
    <rect x="3.5" y="3.5" width="17" height="17" rx="3" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="8" cy="8.2" r="1.2" fill="currentColor" />
    <path d="M8 11v6M12 11v6M12 13.5c0-1.4 1-2.5 2.3-2.5S16.5 12.1 16.5 13.5V17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </Icon>
);

export const SpotifyIcon = () => (
  <Icon size={20}>
    <circle cx="12" cy="12" r="9" fill="#1DB954" />
    <path d="M7 10.2c3-.8 6.6-.5 9 1" stroke="#0a0a0a" strokeWidth="1.3" strokeLinecap="round" />
    <path d="M7.3 13c2.5-.65 5.5-.4 7.5.85" stroke="#0a0a0a" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M7.6 15.7c2-.5 4.4-.3 6 .7" stroke="#0a0a0a" strokeWidth="1.1" strokeLinecap="round" />
  </Icon>
);

export const FigmaIcon = () => (
  <Icon size={20}>
    <circle cx="15" cy="16.5" r="2.7" fill="#1abcfe" />
    <path d="M9.3 21.2a2.7 2.7 0 1 1 0-5.4h2.7v2.7a2.7 2.7 0 0 1-2.7 2.7Z" fill="#0acf83" />
    <path d="M9.3 15.8a2.7 2.7 0 0 1 0-5.4h2.7v5.4H9.3Z" fill="#a259ff" />
    <path d="M9.3 10.4a2.7 2.7 0 0 1 0-5.4h2.7v5.4H9.3Z" fill="#f24e1e" />
    <path d="M12 5h2.7a2.7 2.7 0 1 1 0 5.4H12V5Z" fill="#ff7262" />
  </Icon>
);

export const CursorIcon = () => (
  <Icon size={20}>
    <path d="M6 4l13 7.5-6 1.5-2 6L6 4Z" fill="currentColor" />
  </Icon>
);

export const ClaudeIcon = () => (
  <Icon size={20}>
    <circle cx="12" cy="12" r="9" fill="#0a0a0a" />
    <g stroke="#D97757" strokeWidth="1.6" strokeLinecap="round">
      <path d="M12 6v3M12 15v3M6 12h3M15 12h3" />
      <path d="M8.1 8.1l2.1 2.1M13.8 13.8l2.1 2.1M15.9 8.1l-2.1 2.1M10.2 13.8l-2.1 2.1" />
    </g>
  </Icon>
);

export const NextJsIcon = () => (
  <Icon size={20}>
    <circle cx="12" cy="12" r="9" fill="currentColor" />
    <path
      d="M8.3 7.8v8.4M8.3 7.8l7.4 8.4M14.7 7.8v6"
      stroke="#0a0a0a"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);

export const TypeScriptIcon = () => (
  <Icon size={20}>
    <rect x="3" y="3" width="18" height="18" rx="4" fill="#3178c6" />
    <text x="12" y="16.3" textAnchor="middle" fontSize="10" fontWeight="700" fill="white">
      TS
    </text>
  </Icon>
);

export const BitbucketIcon = () => (
  <Icon size={20}>
    <rect x="3" y="3" width="18" height="18" rx="4" fill="#0052cc" />
    <path d="M6.3 8h11.4l-1.5 9.3a.9.9 0 0 1-.9.7H8.7a.9.9 0 0 1-.9-.7L6.3 8Z" fill="white" />
    <path d="M14.5 13H9.5l-.6-3.5h6.2l-.6 3.5Z" fill="#0052cc" />
  </Icon>
);

export const InstagramIcon = () => (
  <Icon>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="16.7" cy="7.3" r="1" fill="currentColor" />
  </Icon>
);

export const CommandIcon = () => (
  <Icon>
    <path
      d="M8 6.5A1.8 1.8 0 1 1 9.8 8.3H8V6.5Zm0 11A1.8 1.8 0 1 0 9.8 15.7H8v1.8Zm8-11A1.8 1.8 0 1 0 14.2 8.3H16V6.5Zm0 11A1.8 1.8 0 1 1 14.2 15.7H16v1.8Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <rect x="8" y="8.3" width="8" height="7.4" stroke="currentColor" strokeWidth="1.5" />
  </Icon>
);

export const GlobeIcon = () => (
  <Icon>
    <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
    <path d="M3.5 12h17M12 3.5c2.4 2.3 3.6 5.3 3.6 8.5s-1.2 6.2-3.6 8.5c-2.4-2.3-3.6-5.3-3.6-8.5S9.6 5.8 12 3.5Z" stroke="currentColor" strokeWidth="1.6" />
  </Icon>
);

export const PlusIcon = () => (
  <Icon>
    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </Icon>
);

export const LeicaWordmark = () => (
  <span style={{ fontFamily: "cursive", fontStyle: "italic" }}>Leica</span>
);

export const ArrowUpRight = () => (
  <svg viewBox="0 0 24 24" fill="none" width={14} height={14} style={{ flexShrink: 0 }}>
    <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
