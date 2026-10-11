import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button-link";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = {
  title: "About and disclaimer",
  description: "Why this site exists, how the content is produced, where market data comes from and important risk disclaimers.",
  alternates: { canonical: "/about" },
};

const principles = [
  {
    title: "Education over hype",
    text: "We explain how things work and what can go wrong. We never tell you what to buy, and we do not publish price predictions.",
  },
  {
    title: "Independent",
    text: "No exchange, token project or broker pays to appear on this site. Exchange listings come from public third-party data.",
  },
  {
    title: "Private by default",
    text: "There are no accounts. Your lesson progress, quiz history and currency preference stay in your own browser.",
  },
];

const disclaimers = [
  "All content is for general educational purposes only and does not constitute financial, investment, legal, accounting or tax advice.",
  "Crypto assets are highly volatile and speculative. You can lose some or all of the money you invest.",
  "Market data is provided by CoinGecko, may be delayed or inaccurate, and should not be used for trading decisions.",
  "Calculators provide simplified estimates. Actual fees, prices, liquidation levels and taxes depend on each platform and jurisdiction.",
  "Regulations change frequently. Always confirm current rules with official sources and qualified professionals in your country.",
  "Links to external websites are provided for convenience and do not imply endorsement.",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Crypto knowledge, without the noise"
        description="TheCrypto is a free educational project that helps people understand cryptocurrencies and crypto exchanges well enough to make their own informed decisions."
      />
      <div className="mx-auto max-w-4xl space-y-16 px-4 py-14 sm:px-6">
        <section aria-labelledby="principles-title">
          <h2 id="principles-title" className="text-2xl font-semibold tracking-tight text-foreground">
            Our principles
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {principles.map((principle) => (
              <div key={principle.title} className="rounded-2xl border border-border bg-surface p-5">
                <h3 className="font-semibold text-foreground">{principle.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{principle.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="data-title">
          <h2 id="data-title" className="text-2xl font-semibold tracking-tight text-foreground">
            Where the data comes from
          </h2>
          <p className="mt-4 leading-8 text-foreground/85">
            Prices, market capitalization, trading volume, historical charts and exchange trust scores are retrieved from the
            public{" "}
            <a href="https://www.coingecko.com" target="_blank" rel="noreferrer" className="text-accent hover:text-accent-strong">
              CoinGecko
            </a>{" "}
            API and cached briefly on our servers. When the provider is unreachable, the site shows the most recent snapshot
            and labels it as delayed.
          </p>
        </section>

        <section aria-labelledby="disclaimer-title" className="rounded-2xl border border-accent/30 bg-accent/5 p-6 sm:p-8">
          <h2 id="disclaimer-title" className="text-2xl font-semibold tracking-tight text-accent">
            Important disclaimer
          </h2>
          <ul className="mt-5 space-y-3">
            {disclaimers.map((disclaimer) => (
              <li key={disclaimer} className="flex gap-3 leading-7 text-foreground/90">
                <span className="text-accent" aria-hidden="true">
                  ⚠
                </span>
                {disclaimer}
              </li>
            ))}
          </ul>
        </section>

        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/learn">Start learning</ButtonLink>
          <ButtonLink href="/exchanges" variant="secondary">
            Exchange guide
          </ButtonLink>
        </div>
      </div>
    </>
  );
}
