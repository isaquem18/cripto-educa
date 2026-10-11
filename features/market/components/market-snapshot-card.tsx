"use client";

import Link from "next/link";
import { ChangeIndicator } from "@/components/ui/change-indicator";
import { DataFreshness } from "@/components/ui/data-freshness";
import { QueryErrorState } from "@/components/ui/query-error-state";
import { Skeleton } from "@/components/ui/skeleton";
import { formatPrice } from "@/lib/format/number-format";
import { useCoinMarkets } from "../hooks/use-market-data";
import { CoinIcon } from "./coin-icon";
import { Sparkline } from "./sparkline";

const SNAPSHOT_COIN_COUNT = 6;

export function MarketSnapshotCard() {
  const { data, error, isPending, isFetching, refetch } = useCoinMarkets();

  return (
    <div className="rounded-3xl border border-border bg-surface/80 p-5 shadow-2xl shadow-black/40 backdrop-blur">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="text-sm font-semibold text-foreground">Market snapshot</h2>
        <Link href="/markets" className="text-xs font-medium text-accent hover:text-accent-strong">
          All markets →
        </Link>
      </div>
      {isPending && (
        <div className="space-y-3">
          {Array.from({ length: SNAPSHOT_COIN_COUNT }, (_, index) => (
            <Skeleton key={index} className="h-11" />
          ))}
        </div>
      )}
      {error && !data && <QueryErrorState error={error} onRetry={() => void refetch()} />}
      {data && (
        <>
          <ul className="divide-y divide-border/70">
            {data.data.slice(0, SNAPSHOT_COIN_COUNT).map((coin) => (
              <li key={coin.id} className="flex items-center justify-between gap-3 py-2.5">
                <div className="flex min-w-0 items-center gap-3">
                  <CoinIcon src={coin.imageUrl} name={coin.name} size={28} />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-foreground">{coin.name}</p>
                    <p className="text-xs text-muted">{coin.symbol}</p>
                  </div>
                </div>
                <Sparkline values={coin.sparkline7d} width={72} height={28} className="hidden sm:block" />
                <div className="text-right">
                  <p className="text-sm font-medium tabular-nums text-foreground">{formatPrice(coin.price, data.currency)}</p>
                  <ChangeIndicator value={coin.change24h} className="text-xs" />
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-3">
            <DataFreshness fetchedAt={data.fetchedAt} stale={data.stale} isFetching={isFetching} />
          </div>
        </>
      )}
    </div>
  );
}
