import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { CurrencyToggle } from "@/features/market/components/currency-toggle";
import { DesktopNavigation } from "./desktop-navigation";
import { MobileNavigation } from "./mobile-navigation";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" aria-label="TheCrypto home" className="shrink-0">
          <Logo />
        </Link>
        <DesktopNavigation />
        <div className="flex items-center gap-3">
          <CurrencyToggle />
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
