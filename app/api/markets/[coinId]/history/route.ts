import { type NextRequest } from "next/server";
import { coinIdSchema, priceHistoryQuerySchema } from "@/features/market/schemas";
import { getPriceHistory } from "@/server/market/market-service";
import {
  SLOW_DATA_CACHE_CONTROL,
  invalidRequestResponse,
  snapshotResponse,
  upstreamUnavailableResponse,
} from "@/server/http/snapshot-response";

export async function GET(request: NextRequest, context: RouteContext<"/api/markets/[coinId]/history">) {
  const { coinId } = await context.params;
  const parsedCoinId = coinIdSchema.safeParse(coinId);
  const parsedQuery = priceHistoryQuerySchema.safeParse(Object.fromEntries(request.nextUrl.searchParams));

  if (!parsedCoinId.success) {
    return invalidRequestResponse(parsedCoinId.error.issues);
  }

  if (!parsedQuery.success) {
    return invalidRequestResponse(parsedQuery.error.issues);
  }

  try {
    const snapshot = await getPriceHistory(parsedCoinId.data, parsedQuery.data.currency, parsedQuery.data.days);
    return snapshotResponse(snapshot, SLOW_DATA_CACHE_CONTROL);
  } catch (error) {
    return upstreamUnavailableResponse(error, `price history for ${parsedCoinId.data}`);
  }
}
