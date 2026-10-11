import { queryOptions } from "@tanstack/react-query";
import { fetchCoinMarkets, fetchMarketOverview, fetchPriceHistory } from "../api/market-api";
import type { FiatCurrency, PriceHistoryDays } from "../types";

const LIVE_REFRESH_INTERVAL_MS = 60_000;
const HISTORY_STALE_TIME_MS = 30 * 60 * 1000;

export const marketKeys = {
  all: ["market"] as const,
  coins: (currency: FiatCurrency) => [...marketKeys.all, "coins", currency] as const,
  overview: (currency: FiatCurrency) => [...marketKeys.all, "overview", currency] as const,
  history: (coinId: string, currency: FiatCurrency, days: PriceHistoryDays) =>
    [...marketKeys.all, "history", coinId, currency, days] as const,
};

export const marketQueries = {
  coins: (currency: FiatCurrency) =>
    queryOptions({
      queryKey: marketKeys.coins(currency),
      queryFn: ({ signal }) => fetchCoinMarkets(currency, signal),
      refetchInterval: LIVE_REFRESH_INTERVAL_MS,
    }),
  overview: (currency: FiatCurrency) =>
    queryOptions({
      queryKey: marketKeys.overview(currency),
      queryFn: ({ signal }) => fetchMarketOverview(currency, signal),
      refetchInterval: LIVE_REFRESH_INTERVAL_MS * 2,
    }),
  history: (coinId: string, currency: FiatCurrency, days: PriceHistoryDays) =>
    queryOptions({
      queryKey: marketKeys.history(coinId, currency, days),
      queryFn: ({ signal }) => fetchPriceHistory(coinId, currency, days, signal),
      staleTime: HISTORY_STALE_TIME_MS,
    }),
};
