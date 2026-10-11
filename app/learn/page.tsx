import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { LearningProgressSummary } from "@/features/learn/components/learning-progress-summary";
import { LessonCard } from "@/features/learn/components/lesson-card";
import { allLessons, getLessonSlugsByTrack, getLessonsByTrack, totalReadingMinutes } from "@/features/learn/lessons";
import { tracks } from "@/features/learn/tracks";
import type { LessonTrack } from "@/features/learn/types";

export const metadata: Metadata = {
  title: "Learn crypto step by step",
  description:
    "Structured lessons on cryptocurrency fundamentals, crypto exchanges, security and risk management, from beginner to advanced.",
  alternates: { canonical: "/learn" },
};

export default function LearnPage() {
  const lessonSlugsByTrack = Object.fromEntries(
    tracks.map((track) => [track.id, getLessonSlugsByTrack(track.id)]),
  ) as Record<LessonTrack, string[]>;

  return (
    <>
      <PageHeader
        eyebrow="Learning paths"
        title="Learn crypto step by step"
        description={`${allLessons.length} free lessons across ${tracks.length} learning paths, about ${Math.round(totalReadingMinutes / 60)} hours of reading in total. Start with the fundamentals or jump straight to the topic you need.`}
      />
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_320px]">
        <div className="space-y-16">
          {tracks.map((track) => {
            const lessons = getLessonsByTrack(track.id);
            return (
              <section key={track.id} id={track.id} aria-labelledby={`${track.id}-title`} className="scroll-mt-24">
                <div className="mb-6 flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-xl text-accent" aria-hidden="true">
                    {track.icon}
                  </span>
                  <div>
                    <h2 id={`${track.id}-title`} className="text-2xl font-semibold tracking-tight text-foreground">
                      {track.title}
                    </h2>
                    <p className="mt-1 text-muted">{track.description}</p>
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {lessons.map((lesson, index) => (
                    <LessonCard key={lesson.slug} lesson={lesson} position={index + 1} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <LearningProgressSummary lessonSlugsByTrack={lessonSlugsByTrack} />
        </aside>
      </div>
    </>
  );
}
