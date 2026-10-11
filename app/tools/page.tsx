import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHeader } from "@/components/ui/page-header";
import { CryptoConverter } from "@/features/tools/components/crypto-converter";
import { DcaSimulator } from "@/features/tools/components/dca-simulator";
import { FeeCalculator } from "@/features/tools/components/fee-calculator";
import { LeverageCalculator } from "@/features/tools/components/leverage-calculator";
import { ToolPanel } from "@/features/tools/components/tool-panel";

export const metadata: Metadata = {
  title: "Crypto calculators",
  description:
    "Free crypto tools: a live price converter, a dollar-cost averaging backtester, an exchange fee calculator and a leverage and liquidation calculator.",
  alternates: { canonical: "/tools" },
};

const toolLinks = [
  { href: "#converter", label: "Converter" },
  { href: "#dca-simulator", label: "DCA simulator" },
  { href: "#fee-calculator", label: "Fee calculator" },
  { href: "#leverage-calculator", label: "Leverage calculator" },
];

export default function ToolsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tools"
        title="Calculators that make the numbers concrete"
        description="Put the lessons into practice with live prices. These tools are for learning and estimation only; real results depend on each platform's fees and rules."
      >
        <nav aria-label="Tools" className="flex flex-wrap gap-2">
          {toolLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-muted transition-colors hover:border-accent/50 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </PageHeader>
      <div className="mx-auto max-w-6xl space-y-8 px-4 py-14 sm:px-6">
        <ToolPanel
          id="converter"
          title="Crypto converter"
          description="Convert between the top 100 crypto assets and US dollars or Brazilian reais at the latest market price."
        >
          <Suspense>
            <CryptoConverter />
          </Suspense>
        </ToolPanel>
        <ToolPanel
          id="dca-simulator"
          title="Dollar-cost averaging simulator"
          description="See what would have happened if you had invested a fixed amount on a regular schedule, using real historical prices."
        >
          <Suspense>
            <DcaSimulator />
          </Suspense>
        </ToolPanel>
        <ToolPanel
          id="fee-calculator"
          title="Exchange fee calculator"
          description="Estimate the full cost of buying and later selling, including trading fees, the bid-ask spread and fixed deposit and withdrawal fees."
        >
          <FeeCalculator />
        </ToolPanel>
        <ToolPanel
          id="leverage-calculator"
          title="Leverage and liquidation calculator"
          description="Understand how leverage amplifies both profits and losses, and roughly where a leveraged position would be liquidated."
        >
          <LeverageCalculator />
        </ToolPanel>
      </div>
    </>
  );
}
