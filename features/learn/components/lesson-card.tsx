import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { levelLabels } from "../tracks";
import type { Lesson, LessonLevel } from "../types";
import { LessonCompletionMark } from "./lesson-completion-mark";

const levelTones: Record<LessonLevel, "positive" | "accent" | "negative"> = {
  beginner: "positive",
  intermediate: "accent",
  advanced: "negative",
};

type LessonCardProps = {
  lesson: Lesson;
  position?: number;
};

export function LessonCard({ lesson, position }: LessonCardProps) {
  return (
    <Link
      href={`/learn/${lesson.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/50 hover:bg-surface-raised/60"
    >
      <div className="flex flex-wrap items-center gap-2">
        {position !== undefined && (
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-surface-raised text-xs font-semibold text-muted">
            {position}
          </span>
        )}
        <Badge tone={levelTones[lesson.level]}>{levelLabels[lesson.level]}</Badge>
        <span className="text-xs text-muted">{lesson.readingMinutes} min read</span>
        <LessonCompletionMark slug={lesson.slug} />
      </div>
      <h3 className="mt-4 text-lg font-semibold leading-snug text-foreground group-hover:text-accent">{lesson.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{lesson.summary}</p>
      <span className="mt-auto pt-4 text-sm font-medium text-accent">
        Read lesson <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}
