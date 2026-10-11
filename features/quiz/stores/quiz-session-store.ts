import { create } from "zustand";
import type { LessonTrack } from "@/features/learn/types";

export type QuizTopic = LessonTrack | "all";

export type QuizPhase = "setup" | "playing" | "finished";

type QuizSessionState = {
  phase: QuizPhase;
  topic: QuizTopic;
  questionIds: string[];
  currentIndex: number;
  selectedOptionByQuestionId: Record<string, number>;
};

type QuizSessionActions = {
  setTopic: (topic: QuizTopic) => void;
  start: (questionIds: string[]) => void;
  answer: (questionId: string, optionIndex: number) => void;
  goToNext: () => void;
  restart: () => void;
};

const initialQuizSession: QuizSessionState = {
  phase: "setup",
  topic: "all",
  questionIds: [],
  currentIndex: 0,
  selectedOptionByQuestionId: {},
};

export const useQuizSessionStore = create<QuizSessionState & QuizSessionActions>()((set) => ({
  ...initialQuizSession,
  setTopic: (topic) => set({ topic }),
  start: (questionIds) =>
    set({ phase: "playing", questionIds, currentIndex: 0, selectedOptionByQuestionId: {} }),
  answer: (questionId, optionIndex) =>
    set((state) =>
      questionId in state.selectedOptionByQuestionId
        ? state
        : { selectedOptionByQuestionId: { ...state.selectedOptionByQuestionId, [questionId]: optionIndex } },
    ),
  goToNext: () =>
    set((state) =>
      state.currentIndex >= state.questionIds.length - 1
        ? { phase: "finished" }
        : { currentIndex: state.currentIndex + 1 },
    ),
  restart: () => set((state) => ({ ...initialQuizSession, topic: state.topic })),
}));
