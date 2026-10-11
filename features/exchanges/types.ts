export type ExchangeSummary = {
  id: string;
  name: string;
  imageUrl: string;
  url: string;
  description: string;
  country: string | null;
  yearEstablished: number | null;
  trustScore: number | null;
  trustScoreRank: number | null;
  volume24hBtc: number;
};
