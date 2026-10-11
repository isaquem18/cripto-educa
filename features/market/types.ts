export const FIAT_CURRENCIES = ["usd", "brl"] as const;

export type FiatCurrency = (typeof FIAT_CURRENCIES)[number];

export const PRICE_HISTORY_DAYS = [30, 90, 180, 365] as const;

export type PriceHistoryDays = (typeof PRICE_HISTORY_DAYS)[number];

export type MarketSnapshot<Data> = {
  data: Data;
  fetchedAt: string;
  stale: boolean;
};

export type PricedSnapshot<Data> = MarketSnapshot<Data> & {
  currency: FiatCurrency;
};

export type CoinMarket = {
  id: string;
  symbol: string;
  name: string;
  imageUrl: string;
  rank: number | null;
  price: number;
  marketCap: number;
  volume24h: number;
  high24h: number | null;
  low24h: number | null;
  change1h: number | null;
  change24h: number | null;
  change7d: number | null;
  circulatingSupply: number | null;
  maxSupply: number | null;
  allTimeHigh: number | null;
  allTimeHighChange: number | null;
  sparkline7d: number[];
};

export type VolumeSource = "global" | "top-assets";

export type MarketOverview = {
  totalMarketCap: number;
  totalVolume24h: number;
  volumeSource: VolumeSource;
  marketCapChange24h: number;
  bitcoinDominance: number;
  ethereumDominance: number;
  activeCryptocurrencies: number;
  markets: number;
};

export type PricePoint = {
  timestamp: number;
  price: number;
};
