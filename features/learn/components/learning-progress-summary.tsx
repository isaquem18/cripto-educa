"use client";

import { tracks } from "../tracks";
import { useLearningProgressStore } from "../stores/learning-progress-store";
import type { LessonTrack } from "../types";

type LearningProgressSummaryProps = {
  lessonSlugsByTrack: Record<LessonTrack, string[]>;
};

export function LearningProgressSummary({ lessonSlugsByTrack }: LearningProgressSummaryProps) {
  const completedLessonSlugs = useLearningProgressStore((state) => state.completedLessonSlugs);
  const resetProgress = useLearningProgressStore((state) => state.resetProgress);
  const allSlugs = Object.values(lessonSlugsByTrack).flat();
  const completedCount = allSlugs.filter((slug) => completedLessonSlugs.includes(slug)).length;
  const overallPercent = allSlugs.length === 0 ? 0 : Math.round((completedCount / allSlugs.length) * 100);

  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-muted">Your progress</p>
          <p className="mt-1 text-3xl font-semibold tabular-nums text-foreground">
            {completedCount}
            <span className="text-lg text-muted"> / {allSlugs.length} lessons</span>
          </p>
        </div>
        {completedCount > 0 && (
          <button type="button" onClick={resetProgress} className="text-xs text-muted underline-offset-4 hover:text-foreground hover:underline">
            Reset progress
          </button>
        )}
      </div>
      <div
        className="mt-4 h-2 overflow-hidden rounded-full bg-surface-raised"
        role="progressbar"
        aria-valuenow={overallPercent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Overall course progress"
      >
        <div className="h-full rounded-full bg-accent transition-all" style={{ width: `${overallPercent}%` }} />
      </div>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {tracks.map((track) => {
          const trackSlugs = lessonSlugsByTrack[track.id];
          const trackCompleted = trackSlugs.filter((slug) => completedLessonSlugs.includes(slug)).length;
          return (
            <li key={track.id} className="flex items-center justify-between gap-3 text-sm">
              <a href={`#${track.id}`} className="text-muted hover:text-foreground">
                {track.title}
              </a>
              <span className="tabular-nums text-foreground">
                {trackCompleted}/{trackSlugs.length}
              </span>
            </li>
          );
        })}
      </ul>
      <p className="mt-4 text-xs text-muted">Progress is saved in this browser only.</p>
    </div>
  );
}
