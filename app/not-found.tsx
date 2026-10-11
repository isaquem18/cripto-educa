import { ButtonLink } from "@/components/ui/button-link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-28 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground">Page not found</h1>
      <p className="mt-4 text-muted">
        The page you are looking for does not exist or has moved. Try one of the sections below instead.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <ButtonLink href="/">Go home</ButtonLink>
        <ButtonLink href="/learn" variant="secondary">
          Browse lessons
        </ButtonLink>
      </div>
    </div>
  );
}
