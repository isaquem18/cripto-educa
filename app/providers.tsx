"use client";

import type { ReactNode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { PersistedStoresHydrator } from "@/components/persisted-stores-hydrator";
import { getQueryClient } from "@/lib/query/query-client";

export function Providers({ children }: { children: ReactNode }) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <PersistedStoresHydrator />
      {children}
    </QueryClientProvider>
  );
}
