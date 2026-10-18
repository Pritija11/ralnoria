type IconProps = {
  className?: string;
};

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconLogo({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3.5 6.5h5M3.5 12h5M3.5 17.5h5" />
      <path d="M8.5 6.5 12 10.5M8.5 17.5 12 13.5" />
      <rect x="10.3" y="9.3" width="5.4" height="5.4" rx="1.2" transform="rotate(45 13 12)" />
      <path d="M15.5 12h5" />
    </svg>
  );
}

export function IconMenu({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3.5 7h17M3.5 12h17M3.5 17h17" />
    </svg>
  );
}

export function IconClose({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 5l14 14M19 5 5 19" />
    </svg>
  );
}

export function IconArrowRight({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4.5 12h15M13 5.5 19.5 12 13 18.5" />
    </svg>
  );
}

export function IconArrowUpRight({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M7 17 17 7M8.5 7H17v8.5" />
    </svg>
  );
}

export function IconMail({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  );
}

export function IconPhone({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5.5 4h3l1.5 4-2 1.5a12 12 0 0 0 6.5 6.5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A17.5 17.5 0 0 1 3.5 6.2 2 2 0 0 1 5.5 4Z" />
    </svg>
  );
}

export function IconMapPin({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 21.5s7-6.4 7-12A7 7 0 0 0 5 9.5c0 5.6 7 12 7 12Z" />
      <circle cx="12" cy="9.5" r="2.4" />
    </svg>
  );
}

export function IconCheck({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4.5 12.5 9.5 17.5 19.5 6.5" />
    </svg>
  );
}

export function IconUser({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M4.5 20c1-3.5 4-5.5 7.5-5.5s6.5 2 7.5 5.5" />
    </svg>
  );
}

export function IconMessageSquare({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 5h16v11H9l-4 4V5Z" />
    </svg>
  );
}

export function IconUsers({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="9" cy="8" r="3" />
      <path d="M2.8 19c0.9-3.1 3.4-4.8 6.2-4.8s5.3 1.7 6.2 4.8" />
      <circle cx="17" cy="8.5" r="2.3" opacity="0.7" />
      <path d="M15.5 14.5c2.2 0.3 3.8 1.8 4.5 4.3" opacity="0.7" />
    </svg>
  );
}

export function IconEnvironment({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3.5" y="4" width="8" height="8" rx="1.4" />
      <rect x="12.5" y="4" width="8" height="8" rx="1.4" />
      <rect x="8" y="13" width="8" height="7" rx="1.4" />
    </svg>
  );
}

export function IconDeploy({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 20V7.5" />
      <path d="M6.5 13 12 7.5 17.5 13" />
      <path d="M5 20h14" />
    </svg>
  );
}

export function IconConfig({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 7h7M15 7h5M4 12h11M19 12h1M4 17h3M11 17h9" />
      <circle cx="13" cy="7" r="2" />
      <circle cx="17" cy="12" r="2" />
      <circle cx="9" cy="17" r="2" />
    </svg>
  );
}

export function IconOps({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="4.5" width="18" height="15" rx="2" />
      <path d="M6.5 9.5 10 12.5 6.5 15.5M12.5 15.5h5" />
    </svg>
  );
}

export function IconDrift({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3.5 21 19.5H3Z" />
      <path d="M12 9.5v4.5M12 16.8h.01" strokeWidth="2.2" />
    </svg>
  );
}

export function IconRollback({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 9h9a5.5 5.5 0 0 1 0 11H10" />
      <path d="M9 4.5 5 9l4 4.5" />
    </svg>
  );
}

export function IconCloud({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M7 17.5a4 4 0 0 1-.5-7.97A5.5 5.5 0 0 1 17.2 9a4.3 4.3 0 0 1-.7 8.5H7Z" />
    </svg>
  );
}

export function IconServer({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3.5" y="4" width="17" height="6.5" rx="1.6" />
      <rect x="3.5" y="13.5" width="17" height="6.5" rx="1.6" />
      <path d="M7 7.3h.01M7 16.8h.01" strokeWidth="2.2" />
    </svg>
  );
}

export function IconGitBranch({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="6" cy="5.5" r="2" />
      <circle cx="6" cy="18.5" r="2" />
      <circle cx="18" cy="8.5" r="2" />
      <path d="M6 7.5v9" />
      <path d="M6 10.5c0 3 3 3 6 3h4" />
    </svg>
  );
}

export function IconTerminal({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="4.5" width="18" height="15" rx="2" />
      <path d="M6.5 9.5 10 12.5 6.5 15.5M12.5 15.5h5" />
    </svg>
  );
}

export function IconLock({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V7.5a4 4 0 0 1 8 0V11" />
    </svg>
  );
}
