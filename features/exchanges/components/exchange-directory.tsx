"use client";

import { Badge } from "@/components/ui/badge";
import { DataFreshness } from "@/components/ui/data-freshness";
import { QueryErrorState } from "@/components/ui/query-error-state";
import { Skeleton } from "@/components/ui/skeleton";
import { CoinIcon } from "@/features/market/components/coin-icon";
import { formatNumber } from "@/lib/format/number-format";
import { useTopExchanges } from "../hooks/use-top-exchanges";

const SKELETON_CARD_COUNT = 6;
const HIGH_TRUST_THRESHOLD = 8;
const MEDIUM_TRUST_THRESHOLD = 5;

function trustTone(trustScore: number | null) {
  if (trustScore === null) {
    return "neutral" as const;
  }
  if (trustScore >= HIGH_TRUST_THRESHOLD) {
    return "positive" as const;
  }
  if (trustScore >= MEDIUM_TRUST_THRESHOLD) {
    return "accent" as const;
  }
  return "negative" as const;
}

export function ExchangeDirectory() {
  const { data, error, isPending, isFetching, refetch } = useTopExchanges();

  if (isPending) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: SKELETON_CARD_COUNT }, (_, index) => (
          <Skeleton key={index} className="h-48" />
        ))}
      </div>
    );
  }

  if (error && !data) {
    return <QueryErrorState error={error} onRetry={() => void refetch()} />;
  }

  return (
    <div>
      <div className="mb-4">
        <DataFreshness fetchedAt={data.fetchedAt} stale={data.stale} isFetching={isFetching} />
      </div>
      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.data.map((exchange) => (
          <li key={exchange.id} className="flex flex-col rounded-2xl border border-border bg-surface p-5">
            <div className="flex items-start justify-between gap-3">
              <div className="flex min-w-0 items-center gap-3">
                <CoinIcon src={exchange.imageUrl} name={exchange.name} size={36} />
                <div className="min-w-0">
                  <h3 className="truncate font-semibold text-foreground">{exchange.name}</h3>
                  <p className="text-xs text-muted">
                    {[exchange.country, exchange.yearEstablished ? `since ${exchange.yearEstablished}` : null]
                      .filter(Boolean)
                      .join(" · ") || "Country not disclosed"}
                  </p>
                </div>
              </div>
              <Badge tone={trustTone(exchange.trustScore)}>
                Trust {exchange.trustScore ?? "n/a"}
                {exchange.trustScore !== null && "/10"}
              </Badge>
            </div>
            {exchange.description && (
              <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-muted">{exchange.description}</p>
            )}
            <div className="mt-auto flex items-center justify-between gap-3 pt-4 text-xs">
              <span className="text-muted">
                24h volume <span className="font-semibold tabular-nums text-foreground">{formatNumber(exchange.volume24hBtc, 0)} BTC</span>
              </span>
              {exchange.url && (
                <a
                  href={exchange.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="font-medium text-accent hover:text-accent-strong"
                >
                  Website ↗
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs leading-relaxed text-muted">
        Trust scores and volumes are provided by CoinGecko and change over time. A listing here is not an endorsement.
        Always confirm that an exchange is authorized to operate in your country before opening an account.
      </p>
    </div>
  );
}
