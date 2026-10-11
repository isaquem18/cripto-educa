"use client";

import { useState } from "react";
import { NumberField } from "@/components/ui/number-field";
import { useSelectedCurrency } from "@/features/market/hooks/use-market-data";
import { formatMoney } from "@/lib/format/number-format";
import { parseNonNegativeNumber } from "../lib/parse-number";
import { ResultStat } from "./result-stat";

const PERCENT_DIVISOR = 100;
const MAX_RATE = 0.99;

export function FeeCalculator() {
  const currency = useSelectedCurrency();
  const [tradeAmount, setTradeAmount] = useState("1000");
  const [tradingFeePercent, setTradingFeePercent] = useState("0.1");
  const [spreadPercent, setSpreadPercent] = useState("0.2");
  const [depositFee, setDepositFee] = useState("0");
  const [withdrawalFee, setWithdrawalFee] = useState("5");

  const amount = parseNonNegativeNumber(tradeAmount);
  const tradingFeeRate = Math.min(parseNonNegativeNumber(tradingFeePercent) / PERCENT_DIVISOR, MAX_RATE);
  const halfSpreadRate = Math.min(parseNonNegativeNumber(spreadPercent) / PERCENT_DIVISOR / 2, MAX_RATE);
  const deposit = parseNonNegativeNumber(depositFee);
  const withdrawal = parseNonNegativeNumber(withdrawalFee);

  const buyTradingFee = amount * tradingFeeRate;
  const buySpreadCost = (amount - buyTradingFee) * (halfSpreadRate / (1 + halfSpreadRate));
  const buySideCost = buyTradingFee + buySpreadCost + deposit;
  const roundTripMultiplier = (1 - tradingFeeRate) ** 2 * ((1 - halfSpreadRate) / (1 + halfSpreadRate));
  const roundTripCost = amount - amount * roundTripMultiplier + deposit + withdrawal;
  const roundTripPercent = amount > 0 ? (roundTripCost / amount) * PERCENT_DIVISOR : 0;
  const breakEvenMovePercent =
    amount > 0 && roundTripMultiplier > 0
      ? ((amount + deposit + withdrawal) / (amount * roundTripMultiplier) - 1) * PERCENT_DIVISOR
      : 0;

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="grid gap-4 sm:grid-cols-2">
        <NumberField label="Trade amount" value={tradeAmount} onChange={setTradeAmount} prefix={currency.toUpperCase()} />
        <NumberField label="Trading fee" value={tradingFeePercent} onChange={setTradingFeePercent} suffix="%" hint="Taker fee per trade" />
        <NumberField label="Bid-ask spread" value={spreadPercent} onChange={setSpreadPercent} suffix="%" hint="Gap between buy and sell" />
        <NumberField label="Deposit fee" value={depositFee} onChange={setDepositFee} prefix={currency.toUpperCase()} />
        <NumberField label="Withdrawal fee" value={withdrawalFee} onChange={setWithdrawalFee} prefix={currency.toUpperCase()} hint="Fixed amount, incl. network fee" />
      </div>
      <div className="grid content-start gap-3 sm:grid-cols-2">
        <ResultStat label="Buy-side cost" value={formatMoney(buySideCost, currency)} hint="Fee + half spread + fixed fees" />
        <ResultStat label="Round-trip cost" value={formatMoney(roundTripCost, currency)} tone="accent" hint="Buy and later sell" />
        <ResultStat label="Round-trip cost %" value={`${roundTripPercent.toFixed(2)}%`} hint="Share of your trade amount" />
        <ResultStat
          label="Break-even move"
          value={`+${breakEvenMovePercent.toFixed(2)}%`}
          tone="negative"
          hint="Price rise needed just to cover costs"
        />
      </div>
    </div>
  );
}
