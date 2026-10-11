"use client";

import { useState } from "react";
import { exchangeChecklistItems } from "../exchange-guide";

const STRONG_SCORE_RATIO = 0.8;
const MODERATE_SCORE_RATIO = 0.5;

function verdictFor(checkedCount: number, totalCount: number) {
  const ratio = checkedCount / totalCount;
  if (checkedCount === 0) {
    return { label: "Tick each item you can confirm for the exchange you are evaluating.", tone: "text-muted" };
  }
  if (ratio >= STRONG_SCORE_RATIO) {
    return { label: "Strong profile. Keep monitoring it and avoid storing more than you need there.", tone: "text-positive" };
  }
  if (ratio >= MODERATE_SCORE_RATIO) {
    return { label: "Some gaps. Research the unchecked items before depositing significant amounts.", tone: "text-accent" };
  }
  return { label: "Too many unknowns. Consider a better-documented alternative.", tone: "text-negative" };
}

export function ExchangeChecklist() {
  const [checkedIds, setCheckedIds] = useState<string[]>([]);
  const totalCount = exchangeChecklistItems.length;
  const verdict = verdictFor(checkedIds.length, totalCount);
  const percent = Math.round((checkedIds.length / totalCount) * 100);

  function toggleItem(id: string) {
    setCheckedIds((current) => (current.includes(id) ? current.filter((checkedId) => checkedId !== id) : [...current, id]));
  }

  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-lg font-semibold text-foreground">Exchange due-diligence checklist</h3>
        <span className="text-sm tabular-nums text-muted">
          {checkedIds.length}/{totalCount} confirmed
        </span>
      </div>
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-surface-raised" aria-hidden="true">
        <div className="h-full rounded-full bg-accent transition-all" style={{ width: `${percent}%` }} />
      </div>
      <p className={`mt-3 text-sm ${verdict.tone}`} aria-live="polite">
        {verdict.label}
      </p>
      <ul className="mt-5 space-y-2">
        {exchangeChecklistItems.map((item) => {
          const isChecked = checkedIds.includes(item.id);
          return (
            <li key={item.id}>
              <label
                className={`flex cursor-pointer items-start gap-3 rounded-xl border px-4 py-3 text-sm transition-colors ${
                  isChecked ? "border-positive/40 bg-positive/5 text-foreground" : "border-border text-foreground/85 hover:border-accent/40"
                }`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggleItem(item.id)}
                  className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--accent)]"
                />
                {item.label}
              </label>
            </li>
          );
        })}
      </ul>
      {checkedIds.length > 0 && (
        <button type="button" onClick={() => setCheckedIds([])} className="mt-4 text-xs text-muted hover:text-foreground">
          Clear checklist
        </button>
      )}
    </div>
  );
}
