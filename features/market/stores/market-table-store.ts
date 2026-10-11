import { create } from "zustand";

export type MarketSortField = "rank" | "price" | "change24h" | "change7d" | "marketCap" | "volume24h";

export type SortDirection = "asc" | "desc";

type MarketTableState = {
  search: string;
  sortField: MarketSortField;
  sortDirection: SortDirection;
};

type MarketTableActions = {
  setSearch: (search: string) => void;
  toggleSort: (field: MarketSortField) => void;
  reset: () => void;
};

const initialMarketTableState: MarketTableState = {
  search: "",
  sortField: "rank",
  sortDirection: "asc",
};

export const useMarketTableStore = create<MarketTableState & MarketTableActions>()((set) => ({
  ...initialMarketTableState,
  setSearch: (search) => set({ search }),
  toggleSort: (field) =>
    set((state) => {
      if (state.sortField === field) {
        return { sortDirection: state.sortDirection === "asc" ? "desc" : "asc" };
      }
      return { sortField: field, sortDirection: field === "rank" ? "asc" : "desc" };
    }),
  reset: () => set(initialMarketTableState),
}));
