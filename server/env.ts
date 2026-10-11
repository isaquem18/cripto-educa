import "server-only";
import { z } from "zod";

const DEFAULT_COINGECKO_API_URL = "https://api.coingecko.com/api/v3";

const envSchema = z.object({
  COINGECKO_API_URL: z.url().default(DEFAULT_COINGECKO_API_URL),
  COINGECKO_API_KEY: z.string().optional(),
});

export const env = envSchema.parse({
  COINGECKO_API_URL: process.env.COINGECKO_API_URL || undefined,
  COINGECKO_API_KEY: process.env.COINGECKO_API_KEY || undefined,
});
