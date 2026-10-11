import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type LearningProgressStore = {
  completedLessonSlugs: string[];
  markCompleted: (slug: string) => void;
  markIncomplete: (slug: string) => void;
  resetProgress: () => void;
};

export const useLearningProgressStore = create<LearningProgressStore>()(
  persist(
    (set) => ({
      completedLessonSlugs: [],
      markCompleted: (slug) =>
        set((state) =>
          state.completedLessonSlugs.includes(slug)
            ? state
            : { completedLessonSlugs: [...state.completedLessonSlugs, slug] },
        ),
      markIncomplete: (slug) =>
        set((state) => ({
          completedLessonSlugs: state.completedLessonSlugs.filter((completedSlug) => completedSlug !== slug),
        })),
      resetProgress: () => set({ completedLessonSlugs: [] }),
    }),
    {
      name: "thecrypto-learning-progress",
      storage: createJSONStorage(() => localStorage),
      skipHydration: true,
    },
  ),
);
