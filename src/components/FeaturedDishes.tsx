import Link from "next/link";
import { FeaturedDishCard } from "@/components/FeaturedDishCard";
import { featuredDishes } from "@/data/menu";

export function FeaturedDishes() {
  return (
    <section className="bg-paper px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-display text-[12px] tracking-[0.28em] text-chili uppercase">
              Customer favorites
            </p>
            <h2 className="mt-2 font-display text-4xl tracking-tight uppercase md:text-5xl">
              Order these first
            </h2>
          </div>
          <Link
            href="/menu"
            className="font-display text-[12px] tracking-[0.18em] text-chili uppercase underline-offset-4 hover:underline"
          >
            View Full Menu
          </Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredDishes.map((dish) => (
            <FeaturedDishCard key={dish.id} dish={dish} />
          ))}
        </div>
      </div>
    </section>
  );
}
