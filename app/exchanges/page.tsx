import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ButtonLink } from "@/components/ui/button-link";
import { PageHeader } from "@/components/ui/page-header";
import { SectionHeading } from "@/components/ui/section-heading";
import { ExchangeChecklist } from "@/features/exchanges/components/exchange-checklist";
import { ExchangeDirectory } from "@/features/exchanges/components/exchange-directory";
import {
  exchangeFeeTypes,
  exchangeRedFlags,
  platformTypes,
  tradeLifecycleSteps,
} from "@/features/exchanges/exchange-guide";
import { LessonCard } from "@/features/learn/components/lesson-card";
import { getLessonsByTrack } from "@/features/learn/lessons";

export const metadata: Metadata = {
  title: "Crypto exchanges explained",
  description:
    "How crypto exchanges work, the difference between CEX, DEX, brokers and P2P, the fees you pay, a due-diligence checklist and live exchange data.",
  alternates: { canonical: "/exchanges" },
};

export default function ExchangesPage() {
  const exchangeLessons = getLessonsByTrack("exchanges");

  return (
    <>
      <PageHeader
        eyebrow="Exchange guide"
        title="Crypto exchanges, explained"
        description="Exchanges are where most people first buy crypto. Learn how they work, what they really cost and how to tell a solid platform from a risky one."
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="#types">Compare platform types</ButtonLink>
          <ButtonLink href="#directory" variant="secondary">
            See live exchange data
          </ButtonLink>
        </div>
      </PageHeader>

      <div className="mx-auto max-w-6xl space-y-24 px-4 py-16 sm:px-6">
        <section id="types" aria-labelledby="types-title" className="scroll-mt-24">
          <SectionHeading
            titleId="types-title"
            eyebrow="Where to trade"
            title="Four ways to buy and sell crypto"
            description="Each model makes a different trade-off between convenience, cost and control over your funds."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {platformTypes.map((platform) => (
              <article key={platform.shortName} className="flex flex-col rounded-2xl border border-border bg-surface p-6">
                <div className="flex items-center gap-3">
                  <span className="rounded-lg border border-accent/30 bg-accent/10 px-2.5 py-1 text-xs font-bold text-accent">
                    {platform.shortName}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">
                    {platform.name}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{platform.description}</p>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-positive">Strengths</p>
                    <ul className="mt-2 space-y-1.5">
                      {platform.strengths.map((strength) => (
                        <li key={strength} className="flex gap-2 text-sm text-foreground/85">
                          <span className="text-positive" aria-hidden="true">+</span>
                          {strength}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-negative">Watch out for</p>
                    <ul className="mt-2 space-y-1.5">
                      {platform.weaknesses.map((weakness) => (
                        <li key={weakness} className="flex gap-2 text-sm text-foreground/85">
                          <span className="text-negative" aria-hidden="true">−</span>
                          {weakness}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Link href={`/learn/${platform.lessonSlug}`} className="mt-auto pt-5 text-sm font-medium text-accent hover:text-accent-strong">
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="lifecycle-title">
          <SectionHeading
            titleId="lifecycle-title"
            eyebrow="Step by step"
            title="What happens when you trade on an exchange"
            description="The typical journey on a centralized exchange, from sign-up to withdrawal."
          />
          <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {tradeLifecycleSteps.map((step, index) => (
              <li key={step.title} className="relative rounded-2xl border border-border bg-surface p-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-sm font-bold text-background">
                  {index + 1}
                </span>
                <h3 className="mt-4 font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="fees-title">
          <SectionHeading
            titleId="fees-title"
            eyebrow="Costs"
            title="The fees you actually pay"
            description="The headline trading fee is only part of the cost. Add up every layer before comparing platforms."
            action={
              <ButtonLink href="/tools#fee-calculator" variant="secondary">
                Open the fee calculator
              </ButtonLink>
            }
          />
          <div className="relative overflow-x-auto rounded-2xl border border-border">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-surface-raised text-xs uppercase tracking-wider text-muted">
                <tr>
                  <th scope="col" className="px-5 py-3 font-medium">
                    Fee type
                  </th>
                  <th scope="col" className="px-5 py-3 font-medium">
                    What it is
                  </th>
                  <th scope="col" className="px-5 py-3 font-medium">
                    Example
                  </th>
                </tr>
              </thead>
              <tbody>
                {exchangeFeeTypes.map((fee) => (
                  <tr key={fee.name} className="border-t border-border bg-surface align-top">
                    <th scope="row" className="px-5 py-4 font-semibold text-foreground">
                      {fee.name}
                    </th>
                    <td className="px-5 py-4 leading-6 text-foreground/80">{fee.description}</td>
                    <td className="px-5 py-4 font-mono text-xs leading-6 text-accent">{fee.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section aria-labelledby="checklist-title" className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionHeading
              titleId="checklist-title"
              eyebrow="Due diligence"
              title="How to evaluate an exchange"
              description="Use the checklist on any platform you are considering. The more items you can confirm with official sources, the lower the risk of unpleasant surprises."
            />
            <div className="rounded-2xl border border-negative/30 bg-negative/5 p-6">
              <h3 className="font-semibold text-negative">
                Red flags that should stop you
              </h3>
              <ul className="mt-4 space-y-2.5">
                {exchangeRedFlags.map((flag) => (
                  <li key={flag} className="flex gap-3 text-sm leading-6 text-foreground/85">
                    <span className="text-negative" aria-hidden="true">✕</span>
                    {flag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ExchangeChecklist />
        </section>

        <section id="directory" aria-labelledby="directory-title" className="scroll-mt-24">
          <SectionHeading
            titleId="directory-title"
            eyebrow="Live data"
            title="Largest exchanges by trust score"
            description="A live snapshot of major spot exchanges, ranked by CoinGecko's trust score, which combines liquidity, scale, cybersecurity and API coverage."
          />
          <Suspense>
            <ExchangeDirectory />
          </Suspense>
        </section>

        <section aria-labelledby="exchange-lessons-title">
          <SectionHeading
            titleId="exchange-lessons-title"
            eyebrow="Go deeper"
            title="Exchange lessons"
            description="Eight focused lessons that take you from your first trade to advanced topics like proof of reserves and leverage."
            action={
              <ButtonLink href="/learn#exchanges" variant="secondary">
                View learning path
              </ButtonLink>
            }
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {exchangeLessons.map((lesson, index) => (
              <LessonCard key={lesson.slug} lesson={lesson} position={index + 1} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
