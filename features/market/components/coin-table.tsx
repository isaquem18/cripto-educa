"use client";

import { useShallow } from "zustand/react/shallow";
import { ChangeIndicator } from "@/components/ui/change-indicator";
import { DataFreshness } from "@/components/ui/data-freshness";
import { QueryErrorState } from "@/components/ui/query-error-state";
import { Skeleton } from "@/components/ui/skeleton";
import { formatCompactMoney, formatPrice } from "@/lib/format/number-format";
import { useCoinMarkets } from "../hooks/use-market-data";
import { useMarketTableStore, type MarketSortField } from "../stores/market-table-store";
import type { CoinMarket, FiatCurrency } from "../types";
import { CoinIcon } from "./coin-icon";
import { Sparkline } from "./sparkline";

const SKELETON_ROW_COUNT = 10;
const DEFAULT_TABLE_CURRENCY: FiatCurrency = "usd";

type SortableColumn = {
  field: MarketSortField;
  label: string;
  className: string;
};

const sortableColumns: SortableColumn[] = [
  { field: "price", label: "Price", className: "text-right" },
  { field: "change24h", label: "24h", className: "text-right" },
  { field: "change7d", label: "7d", className: "hidden text-right md:table-cell" },
  { field: "marketCap", label: "Market cap", className: "hidden text-right lg:table-cell" },
  { field: "volume24h", label: "Volume 24h", className: "hidden text-right xl:table-cell" },
];

function sortValue(coin: CoinMarket, field: MarketSortField) {
  if (field === "rank") {
    return coin.rank ?? Number.MAX_SAFE_INTEGER;
  }
  return coin[field] ?? Number.NEGATIVE_INFINITY;
}

function filterAndSortCoins(
  coins: CoinMarket[],
  search: string,
  sortField: MarketSortField,
  sortDirection: "asc" | "desc",
) {
  const normalizedSearch = search.trim().toLowerCase();
  const directionMultiplier = sortDirection === "asc" ? 1 : -1;
  return coins
    .filter(
      (coin) =>
        normalizedSearch.length === 0 ||
        coin.name.toLowerCase().includes(normalizedSearch) ||
        coin.symbol.toLowerCase().includes(normalizedSearch),
    )
    .sort((first, second) => (sortValue(first, sortField) - sortValue(second, sortField)) * directionMultiplier);
}

export function CoinTable() {
  const { data, error, isPending, isFetching, refetch } = useCoinMarkets();
  const { search, sortField, sortDirection, setSearch, toggleSort } = useMarketTableStore(
    useShallow((state) => ({
      search: state.search,
      sortField: state.sortField,
      sortDirection: state.sortDirection,
      setSearch: state.setSearch,
      toggleSort: state.toggleSort,
    })),
  );

  if (error && !data) {
    return <QueryErrorState error={error} onRetry={() => void refetch()} />;
  }

  const visibleCoins = data ? filterAndSortCoins(data.data, search, sortField, sortDirection) : [];
  const tableCurrency = data?.currency ?? DEFAULT_TABLE_CURRENCY;

  function sortIndicator(field: MarketSortField) {
    if (sortField !== field) {
      return null;
    }
    return <span aria-hidden="true">{sortDirection === "asc" ? " ↑" : " ↓"}</span>;
  }

  function ariaSort(field: MarketSortField) {
    if (sortField !== field) {
      return undefined;
    }
    return sortDirection === "asc" ? "ascending" : "descending";
  }

  return (
    <div>
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <label className="relative block w-full sm:max-w-xs">
          <span className="sr-only">Search coins</span>
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search by name or symbol"
            className="w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
          />
        </label>
        {data && <DataFreshness fetchedAt={data.fetchedAt} stale={data.stale} isFetching={isFetching} />}
      </div>
      <div className="relative overflow-x-auto rounded-2xl border border-border bg-surface">
        <table className="w-full min-w-[520px] text-sm">
          <thead>
            <tr className="border-b border-border text-xs uppercase tracking-wider text-muted">
              <th scope="col" aria-sort={ariaSort("rank")} className="px-4 py-3 text-left font-medium">
                <button type="button" onClick={() => toggleSort("rank")} className="hover:text-foreground">
                  #{sortIndicator("rank")}
                </button>
              </th>
              <th scope="col" className="px-4 py-3 text-left font-medium">
                Coin
              </th>
              {sortableColumns.map((column) => (
                <th
                  key={column.field}
                  scope="col"
                  aria-sort={ariaSort(column.field)}
                  className={`px-4 py-3 font-medium ${column.className}`}
                >
                  <button type="button" onClick={() => toggleSort(column.field)} className="hover:text-foreground">
                    {column.label}
                    {sortIndicator(column.field)}
                  </button>
                </th>
              ))}
              <th scope="col" className="hidden px-4 py-3 text-right font-medium sm:table-cell">
                Last 7 days
              </th>
            </tr>
          </thead>
          <tbody>
            {isPending &&
              Array.from({ length: SKELETON_ROW_COUNT }, (_, index) => (
                <tr key={index} className="border-b border-border/60">
                  <td colSpan={8} className="px-4 py-3">
                    <Skeleton className="h-8" />
                  </td>
                </tr>
              ))}
            {visibleCoins.map((coin) => (
              <tr key={coin.id} className="border-b border-border/60 transition-colors last:border-0 hover:bg-surface-raised/60">
                <td className="px-4 py-3 tabular-nums text-muted">{coin.rank ?? "—"}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <CoinIcon src={coin.imageUrl} name={coin.name} />
                    <div className="min-w-0">
                      <p className="truncate font-medium text-foreground">{coin.name}</p>
                      <p className="text-xs text-muted">{coin.symbol}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-right tabular-nums font-medium text-foreground">
                  {formatPrice(coin.price, tableCurrency)}
                </td>
                <td className="px-4 py-3 text-right">
                  <ChangeIndicator value={coin.change24h} />
                </td>
                <td className="hidden px-4 py-3 text-right md:table-cell">
                  <ChangeIndicator value={coin.change7d} />
                </td>
                <td className="hidden px-4 py-3 text-right tabular-nums text-foreground lg:table-cell">
                  {formatCompactMoney(coin.marketCap, tableCurrency)}
                </td>
                <td className="hidden px-4 py-3 text-right tabular-nums text-muted xl:table-cell">
                  {formatCompactMoney(coin.volume24h, tableCurrency)}
                </td>
                <td className="hidden px-4 py-3 sm:table-cell">
                  <div className="flex justify-end">
                    <Sparkline values={coin.sparkline7d} />
                  </div>
                </td>
              </tr>
            ))}
            {data && visibleCoins.length === 0 && (
              <tr>
                <td colSpan={8} className="px-4 py-10 text-center text-muted">
                  No coins match &ldquo;{search}&rdquo;.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
