import { apiClient } from "@/lib/http/api-client";
import type {
  CoinMarket,
  FiatCurrency,
  MarketOverview,
  MarketSnapshot,
  PriceHistoryDays,
  PricedSnapshot,
  PricePoint,
} from "../types";

export async function fetchCoinMarkets(currency: FiatCurrency, signal?: AbortSignal): Promise<PricedSnapshot<CoinMarket[]>> {
  const { data } = await apiClient.get<MarketSnapshot<CoinMarket[]>>("/markets", {
    params: { currency },
    signal,
  });
  return { ...data, currency };
}

export async function fetchMarketOverview(
  currency: FiatCurrency,
  signal?: AbortSignal,
): Promise<PricedSnapshot<MarketOverview>> {
  const { data } = await apiClient.get<MarketSnapshot<MarketOverview>>("/markets/overview", {
    params: { currency },
    signal,
  });
  return { ...data, currency };
}

export async function fetchPriceHistory(
  coinId: string,
  currency: FiatCurrency,
  days: PriceHistoryDays,
  signal?: AbortSignal,
): Promise<PricedSnapshot<PricePoint[]>> {
  const { data } = await apiClient.get<MarketSnapshot<PricePoint[]>>(
    `/markets/${encodeURIComponent(coinId)}/history`,
    { params: { currency, days }, signal },
  );
  return { ...data, currency };
}
