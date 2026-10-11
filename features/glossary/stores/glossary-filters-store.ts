import { create } from "zustand";
import type { GlossaryCategory } from "../types";

type GlossaryFiltersState = {
  search: string;
  category: GlossaryCategory | "all";
};

type GlossaryFiltersActions = {
  setSearch: (search: string) => void;
  setCategory: (category: GlossaryCategory | "all") => void;
  reset: () => void;
};

const initialGlossaryFilters: GlossaryFiltersState = {
  search: "",
  category: "all",
};

export const useGlossaryFiltersStore = create<GlossaryFiltersState & GlossaryFiltersActions>()((set) => ({
  ...initialGlossaryFilters,
  setSearch: (search) => set({ search }),
  setCategory: (category) => set({ category }),
  reset: () => set(initialGlossaryFilters),
}));
