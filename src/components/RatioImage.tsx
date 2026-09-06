import Image from "next/image";

type RatioImageProps = {
  src?: string;
  alt: string;
  ratio?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  objectPosition?: string;
};

export function RatioImage({
  src,
  alt,
  ratio = "4 / 3",
  className = "",
  priority = false,
  sizes = "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw",
  objectPosition = "center",
}: RatioImageProps) {
  return (
    <div
      className={`relative overflow-hidden bg-paper-deep ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          loading={priority ? undefined : "lazy"}
          className="img-zoom object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          style={{ objectPosition }}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-center">
          <span className="px-4 font-display text-xs tracking-[0.22em] text-muted uppercase">
            Photo coming soon
          </span>
        </div>
      )}
    </div>
  );
}
