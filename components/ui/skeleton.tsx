type SkeletonProps = {
  className?: string;
};

export function Skeleton({ className = "" }: SkeletonProps) {
  return <div className={`animate-pulse rounded-lg bg-surface-raised ${className}`} aria-hidden="true" />;
}
