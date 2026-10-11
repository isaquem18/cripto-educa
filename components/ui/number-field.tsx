"use client";

import { useId } from "react";

type NumberFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  suffix?: string;
  prefix?: string;
  step?: string;
  min?: string;
  hint?: string;
};

export function NumberField({ label, value, onChange, suffix, prefix, step = "any", min = "0", hint }: NumberFieldProps) {
  const inputId = useId();

  return (
    <div>
      <label htmlFor={inputId} className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted">
        {label}
      </label>
      <div className="flex items-center rounded-xl border border-border bg-background focus-within:border-accent">
        {prefix && <span className="pl-3.5 text-sm text-muted">{prefix}</span>}
        <input
          id={inputId}
          type="number"
          inputMode="decimal"
          value={value}
          step={step}
          min={min}
          onChange={(event) => onChange(event.target.value)}
          className="w-full min-w-0 bg-transparent px-3.5 py-2.5 text-sm tabular-nums text-foreground focus:outline-none"
        />
        {suffix && <span className="pr-3.5 text-sm text-muted">{suffix}</span>}
      </div>
      {hint && <p className="mt-1 text-xs text-muted">{hint}</p>}
    </div>
  );
}
