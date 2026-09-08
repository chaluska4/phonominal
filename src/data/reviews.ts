export type Review = {
  id: string;
  name: string;
  rating: number;
  text: string;
  date?: string;
};

/**
 * Verified Google Business Profile quotes, names, dates, ratings, and counts only.
 * Leave empty until those details are confirmed. Do not invent placeholders that look like guests.
 */
export const reviews: Review[] = [];

export const reviewPreview = {
  sourceLabel: "Google Reviews",
  heading: "Google Reviews",
  badge: "Preview",
  summary:
    "Ratings, review counts, and guest quotes are not shown here until they can be verified against the restaurant’s Google Business Profile.",
  cardTitle: "Preview",
  cardBody:
    "This space is reserved for verified Google reviews. Fictional customer quotes are not displayed.",
} as const;
