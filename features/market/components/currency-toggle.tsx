"use client";

import { usePreferencesStore } from "@/stores/preferences-store";
import { FIAT_CURRENCIES } from "../types";

export function CurrencyToggle() {
  const currency = usePreferencesStore((state) => state.currency);
  const setCurrency = usePreferencesStore((state) => state.setCurrency);

  return (
    <div role="group" aria-label="Display currency" className="flex rounded-lg border border-border bg-surface p-0.5">
      {FIAT_CURRENCIES.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setCurrency(option)}
          aria-pressed={currency === option}
          className={`rounded-md px-2.5 py-1 text-xs font-semibold uppercase transition-colors ${
            currency === option ? "bg-accent text-background" : "text-muted hover:text-foreground"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
