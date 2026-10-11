type ChangeIndicatorProps = {
  value: number | null;
  className?: string;
};

export function ChangeIndicator({ value, className = "" }: ChangeIndicatorProps) {
  if (value === null || Number.isNaN(value)) {
    return <span className={`text-muted ${className}`}>—</span>;
  }

  const isPositive = value >= 0;

  return (
    <span className={`tabular-nums font-medium ${isPositive ? "text-positive" : "text-negative"} ${className}`}>
      <span aria-hidden="true">{isPositive ? "▲" : "▼"}</span> {Math.abs(value).toFixed(2)}%
      <span className="sr-only">{isPositive ? " up" : " down"}</span>
    </span>
  );
}
