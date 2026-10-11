import type { ReactNode } from "react";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: ReactNode;
  children?: ReactNode;
};

export function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  return (
    <header className="relative overflow-hidden border-b border-border">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="glow pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{description}</p>
        {children && <div className="mt-8">{children}</div>}
      </div>
    </header>
  );
}
