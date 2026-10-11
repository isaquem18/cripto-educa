import { queryOptions } from "@tanstack/react-query";
import { fetchTopExchanges } from "../api/exchanges-api";

const EXCHANGES_STALE_TIME_MS = 10 * 60 * 1000;

export const exchangeKeys = {
  all: ["exchanges"] as const,
  top: () => [...exchangeKeys.all, "top"] as const,
};

export const exchangeQueries = {
  top: () =>
    queryOptions({
      queryKey: exchangeKeys.top(),
      queryFn: ({ signal }) => fetchTopExchanges(signal),
      staleTime: EXCHANGES_STALE_TIME_MS,
    }),
};
