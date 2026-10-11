"use client";

import { useState } from "react";
import { NumberField } from "@/components/ui/number-field";
import { QueryErrorState } from "@/components/ui/query-error-state";
import { SelectField } from "@/components/ui/select-field";
import { Skeleton } from "@/components/ui/skeleton";
import { useCoinMarkets } from "@/features/market/hooks/use-market-data";
import { formatMoney, formatNumber, formatPrice } from "@/lib/format/number-format";
import { parseNonNegativeNumber } from "../lib/parse-number";

type ConversionDirection = "crypto-to-fiat" | "fiat-to-crypto";

const DEFAULT_COIN_ID = "bitcoin";
const CRYPTO_FRACTION_DIGITS = 8;

export function CryptoConverter() {
  const { data, error, isPending, refetch } = useCoinMarkets();
  const [coinId, setCoinId] = useState(DEFAULT_COIN_ID);
  const [amount, setAmount] = useState("1");
  const [direction, setDirection] = useState<ConversionDirection>("crypto-to-fiat");

  if (isPending) {
    return <Skeleton className="h-40" />;
  }

  if (error && !data) {
    return <QueryErrorState error={error} onRetry={() => void refetch()} />;
  }

  const coins = data.data;
  const currency = data.currency;
  const selectedCoin = coins.find((coin) => coin.id === coinId) ?? coins[0];
  const numericAmount = parseNonNegativeNumber(amount);
  const fiatCode = currency.toUpperCase();
  const isCryptoToFiat = direction === "crypto-to-fiat";
  const convertedValue = selectedCoin
    ? isCryptoToFiat
      ? numericAmount * selectedCoin.price
      : selectedCoin.price > 0
        ? numericAmount / selectedCoin.price
        : 0
    : 0;

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-end">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
        <SelectField
          label="Asset"
          value={selectedCoin?.id ?? ""}
          onChange={setCoinId}
          options={coins.map((coin) => ({ value: coin.id, label: `${coin.name} (${coin.symbol})` }))}
        />
        <NumberField
          label={isCryptoToFiat ? `Amount in ${selectedCoin?.symbol ?? "crypto"}` : `Amount in ${fiatCode}`}
          value={amount}
          onChange={setAmount}
        />
      </div>
      <button
        type="button"
        onClick={() => setDirection(isCryptoToFiat ? "fiat-to-crypto" : "crypto-to-fiat")}
        className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface-raised text-lg text-accent hover:border-accent"
        aria-label="Swap conversion direction"
      >
        ⇄
      </button>
      <div className="rounded-xl border border-accent/30 bg-accent/5 p-5">
        <p className="text-xs font-medium uppercase tracking-wider text-muted">Result</p>
        <p className="mt-1 break-all text-3xl font-semibold tabular-nums text-foreground">
          {isCryptoToFiat
            ? formatMoney(convertedValue, currency)
            : `${formatNumber(convertedValue, CRYPTO_FRACTION_DIGITS)} ${selectedCoin?.symbol ?? ""}`}
        </p>
        {selectedCoin && (
          <p className="mt-2 text-xs text-muted">
            1 {selectedCoin.symbol} = {formatPrice(selectedCoin.price, currency)} · live rate, before fees
          </p>
        )}
      </div>
    </div>
  );
}
