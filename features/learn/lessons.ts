import { exchangeLessons } from "./content/exchanges";
import { fundamentalsLessons } from "./content/fundamentals";
import { investingLessons } from "./content/investing";
import { securityLessons } from "./content/security";
import type { Lesson, LessonTrack } from "./types";

export const allLessons: Lesson[] = [
  ...fundamentalsLessons,
  ...exchangeLessons,
  ...securityLessons,
  ...investingLessons,
];

export const totalReadingMinutes = allLessons.reduce((total, lesson) => total + lesson.readingMinutes, 0);

export function getLesson(slug: string) {
  return allLessons.find((lesson) => lesson.slug === slug) ?? null;
}

export function getLessonsByTrack(track: LessonTrack) {
  return allLessons.filter((lesson) => lesson.track === track);
}

export function getAdjacentLessons(slug: string) {
  const index = allLessons.findIndex((lesson) => lesson.slug === slug);
  return {
    previous: index > 0 ? allLessons[index - 1] : null,
    next: index >= 0 && index < allLessons.length - 1 ? allLessons[index + 1] : null,
  };
}

export function getLessonSlugsByTrack(track: LessonTrack) {
  return getLessonsByTrack(track).map((lesson) => lesson.slug);
}
