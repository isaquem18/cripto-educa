import type { PricePoint } from "@/features/market/types";

export type DcaFrequency = "weekly" | "biweekly" | "monthly";

export const DAYS_BETWEEN_PURCHASES: Record<DcaFrequency, number> = {
  weekly: 7,
  biweekly: 14,
  monthly: 30,
};

export type DcaPurchase = {
  timestamp: number;
  price: number;
  amountInvested: number;
  unitsBought: number;
};

export type DcaValuePoint = {
  timestamp: number;
  invested: number;
  value: number;
};

export type DcaResult = {
  purchases: DcaPurchase[];
  totalInvested: number;
  totalUnits: number;
  averageCost: number;
  currentPrice: number;
  currentValue: number;
  profit: number;
  profitPercent: number;
  lumpSumValue: number;
  lumpSumProfitPercent: number;
  valueSeries: DcaValuePoint[];
};

export function simulateDca(history: PricePoint[], amountPerPurchase: number, frequency: DcaFrequency): DcaResult | null {
  if (history.length < 2 || amountPerPurchase <= 0) {
    return null;
  }

  const interval = DAYS_BETWEEN_PURCHASES[frequency];
  const purchases: DcaPurchase[] = [];
  const valueSeries: DcaValuePoint[] = [];
  let totalUnits = 0;
  let totalInvested = 0;

  history.forEach((point, dayIndex) => {
    if (dayIndex % interval === 0 && point.price > 0) {
      const unitsBought = amountPerPurchase / point.price;
      totalUnits += unitsBought;
      totalInvested += amountPerPurchase;
      purchases.push({ timestamp: point.timestamp, price: point.price, amountInvested: amountPerPurchase, unitsBought });
    }
    valueSeries.push({ timestamp: point.timestamp, invested: totalInvested, value: totalUnits * point.price });
  });

  const currentPrice = history[history.length - 1].price;
  const firstPrice = history[0].price;
  const currentValue = totalUnits * currentPrice;
  const profit = currentValue - totalInvested;
  const lumpSumValue = firstPrice > 0 ? (totalInvested / firstPrice) * currentPrice : 0;

  return {
    purchases,
    totalInvested,
    totalUnits,
    averageCost: totalUnits > 0 ? totalInvested / totalUnits : 0,
    currentPrice,
    currentValue,
    profit,
    profitPercent: totalInvested > 0 ? (profit / totalInvested) * 100 : 0,
    lumpSumValue,
    lumpSumProfitPercent: totalInvested > 0 ? ((lumpSumValue - totalInvested) / totalInvested) * 100 : 0,
    valueSeries,
  };
}
