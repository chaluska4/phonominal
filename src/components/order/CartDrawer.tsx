"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { orderingConfig } from "@/data/ordering";
import { useCart } from "@/components/order/CartProvider";
import { CartItem } from "@/components/order/CartItem";
import { OrderSummary } from "@/components/order/OrderSummary";
import { useBodyLock } from "@/components/order/useBodyLock";

export function CartDrawer() {
  const { cartOpen, setCartOpen, lines } = useCart();
  const pathname = usePathname();
  const router = useRouter();

  function continueOrdering() {
    setCartOpen(false);
    if (pathname !== "/menu") router.push("/menu");
  }

  useBodyLock(cartOpen);

  useEffect(() => {
    if (!cartOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setCartOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [cartOpen, setCartOpen]);

  if (!cartOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex justify-end">
      <button type="button" className="absolute inset-0 bg-ink/45" aria-label="Close cart" onClick={() => setCartOpen(false)} />
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
        className="relative flex h-full w-full max-w-md flex-col border-l border-line bg-paper"
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <div>
            <p className="text-xs text-muted">{orderingConfig.previewLabel}</p>
            <h2 id="cart-title" className="font-display text-2xl tracking-tight uppercase">
              Your Order
            </h2>
          </div>
          <button type="button" className="px-2 text-lg" aria-label="Close cart" onClick={() => setCartOpen(false)}>
            ×
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5">
          {lines.length === 0 ? (
            <p className="py-10 text-ink-soft">Your cart is empty. Add dishes from the menu.</p>
          ) : (
            lines.map((line) => <CartItem key={line.lineId} line={line} />)
          )}
        </div>

        {lines.length ? (
          <div className="border-t border-line px-5 py-4">
            <OrderSummary lines={lines} />
            <button
              type="button"
              className="mt-4 flex w-full items-center justify-center border border-chili bg-paper px-4 py-3 font-display text-[13px] tracking-[0.14em] text-chili uppercase"
              onClick={continueOrdering}
            >
              Continue Ordering
            </button>
            <Link
              href="/checkout"
              className="mt-3 flex w-full items-center justify-center bg-chili px-4 py-3 font-display text-[13px] tracking-[0.14em] text-white uppercase hover:bg-chili-bright"
              onClick={() => setCartOpen(false)}
            >
              Continue to Checkout
            </Link>
          </div>
        ) : null}
      </aside>
    </div>
  );
}
