"use client";

import { RatioImage } from "@/components/RatioImage";
import { useLightbox } from "@/components/Lightbox";
import { formatPrice, type MenuItem } from "@/data/menu";

export function FeaturedDishCard({ dish }: { dish: MenuItem }) {
  const { open } = useLightbox();

  return (
    <article className="card-lift group flex h-full flex-col bg-white shadow-[0_0_0_1px_var(--line)] transition-transform duration-300 hover:-translate-y-1.5">
      <button
        type="button"
        className="group text-left"
        onClick={() => {
          if (dish.image) open([{ src: dish.image, alt: dish.alt ?? dish.name }]);
        }}
        aria-label={`Enlarge photo of ${dish.name}`}
      >
        <div className="overflow-hidden">
          <RatioImage src={dish.image} alt={dish.alt ?? dish.name} />
        </div>
      </button>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            {dish.badges?.includes("Popular") ? (
              <p className="mb-1 font-display text-[11px] tracking-[0.22em] text-chili uppercase">
                Popular
              </p>
            ) : null}
            <h3 className="font-display text-2xl leading-none tracking-tight uppercase">
              {dish.name}
            </h3>
            {dish.vietnamese ? (
              <p className="font-serif mt-1 text-sm text-muted italic">{dish.vietnamese}</p>
            ) : null}
          </div>
          <p className="price-ticket text-sm text-chili">{formatPrice(dish.price)}</p>
        </div>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-ink-soft">{dish.description}</p>
      </div>
    </article>
  );
}
