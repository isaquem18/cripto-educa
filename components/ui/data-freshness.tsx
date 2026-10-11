import { formatTime } from "@/lib/format/number-format";

type DataFreshnessProps = {
  fetchedAt: string;
  stale: boolean;
  isFetching?: boolean;
};

export function DataFreshness({ fetchedAt, stale, isFetching = false }: DataFreshnessProps) {
  const label = stale ? "Delayed data" : "Live data";

  return (
    <span className="inline-flex items-center gap-2 text-xs text-muted">
      <span className="relative flex h-2 w-2">
        {!stale && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-positive opacity-60" />
        )}
        <span className={`relative inline-flex h-2 w-2 rounded-full ${stale ? "bg-accent" : "bg-positive"}`} />
      </span>
      {label} · updated {formatTime(fetchedAt)}
      {isFetching && <span className="text-accent">· refreshing</span>}
    </span>
  );
}
