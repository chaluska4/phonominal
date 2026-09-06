import type { Metadata } from "next";
import { InstagramIcon } from "@/components/icons";
import { PageHeader } from "@/components/PageHeader";
import { restaurant } from "@/data/restaurant";

export const metadata: Metadata = {
  title: "Visit",
  description:
    "Find PHO•NOM1NAL at 319 S Cedar Crest Blvd, Allentown, PA. Hours, phone, directions, and Instagram.",
};

export default function VisitPage() {
  return (
    <main id="main" className="bg-paper pt-28">
      <PageHeader eyebrow="Allentown, PA" title="Visit">
        {restaurant.name} · Vietnamese Cuisine
      </PageHeader>

      <section className="px-5 pb-20 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div>
            <address className="not-italic">
              <p className="font-display text-3xl tracking-tight uppercase">{restaurant.address.street}</p>
              <p className="mt-1 text-ink-soft">
                {restaurant.address.city}, {restaurant.address.state} {restaurant.address.zip}
              </p>
            </address>

            <p className="mt-6">
              <a
                href={`tel:${restaurant.phoneTel}`}
                className="font-display text-2xl tracking-tight text-chili uppercase"
              >
                {restaurant.phoneDisplay}
              </a>
            </p>

            <dl className="mt-8 space-y-2">
              {restaurant.hours.map((row) => (
                <div key={row.days} className="flex justify-between gap-6 border-b border-line py-2">
                  <dt className="font-display text-[12px] tracking-[0.16em] uppercase">{row.days}</dt>
                  <dd className="price-ticket text-sm">{row.time}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={restaurant.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-chili px-5 py-3 font-display text-[13px] tracking-[0.16em] text-white uppercase hover:bg-chili-bright"
              >
                Get Directions
              </a>
              <a
                href={`tel:${restaurant.phoneTel}`}
                className="inline-flex items-center justify-center border border-ink px-5 py-3 font-display text-[13px] tracking-[0.16em] uppercase hover:bg-ink hover:text-white"
              >
                Call Us
              </a>
              <a
                href={restaurant.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-ink px-5 py-3 font-display text-[13px] tracking-[0.16em] uppercase hover:bg-ink hover:text-white"
              >
                <InstagramIcon className="h-5 w-5" />
                Instagram
              </a>
            </div>
          </div>

          <div className="min-h-[360px] overflow-hidden bg-bone">
            <iframe
              title="Map to PHO•NOM1NAL"
              src={restaurant.mapsEmbedUrl}
              className="h-full min-h-[360px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
