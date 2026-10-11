"use client";

import { useId } from "react";

type SelectOption = {
  value: string;
  label: string;
};

type SelectFieldProps = {
  label: string;
  value: string;
  options: SelectOption[];
  onChange: (value: string) => void;
};

export function SelectField({ label, value, options, onChange }: SelectFieldProps) {
  const selectId = useId();

  return (
    <div>
      <label htmlFor={selectId} className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted">
        {label}
      </label>
      <select
        id={selectId}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:border-accent focus:outline-none"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
