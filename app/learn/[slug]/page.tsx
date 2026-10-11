import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { LessonCompletionToggle } from "@/features/learn/components/lesson-completion-toggle";
import { LessonContent } from "@/features/learn/components/lesson-content";
import { allLessons, getAdjacentLessons, getLesson, getLessonsByTrack } from "@/features/learn/lessons";
import { getTrack, levelLabels } from "@/features/learn/tracks";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return allLessons.map((lesson) => ({ slug: lesson.slug }));
}

export async function generateMetadata({ params }: PageProps<"/learn/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const lesson = getLesson(slug);

  if (!lesson) {
    return { title: "Lesson not found" };
  }

  return {
    title: lesson.title,
    description: lesson.summary,
    alternates: { canonical: `/learn/${lesson.slug}` },
    openGraph: {
      type: "article",
      title: lesson.title,
      description: lesson.summary,
      url: `${siteConfig.url}/learn/${lesson.slug}`,
    },
  };
}

export default async function LessonPage({ params }: PageProps<"/learn/[slug]">) {
  const { slug } = await params;
  const lesson = getLesson(slug);

  if (!lesson) {
    notFound();
  }

  const track = getTrack(lesson.track);
  const { previous, next } = getAdjacentLessons(lesson.slug);
  const trackLessons = getLessonsByTrack(lesson.track);
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: lesson.title,
    description: lesson.summary,
    educationalLevel: levelLabels[lesson.level],
    timeRequired: `PT${lesson.readingMinutes}M`,
    inLanguage: "en",
    isAccessibleForFree: true,
    url: `${siteConfig.url}/learn/${lesson.slug}`,
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c") }}
      />
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/learn" className="hover:text-foreground">
              Learn
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href={`/learn#${track.id}`} className="hover:text-foreground">
              {track.title}
            </Link>
          </li>
        </ol>
      </nav>
      <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
        <article className="min-w-0 max-w-3xl">
          <header className="mb-10 border-b border-border pb-8">
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone="accent">{track.title}</Badge>
              <Badge>{levelLabels[lesson.level]}</Badge>
              <span className="text-sm text-muted">{lesson.readingMinutes} min read</span>
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">{lesson.title}</h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">{lesson.summary}</p>
          </header>
          <LessonContent blocks={lesson.blocks} />
          <section aria-labelledby="key-takeaways" className="mt-12 rounded-2xl border border-accent/30 bg-accent/5 p-6">
            <h2 id="key-takeaways" className="text-lg font-semibold text-accent">
              Key takeaways
            </h2>
            <ul className="mt-4 space-y-2.5">
              {lesson.keyTakeaways.map((takeaway) => (
                <li key={takeaway} className="flex gap-3 leading-7 text-foreground/90">
                  <span className="text-accent" aria-hidden="true">
                    ✓
                  </span>
                  {takeaway}
                </li>
              ))}
            </ul>
          </section>
          {lesson.references && lesson.references.length > 0 && (
            <section aria-labelledby="references" className="mt-8">
              <h2 id="references" className="text-sm font-semibold uppercase tracking-wider text-muted">
                Further reading
              </h2>
              <ul className="mt-3 space-y-2">
                {lesson.references.map((reference) => (
                  <li key={reference.url}>
                    <a href={reference.url} target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:text-accent-strong">
                      {reference.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}
          <div className="mt-10 border-t border-border pt-8">
            <LessonCompletionToggle slug={lesson.slug} />
          </div>
          <nav aria-label="Lesson navigation" className="mt-10 grid gap-4 sm:grid-cols-2">
            {previous ? (
              <Link href={`/learn/${previous.slug}`} className="rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/50">
                <span className="text-xs uppercase tracking-wider text-muted">← Previous</span>
                <span className="mt-1 block font-medium text-foreground">{previous.title}</span>
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link href={`/learn/${next.slug}`} className="rounded-2xl border border-border bg-surface p-5 text-right transition-colors hover:border-accent/50">
                <span className="text-xs uppercase tracking-wider text-muted">Next →</span>
                <span className="mt-1 block font-medium text-foreground">{next.title}</span>
              </Link>
            )}
          </nav>
        </article>
        <aside className="hidden lg:block">
          <div className="sticky top-24 rounded-2xl border border-border bg-surface p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">{track.title}</p>
            <ol className="mt-4 space-y-1">
              {trackLessons.map((trackLesson, index) => {
                const isCurrent = trackLesson.slug === lesson.slug;
                return (
                  <li key={trackLesson.slug}>
                    <Link
                      href={`/learn/${trackLesson.slug}`}
                      aria-current={isCurrent ? "page" : undefined}
                      className={`flex gap-3 rounded-lg px-2 py-2 text-sm leading-snug ${
                        isCurrent ? "bg-surface-raised text-foreground" : "text-muted hover:text-foreground"
                      }`}
                    >
                      <span className="tabular-nums text-xs leading-5 text-muted">{index + 1}.</span>
                      {trackLesson.title}
                    </Link>
                  </li>
                );
              })}
            </ol>
            <Link href="/quiz" className="mt-5 block rounded-xl border border-accent/30 bg-accent/10 px-4 py-3 text-sm font-medium text-accent hover:bg-accent/15">
              Test yourself in the quiz →
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
