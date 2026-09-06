"use client";

import { RatioImage } from "@/components/RatioImage";
import { useLightbox } from "@/components/Lightbox";
import { formatPrice, type MenuItem } from "@/data/menu";

function Badges({ item }: { item: MenuItem }) {
  if (!item.badges?.length) return null;
  return (
    <div className="flex flex-wrap gap-1.5">
      {item.badges.map((badge) => (
        <span
          key={badge}
          className="border border-line px-1.5 py-0.5 font-display text-[10px] tracking-[0.16em] text-chili uppercase"
        >
          {badge}
        </span>
      ))}
    </div>
  );
}

export function MenuCard({ item }: { item: MenuItem }) {
  const { open } = useLightbox();

  if (item.layout === "row") {
    return (
      <article className="flex items-start justify-between gap-4 border-b border-line py-5">
        <div className="min-w-0">
          <div className="flex flex-wrap items-baseline gap-x-3">
            <h3 className="font-display text-2xl tracking-tight uppercase md:text-3xl">{item.name}</h3>
            {item.vietnamese ? (
              <span className="font-serif text-lg text-ink-soft italic">{item.vietnamese}</span>
            ) : null}
          </div>
          <p className="mt-2 max-w-3xl text-lg leading-[1.6] text-ink md:text-[22px] md:leading-[1.55]">
            {item.description}
          </p>
          <div className="mt-3">
            <Badges item={item} />
          </div>
        </div>
        <p className="price-ticket shrink-0 text-lg text-chili md:text-xl">{formatPrice(item.price)}</p>
      </article>
    );
  }

  return (
    <article className="card-lift flex h-full flex-col overflow-hidden bg-white shadow-[0_0_0_1px_var(--line)] transition-transform duration-300 hover:-translate-y-1">
      <button
        type="button"
        className="group block w-full text-left"
        onClick={() => {
          if (item.image) open([{ src: item.image, alt: item.alt ?? item.name }]);
        }}
        aria-label={`Enlarge photo of ${item.name}`}
      >
        <RatioImage
          src={item.image}
          alt={item.alt ?? item.name}
          ratio="4 / 3"
          className="w-full"
          sizes="(min-width: 1280px) 32vw, (min-width: 768px) 48vw, 100vw"
        />
      </button>
      <div className="flex flex-1 flex-col px-5 pt-4 pb-5">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3 className="font-display text-2xl leading-tight tracking-tight uppercase md:text-3xl">
              {item.name}
            </h3>
            {item.vietnamese ? (
              <p className="font-serif mt-1.5 text-lg text-ink-soft italic">{item.vietnamese}</p>
            ) : null}
            {item.portion ? (
              <p className="mt-1 text-[13px] tracking-wide text-ink-soft">{item.portion} pieces</p>
            ) : null}
          </div>
          <p className="price-ticket shrink-0 pt-1 text-lg text-chili md:text-xl">{formatPrice(item.price)}</p>
        </div>
        <p className="mt-4 text-lg leading-[1.6] text-ink md:text-[22px] md:leading-[1.55]">
          {item.description}
        </p>
        <div className="mt-3">
          <Badges item={item} />
        </div>
      </div>
    </article>
  );
}
