import type { FiatCurrency } from "@/features/market/types";

const DISPLAY_LOCALE = "en-US";
const SMALL_PRICE_THRESHOLD = 1;
const TINY_PRICE_THRESHOLD = 0.01;

const currencyCodes: Record<FiatCurrency, string> = {
  usd: "USD",
  brl: "BRL",
};

export const currencyLabels: Record<FiatCurrency, string> = {
  usd: "US Dollar",
  brl: "Brazilian Real",
};

function priceFractionDigits(value: number) {
  const absoluteValue = Math.abs(value);
  if (absoluteValue === 0 || absoluteValue >= SMALL_PRICE_THRESHOLD) {
    return 2;
  }
  if (absoluteValue >= TINY_PRICE_THRESHOLD) {
    return 4;
  }
  return 8;
}

export function formatPrice(value: number, currency: FiatCurrency) {
  const fractionDigits = priceFractionDigits(value);
  return new Intl.NumberFormat(DISPLAY_LOCALE, {
    style: "currency",
    currency: currencyCodes[currency],
    minimumFractionDigits: Math.min(fractionDigits, 2),
    maximumFractionDigits: fractionDigits,
  }).format(value);
}

export function formatMoney(value: number, currency: FiatCurrency) {
  return new Intl.NumberFormat(DISPLAY_LOCALE, {
    style: "currency",
    currency: currencyCodes[currency],
    maximumFractionDigits: 2,
  }).format(value);
}

export function formatCompactMoney(value: number, currency: FiatCurrency) {
  return new Intl.NumberFormat(DISPLAY_LOCALE, {
    style: "currency",
    currency: currencyCodes[currency],
    notation: "compact",
    maximumFractionDigits: 2,
  }).format(value);
}

export function formatCompactNumber(value: number) {
  return new Intl.NumberFormat(DISPLAY_LOCALE, {
    notation: "compact",
    maximumFractionDigits: 2,
  }).format(value);
}

export function formatNumber(value: number, maximumFractionDigits = 2) {
  return new Intl.NumberFormat(DISPLAY_LOCALE, { maximumFractionDigits }).format(value);
}

export function formatPercent(value: number | null, fractionDigits = 2) {
  if (value === null || Number.isNaN(value)) {
    return "—";
  }
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(fractionDigits)}%`;
}

export function formatTime(isoDate: string) {
  return new Intl.DateTimeFormat(DISPLAY_LOCALE, { hour: "2-digit", minute: "2-digit" }).format(new Date(isoDate));
}

export function formatShortDate(timestamp: number) {
  return new Intl.DateTimeFormat(DISPLAY_LOCALE, { month: "short", day: "numeric", year: "2-digit" }).format(
    new Date(timestamp),
  );
}
