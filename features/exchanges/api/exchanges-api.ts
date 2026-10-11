import { apiClient } from "@/lib/http/api-client";
import type { MarketSnapshot } from "@/features/market/types";
import type { ExchangeSummary } from "../types";

export async function fetchTopExchanges(signal?: AbortSignal) {
  const { data } = await apiClient.get<MarketSnapshot<ExchangeSummary[]>>("/exchanges", { signal });
  return data;
}
