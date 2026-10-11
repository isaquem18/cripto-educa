"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationLinks } from "./navigation-links";

export function DesktopNavigation() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
      {navigationLinks.map((link) => {
        const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={isActive ? "page" : undefined}
            className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              isActive ? "bg-surface-raised text-foreground" : "text-muted hover:text-foreground"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
