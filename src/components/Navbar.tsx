"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { useCart } from "@/components/order/CartProvider";
import { navLinks } from "@/data/restaurant";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const { count, setCartOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 w-full bg-paper/96 backdrop-blur-md transition-shadow ${
        scrolled ? "shadow-[0_1px_0_var(--line)]" : ""
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-paper focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <div className="flex w-full items-center justify-between gap-3 px-4 py-3 md:px-10 md:py-4 xl:px-12">
        <BrandLogo
          className="min-w-0 shrink"
          imageClassName="h-9 w-auto max-w-[min(200px,52vw)] object-contain object-left md:h-14 md:max-w-[420px] xl:h-16 xl:max-w-[480px]"
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
          <button
            type="button"
            onClick={() => setCartOpen(true)}
            className="font-display text-lg tracking-[0.14em] uppercase xl:text-xl"
          >
            Order{count ? ` (${count})` : ""}
          </button>
        </nav>

        <div className="flex shrink-0 items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setCartOpen(true)}
            className="px-2 py-2 font-display text-sm tracking-[0.12em] uppercase"
          >
            Order{count ? ` (${count})` : ""}
          </button>
          <Link
            href="/menu"
            className={`px-3.5 py-2 font-display text-sm tracking-[0.14em] uppercase ${
              pathname === "/menu" ? "bg-chili-bright text-white" : "bg-chili text-white"
            }`}
          >
            Menu
          </Link>
        </div>
      </div>

      <nav
        className="grid grid-cols-4 border-t border-line md:hidden"
        aria-label="Pages"
      >
        {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex min-h-11 items-center justify-center px-1 font-display text-[13px] tracking-[0.12em] uppercase ${
                  active ? "bg-chili text-white" : "text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
      </nav>
    </header>
  );
}
