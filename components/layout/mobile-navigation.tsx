"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigationLinks } from "./navigation-links";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setIsOpen(false);
  }

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          {isOpen ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>
      {isOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile"
          className="absolute inset-x-0 top-full border-b border-border bg-background/95 px-4 pb-6 pt-2 backdrop-blur"
        >
          <ul className="flex flex-col gap-1">
            {navigationLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`block rounded-lg px-3 py-3 text-base font-medium ${
                      isActive ? "bg-surface-raised text-foreground" : "text-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </div>
  );
}
