"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { GoogleG, GoogleStars } from "@/components/icons";
import { restaurant } from "@/data/restaurant";
import { googleReviews, type GoogleReview } from "@/data/reviews";

function initialsFor(name: string) {
  const parts = name
    .replace(/\./g, " ")
    .split(/\s+/)
    .filter(Boolean);
  return parts
    .slice(0, 3)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function ReviewCard({ review }: { review: GoogleReview }) {
  return (
    <article className="flex h-full flex-col border border-line bg-paper p-6">
      <div className="flex items-center gap-3">
        <span
          className="grid h-10 w-10 shrink-0 place-items-center border border-line bg-paper-deep font-display text-xs tracking-[0.08em] text-chili"
          aria-hidden="true"
        >
          {initialsFor(review.name)}
        </span>
        <div>
          <p className="font-display text-[13px] tracking-[0.12em] text-ink uppercase">{review.name}</p>
          {review.localGuide ? <p className="mt-0.5 text-xs text-muted">Local Guide</p> : null}
        </div>
      </div>
      <div className="mt-4">
        <GoogleStars value={review.rating} />
      </div>
      <p className="mt-4 flex-1 text-[1.02rem] leading-7 text-ink-soft">{review.text}</p>
      <p className="mt-5 text-xs tracking-[0.04em] text-muted">
        Google Reviews · {review.relativeDate}
      </p>
    </article>
  );
}

export function ReviewCarousel() {
  const reviews = googleReviews.reviews;
  const count = reviews.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const hovering = useRef(false);
  const touchX = useRef<number | null>(null);
  const resumeTimer = useRef<number | null>(null);

  const pauseInteraction = useCallback(() => {
    setPaused(true);
    if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
    resumeTimer.current = window.setTimeout(() => {
      if (!hovering.current) setPaused(false);
    }, 10000);
  }, []);

  const go = useCallback(
    (direction: number) => {
      setIndex((current) => (current + direction + count) % count);
      pauseInteraction();
    },
    [count, pauseInteraction],
  );

  useEffect(() => {
    return () => {
      if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
    };
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, 8000);
    return () => window.clearInterval(timer);
  }, [count, paused]);

  const visible = [0, 1, 2].map((offset) => reviews[(index + offset) % count]);

  return (
    <section className="bg-white px-5 py-16 md:px-8 md:py-20" aria-labelledby="reviews-heading">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-3">
              <GoogleG />
              <p className="font-display text-[12px] tracking-[0.22em] text-ink uppercase">
                {googleReviews.sourceLabel}
              </p>
            </div>
            <h2 id="reviews-heading" className="mt-3 font-display text-4xl tracking-tight uppercase md:text-5xl">
              Google Reviews
            </h2>
            <p className="mt-3 flex flex-wrap items-center gap-2 text-sm text-ink">
              <span className="price-ticket text-lg">{googleReviews.rating.toFixed(1)}</span>
              <GoogleStars value={googleReviews.rating} />
              <span className="text-muted">
                {googleReviews.reviewCount} {googleReviews.sourceLabel}
              </span>
            </p>
          </div>
          <a
            href={restaurant.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-ink px-4 py-2.5 font-display text-[12px] tracking-[0.16em] uppercase hover:bg-ink hover:text-white"
          >
            Read More Google Reviews
          </a>
        </div>

        <div
          className="mt-10"
          onMouseEnter={() => {
            hovering.current = true;
            setPaused(true);
          }}
          onMouseLeave={() => {
            hovering.current = false;
            setPaused(false);
          }}
          onTouchStart={(event) => {
            touchX.current = event.changedTouches[0]?.clientX ?? null;
          }}
          onTouchEnd={(event) => {
            const start = touchX.current;
            const end = event.changedTouches[0]?.clientX;
            touchX.current = null;
            if (start == null || end == null) return;
            const delta = start - end;
            if (Math.abs(delta) < 48) return;
            go(delta > 0 ? 1 : -1);
          }}
        >
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((review, slot) => (
              <div
                key={`${review.id}-${slot}`}
                className={slot === 1 ? "hidden md:block" : slot === 2 ? "hidden lg:block" : undefined}
              >
                <ReviewCard review={review} />
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {reviews.map((review, reviewIndex) => (
                <button
                  key={review.id}
                  type="button"
                  aria-label={`Show review from ${review.name}`}
                  aria-current={reviewIndex === index}
                  onClick={() => {
                    setIndex(reviewIndex);
                    pauseInteraction();
                  }}
                  className={`h-1.5 w-6 ${reviewIndex === index ? "bg-chili" : "bg-bone"}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => go(-1)}
                className="border border-line px-3 py-1 font-display text-lg leading-none"
                aria-label="Previous review"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() => go(1)}
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
