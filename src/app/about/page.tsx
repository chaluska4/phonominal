import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "About",
  description:
    "PHO•NOM1NAL, a Vietnamese restaurant on Cedar Crest Blvd in Allentown, PA.",
};

export default function AboutPage() {
  return (
    <main id="main" className="bg-paper pt-32 md:pt-28">
      <PageHeader eyebrow="PHO•NOM1NAL" title="Our Story">
        A Vietnamese restaurant on Cedar Crest Blvd in Allentown.
      </PageHeader>

      <section className="px-5 pb-20 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden bg-paper-deep">
            <Image
              src="/images/vermicelli-special.jpg"
              alt="Vermicelli bowl prepared at PHO•NOM1NAL"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div className="space-y-8 text-[1.05rem] leading-8 text-ink-soft">
            <div>
              <h2 className="font-display text-3xl tracking-tight text-ink uppercase">
                A kitchen on Cedar Crest
              </h2>
              {/* PLACEHOLDER_STORY: Replace owner/history copy when restaurant details are provided. */}
              <p className="mt-4">
                PHO•NOM1NAL is a Vietnamese restaurant at 319 S Cedar Crest Blvd in Allentown.
                The menu includes pho, bánh mì, vermicelli bowls, rice plates, appetizers, and
                Vietnamese drinks.
              </p>
            </div>
            <div>
              <h2 className="font-display text-3xl tracking-tight text-ink uppercase">
                Vietnamese culinary inspiration
              </h2>
              <p className="mt-4">
                Owner, family, and kitchen history will be added here once the restaurant provides
                it.
              </p>
            </div>
            <div>
              <h2 className="font-display text-3xl tracking-tight text-ink uppercase">
                What we focus on
              </h2>
              <p className="mt-4">
                See the menu for current dishes, ingredients, and prices as listed by the restaurant.
              </p>
              <p className="mt-4 font-display text-[12px] tracking-[0.16em] text-muted uppercase">
                Owner and family history coming soon
              </p>
            </div>
            <Link
              href="/menu"
              className="inline-flex items-center justify-center bg-chili px-5 py-3 font-display text-[13px] tracking-[0.16em] text-white uppercase hover:bg-chili-bright"
            >
              Explore Our Menu
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
