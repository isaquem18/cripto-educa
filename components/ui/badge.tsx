import type { ReactNode } from "react";

type BadgeTone = "neutral" | "accent" | "positive" | "negative" | "info";

const toneClasses: Record<BadgeTone, string> = {
  neutral: "border-border bg-surface-raised text-muted",
  accent: "border-accent/30 bg-accent/10 text-accent",
  positive: "border-positive/30 bg-positive/10 text-positive",
  negative: "border-negative/30 bg-negative/10 text-negative",
  info: "border-info/30 bg-info/10 text-info",
};

type BadgeProps = {
  children: ReactNode;
  tone?: BadgeTone;
  className?: string;
};

export function Badge({ children, tone = "neutral", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium ${toneClasses[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
