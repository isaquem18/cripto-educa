import Link from "next/link";
import { Suspense } from "react";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { platformTypes } from "@/features/exchanges/exchange-guide";
import { glossaryTerms } from "@/features/glossary/glossary-terms";
import { LessonCard } from "@/features/learn/components/lesson-card";
import { allLessons, getLesson, getLessonsByTrack } from "@/features/learn/lessons";
import { tracks } from "@/features/learn/tracks";
import { MarketOverviewCards } from "@/features/market/components/market-overview-cards";
import { MarketSnapshotCard } from "@/features/market/components/market-snapshot-card";
import { PriceTicker } from "@/features/market/components/price-ticker";
import { quizQuestions } from "@/features/quiz/quiz-questions";
import { siteConfig } from "@/lib/site-config";

const STARTER_LESSON_SLUGS = ["what-is-cryptocurrency", "what-is-an-exchange", "wallets-and-keys"];

const toolHighlights = [
  {
    href: "/tools#converter",
    title: "Live converter",
    description: "Convert the top 100 assets to dollars or reais at the latest price.",
  },
  {
    href: "/tools#dca-simulator",
    title: "DCA simulator",
    description: "Backtest regular purchases with real historical prices.",
  },
  {
    href: "/tools#fee-calculator",
    title: "Fee calculator",
    description: "See the true round-trip cost of a trade, spread included.",
  },
  {
    href: "/tools#leverage-calculator",
    title: "Leverage calculator",
    description: "Find out how close a leveraged position is to liquidation.",
  },
] as const;

const safetyRules = [
  {
    title: "Never share your seed phrase",
    text: "No exchange, wallet or support agent will ever need it. Anyone who has it controls your funds.",
  },
  {
    title: "Use an authenticator app",
    text: "App-based 2FA protects against SIM-swap attacks that defeat SMS codes.",
  },
  {
    title: "Verify before you send",
    text: "Check the full address and the network. Crypto transactions cannot be reversed.",
  },
  {
    title: "Distrust guaranteed returns",
    text: "Promises of fixed, high profits are the most common sign of a scam.",
  },
];

