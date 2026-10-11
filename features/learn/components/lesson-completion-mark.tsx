"use client";

import { useLearningProgressStore } from "../stores/learning-progress-store";

type LessonCompletionMarkProps = {
  slug: string;
};

export function LessonCompletionMark({ slug }: LessonCompletionMarkProps) {
  const isCompleted = useLearningProgressStore((state) => state.completedLessonSlugs.includes(slug));

  if (!isCompleted) {
    return null;
  }

  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-positive/10 px-2 py-0.5 text-xs font-medium text-positive">
      <span aria-hidden="true">✓</span> Completed
    </span>
  );
}
