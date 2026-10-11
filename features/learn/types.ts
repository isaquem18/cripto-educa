export type LessonLevel = "beginner" | "intermediate" | "advanced";

export type LessonTrack = "fundamentals" | "exchanges" | "security" | "investing";

export type CalloutTone = "info" | "tip" | "warning";

export type LessonBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "steps"; items: string[] }
  | { type: "callout"; tone: CalloutTone; title: string; text: string }
  | { type: "comparison"; columns: [string, string]; rows: { label: string; values: [string, string] }[] };

export type ExternalReference = {
  label: string;
  url: string;
};

export type Lesson = {
  slug: string;
  title: string;
  summary: string;
  level: LessonLevel;
  track: LessonTrack;
  readingMinutes: number;
  blocks: LessonBlock[];
  keyTakeaways: string[];
  references?: ExternalReference[];
};
