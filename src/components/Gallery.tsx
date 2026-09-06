import Link from "next/link";
import { GalleryGrid } from "@/components/GalleryGrid";
import { galleryPreview } from "@/data/gallery";

export function Gallery() {
  return (
    <section className="bg-paper px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-display text-[12px] tracking-[0.28em] text-chili uppercase">Gallery</p>
            <h2 className="mt-2 font-display text-4xl tracking-tight uppercase md:text-5xl">
              From the kitchen
            </h2>
          </div>
          <Link
            href="/gallery"
            className="font-display text-[12px] tracking-[0.18em] text-chili uppercase underline-offset-4 hover:underline"
          >
            View Gallery
          </Link>
        </div>
        <div className="mt-10">
          <GalleryGrid images={galleryPreview} columns="preview" />
        </div>
      </div>
    </section>
  );
}
