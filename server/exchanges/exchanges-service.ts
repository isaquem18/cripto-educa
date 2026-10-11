import "server-only";
import { readThroughCache } from "@/server/cache/memory-cache";
import { coingeckoClient } from "@/server/http/coingecko-client";
import type { ExchangeSummary } from "@/features/exchanges/types";
import type { MarketSnapshot } from "@/features/market/types";

const EXCHANGES_FRESH_MS = 10 * 60 * 1000;
const EXCHANGE_PAGE_SIZE = 30;
const DESCRIPTION_MAX_LENGTH = 220;

type CoingeckoExchange = {
  id: string;
  name: string;
  image: string;
  url: string;
  description: string | null;
  country: string | null;
  year_established: number | null;
  trust_score: number | null;
  trust_score_rank: number | null;
  trade_volume_24h_btc: number | null;
};

function shortenDescription(description: string | null) {
  const normalized = (description ?? "").replace(/\s+/g, " ").trim();
  if (normalized.length <= DESCRIPTION_MAX_LENGTH) {
    return normalized;
  }
  return `${normalized.slice(0, DESCRIPTION_MAX_LENGTH).replace(/\s+\S*$/, "")}…`;
}

function toExchangeSummary(exchange: CoingeckoExchange): ExchangeSummary {
  return {
    id: exchange.id,
    name: exchange.name,
    imageUrl: exchange.image,
    url: exchange.url,
    description: shortenDescription(exchange.description),
    country: exchange.country,
    yearEstablished: exchange.year_established,
    trustScore: exchange.trust_score,
    trustScoreRank: exchange.trust_score_rank,
    volume24hBtc: exchange.trade_volume_24h_btc ?? 0,
  };
}

export async function listTopExchanges(): Promise<MarketSnapshot<ExchangeSummary[]>> {
  return readThroughCache("exchanges:top", EXCHANGES_FRESH_MS, async () => {
    const { data } = await coingeckoClient.get<CoingeckoExchange[]>("/exchanges", {
      params: { per_page: EXCHANGE_PAGE_SIZE, page: 1 },
    });
    return data.map(toExchangeSummary);
  });
}
