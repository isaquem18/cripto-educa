import "server-only";
import { NextResponse } from "next/server";
import type { MarketSnapshot } from "@/features/market/types";

export const LIVE_DATA_CACHE_CONTROL = "public, max-age=30, s-maxage=60, stale-while-revalidate=300";
export const SLOW_DATA_CACHE_CONTROL = "public, max-age=300, s-maxage=900, stale-while-revalidate=3600";

export function snapshotResponse<Data>(snapshot: MarketSnapshot<Data>, cacheControl = LIVE_DATA_CACHE_CONTROL) {
  return NextResponse.json(snapshot, { headers: { "Cache-Control": cacheControl } });
}

export function invalidRequestResponse(details: unknown) {
  return NextResponse.json({ error: "Invalid request parameters", details }, { status: 400 });
}

export function upstreamUnavailableResponse(error: unknown, source: string) {
  console.error(`Upstream request failed for ${source}`, error instanceof Error ? error.message : error);
  return NextResponse.json(
    { error: "Market data is temporarily unavailable. Please try again in a moment." },
    { status: 503, headers: { "Cache-Control": "no-store" } },
  );
}
