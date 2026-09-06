import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story of PHO•NOM1NAL, a Vietnamese restaurant on Cedar Crest Blvd in Allentown, PA.",
};

export default function AboutPage() {
  return (
    <main id="main" className="bg-paper pt-28">
      <PageHeader eyebrow="PHO•NOM1NAL" title="Our Story">
        Vietnamese cooking in Allentown — bowls, baguettes, and coffee made for this neighborhood.
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
                The kitchen is built around pho, bánh mì, vermicelli bowls, rice plates, and
                Vietnamese coffee — the dishes people come back for during a weekday lunch or a
                Sunday supper.
              </p>
            </div>
            <div>
              <h2 className="font-display text-3xl tracking-tight text-ink uppercase">
                Vietnamese culinary inspiration
              </h2>
              <p className="mt-4">
                The cooking follows a familiar Vietnamese table: a long-simmered broth, herbs that
                stay bright, a baguette with snap, and coffee from southern Vietnam served with
                condensed milk. The menu stays focused so those plates can be made carefully.
              </p>
            </div>
            <div>
              <h2 className="font-display text-3xl tracking-tight text-ink uppercase">
                What we focus on
              </h2>
              <p className="mt-4">
                Pho that tastes like time was spent on the pot. Bánh mì on a homemade baguette.
                Vermicelli and rice bowls with grilled meat or tofu. A short list of drinks,
                including cà phê Bảo Lộc and Thai tea.
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
