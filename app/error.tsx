"use client";

import { useEffect } from "react";
import { buttonClasses } from "@/components/ui/button-link";

type ErrorPageProps = {
  error: Error & { digest?: string };
  retry: () => void;
};

export default function ErrorPage({ error, retry }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-28 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-negative">Error</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground">Something went wrong</h1>
      <p className="mt-4 text-muted">An unexpected error occurred while loading this page. Please try again.</p>
      <button type="button" onClick={() => retry()} className={`${buttonClasses("primary")} mt-8`}>
        Try again
      </button>
    </div>
  );
}
