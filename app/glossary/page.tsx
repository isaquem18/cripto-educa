import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { GlossaryBrowser } from "@/features/glossary/components/glossary-browser";

export const metadata: Metadata = {
  title: "Crypto glossary",
  description:
    "Plain-English definitions of the most important crypto, blockchain, DeFi, security and trading terms, from altcoin to yield farming.",
  alternates: { canonical: "/glossary" },
};

export default function GlossaryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Glossary"
        title="Crypto terms in plain English"
        description="Stuck on a word? Search the glossary or filter by topic. Each definition links to a lesson where you can go deeper."
      />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <GlossaryBrowser />
      </div>
    </>
  );
}
