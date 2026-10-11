type SparklineProps = {
  values: number[];
  width?: number;
  height?: number;
  className?: string;
};

const SPARKLINE_PADDING = 2;

export function Sparkline({ values, width = 120, height = 36, className = "" }: SparklineProps) {
  if (values.length < 2) {
    return <div style={{ width, height }} className={className} aria-hidden="true" />;
  }

  const minimum = Math.min(...values);
  const maximum = Math.max(...values);
  const range = maximum - minimum || 1;
  const drawableHeight = height - SPARKLINE_PADDING * 2;
  const stepX = width / (values.length - 1);
  const points = values
    .map((value, index) => {
      const x = index * stepX;
      const y = SPARKLINE_PADDING + drawableHeight - ((value - minimum) / range) * drawableHeight;
      return `${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(" ");
  const isUp = values[values.length - 1] >= values[0];

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      className={className}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <polyline
        points={points}
        fill="none"
        stroke={isUp ? "var(--positive)" : "var(--negative)"}
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}
