import type { ReactNode } from "react";

type ToolPanelProps = {
  id: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function ToolPanel({ id, title, description, children }: ToolPanelProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-24 rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <h2 id={`${id}-title`} className="text-xl font-semibold text-foreground">
        {title}
      </h2>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{description}</p>
      <div className="mt-6">{children}</div>
    </section>
  );
}
