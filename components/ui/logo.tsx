type LogoMarkProps = {
  className?: string;
};

export function LogoMark({ className = "h-8 w-8" }: LogoMarkProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="logo-gradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ffcf5c" />
          <stop offset="1" stopColor="#f08c00" />
        </linearGradient>
      </defs>
      <path d="M16 2 28.1 9v14L16 30 3.9 23V9L16 2Z" fill="url(#logo-gradient)" />
      <path d="M10 11.5h12v3h-4.5V23h-3v-8.5H10v-3Z" fill="#070b14" />
    </svg>
  );
}

export function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark />
      <span className="text-lg font-semibold tracking-tight text-foreground">
        The<span className="text-accent">Crypto</span>
      </span>
    </span>
  );
}
