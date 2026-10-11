import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { usePreferencesStore } from "@/stores/preferences-store";
import { marketQueries } from "../queries/market-queries";
import type { PriceHistoryDays } from "../types";

export function useSelectedCurrency() {
  return usePreferencesStore((state) => state.currency);
}

export function useCoinMarkets() {
  const currency = useSelectedCurrency();
  return useQuery({ ...marketQueries.coins(currency), placeholderData: keepPreviousData });
}

export function useMarketOverview() {
  const currency = useSelectedCurrency();
  return useQuery({ ...marketQueries.overview(currency), placeholderData: keepPreviousData });
}

export function usePriceHistory(coinId: string, days: PriceHistoryDays) {
  const currency = useSelectedCurrency();
  return useQuery({
    ...marketQueries.history(coinId, currency, days),
    enabled: coinId.length > 0,
    placeholderData: keepPreviousData,
  });
}
