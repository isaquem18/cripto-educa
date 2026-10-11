import "server-only";
import type { MarketSnapshot } from "@/features/market/types";

const MAX_STALE_AGE_MS = 24 * 60 * 60 * 1000;

type CacheEntry = {
  value: unknown;
  fetchedAt: number;
};

const entriesByKey = new Map<string, CacheEntry>();
const pendingLoadsByKey = new Map<string, Promise<unknown>>();

function toSnapshot<Value>(entry: CacheEntry, stale: boolean): MarketSnapshot<Value> {
  return {
    data: entry.value as Value,
    fetchedAt: new Date(entry.fetchedAt).toISOString(),
    stale,
  };
}

function loadOnce<Value>(key: string, loader: () => Promise<Value>): Promise<Value> {
  const pendingLoad = pendingLoadsByKey.get(key);
  if (pendingLoad) {
    return pendingLoad as Promise<Value>;
  }
  const load = loader().finally(() => pendingLoadsByKey.delete(key));
  pendingLoadsByKey.set(key, load);
  return load;
}

export async function readThroughCache<Value>(
  key: string,
  freshForMs: number,
  loader: () => Promise<Value>,
): Promise<MarketSnapshot<Value>> {
  const cachedEntry = entriesByKey.get(key);
  const now = Date.now();

  if (cachedEntry && now - cachedEntry.fetchedAt < freshForMs) {
    return toSnapshot<Value>(cachedEntry, false);
  }

  try {
    const value = await loadOnce(key, loader);
    const freshEntry: CacheEntry = { value, fetchedAt: Date.now() };
    entriesByKey.set(key, freshEntry);
    return toSnapshot<Value>(freshEntry, false);
  } catch (error) {
    if (cachedEntry && now - cachedEntry.fetchedAt < MAX_STALE_AGE_MS) {
      return toSnapshot<Value>(cachedEntry, true);
    }
    throw error;
  }
}
