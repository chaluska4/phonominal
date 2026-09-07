"use client";

import Link from "next/link";
import { restaurant } from "@/data/restaurant";
import { useCart } from "@/components/order/CartProvider";

export function MobileOrderBar() {
  const { count, setCartOpen } = useCart();

  return (
    <nav
      className="fixed right-0 bottom-0 left-0 z-40 grid grid-cols-4 border-t border-line bg-paper md:hidden"
      aria-label="Order shortcuts"
    >
      <Link href="/menu" className="flex min-h-14 flex-col items-center justify-center text-xs">
        Menu
      </Link>
      <button type="button" className="flex min-h-14 flex-col items-center justify-center text-xs" onClick={() => setCartOpen(true)}>
        Order{count ? ` (${count})` : ""}
      </button>
      <a href={`tel:${restaurant.phoneTel}`} className="flex min-h-14 flex-col items-center justify-center text-xs">
        Call
      </a>
      <a
        href={restaurant.mapsDirectionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-14 flex-col items-center justify-center text-xs"
      >
        Directions
      </a>
    </nav>
  );
}
