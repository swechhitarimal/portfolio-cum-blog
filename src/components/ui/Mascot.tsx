interface MascotProps {
  className?: string;
  size?: number;
  pose?: "working" | "reading" | "studying" | "tea";
}

export function Mascot({ className = "", size = 120, pose = "working" }: MascotProps) {
  return (
    <svg viewBox="0 0 120 120" width={size} height={size} className={className} fill="none">
      {pose === "working" && (
        <>
          <ellipse cx="60" cy="95" rx="32" ry="22" fill="var(--color-ink)" />
          <rect x="44" y="78" width="32" height="4" rx="2" fill="var(--color-ink)" />
          <rect x="40" y="60" width="40" height="22" rx="4" fill="var(--color-ink)" />
          <circle cx="60" cy="50" r="22" fill="var(--color-ink)" />
          <polygon points="42,34 33,14 48,28" fill="var(--color-ink)" />
          <polygon points="78,34 87,14 72,28" fill="var(--color-ink)" />
          <polygon points="43,33 36,20 47,28" fill="var(--color-accent-light)" />
          <polygon points="77,33 84,20 73,28" fill="var(--color-accent-light)" />
          <circle cx="52" cy="48" r="4.5" fill="var(--color-surface)" />
          <circle cx="68" cy="48" r="4.5" fill="var(--color-surface)" />
          <circle cx="53.5" cy="48" r="2.5" fill="var(--color-ink)" />
          <circle cx="69.5" cy="48" r="2.5" fill="var(--color-ink)" />
          <ellipse cx="50" cy="47" rx="1.5" ry="2" fill="var(--color-surface)" opacity="0.8" />
          <ellipse cx="66" cy="47" rx="1.5" ry="2" fill="var(--color-surface)" opacity="0.8" />
          <ellipse cx="60" cy="56" rx="3" ry="1.5" fill="var(--color-accent)" opacity="0.6" />
          <path d="M56,59 Q60,63 64,59" stroke="var(--color-text)" strokeWidth="1" fill="none" strokeLinecap="round" />
          <path d="M48,34 Q60,28 72,34" fill="var(--color-accent)" />
          <circle cx="60" cy="34" r="3" fill="var(--color-accent-dark)" />
          <rect x="36" y="68" width="8" height="14" rx="3" fill="var(--color-matcha)" opacity="0.7" />
          <rect x="76" y="68" width="8" height="14" rx="3" fill="var(--color-matcha)" opacity="0.7" />
          <line x1="36" y1="75" x2="84" y2="75" stroke="var(--color-text)" strokeWidth="0.5" opacity="0.2" />
          <rect x="52" y="82" width="16" height="2" rx="1" fill="var(--color-accent)" opacity="0.3" />
        </>
      )}
      {pose === "reading" && (
        <>
          <ellipse cx="60" cy="95" rx="32" ry="22" fill="var(--color-ink)" />
          <circle cx="60" cy="50" r="22" fill="var(--color-ink)" />
          <polygon points="42,34 33,14 48,28" fill="var(--color-ink)" />
          <polygon points="78,34 87,14 72,28" fill="var(--color-ink)" />
          <polygon points="43,33 36,20 47,28" fill="var(--color-accent-light)" />
          <polygon points="77,33 84,20 73,28" fill="var(--color-accent-light)" />
          <circle cx="52" cy="48" r="4.5" fill="var(--color-surface)" />
          <circle cx="68" cy="48" r="4.5" fill="var(--color-surface)" />
          <circle cx="53.5" cy="48" r="2.5" fill="var(--color-ink)" />
          <circle cx="69.5" cy="48" r="2.5" fill="var(--color-ink)" />
          <ellipse cx="50" cy="47" rx="1.5" ry="2" fill="var(--color-surface)" opacity="0.8" />
          <ellipse cx="66" cy="47" rx="1.5" ry="2" fill="var(--color-surface)" opacity="0.8" />
          <ellipse cx="60" cy="56" rx="3" ry="1.5" fill="var(--color-accent)" opacity="0.6" />
          <path d="M56,59 Q60,63 64,59" stroke="var(--color-text)" strokeWidth="1" fill="none" strokeLinecap="round" />
          <path d="M48,34 Q60,28 72,34" fill="var(--color-accent)" />
          <circle cx="60" cy="34" r="3" fill="var(--color-accent-dark)" />
          <rect x="40" y="70" width="40" height="28" rx="3" fill="var(--color-denim-light)" opacity="0.6" />
          <rect x="44" y="74" width="32" height="20" rx="2" fill="var(--color-surface)" />
          <line x1="48" y1="80" x2="72" y2="80" stroke="var(--color-text-secondary)" strokeWidth="0.5" opacity="0.4" />
          <line x1="48" y1="84" x2="72" y2="84" stroke="var(--color-text-secondary)" strokeWidth="0.5" opacity="0.4" />
          <line x1="48" y1="88" x2="64" y2="88" stroke="var(--color-text-secondary)" strokeWidth="0.5" opacity="0.4" />
          <rect x="56" y="70" width="8" height="6" rx="2" fill="var(--color-accent)" opacity="0.4" />
        </>
      )}
      {pose === "studying" && (
        <>
          <ellipse cx="60" cy="95" rx="32" ry="22" fill="var(--color-ink)" />
          <circle cx="60" cy="50" r="22" fill="var(--color-ink)" />
          <polygon points="42,34 33,14 48,28" fill="var(--color-ink)" />
          <polygon points="78,34 87,14 72,28" fill="var(--color-ink)" />
          <polygon points="43,33 36,20 47,28" fill="var(--color-accent-light)" />
          <polygon points="77,33 84,20 73,28" fill="var(--color-accent-light)" />
          <circle cx="52" cy="48" r="4.5" fill="var(--color-surface)" />
          <circle cx="68" cy="48" r="4.5" fill="var(--color-surface)" />
          <circle cx="53.5" cy="48" r="2.5" fill="var(--color-ink)" />
          <circle cx="69.5" cy="48" r="2.5" fill="var(--color-ink)" />
          <ellipse cx="50" cy="47" rx="1.5" ry="2" fill="var(--color-surface)" opacity="0.8" />
          <ellipse cx="66" cy="47" rx="1.5" ry="2" fill="var(--color-surface)" opacity="0.8" />
          <path d="M56,59 Q60,63 64,59" stroke="var(--color-text)" strokeWidth="1" fill="none" strokeLinecap="round" />
          <path d="M48,34 Q60,28 72,34" fill="var(--color-accent)" />
          <circle cx="60" cy="34" r="3" fill="var(--color-accent-dark)" />
          <rect x="38" y="66" width="44" height="30" rx="4" fill="var(--color-matcha)" opacity="0.15" />
          <rect x="42" y="70" width="36" height="22" rx="2" fill="var(--color-surface)" />
          <circle cx="60" cy="81" r="5" fill="var(--color-matcha)" opacity="0.3" />
          <line x1="60" y1="76" x2="60" y2="86" stroke="var(--color-matcha)" strokeWidth="1.5" opacity="0.4" />
          <line x1="55" y1="81" x2="65" y2="81" stroke="var(--color-matcha)" strokeWidth="1.5" opacity="0.4" />
          <rect x="50" y="66" width="20" height="6" rx="2" fill="var(--color-accent)" opacity="0.2" />
        </>
      )}
      {pose === "tea" && (
        <>
          <ellipse cx="60" cy="95" rx="32" ry="22" fill="var(--color-ink)" />
          <circle cx="60" cy="50" r="22" fill="var(--color-ink)" />
          <polygon points="42,34 33,14 48,28" fill="var(--color-ink)" />
          <polygon points="78,34 87,14 72,28" fill="var(--color-ink)" />
          <polygon points="43,33 36,20 47,28" fill="var(--color-accent-light)" />
          <polygon points="77,33 84,20 73,28" fill="var(--color-accent-light)" />
          <circle cx="52" cy="48" r="4.5" fill="var(--color-surface)" />
          <circle cx="68" cy="48" r="4.5" fill="var(--color-surface)" />
          <circle cx="53.5" cy="48" r="2.5" fill="var(--color-ink)" />
          <circle cx="69.5" cy="48" r="2.5" fill="var(--color-ink)" />
          <ellipse cx="50" cy="47" rx="1.5" ry="2" fill="var(--color-surface)" opacity="0.8" />
          <ellipse cx="66" cy="47" rx="1.5" ry="2" fill="var(--color-surface)" opacity="0.8" />
          <path d="M56,59 Q60,63 64,59" stroke="var(--color-text)" strokeWidth="1" fill="none" strokeLinecap="round" />
          <path d="M48,34 Q60,28 72,34" fill="var(--color-accent)" />
          <circle cx="60" cy="34" r="3" fill="var(--color-accent-dark)" />
          <rect x="42" y="70" width="24" height="18" rx="3" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1" />
          <path d="M66,74 Q74,76 72,82 Q70,86 66,86" stroke="var(--color-border)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M46,76 Q48,74 50,76 Q52,78 50,80 Q48,78 46,76Z" fill="var(--color-accent)" opacity="0.5" />
          <rect x="50" y="70" width="8" height="4" rx="1" fill="var(--color-accent)" opacity="0.2" />
          <line x1="48" y1="92" x2="72" y2="92" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" opacity="0.2" />
        </>
      )}
    </svg>
  );
}
