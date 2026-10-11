import { QueryClient, defaultShouldDehydrateQuery, isServer } from "@tanstack/react-query";

const DEFAULT_STALE_TIME_MS = 60_000;
const DEFAULT_RETRY_COUNT = 2;

function createQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: DEFAULT_STALE_TIME_MS,
        retry: DEFAULT_RETRY_COUNT,
        refetchOnWindowFocus: false,
      },
      dehydrate: {
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) || query.state.status === "pending",
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined;

export function getQueryClient() {
  if (isServer) {
    return createQueryClient();
  }
  browserQueryClient ??= createQueryClient();
  return browserQueryClient;
}
