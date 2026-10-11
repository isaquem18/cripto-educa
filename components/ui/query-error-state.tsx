"use client";

import { getApiErrorMessage } from "@/lib/http/api-client";
import { buttonClasses } from "./button-link";

type QueryErrorStateProps = {
  error: unknown;
  onRetry: () => void;
  className?: string;
};

export function QueryErrorState({ error, onRetry, className = "" }: QueryErrorStateProps) {
  return (
    <div
      role="alert"
      className={`flex flex-col items-start gap-3 rounded-2xl border border-negative/30 bg-negative/5 p-5 text-sm sm:flex-row sm:items-center sm:justify-between ${className}`}
    >
      <p className="text-foreground">{getApiErrorMessage(error)}</p>
      <button type="button" onClick={onRetry} className={buttonClasses("secondary")}>
        Try again
      </button>
    </div>
  );
}
