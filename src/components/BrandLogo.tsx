import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  className?: string;
  imageClassName?: string;
};

export function BrandLogo({ className = "", imageClassName = "" }: BrandLogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center ${className}`} aria-label="PHO•NOM1NAL home">
      <Image
        src="/brand/logo.png"
        alt="PHO•NOM1NAL Vietnamese Cuisine"
        width={2560}
        height={495}
        priority
        className={
          imageClassName ||
          "h-8 w-auto max-w-[210px] object-contain object-left sm:h-10 sm:max-w-[260px]"
        }
      />
    </Link>
  );
}
