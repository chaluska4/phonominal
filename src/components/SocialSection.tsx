import { InstagramIcon } from "@/components/icons";
import { restaurant } from "@/data/restaurant";

export function SocialSection() {
  return (
    <section className="bg-paper px-5 py-14 md:px-8">
      <div className="mx-auto max-w-6xl">
        <a
          href={restaurant.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-start justify-between gap-6 border border-line bg-white p-6 transition-transform hover:-translate-y-0.5 sm:flex-row sm:items-center sm:p-8"
        >
          <div className="flex items-center gap-4">
            <InstagramIcon className="h-12 w-12" />
            <div>
              <p className="font-display text-[12px] tracking-[0.22em] text-muted uppercase">
                Follow PHO•NOM1NAL
              </p>
              <p className="mt-1 font-display text-2xl tracking-tight uppercase">
                @{restaurant.instagramHandle}
              </p>
            </div>
          </div>
          <span className="inline-flex items-center justify-center border border-ink px-5 py-3 font-display text-[13px] tracking-[0.16em] uppercase">
            View Instagram
          </span>
        </a>
      </div>
    </section>
  );
}
