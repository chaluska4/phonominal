import Image from "next/image";
import Link from "next/link";
import { restaurant } from "@/data/restaurant";

export function Hero() {
  return (
    <section className="relative isolate w-full min-h-[88svh] overflow-hidden bg-ink pt-[96px] text-white">
      <Image
        src="/images/hero-pho.jpg"
        alt="Steaming bowl of pho with herbs, chili, and Vietnamese iced coffee"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[58%_45%]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,10,9,0.58)_0%,rgba(12,10,9,0.28)_42%,rgba(12,10,9,0.12)_70%,transparent_100%),linear-gradient(180deg,rgba(12,10,9,0.18)_0%,transparent_35%,rgba(12,10,9,0.45)_100%)]" />

      <div className="relative mx-auto flex min-h-[calc(88svh-72px)] max-w-6xl flex-col justify-center px-5 py-16 md:px-8 md:py-20">
        <p className="font-display text-[12px] tracking-[0.32em] text-white/80 uppercase">
          Vietnamese Cuisine
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-[2.55rem] leading-[0.94] font-semibold tracking-[-0.02em] uppercase sm:text-6xl md:text-7xl">
          Authentic Vietnamese Cuisine in Allentown
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-white/84 sm:text-lg">
          Pho, bánh mì, vermicelli bowls, Vietnamese coffee and Vietnamese favorites
          served in the heart of the Lehigh Valley.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/menu"
            className="inline-flex items-center justify-center bg-chili px-6 py-3.5 font-display text-[13px] tracking-[0.18em] text-white uppercase transition-colors hover:bg-chili-bright"
          >
            View Menu
          </Link>
          <a
            href={restaurant.mapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-white/40 px-6 py-3.5 font-display text-[13px] tracking-[0.18em] text-white uppercase transition-colors hover:bg-white/10"
          >
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
