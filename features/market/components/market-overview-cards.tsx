"use client";

import { ChangeIndicator } from "@/components/ui/change-indicator";
import { DataFreshness } from "@/components/ui/data-freshness";
import { QueryErrorState } from "@/components/ui/query-error-state";
import { Skeleton } from "@/components/ui/skeleton";
import { formatCompactMoney, formatNumber } from "@/lib/format/number-format";
import { useMarketOverview } from "../hooks/use-market-data";

const OVERVIEW_CARD_COUNT = 4;

export function MarketOverviewCards() {
  const { data, error, isPending, isFetching, refetch } = useMarketOverview();

  if (isPending) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: OVERVIEW_CARD_COUNT }, (_, index) => (
          <Skeleton key={index} className="h-28" />
        ))}
      </div>
    );
  }

  if (error && !data) {
    return <QueryErrorState error={error} onRetry={() => void refetch()} />;
  }

  const overview = data.data;
  const currency = data.currency;
  const cards = [
    {
      label: "Total market cap",
      value: formatCompactMoney(overview.totalMarketCap, currency),
      detail: <ChangeIndicator value={overview.marketCapChange24h} className="text-sm" />,
    },
    {
      label: "24h trading volume",
      value: formatCompactMoney(overview.totalVolume24h, currency),
      detail: (
        <span className="text-sm text-muted">
          {overview.volumeSource === "global" ? "across tracked markets" : "top 100 assets"}
        </span>
      ),
    },
    {
      label: "Bitcoin dominance",
      value: `${overview.bitcoinDominance.toFixed(1)}%`,
      detail: <span className="text-sm text-muted">Ethereum {overview.ethereumDominance.toFixed(1)}%</span>,
    },
    {
      label: "Assets tracked",
      value: formatNumber(overview.activeCryptocurrencies, 0),
      detail: <span className="text-sm text-muted">on {formatNumber(overview.markets, 0)} exchanges</span>,
    },
  ];

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <div key={card.label} className="rounded-2xl border border-border bg-surface p-5">
            <p className="text-xs font-medium uppercase tracking-wider text-muted">{card.label}</p>
            <p className="mt-2 text-2xl font-semibold tabular-nums text-foreground">{card.value}</p>
            <div className="mt-1">{card.detail}</div>
          </div>
        ))}
      </div>
      <div className="mt-3">
        <DataFreshness fetchedAt={data.fetchedAt} stale={data.stale} isFetching={isFetching} />
      </div>
    </div>
  );
}
