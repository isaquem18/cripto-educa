import "server-only";
import { readThroughCache } from "@/server/cache/memory-cache";
import { coingeckoClient } from "@/server/http/coingecko-client";
import type {
  CoinMarket,
  FiatCurrency,
  MarketOverview,
  MarketSnapshot,
  PriceHistoryDays,
  PricePoint,
} from "@/features/market/types";

const MARKETS_FRESH_MS = 60_000;
const OVERVIEW_FRESH_MS = 120_000;
const HISTORY_FRESH_MS = 60 * 60 * 1000;
const MARKET_PAGE_SIZE = 100;
const SPARKLINE_TARGET_POINTS = 48;
const MAX_PLAUSIBLE_VOLUME_TO_MARKET_CAP_RATIO = 1;

type CoingeckoMarketCoin = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  market_cap_rank: number | null;
  current_price: number | null;
  market_cap: number | null;
  total_volume: number | null;
  high_24h: number | null;
  low_24h: number | null;
  price_change_percentage_1h_in_currency?: number | null;
  price_change_percentage_24h_in_currency?: number | null;
  price_change_percentage_7d_in_currency?: number | null;
  circulating_supply: number | null;
  max_supply: number | null;
  ath: number | null;
  ath_change_percentage: number | null;
  sparkline_in_7d?: { price: number[] } | null;
};

type CoingeckoGlobalResponse = {
  data: {
    active_cryptocurrencies: number;
    markets: number;
    total_market_cap: Record<string, number>;
    total_volume: Record<string, number>;
    market_cap_percentage: Record<string, number>;
    market_cap_change_percentage_24h_usd: number;
  };
};

type CoingeckoMarketChartResponse = {
  prices: [number, number][];
};

function downsample(values: number[], targetPoints: number) {
  if (values.length <= targetPoints) {
    return values;
  }
  const step = values.length / targetPoints;
  const sampled = Array.from({ length: targetPoints }, (_, index) => values[Math.floor(index * step)]);
  sampled[sampled.length - 1] = values[values.length - 1];
  return sampled;
}

function toCoinMarket(coin: CoingeckoMarketCoin): CoinMarket {
  return {
    id: coin.id,
    symbol: coin.symbol.toUpperCase(),
    name: coin.name,
    imageUrl: coin.image,
    rank: coin.market_cap_rank,
    price: coin.current_price ?? 0,
    marketCap: coin.market_cap ?? 0,
    volume24h: coin.total_volume ?? 0,
    high24h: coin.high_24h,
    low24h: coin.low_24h,
    change1h: coin.price_change_percentage_1h_in_currency ?? null,
    change24h: coin.price_change_percentage_24h_in_currency ?? null,
    change7d: coin.price_change_percentage_7d_in_currency ?? null,
    circulatingSupply: coin.circulating_supply,
    maxSupply: coin.max_supply,
    allTimeHigh: coin.ath,
    allTimeHighChange: coin.ath_change_percentage,
    sparkline7d: downsample(coin.sparkline_in_7d?.price ?? [], SPARKLINE_TARGET_POINTS),
  };
}

export async function listCoinMarkets(currency: FiatCurrency): Promise<MarketSnapshot<CoinMarket[]>> {
  return readThroughCache(`markets:${currency}`, MARKETS_FRESH_MS, async () => {
    const { data } = await coingeckoClient.get<CoingeckoMarketCoin[]>("/coins/markets", {
      params: {
        vs_currency: currency,
        order: "market_cap_desc",
        per_page: MARKET_PAGE_SIZE,
        page: 1,
        sparkline: true,
        price_change_percentage: "1h,24h,7d",
      },
    });
    return data.map(toCoinMarket);
  });
}

function isPlausibleVolume(volume: number, marketCap: number) {
  return volume > 0 && marketCap > 0 && volume <= marketCap * MAX_PLAUSIBLE_VOLUME_TO_MARKET_CAP_RATIO;
}

async function sumTopAssetVolumes(currency: FiatCurrency) {
  const { data: coins } = await listCoinMarkets(currency);
  return coins.reduce((total, coin) => total + coin.volume24h, 0);
}

export async function getMarketOverview(currency: FiatCurrency): Promise<MarketSnapshot<MarketOverview>> {
  return readThroughCache(`overview:${currency}`, OVERVIEW_FRESH_MS, async () => {
    const { data } = await coingeckoClient.get<CoingeckoGlobalResponse>("/global");
    const global = data.data;
    const totalMarketCap = global.total_market_cap[currency] ?? 0;
    const globalVolume = global.total_volume[currency] ?? 0;
    const hasPlausibleGlobalVolume = isPlausibleVolume(globalVolume, totalMarketCap);
    return {
      totalMarketCap,
      totalVolume24h: hasPlausibleGlobalVolume ? globalVolume : await sumTopAssetVolumes(currency),
      volumeSource: hasPlausibleGlobalVolume ? "global" : "top-assets",
      marketCapChange24h: global.market_cap_change_percentage_24h_usd,
      bitcoinDominance: global.market_cap_percentage.btc ?? 0,
      ethereumDominance: global.market_cap_percentage.eth ?? 0,
      activeCryptocurrencies: global.active_cryptocurrencies,
      markets: global.markets,
    };
  });
}

export async function getPriceHistory(
  coinId: string,
  currency: FiatCurrency,
  days: PriceHistoryDays,
): Promise<MarketSnapshot<PricePoint[]>> {
  return readThroughCache(`history:${coinId}:${currency}:${days}`, HISTORY_FRESH_MS, async () => {
    const { data } = await coingeckoClient.get<CoingeckoMarketChartResponse>(
      `/coins/${encodeURIComponent(coinId)}/market_chart`,
      { params: { vs_currency: currency, days, interval: "daily" } },
    );
    return data.prices.map(([timestamp, price]) => ({ timestamp, price }));
  });
}
