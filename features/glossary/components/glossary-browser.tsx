"use client";

import Link from "next/link";
import { useShallow } from "zustand/react/shallow";
import { Badge } from "@/components/ui/badge";
import { glossaryCategories, glossaryCategoryLabels } from "../categories";
import { glossaryTerms } from "../glossary-terms";
import { useGlossaryFiltersStore } from "../stores/glossary-filters-store";
import type { GlossaryTerm } from "../types";

function firstLetter(term: string) {
  const letter = term.charAt(0).toUpperCase();
  return /[A-Z]/.test(letter) ? letter : "#";
}

function groupByLetter(terms: GlossaryTerm[]) {
  const groups = new Map<string, GlossaryTerm[]>();
  for (const term of terms) {
    const letter = firstLetter(term.term);
    groups.set(letter, [...(groups.get(letter) ?? []), term]);
  }
  return [...groups.entries()];
}

export function GlossaryBrowser() {
  const { search, category, setSearch, setCategory, reset } = useGlossaryFiltersStore(
    useShallow((state) => ({
      search: state.search,
      category: state.category,
      setSearch: state.setSearch,
      setCategory: state.setCategory,
      reset: state.reset,
    })),
  );
  const normalizedSearch = search.trim().toLowerCase();
  const visibleTerms = glossaryTerms.filter(
    (term) =>
      (category === "all" || term.category === category) &&
      (normalizedSearch.length === 0 ||
        term.term.toLowerCase().includes(normalizedSearch) ||
        term.definition.toLowerCase().includes(normalizedSearch)),
  );
  const groupedTerms = groupByLetter(visibleTerms);
  const categoryOptions = ["all", ...glossaryCategories] as const;

  return (
    <div>
      <div className="sticky top-16 z-30 -mx-4 border-b border-border bg-background/90 px-4 py-4 backdrop-blur sm:mx-0 sm:rounded-2xl sm:border sm:px-5">
        <label className="block">
          <span className="sr-only">Search the glossary</span>
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder={`Search ${glossaryTerms.length} terms…`}
            className="w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
          />
        </label>
        <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {categoryOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setCategory(option)}
              aria-pressed={category === option}
              className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                category === option
                  ? "border-accent bg-accent text-background"
                  : "border-border text-muted hover:border-accent/50 hover:text-foreground"
              }`}
            >
              {option === "all" ? "All" : glossaryCategoryLabels[option]}
            </button>
          ))}
        </div>
      </div>
      <p className="mt-6 text-sm text-muted" aria-live="polite">
        Showing {visibleTerms.length} of {glossaryTerms.length} terms
      </p>
      {visibleTerms.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-border bg-surface p-8 text-center">
          <p className="text-foreground">No terms match your search.</p>
          <button type="button" onClick={reset} className="mt-3 text-sm font-medium text-accent hover:text-accent-strong">
            Clear filters
          </button>
        </div>
      ) : (
        <div className="mt-6 space-y-10">
          {groupedTerms.map(([letter, terms]) => (
            <section key={letter} aria-labelledby={`letter-${letter}`}>
              <h2 id={`letter-${letter}`} className="mb-4 text-2xl font-semibold text-accent">
                {letter}
              </h2>
              <dl className="grid gap-4 md:grid-cols-2">
                {terms.map((term) => (
                  <div key={term.term} className="rounded-2xl border border-border bg-surface p-5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <dt className="font-semibold text-foreground">{term.term}</dt>
                      <Badge>{glossaryCategoryLabels[term.category]}</Badge>
                    </div>
                    <dd className="mt-2 text-sm leading-relaxed text-muted">{term.definition}</dd>
                    {term.relatedLessonSlug && (
                      <dd className="mt-3">
                        <Link
                          href={`/learn/${term.relatedLessonSlug}`}
                          className="text-xs font-medium text-accent hover:text-accent-strong"
                        >
                          Related lesson →
                        </Link>
                      </dd>
                    )}
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
