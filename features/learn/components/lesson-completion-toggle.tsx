"use client";

import { buttonClasses } from "@/components/ui/button-link";
import { useLearningProgressStore } from "../stores/learning-progress-store";

type LessonCompletionToggleProps = {
  slug: string;
};

export function LessonCompletionToggle({ slug }: LessonCompletionToggleProps) {
  const isCompleted = useLearningProgressStore((state) => state.completedLessonSlugs.includes(slug));
  const markCompleted = useLearningProgressStore((state) => state.markCompleted);
  const markIncomplete = useLearningProgressStore((state) => state.markIncomplete);

  if (isCompleted) {
    return (
      <div className="flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-2 rounded-xl bg-positive/10 px-4 py-2.5 text-sm font-semibold text-positive">
          <span aria-hidden="true">✓</span> Lesson completed
        </span>
        <button type="button" onClick={() => markIncomplete(slug)} className={buttonClasses("ghost")}>
          Mark as not completed
        </button>
      </div>
    );
  }

  return (
    <button type="button" onClick={() => markCompleted(slug)} className={buttonClasses("primary")}>
      Mark lesson as completed
    </button>
  );
}
