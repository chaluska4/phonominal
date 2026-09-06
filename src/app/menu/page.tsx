import type { Metadata } from "next";
import { MenuCard } from "@/components/MenuCard";
import { MenuCategoryNav } from "@/components/MenuCategoryNav";
import { PageHeader } from "@/components/PageHeader";
import { menuCategories } from "@/data/menu";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Pho, bánh mì, vermicelli bowls, appetizers, and Vietnamese coffee at PHO•NOM1NAL in Allentown, PA.",
};

export default function MenuPage() {
  return (
    <main id="main" className="bg-paper pt-28">
      <PageHeader prominent eyebrow="Allentown" title="Menu">
        Pho, bánh mì, vermicelli, and cà phê — hot from the kitchen. Prices as listed.
        Want it vegetarian, or a different protein? Just ask.
      </PageHeader>

      <MenuCategoryNav categories={menuCategories} />

      <div className="mx-auto w-full max-w-[1400px] px-5 py-12 md:px-8 xl:px-12">
        {menuCategories.map((category) => {
          const cards = category.items.filter((item) => item.layout !== "row");
          const rows = category.items.filter((item) => item.layout === "row");

          return (
            <section
              key={category.id}
              id={category.id}
              className="scroll-mt-36 mb-16"
              aria-labelledby={`${category.id}-heading`}
            >
              <h2
                id={`${category.id}-heading`}
                className="font-display text-3xl tracking-tight uppercase md:text-4xl"
              >
                {category.label}
              </h2>
              {cards.length ? (
                <div className="mt-6 grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
                  {cards.map((item) => (
                    <MenuCard key={item.id} item={item} />
                  ))}
                </div>
              ) : null}
              {rows.length ? (
                <div className={`${cards.length ? "mt-8" : "mt-4"} border-t border-line`}>
                  {rows.map((item) => (
                    <MenuCard key={item.id} item={item} />
                  ))}
                </div>
              ) : null}
            </section>
          );
        })}
      </div>
    </main>
  );
}
