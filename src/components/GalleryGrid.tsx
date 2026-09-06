"use client";

import { RatioImage } from "@/components/RatioImage";
import { useLightbox } from "@/components/Lightbox";
import { galleryImages, type GalleryImage } from "@/data/gallery";

export function GalleryGrid({
  images = galleryImages,
  columns = "page",
}: {
  images?: GalleryImage[];
  columns?: "preview" | "page";
}) {
  const { open } = useLightbox();
  const grid =
    columns === "preview"
      ? "grid-cols-2 md:grid-cols-4"
      : "grid-cols-1 sm:grid-cols-2";

  return (
    <div className={`grid gap-3 md:gap-4 ${grid}`}>
      {images.map((image, index) => (
        <button
          key={image.src}
          type="button"
          className="group"
          onClick={() => open(images, index)}
          aria-label={`Enlarge ${image.alt}`}
        >
          <RatioImage
            src={image.src}
            alt={image.alt}
            sizes={
              columns === "preview"
                ? "(min-width: 768px) 25vw, 50vw"
                : "(min-width: 640px) 50vw, 100vw"
            }
          />
        </button>
      ))}
    </div>
  );
}
