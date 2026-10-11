import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHeader } from "@/components/ui/page-header";
import { SectionHeading } from "@/components/ui/section-heading";
import { CoinTable } from "@/features/market/components/coin-table";
import { MarketOverviewCards } from "@/features/market/components/market-overview-cards";
import { TopMovers } from "@/features/market/components/top-movers";

export const metadata: Metadata = {
  title: "Live crypto markets",
  description:
    "Live prices, 24-hour and 7-day changes, market capitalization and volume for the 100 largest cryptocurrencies, in US dollars or Brazilian reais.",
  alternates: { canonical: "/markets" },
};

const readingTips = [
  {
    title: "Market cap ≠ price",
    text: "Market capitalization is price multiplied by circulating supply. A low unit price does not make an asset “cheap”.",
  },
  {
    title: "Volume shows activity",
    text: "Higher trading volume usually means tighter spreads and less slippage when you buy or sell.",
  },
  {
    title: "Percent changes are noisy",
    text: "Short-term moves of 5–10% are common in crypto. Look at longer periods and fundamentals, not just daily swings.",
  },
];

export default function MarketsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Live markets"
        title="Crypto market overview"
        description="Track the 100 largest crypto assets by market capitalization. Switch between US dollars and Brazilian reais with the currency toggle at the top of the page."
      />
      <div className="mx-auto max-w-6xl space-y-16 px-4 py-14 sm:px-6">
        <section aria-label="Global market statistics">
          <Suspense>
            <MarketOverviewCards />
          </Suspense>
        </section>
        <section aria-labelledby="movers-title">
          <SectionHeading titleId="movers-title" eyebrow="Momentum" title="Biggest moves in the last 24 hours" />
          <Suspense>
            <TopMovers />
          </Suspense>
        </section>
        <section aria-labelledby="table-title">
          <SectionHeading
            titleId="table-title"
            eyebrow="Top 100"
            title="All assets"
            description="Click a column header to sort. Search by name or ticker symbol."
          />
          <Suspense>
            <CoinTable />
          </Suspense>
        </section>
        <section aria-label="How to read market data" className="grid gap-4 md:grid-cols-3">
          {readingTips.map((tip) => (
            <div key={tip.title} className="rounded-2xl border border-border bg-surface p-5">
              <h2 className="font-semibold text-foreground">{tip.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{tip.text}</p>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
