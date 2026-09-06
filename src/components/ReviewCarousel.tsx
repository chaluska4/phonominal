"use client";

import { useEffect, useState } from "react";
import { GoogleG, GoogleStars } from "@/components/icons";
import { restaurant } from "@/data/restaurant";
import { reviews, reviewSummary } from "@/data/reviews";

export function ReviewCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % reviews.length);
    }, 5600);
    return () => window.clearInterval(timer);
  }, [paused]);

  const visible = [0, 1, 2].map((offset) => reviews[(index + offset) % reviews.length]);

  return (
    <section className="bg-white px-5 py-16 md:px-8 md:py-20" aria-labelledby="reviews-heading">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-3">
              <GoogleG />
              <p className="font-display text-[12px] tracking-[0.22em] text-ink uppercase">
                {reviewSummary.sourceLabel}
              </p>
            </div>
            <h2 id="reviews-heading" className="mt-3 font-display text-4xl tracking-tight uppercase md:text-5xl">
              Highly rated on Google
            </h2>
            <p className="mt-3 flex flex-wrap items-center gap-2 text-sm text-muted">
              <GoogleStars value={reviewSummary.rating} />
              <span className="price-ticket text-ink">{reviewSummary.rating.toFixed(1)}</span>
              <span>
                · {reviewSummary.count} {reviewSummary.sourceLabel}
              </span>
            </p>
          </div>
          <a
            href={restaurant.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-ink px-4 py-2.5 font-display text-[12px] tracking-[0.16em] uppercase hover:bg-ink hover:text-white"
          >
            Read more reviews
          </a>
        </div>

        <div className="mt-10" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div className="grid gap-5 md:grid-cols-3">
            {visible.map((review, slot) => (
              <article
                key={`${review.id}-${slot}`}
                className={`border border-line bg-paper p-6 ${slot > 0 ? "hidden md:block" : ""}`}
              >
                <GoogleStars value={review.rating} />
                <p className="mt-4 min-h-[7.5rem] text-[1.02rem] leading-7 text-ink-soft">
                  “{review.text}”
                </p>
                <div className="mt-5 flex items-end justify-between gap-3">
                  <p className="font-display text-[12px] tracking-[0.16em] text-ink uppercase">
                    {review.name}
                  </p>
                  {review.date ? <p className="text-xs text-muted">{review.date}</p> : null}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-2">
              {reviews.map((review, reviewIndex) => (
                <button
                  key={review.id}
                  type="button"
                  aria-label={`Show review ${reviewIndex + 1}`}
                  onClick={() => setIndex(reviewIndex)}
                  className={`h-1.5 w-6 ${reviewIndex === index ? "bg-chili" : "bg-bone"}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setIndex((current) => (current - 1 + reviews.length) % reviews.length)}
                className="border border-line px-3 py-1 font-display text-lg leading-none"
                aria-label="Previous review"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() => setIndex((current) => (current + 1) % reviews.length)}
                className="border border-line px-3 py-1 font-display text-lg leading-none"
                aria-label="Next review"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
