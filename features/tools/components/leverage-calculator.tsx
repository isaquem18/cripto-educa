"use client";

import { useState } from "react";
import { NumberField } from "@/components/ui/number-field";
import { useSelectedCurrency } from "@/features/market/hooks/use-market-data";
import { formatMoney, formatPrice } from "@/lib/format/number-format";
import { parseNonNegativeNumber, parsePositiveNumber } from "../lib/parse-number";
import { ResultStat } from "./result-stat";

type PositionSide = "long" | "short";

const PERCENT_DIVISOR = 100;
const MAX_LEVERAGE = 125;

export function LeverageCalculator() {
  const currency = useSelectedCurrency();
  const [side, setSide] = useState<PositionSide>("long");
  const [margin, setMargin] = useState("500");
  const [leverage, setLeverage] = useState("10");
  const [entryPrice, setEntryPrice] = useState("60000");
  const [maintenanceMarginPercent, setMaintenanceMarginPercent] = useState("0.5");
  const [priceMovePercent, setPriceMovePercent] = useState("5");

  const marginAmount = parseNonNegativeNumber(margin);
  const leverageMultiplier = Math.min(Math.max(parsePositiveNumber(leverage), 1), MAX_LEVERAGE);
  const entry = parsePositiveNumber(entryPrice);
  const maintenanceRate = parseNonNegativeNumber(maintenanceMarginPercent) / PERCENT_DIVISOR;
  const moveRate = parseNonNegativeNumber(priceMovePercent) / PERCENT_DIVISOR;
  const direction = side === "long" ? 1 : -1;

  const positionSize = marginAmount * leverageMultiplier;
  const liquidationDistance = Math.max(1 / leverageMultiplier - maintenanceRate, 0);
  const liquidationPrice = entry * (1 - direction * liquidationDistance);
  const favorableProfit = positionSize * moveRate;
  const adverseLoss = Math.min(positionSize * moveRate, marginAmount);
  const returnOnMargin = marginAmount > 0 ? (favorableProfit / marginAmount) * PERCENT_DIVISOR : 0;
  const lossOnMargin = marginAmount > 0 ? (adverseLoss / marginAmount) * PERCENT_DIVISOR : 0;
  const isLiquidatedByMove = moveRate >= liquidationDistance;

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div>
        <div role="radiogroup" aria-label="Position side" className="mb-4 grid grid-cols-2 gap-2 rounded-xl border border-border bg-background p-1">
          {(["long", "short"] as const).map((option) => (
            <button
              key={option}
              type="button"
              role="radio"
              aria-checked={side === option}
              onClick={() => setSide(option)}
              className={`rounded-lg py-2 text-sm font-semibold capitalize transition-colors ${
                side === option
                  ? option === "long"
                    ? "bg-positive/15 text-positive"
                    : "bg-negative/15 text-negative"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <NumberField label="Your margin" value={margin} onChange={setMargin} prefix={currency.toUpperCase()} />
          <NumberField label="Leverage" value={leverage} onChange={setLeverage} suffix="x" min="1" hint={`1x to ${MAX_LEVERAGE}x`} />
          <NumberField label="Entry price" value={entryPrice} onChange={setEntryPrice} prefix={currency.toUpperCase()} />
          <NumberField label="Maintenance margin" value={maintenanceMarginPercent} onChange={setMaintenanceMarginPercent} suffix="%" hint="Varies by exchange" />
          <NumberField label="Price move to test" value={priceMovePercent} onChange={setPriceMovePercent} suffix="%" />
        </div>
      </div>
      <div className="grid content-start gap-3 sm:grid-cols-2">
        <ResultStat label="Position size" value={formatMoney(positionSize, currency)} hint={`${leverageMultiplier}x your margin`} />
        <ResultStat
          label="Est. liquidation price"
          value={formatPrice(liquidationPrice, currency)}
          tone="negative"
          hint={`${(liquidationDistance * PERCENT_DIVISOR).toFixed(2)}% ${side === "long" ? "below" : "above"} entry`}
        />
        <ResultStat
          label={`Profit if price ${side === "long" ? "rises" : "falls"} ${priceMovePercent || 0}%`}
          value={formatMoney(favorableProfit, currency)}
          tone="positive"
          hint={`+${returnOnMargin.toFixed(1)}% on margin`}
        />
        <ResultStat
          label={`Loss if price ${side === "long" ? "falls" : "rises"} ${priceMovePercent || 0}%`}
          value={isLiquidatedByMove ? "Liquidated" : `−${formatMoney(adverseLoss, currency)}`}
          tone="negative"
          hint={isLiquidatedByMove ? "The move exceeds your liquidation distance" : `−${lossOnMargin.toFixed(1)}% of margin`}
        />
        <p className="text-xs leading-relaxed text-muted sm:col-span-2">
          Simplified isolated-margin estimate that ignores trading fees, funding payments and each exchange&apos;s exact
          liquidation formula. Leverage magnifies losses as much as gains.
        </p>
      </div>
    </div>
  );
}
