import type { Metadata } from "next";
import { GalleryGrid } from "@/components/GalleryGrid";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Food photography from PHO•NOM1NAL in Allentown — pho, bánh mì, vermicelli, rice, and Vietnamese drinks.",
};

export default function GalleryPage() {
  return (
    <main id="main" className="bg-paper pt-32 md:pt-28">
      <PageHeader largeLede eyebrow="From the kitchen" title="Gallery">
        Pho, bánh mì, vermicelli, rice, appetizers, and drinks as they leave the pass.
      </PageHeader>
      <section className="px-5 pb-20 md:px-8">
        <div className="mx-auto max-w-[1440px]">
          <GalleryGrid />
        </div>
      </section>
    </main>
  );
}
