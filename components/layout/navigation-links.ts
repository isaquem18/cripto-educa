export type NavigationLink = {
  href: "/learn" | "/exchanges" | "/markets" | "/tools" | "/glossary" | "/quiz";
  label: string;
};

export const navigationLinks: NavigationLink[] = [
  { href: "/learn", label: "Learn" },
  { href: "/exchanges", label: "Exchanges" },
  { href: "/markets", label: "Markets" },
  { href: "/tools", label: "Tools" },
  { href: "/glossary", label: "Glossary" },
  { href: "/quiz", label: "Quiz" },
];
