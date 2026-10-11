import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { FiatCurrency } from "@/features/market/types";

type PreferencesStore = {
  currency: FiatCurrency;
  setCurrency: (currency: FiatCurrency) => void;
};

export const usePreferencesStore = create<PreferencesStore>()(
  persist(
    (set) => ({
      currency: "usd",
      setCurrency: (currency) => set({ currency }),
    }),
    {
      name: "thecrypto-preferences",
      storage: createJSONStorage(() => localStorage),
      skipHydration: true,
    },
  ),
);
