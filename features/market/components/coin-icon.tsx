import Image from "next/image";

type CoinIconProps = {
  src: string;
  name: string;
  size?: number;
};

export function CoinIcon({ src, name, size = 28 }: CoinIconProps) {
  if (!src) {
    return (
      <span
        className="flex shrink-0 items-center justify-center rounded-full bg-surface-raised text-[10px] font-semibold text-muted"
        style={{ width: size, height: size }}
        aria-hidden="true"
      >
        {name.slice(0, 2).toUpperCase()}
      </span>
    );
  }

  return (
    <Image
      src={src}
      alt=""
      width={size}
      height={size}
      unoptimized
      className="shrink-0 rounded-full bg-surface-raised"
    />
  );
}
