import { z } from "zod";
import { FIAT_CURRENCIES, PRICE_HISTORY_DAYS } from "./types";

const DEFAULT_HISTORY_DAYS = 365;

export const currencyQuerySchema = z.object({
  currency: z.enum(FIAT_CURRENCIES).default("usd"),
});

export const priceHistoryQuerySchema = z.object({
  currency: z.enum(FIAT_CURRENCIES).default("usd"),
  days: z.coerce.number().pipe(z.literal(PRICE_HISTORY_DAYS)).default(DEFAULT_HISTORY_DAYS),
});

export const coinIdSchema = z
  .string()
  .min(1)
  .max(100)
  .regex(/^[a-z0-9-]+$/, "Invalid coin id");
