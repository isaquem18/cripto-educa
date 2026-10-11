import { type NextRequest } from "next/server";
import { currencyQuerySchema } from "@/features/market/schemas";
import { getMarketOverview } from "@/server/market/market-service";
import {
  invalidRequestResponse,
  snapshotResponse,
  upstreamUnavailableResponse,
} from "@/server/http/snapshot-response";

export async function GET(request: NextRequest) {
  const parsed = currencyQuerySchema.safeParse(Object.fromEntries(request.nextUrl.searchParams));

  if (!parsed.success) {
    return invalidRequestResponse(parsed.error.issues);
  }

  try {
    const snapshot = await getMarketOverview(parsed.data.currency);
    return snapshotResponse(snapshot);
  } catch (error) {
    return upstreamUnavailableResponse(error, "market overview");
  }
}
