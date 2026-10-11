import { formatCompactMoney, formatShortDate } from "@/lib/format/number-format";
import type { FiatCurrency } from "@/features/market/types";
import type { DcaValuePoint } from "../lib/dca-simulation";

const CHART_WIDTH = 640;
const CHART_HEIGHT = 220;
const CHART_PADDING_TOP = 12;
const CHART_PADDING_BOTTOM = 24;
const GRID_LINE_COUNT = 4;

type DcaValueChartProps = {
  series: DcaValuePoint[];
  currency: FiatCurrency;
};

function buildPath(points: { x: number; y: number }[]) {
  return points.map((point, index) => `${index === 0 ? "M" : "L"}${point.x.toFixed(1)},${point.y.toFixed(1)}`).join(" ");
}

export function DcaValueChart({ series, currency }: DcaValueChartProps) {
  if (series.length < 2) {
    return null;
  }

  const maximum = Math.max(...series.map((point) => Math.max(point.value, point.invested)), 1);
  const drawableHeight = CHART_HEIGHT - CHART_PADDING_TOP - CHART_PADDING_BOTTOM;
  const stepX = CHART_WIDTH / (series.length - 1);
  const toY = (value: number) => CHART_PADDING_TOP + drawableHeight - (value / maximum) * drawableHeight;
  const valuePoints = series.map((point, index) => ({ x: index * stepX, y: toY(point.value) }));
  const investedPoints = series.map((point, index) => ({ x: index * stepX, y: toY(point.invested) }));
  const valuePath = buildPath(valuePoints);
  const areaPath = `${valuePath} L${CHART_WIDTH},${CHART_HEIGHT - CHART_PADDING_BOTTOM} L0,${CHART_HEIGHT - CHART_PADDING_BOTTOM} Z`;
  const gridValues = Array.from({ length: GRID_LINE_COUNT }, (_, index) => (maximum / GRID_LINE_COUNT) * (index + 1));
  const lastPoint = series[series.length - 1];

  return (
    <figure>
      <svg
        viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
        className="h-56 w-full"
        preserveAspectRatio="none"
        role="img"
        aria-label={`Portfolio value grew from 0 to ${formatCompactMoney(lastPoint.value, currency)} against ${formatCompactMoney(lastPoint.invested, currency)} invested`}
      >
        <defs>
          <linearGradient id="dca-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {gridValues.map((gridValue) => (
          <line
            key={gridValue}
            x1="0"
            x2={CHART_WIDTH}
            y1={toY(gridValue)}
            y2={toY(gridValue)}
            stroke="var(--border)"
            strokeDasharray="4 4"
            vectorEffect="non-scaling-stroke"
          />
        ))}
        <path d={areaPath} fill="url(#dca-area)" />
        <path d={buildPath(investedPoints)} fill="none" stroke="var(--muted)" strokeWidth="1.5" strokeDasharray="6 4" vectorEffect="non-scaling-stroke" />
        <path d={valuePath} fill="none" stroke="var(--accent)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
      </svg>
      <figcaption className="mt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-muted">
        <span>{formatShortDate(series[0].timestamp)}</span>
        <span className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="h-0.5 w-4 bg-accent" aria-hidden="true" /> Portfolio value
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-0.5 w-4 border-t border-dashed border-muted" aria-hidden="true" /> Amount invested
          </span>
        </span>
        <span>{formatShortDate(lastPoint.timestamp)}</span>
      </figcaption>
    </figure>
  );
}
