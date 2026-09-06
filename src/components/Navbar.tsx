"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { restaurant, navLinks } from "@/data/restaurant";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 w-full bg-paper/96 backdrop-blur-md transition-shadow ${
        scrolled || open ? "shadow-[0_1px_0_var(--line)]" : ""
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-paper focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <div className="flex w-full items-center justify-between gap-6 px-5 py-4 md:px-10 xl:px-12">
        <BrandLogo
          className="shrink-0"
          imageClassName="h-12 w-auto max-w-[360px] object-contain object-left md:h-14 md:max-w-[420px] xl:h-16 xl:max-w-[480px]"
        />

        <nav className="hidden shrink-0 items-center gap-6 lg:gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-display px-1 py-2 text-lg tracking-[0.14em] uppercase transition-opacity hover:opacity-70 xl:text-xl ${
                  active ? "text-chili" : "text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/menu"
            className={`px-5 py-3 font-display text-lg tracking-[0.14em] uppercase xl:text-xl ${
              pathname === "/menu"
                ? "bg-chili-bright text-white"
                : "bg-chili text-white transition-colors hover:bg-chili-bright"
            }`}
          >
            View Menu
          </Link>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href={`tel:${restaurant.phoneTel}`}
            className="px-2 py-2 font-display text-base tracking-[0.12em] text-ink uppercase"
          >
            Call
          </a>
          <a
            href={restaurant.mapsDirectionsUrl}
            className="px-2 py-2 font-display text-base tracking-[0.12em] text-ink uppercase"
            target="_blank"
            rel="noopener noreferrer"
          >
            Directions
          </a>
          <button
            type="button"
            className="ml-1 flex h-12 w-12 flex-col items-center justify-center gap-1.5 text-ink"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className={`h-px w-5 bg-current transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-px w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-px w-5 bg-current transition ${open ? "-translate-y-[4.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-nav" className="border-t border-line bg-paper px-5 py-6 md:hidden" aria-label="Mobile">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-display text-lg tracking-[0.16em] text-ink uppercase"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/menu"
              className="mt-2 inline-flex w-fit bg-chili px-4 py-2 font-display text-sm tracking-[0.16em] text-white uppercase"
              onClick={() => setOpen(false)}
            >
              View Menu
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
