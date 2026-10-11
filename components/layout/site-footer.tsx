import Link from "next/link";
import { Logo } from "@/components/ui/logo";

const footerSections = [
  {
    title: "Learn",
    links: [
      { href: "/learn", label: "All lessons" },
      { href: "/learn/what-is-cryptocurrency", label: "Start here" },
      { href: "/glossary", label: "Glossary" },
      { href: "/quiz", label: "Knowledge quiz" },
    ],
  },
  {
    title: "Exchanges",
    links: [
      { href: "/exchanges", label: "Exchange guide" },
      { href: "/learn/cex-vs-dex", label: "CEX vs DEX" },
      { href: "/learn/exchange-fees", label: "Fees explained" },
      { href: "/learn/order-types", label: "Order types" },
    ],
  },
  {
    title: "Data & tools",
    links: [
      { href: "/markets", label: "Live markets" },
      { href: "/tools", label: "Calculators" },
      { href: "/about", label: "About & disclaimer" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-surface/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.5fr_repeat(3,1fr)]">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Free, independent education about cryptocurrencies, blockchains and crypto exchanges. Learn the concepts,
            understand the risks and make informed decisions.
          </p>
        </div>
        {footerSections.map((section) => (
          <div key={section.title}>
            <h2 className="text-sm font-semibold text-foreground">{section.title}</h2>
            <ul className="mt-4 space-y-2.5">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted transition-colors hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs leading-relaxed text-muted sm:px-6 md:flex-row md:items-center md:justify-between">
          <p>
            Educational content only. Nothing on this site is financial, investment, legal or tax advice. Crypto assets
            are highly volatile and you can lose all of your capital.
          </p>
          <p className="shrink-0">
            Market data by{" "}
            <a href="https://www.coingecko.com" target="_blank" rel="noreferrer" className="text-foreground hover:text-accent">
              CoinGecko
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
