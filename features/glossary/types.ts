export type GlossaryCategory = "basics" | "trading" | "security" | "defi" | "technology";

export type GlossaryTerm = {
  term: string;
  definition: string;
  category: GlossaryCategory;
  relatedLessonSlug?: string;
};
