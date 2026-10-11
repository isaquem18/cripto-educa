"use client";

import { ChangeIndicator } from "@/components/ui/change-indicator";
import { QueryErrorState } from "@/components/ui/query-error-state";
import { Skeleton } from "@/components/ui/skeleton";
import { formatPrice } from "@/lib/format/number-format";
import { useCoinMarkets } from "../hooks/use-market-data";
import type { CoinMarket, FiatCurrency } from "../types";
import { CoinIcon } from "./coin-icon";

const MOVERS_PER_LIST = 5;

type MoverListProps = {
  title: string;
  coins: CoinMarket[];
  currency: FiatCurrency;
};

function MoverList({ title, coins, currency }: MoverListProps) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-5">
      <h3 className="mb-4 text-sm font-semibold text-foreground">{title}</h3>
      <ul className="space-y-3">
        {coins.map((coin) => (
          <li key={coin.id} className="flex items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-3">
              <CoinIcon src={coin.imageUrl} name={coin.name} size={24} />
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-foreground">{coin.name}</p>
                <p className="text-xs tabular-nums text-muted">{formatPrice(coin.price, currency)}</p>
              </div>
            </div>
            <ChangeIndicator value={coin.change24h} className="text-sm" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function TopMovers() {
  const { data, error, isPending, refetch } = useCoinMarkets();

  if (isPending) {
    return (
      <div className="grid gap-4 md:grid-cols-2">
        <Skeleton className="h-72" />
        <Skeleton className="h-72" />
      </div>
    );
  }

  if (error && !data) {
    return <QueryErrorState error={error} onRetry={() => void refetch()} />;
  }

  const coinsWithChange = data.data.filter((coin) => coin.change24h !== null);
  const byChange = coinsWithChange.sort((first, second) => (second.change24h ?? 0) - (first.change24h ?? 0));
  const gainers = byChange.slice(0, MOVERS_PER_LIST);
  const losers = byChange.slice(-MOVERS_PER_LIST).reverse();

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <MoverList title="Top gainers · 24h" coins={gainers} currency={data.currency} />
      <MoverList title="Top losers · 24h" coins={losers} currency={data.currency} />
    </div>
  );
}