export default function HomePage() {
  const starterLessons = STARTER_LESSON_SLUGS.map(getLesson).filter((lesson) => lesson !== null);
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c") }}
      />
      <Suspense fallback={<div className="h-11 border-b border-border bg-surface/50" aria-hidden="true" />}>
        <PriceTicker />
      </Suspense>

      <section className="relative overflow-hidden border-b border-border">
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div className="glow pointer-events-none absolute inset-0" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
              Free crypto education · no sign-up
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-6xl">
              Understand crypto <span className="text-accent">before</span> you put money into it.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Clear, unbiased lessons on how cryptocurrencies and exchanges really work, with live market data and
              hands-on calculators. No hype, no paid promotions, just the knowledge you need to stay safe.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/learn">Start learning</ButtonLink>
              <ButtonLink href="/exchanges" variant="secondary">
                How exchanges work
              </ButtonLink>
            </div>
            <dl className="mt-12 grid max-w-lg grid-cols-2 gap-6 sm:grid-cols-4">
              {[
                { label: "Lessons", value: allLessons.length },
                { label: "Glossary terms", value: glossaryTerms.length },
                { label: "Quiz questions", value: quizQuestions.length },
                { label: "Calculators", value: toolHighlights.length },
              ].map((stat) => (
                <div key={stat.label}>
                  <dt className="text-xs text-muted">{stat.label}</dt>
                  <dd className="mt-1 text-2xl font-semibold tabular-nums text-foreground">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <Suspense>
            <MarketSnapshotCard />
          </Suspense>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-24 px-4 py-20 sm:px-6">
        <section aria-labelledby="paths-title">
          <SectionHeading
            titleId="paths-title"
            eyebrow="Learning paths"
            title="Four paths from zero to confident"
            description="Follow a path in order or pick the lessons you need. Your progress is saved in your browser."
            action={
              <ButtonLink href="/learn" variant="secondary">
                All lessons
              </ButtonLink>
            }
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {tracks.map((track) => (
              <Link
                key={track.id}
                href={`/learn#${track.id}`}
                className="group rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/50"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-xl text-accent" aria-hidden="true">
                  {track.icon}
                </span>
                <h3 className="mt-5 font-semibold text-foreground group-hover:text-accent">{track.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{track.description}</p>
                <p className="mt-4 text-xs font-medium text-muted">{getLessonsByTrack(track.id).length} lessons</p>
              </Link>
            ))}
          </div>
        </section>

        <section aria-labelledby="start-title">
          <SectionHeading
            titleId="start-title"
            eyebrow="New here?"
            title="Start with these three lessons"
            description="The essentials in about fifteen minutes: what crypto is, how exchanges work and how to keep your funds safe."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {starterLessons.map((lesson, index) => (
              <LessonCard key={lesson.slug} lesson={lesson} position={index + 1} />
            ))}
          </div>
        </section>

        <section aria-labelledby="exchanges-title" className="rounded-3xl border border-border bg-gradient-to-br from-surface to-surface-raised/40 p-6 sm:p-10">
          <SectionHeading
            titleId="exchanges-title"
            eyebrow="Exchanges"
            title="Know where you trade"
            description="Centralized exchanges, decentralized protocols, broker apps and P2P markets each come with different costs and risks. Learn to compare them before you deposit."
            action={<ButtonLink href="/exchanges">Read the exchange guide</ButtonLink>}
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {platformTypes.map((platform) => (
              <div key={platform.shortName} className="rounded-2xl border border-border bg-background/60 p-5">
                <span className="rounded-md border border-accent/30 bg-accent/10 px-2 py-0.5 text-xs font-bold text-accent">
                  {platform.shortName}
                </span>
                <h3 className="mt-3 font-semibold text-foreground">{platform.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{platform.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="pulse-title">
          <SectionHeading
            titleId="pulse-title"
            eyebrow="Market pulse"
            title="The crypto market right now"
            description="Live global figures, refreshed every few minutes. Use the USD/BRL toggle in the header to switch currencies."
            action={
              <ButtonLink href="/markets" variant="secondary">
                Open live markets
              </ButtonLink>
            }
          />
          <Suspense>
            <MarketOverviewCards />
          </Suspense>
        </section>

        <section aria-labelledby="tools-title">
          <SectionHeading
            titleId="tools-title"
            eyebrow="Tools"
            title="Run the numbers yourself"
            description="Calculators that turn abstract concepts like fees, spreads and leverage into concrete amounts."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {toolHighlights.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/50"
              >
                <h3 className="font-semibold text-foreground group-hover:text-accent">{tool.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{tool.description}</p>
                <span className="mt-4 inline-block text-sm font-medium text-accent">
                  Open <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section aria-labelledby="safety-title" className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <SectionHeading
            titleId="safety-title"
            eyebrow="Security first"
            title="Four rules that prevent most losses"
            description="Most people who lose crypto are not hacked by geniuses. They are tricked. These habits protect you from the vast majority of scams."
            action={
              <ButtonLink href="/learn/scams-and-security" variant="secondary">
                Security lesson
              </ButtonLink>
            }
          />
          <ul className="grid gap-4 sm:grid-cols-2">
            {safetyRules.map((rule, index) => (
              <li key={rule.title} className="rounded-2xl border border-border bg-surface p-5">
                <span className="text-sm font-semibold tabular-nums text-accent">0{index + 1}</span>
                <h3 className="mt-2 font-semibold text-foreground">{rule.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{rule.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="relative overflow-hidden rounded-3xl border border-accent/30 bg-accent/10 px-6 py-12 text-center sm:px-12">
          <div className="glow pointer-events-none absolute inset-0" />
          <div className="relative">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground">How much do you really know?</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted">
              Take a ten-question quiz on fundamentals, exchanges, security or risk, and get an explanation for every answer.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/quiz">Take the quiz</ButtonLink>
              <ButtonLink href="/glossary" variant="secondary">
                Browse the glossary
              </ButtonLink>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
