"use client";

import { useState } from "react";
import { NumberField } from "@/components/ui/number-field";
import { QueryErrorState } from "@/components/ui/query-error-state";
import { SelectField } from "@/components/ui/select-field";
import { Skeleton } from "@/components/ui/skeleton";
import { useCoinMarkets, usePriceHistory, useSelectedCurrency } from "@/features/market/hooks/use-market-data";
import { PRICE_HISTORY_DAYS, type PriceHistoryDays } from "@/features/market/types";
import { formatMoney, formatNumber, formatPercent, formatPrice } from "@/lib/format/number-format";
import { simulateDca, type DcaFrequency } from "../lib/dca-simulation";
import { parsePositiveNumber } from "../lib/parse-number";
import { DcaValueChart } from "./dca-value-chart";
import { ResultStat } from "./result-stat";

const SELECTABLE_COIN_COUNT = 20;
const DEFAULT_COIN_ID = "bitcoin";
const UNIT_FRACTION_DIGITS = 6;

const frequencyOptions: { value: DcaFrequency; label: string }[] = [
  { value: "weekly", label: "Every week" },
  { value: "biweekly", label: "Every 2 weeks" },
  { value: "monthly", label: "Every month" },
];

const periodLabels: Record<PriceHistoryDays, string> = {
  30: "Last 30 days",
  90: "Last 3 months",
  180: "Last 6 months",
  365: "Last 12 months",
};

function isPriceHistoryDays(value: number): value is PriceHistoryDays {
  return PRICE_HISTORY_DAYS.some((days) => days === value);
}

function isDcaFrequency(value: string): value is DcaFrequency {
  return frequencyOptions.some((option) => option.value === value);
}

export function DcaSimulator() {
  const markets = useCoinMarkets();
  const [coinId, setCoinId] = useState(DEFAULT_COIN_ID);
  const [amountPerPurchase, setAmountPerPurchase] = useState("100");
  const [frequency, setFrequency] = useState<DcaFrequency>("monthly");
  const [days, setDays] = useState<PriceHistoryDays>(365);
  const history = usePriceHistory(coinId, days);
  const selectedCurrency = useSelectedCurrency();
  const currency = history.data?.currency ?? selectedCurrency;

  const coinOptions = (markets.data?.data ?? [])
    .slice(0, SELECTABLE_COIN_COUNT)
    .map((coin) => ({ value: coin.id, label: `${coin.name} (${coin.symbol})` }));
  const selectedCoin = markets.data?.data.find((coin) => coin.id === coinId);
  const result = history.data ? simulateDca(history.data.data, parsePositiveNumber(amountPerPurchase), frequency) : null;

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <SelectField
          label="Asset"
          value={coinId}
          onChange={setCoinId}
          options={coinOptions.length > 0 ? coinOptions : [{ value: DEFAULT_COIN_ID, label: "Bitcoin (BTC)" }]}
        />
        <NumberField
          label="Amount per purchase"
          value={amountPerPurchase}
          onChange={setAmountPerPurchase}
          prefix={selectedCurrency.toUpperCase()}
        />
        <SelectField
          label="Frequency"
          value={frequency}
          onChange={(value) => {
            if (isDcaFrequency(value)) {
              setFrequency(value);
            }
          }}
          options={frequencyOptions}
        />
        <SelectField
          label="Period"
          value={String(days)}
          onChange={(value) => {
            const parsedDays = Number(value);
            if (isPriceHistoryDays(parsedDays)) {
              setDays(parsedDays);
            }
          }}
          options={PRICE_HISTORY_DAYS.map((option) => ({ value: String(option), label: periodLabels[option] }))}
        />
      </div>

      <div className="mt-6">
        {history.isPending && <Skeleton className="h-80" />}
        {history.error && !history.data && <QueryErrorState error={history.error} onRetry={() => void history.refetch()} />}
        {history.data && !result && (
          <p className="rounded-xl border border-border bg-background/60 p-4 text-sm text-muted">
            Enter an amount greater than zero to run the simulation.
          </p>
        )}
        {result && (
          <div className={history.isFetching ? "opacity-60 transition-opacity" : "transition-opacity"}>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <ResultStat
                label="Total invested"
                value={formatMoney(result.totalInvested, currency)}
                hint={`${result.purchases.length} purchases`}
              />
              <ResultStat
                label="Value today"
                value={formatMoney(result.currentValue, currency)}
                tone={result.profit >= 0 ? "positive" : "negative"}
                hint={`${formatNumber(result.totalUnits, UNIT_FRACTION_DIGITS)} ${selectedCoin?.symbol ?? "units"}`}
              />
              <ResultStat
                label="Profit / loss"
                value={formatPercent(result.profitPercent)}
                tone={result.profit >= 0 ? "positive" : "negative"}
                hint={formatMoney(result.profit, currency)}
              />
              <ResultStat
                label="Average cost"
                value={formatPrice(result.averageCost, currency)}
                hint={`Current price ${formatPrice(result.currentPrice, currency)}`}
              />
            </div>
            <div className="mt-6 rounded-xl border border-border bg-background/60 p-4">
              <DcaValueChart series={result.valueSeries} currency={currency} />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Investing the same {formatMoney(result.totalInvested, currency)} all at once on the first day would be worth{" "}
              <span className="font-semibold text-foreground">{formatMoney(result.lumpSumValue, currency)}</span> today (
              <span className={result.lumpSumProfitPercent >= 0 ? "text-positive" : "text-negative"}>
                {formatPercent(result.lumpSumProfitPercent)}
              </span>
              ). Past performance does not predict future results, and this simulation ignores fees and taxes.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
