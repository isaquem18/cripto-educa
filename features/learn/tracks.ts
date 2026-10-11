import type { LessonLevel, LessonTrack } from "./types";

export type TrackInfo = {
  id: LessonTrack;
  title: string;
  description: string;
  icon: string;
};

export const tracks: TrackInfo[] = [
  {
    id: "fundamentals",
    title: "Crypto fundamentals",
    description: "Blockchains, Bitcoin, Ethereum, stablecoins, tokens and DeFi explained from the ground up.",
    icon: "◆",
  },
  {
    id: "exchanges",
    title: "Crypto exchanges",
    description: "How exchanges work, how to choose one, fees, order types, order books and the risks of leverage.",
    icon: "⇄",
  },
  {
    id: "security",
    title: "Security & custody",
    description: "Wallets, private keys, seed phrases, self-custody and how to avoid the most common scams.",
    icon: "⚿",
  },
  {
    id: "investing",
    title: "Risk & strategy",
    description: "Volatility, risk management, dollar-cost averaging and an overview of crypto rules in Brazil.",
    icon: "◎",
  },
];

export const levelLabels: Record<LessonLevel, string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

export function getTrack(trackId: LessonTrack) {
  const track = tracks.find((candidate) => candidate.id === trackId);
  if (!track) {
    throw new Error(`Unknown track: ${trackId}`);
  }
  return track;
}
