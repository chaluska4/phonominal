// PLACEHOLDER_REVIEWS: Replace with live Google review data when available.
export const reviewSummary = {
  rating: 4.5,
  count: 282,
  sourceLabel: "Google Reviews",
};

export type Review = {
  id: string;
  name: string;
  rating: number;
  text: string;
  date?: string;
};

export const reviews: Review[] = [
  {
    id: "r1",
    name: "Amanda L.",
    rating: 5,
    date: "March 2026",
    text: "The special pho broth is deep and clear, and the herbs arrive genuinely fresh. This is the bowl I recommend to anyone new to Allentown.",
  },
  {
    id: "r2",
    name: "Marcus T.",
    rating: 5,
    date: "January 2026",
    text: "Crispy baguette, bright pickles, and generous grilled pork. The bánh mì is a weekday lunch I keep coming back for.",
  },
  {
    id: "r3",
    name: "Priya S.",
    rating: 5,
    date: "November 2025",
    text: "Friendly, fast, and spotless. We ordered summer rolls, wings, and two bowls of pho — every plate landed hot and well seasoned.",
  },
  {
    id: "r4",
    name: "Daniel R.",
    rating: 4,
    date: "October 2025",
    text: "Vietnamese coffee with condensed milk is rich without being cloying. A perfect closer after vermicelli.",
  },
  {
    id: "r5",
    name: "Elena V.",
    rating: 5,
    date: "August 2025",
    text: "The beef carpaccio is bright with lime, basil, and crushed peanuts. It tastes careful, not flashy — exactly what I want.",
  },
  {
    id: "r6",
    name: "Chris N.",
    rating: 5,
    date: "June 2025",
    text: "Best pho in the valley for us. Large portions, fair prices, and the kind of broth that only happens when someone is paying attention.",
  },
];
