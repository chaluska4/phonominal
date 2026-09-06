import Link from "next/link";
import { restaurant } from "@/data/restaurant";

export function VisitSection() {
  return (
    <section className="bg-paper-deep py-16 md:py-20">
      <div className="mx-auto grid max-w-[1440px] items-stretch gap-8 px-5 md:px-8 lg:grid-cols-12 lg:gap-12">
        <div className="flex flex-col justify-center lg:col-span-4">
          <h2 className="font-display text-5xl tracking-tight uppercase md:text-6xl xl:text-7xl">
            Visit Us
          </h2>
          <p className="mt-5 font-display text-2xl tracking-tight uppercase md:text-3xl">
            {restaurant.address.street}
          </p>
          <p className="mt-2 text-lg text-ink-soft">
            {restaurant.address.city}, {restaurant.address.state} {restaurant.address.zip}
          </p>
          <p className="mt-6 text-lg leading-8 text-ink md:text-xl">
            {restaurant.hours[0].shortDays} {restaurant.hours[0].time}
            <br />
            {restaurant.hours[1].shortDays} {restaurant.hours[1].time}
            <br />
            {restaurant.hours[2].shortDays} {restaurant.hours[2].time}
          </p>
          <a
            href={`tel:${restaurant.phoneTel}`}
            className="mt-6 inline-block font-display text-3xl tracking-tight text-chili uppercase md:text-4xl"
          >
            {restaurant.phoneDisplay}
          </a>
          <div className="mt-8">
            <Link
              href="/visit"
              className="inline-flex items-center justify-center bg-chili px-5 py-3 font-display text-[13px] tracking-[0.16em] text-white uppercase hover:bg-chili-bright"
            >
              Visit Us
            </Link>
          </div>
        </div>
        <div className="min-h-[420px] overflow-hidden bg-bone lg:col-span-8 lg:min-h-[580px]">
          <iframe
            title="Map to PHO•NOM1NAL"
            src={restaurant.mapsEmbedUrl}
            className="h-full min-h-[420px] w-full border-0 lg:min-h-[580px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
