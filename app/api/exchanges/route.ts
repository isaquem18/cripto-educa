import { connection } from "next/server";
import { listTopExchanges } from "@/server/exchanges/exchanges-service";
import {
  SLOW_DATA_CACHE_CONTROL,
  snapshotResponse,
  upstreamUnavailableResponse,
} from "@/server/http/snapshot-response";

export async function GET() {
  await connection();

  try {
    const snapshot = await listTopExchanges();
    return snapshotResponse(snapshot, SLOW_DATA_CACHE_CONTROL);
  } catch (error) {
    return upstreamUnavailableResponse(error, "exchanges");
  }
}
