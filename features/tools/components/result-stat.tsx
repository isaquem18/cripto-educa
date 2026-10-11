import type { ReactNode } from "react";

type ResultStatProps = {
  label: string;
  value: ReactNode;
  tone?: "default" | "positive" | "negative" | "accent";
  hint?: string;
};

const toneClasses = {
  default: "text-foreground",
  positive: "text-positive",
  negative: "text-negative",
  accent: "text-accent",
};

export function ResultStat({ label, value, tone = "default", hint }: ResultStatProps) {
  return (
    <div className="rounded-xl border border-border bg-background/60 p-4">
      <p className="text-xs font-medium uppercase tracking-wider text-muted">{label}</p>
      <p className={`mt-1 text-xl font-semibold tabular-nums ${toneClasses[tone]}`}>{value}</p>
      {hint && <p className="mt-1 text-xs text-muted">{hint}</p>}
    </div>
  );
}
