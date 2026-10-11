"use client";

import { ChangeIndicator } from "@/components/ui/change-indicator";
import { formatPrice } from "@/lib/format/number-format";
import { useCoinMarkets } from "../hooks/use-market-data";
import { CoinIcon } from "./coin-icon";

const TICKER_COIN_COUNT = 20;

export function PriceTicker() {
  const { data } = useCoinMarkets();
  if (!data || data.data.length === 0) {
    return <div className="h-11 border-b border-border bg-surface/50" aria-hidden="true" />;
  }

  const coins = data.data.slice(0, TICKER_COIN_COUNT);
  const loopedCoins = [...coins, ...coins];

  return (
    <div className="relative overflow-hidden border-b border-border bg-surface/50" aria-label="Live crypto prices">
      <ul className="animate-ticker flex w-max items-center gap-8 py-2.5 pl-8">
        {loopedCoins.map((coin, index) => (
          <li
            key={`${coin.id}-${index}`}
            className="flex items-center gap-2 text-sm whitespace-nowrap"
            aria-hidden={index >= coins.length ? true : undefined}
          >
            <CoinIcon src={coin.imageUrl} name={coin.name} size={18} />
            <span className="font-semibold text-foreground">{coin.symbol}</span>
            <span className="tabular-nums text-muted">{formatPrice(coin.price, data.currency)}</span>
            <ChangeIndicator value={coin.change24h} className="text-xs" />
          </li>
        ))}
      </ul>
    </div>
  );
}
