import type { GlossaryCategory } from "./types";

export const glossaryCategoryLabels: Record<GlossaryCategory, string> = {
  basics: "Basics",
  trading: "Trading",
  security: "Security",
  defi: "DeFi",
  technology: "Technology",
};

export const glossaryCategories = Object.keys(glossaryCategoryLabels) as GlossaryCategory[];
