import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type QuizAttempt = {
  topic: string;
  correctAnswers: number;
  totalQuestions: number;
  completedAt: string;
};

const MAX_STORED_ATTEMPTS = 10;

type QuizHistoryStore = {
  attempts: QuizAttempt[];
  recordAttempt: (attempt: QuizAttempt) => void;
  clearHistory: () => void;
};

export const useQuizHistoryStore = create<QuizHistoryStore>()(
  persist(
    (set) => ({
      attempts: [],
      recordAttempt: (attempt) =>
        set((state) => ({ attempts: [attempt, ...state.attempts].slice(0, MAX_STORED_ATTEMPTS) })),
      clearHistory: () => set({ attempts: [] }),
    }),
    {
      name: "thecrypto-quiz-history",
      storage: createJSONStorage(() => localStorage),
      skipHydration: true,
    },
  ),
);
