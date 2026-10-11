"use client";

import { useEffect } from "react";
import { useLearningProgressStore } from "@/features/learn/stores/learning-progress-store";
import { useQuizHistoryStore } from "@/features/quiz/stores/quiz-history-store";
import { usePreferencesStore } from "@/stores/preferences-store";

export function PersistedStoresHydrator() {
  useEffect(() => {
    void usePreferencesStore.persist.rehydrate();
    void useLearningProgressStore.persist.rehydrate();
    void useQuizHistoryStore.persist.rehydrate();
  }, []);

  return null;
}
