"use client";

import { useEffect, useState } from "react";
import type { MenuCategory } from "@/data/menu";

export function MenuCategoryNav({ categories }: { categories: MenuCategory[] }) {
  const [active, setActive] = useState(categories[0]?.id ?? "");

  useEffect(() => {
    const nodes = categories
      .map((category) => document.getElementById(category.id))
      .filter((node): node is HTMLElement => Boolean(node));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [categories]);

  const scrollTo = (id: string) => {
    const node = document.getElementById(id);
    node?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(id);
  };

  return (
    <div className="sticky top-[6.5rem] z-40 border-y border-line bg-paper/95 backdrop-blur-md md:top-[88px]">
      <nav className="mx-auto flex w-full max-w-[1400px] gap-3 overflow-x-auto px-5 py-4 md:px-8 xl:px-12" aria-label="Menu categories">
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => scrollTo(category.id)}
            className={`shrink-0 px-4 py-2.5 font-display text-base tracking-[0.12em] uppercase md:text-lg xl:text-xl ${
              active === category.id ? "bg-ink text-white" : "text-ink hover:bg-paper-deep"
            }`}
          >
            {category.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
