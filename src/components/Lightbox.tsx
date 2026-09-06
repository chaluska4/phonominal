"use client";

import Image from "next/image";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

export type LightboxImage = {
  src: string;
  alt: string;
};

type LightboxContextValue = {
  open: (images: LightboxImage[], index?: number) => void;
  close: () => void;
};

const LightboxContext = createContext<LightboxContextValue | null>(null);

export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) {
    throw new Error("useLightbox must be used within LightboxProvider");
  }
  return ctx;
}

export function LightboxProvider({ children }: { children: React.ReactNode }) {
  const [images, setImages] = useState<LightboxImage[]>([]);
  const [index, setIndex] = useState(0);
  const [openState, setOpenState] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);

  const close = useCallback(() => {
    setOpenState(false);
  }, []);

  const open = useCallback((nextImages: LightboxImage[], nextIndex = 0) => {
    const usable = nextImages.filter((image) => image.src);
    if (!usable.length) return;
    setImages(usable);
    setIndex(Math.min(nextIndex, usable.length - 1));
    setOpenState(true);
  }, []);

  const next = useCallback(() => {
    setIndex((current) => (current + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setIndex((current) => (current - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!openState) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") prev();
    };

    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [openState, close, next, prev]);

  const value = useMemo(() => ({ open, close }), [open, close]);
  const current = images[index];

  return (
    <LightboxContext.Provider value={value}>
      {children}
      {openState && current ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[rgba(12,10,9,0.92)] px-4 py-16"
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          onClick={close}
          onTouchStart={(event) => {
            touchStartX.current = event.changedTouches[0]?.clientX ?? null;
          }}
          onTouchEnd={(event) => {
            if (touchStartX.current == null) return;
            const delta = (event.changedTouches[0]?.clientX ?? 0) - touchStartX.current;
            if (delta > 50) prev();
            if (delta < -50) next();
            touchStartX.current = null;
          }}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            className="absolute top-5 right-5 font-display text-sm tracking-[0.18em] text-white uppercase"
            aria-label="Close image"
          >
            Close
          </button>
          {images.length > 1 ? (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  prev();
                }}
                className="absolute top-1/2 left-3 -translate-y-1/2 px-3 py-2 font-display text-2xl text-white"
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  next();
                }}
                className="absolute top-1/2 right-3 -translate-y-1/2 px-3 py-2 font-display text-2xl text-white"
                aria-label="Next image"
              >
                ›
              </button>
            </>
          ) : null}
          <div
            className="relative h-[min(78vh,720px)] w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={current.src}
              alt={current.alt}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>
        </div>
      ) : null}
    </LightboxContext.Provider>
  );
}
