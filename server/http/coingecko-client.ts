import "server-only";
import axios from "axios";
import { env } from "@/server/env";

const COINGECKO_TIMEOUT_MS = 10_000;

function buildHeaders() {
  const headers: Record<string, string> = { Accept: "application/json" };
  if (env.COINGECKO_API_KEY) {
    headers["x-cg-demo-api-key"] = env.COINGECKO_API_KEY;
  }
  return headers;
}

export const coingeckoClient = axios.create({
  baseURL: env.COINGECKO_API_URL,
  timeout: COINGECKO_TIMEOUT_MS,
  headers: buildHeaders(),
});
