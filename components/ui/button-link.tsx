import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-accent text-background hover:bg-accent-strong shadow-[0_0_24px_-6px_var(--accent)]",
  secondary: "border border-border bg-surface-raised text-foreground hover:border-accent/60 hover:text-accent",
  ghost: "text-muted hover:text-foreground",
};

export const buttonBaseClasses =
  "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-50";

export function buttonClasses(variant: ButtonVariant = "primary") {
  return `${buttonBaseClasses} ${variantClasses[variant]}`;
}

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: ButtonVariant;
};

export function ButtonLink({ variant = "primary", className = "", ...props }: ButtonLinkProps) {
  return <Link className={`${buttonClasses(variant)} ${className}`} {...props} />;
}
