import type { CalloutTone, LessonBlock } from "../types";

const calloutStyles: Record<CalloutTone, { container: string; icon: string }> = {
  info: { container: "border-info/30 bg-info/5", icon: "ℹ" },
  tip: { container: "border-positive/30 bg-positive/5", icon: "✦" },
  warning: { container: "border-accent/40 bg-accent/5", icon: "⚠" },
};

const calloutTitleColors: Record<CalloutTone, string> = {
  info: "text-info",
  tip: "text-positive",
  warning: "text-accent",
};

function renderBlock(block: LessonBlock, index: number) {
  switch (block.type) {
    case "heading":
      return (
        <h2 key={index} className="mt-10 text-2xl font-semibold tracking-tight text-foreground first:mt-0">
          {block.text}
        </h2>
      );
    case "paragraph":
      return (
        <p key={index} className="mt-4 text-[17px] leading-8 text-foreground/85">
          {block.text}
        </p>
      );
    case "list":
      return (
        <ul key={index} className="mt-4 space-y-2.5">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-[17px] leading-7 text-foreground/85">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "steps":
      return (
        <ol key={index} className="mt-5 space-y-3">
          {block.items.map((item, stepIndex) => (
            <li key={item} className="flex gap-4 rounded-xl border border-border bg-surface p-4 text-[16px] leading-7 text-foreground/85">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-semibold text-background">
                {stepIndex + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      );
    case "callout":
      return (
        <aside key={index} className={`mt-6 rounded-2xl border p-5 ${calloutStyles[block.tone].container}`}>
          <p className={`flex items-center gap-2 font-semibold ${calloutTitleColors[block.tone]}`}>
            <span aria-hidden="true">{calloutStyles[block.tone].icon}</span>
            {block.title}
          </p>
          <p className="mt-2 text-[16px] leading-7 text-foreground/85">{block.text}</p>
        </aside>
      );
    case "comparison":
      return (
        <div key={index} className="relative mt-6 overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[480px] text-left text-sm">
            <thead className="bg-surface-raised">
              <tr>
                <th scope="col" className="px-4 py-3 font-medium text-muted">
                  <span className="sr-only">Aspect</span>
                </th>
                {block.columns.map((column) => (
                  <th key={column} scope="col" className="px-4 py-3 font-semibold text-foreground">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row.label} className="border-t border-border bg-surface align-top">
                  <th scope="row" className="px-4 py-3 font-medium text-foreground">
                    {row.label}
                  </th>
                  {row.values.map((value, valueIndex) => (
                    <td key={valueIndex} className="px-4 py-3 leading-6 text-foreground/80">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

type LessonContentProps = {
  blocks: LessonBlock[];
};

export function LessonContent({ blocks }: LessonContentProps) {
  return <div>{blocks.map(renderBlock)}</div>;
}
