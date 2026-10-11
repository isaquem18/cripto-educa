import type { LessonTrack } from "@/features/learn/types";

export type QuizQuestion = {
  id: string;
  track: LessonTrack;
  question: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
  relatedLessonSlug?: string;
};
