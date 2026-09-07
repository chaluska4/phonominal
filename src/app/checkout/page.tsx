"use client";

import { useState } from "react";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { MobileOrderBar } from "@/components/order/MobileOrderBar";
import { CheckoutForm, type DemoOrder } from "@/components/order/CheckoutForm";
import { OrderSummary } from "@/components/order/OrderSummary";
import { useCart } from "@/components/order/CartProvider";
import { orderingConfig } from "@/data/ordering";
import type { CartLine } from "@/lib/cart";

export default function CheckoutPage() {
  const { lines, clearCart } = useCart();
  const [demo, setDemo] = useState<DemoOrder | null>(null);
  const [snapshot, setSnapshot] = useState<CartLine[]>([]);

  if (demo) {
    return (
      <main id="main" className="bg-paper pt-32 pb-24 md:pt-28 md:pb-16">
        <PageHeader eyebrow={orderingConfig.previewLabel} title="Order demo complete">
          Your ordering experience would appear here once online ordering is activated.
        </PageHeader>
        <section className="mx-auto max-w-xl px-5 md:px-8">
          <p className="font-display text-2xl tracking-tight uppercase">Demo Order #{demo.number}</p>
          <p className="mt-2 text-ink-soft">Pickup · {demo.pickupLabel}</p>
          <p className="mt-1 text-sm text-muted">For {demo.firstName} {demo.lastName}</p>
          <div className="mt-8 border-t border-line pt-6">
            <OrderSummary lines={snapshot} showPlaceholders />
          </div>
          <Link
            href="/menu"
            className="mt-8 inline-flex bg-chili px-5 py-3 font-display text-[13px] tracking-[0.14em] text-white uppercase"
          >
            Back to Menu
          </Link>
        </section>
        <MobileOrderBar />
      </main>
    );
  }

  return (
    <main id="main" className="bg-paper pt-32 pb-24 md:pt-28 md:pb-16">
      <PageHeader eyebrow={orderingConfig.previewLabel} title="Checkout">
        This page is a demonstration. Nothing is sent to the kitchen and no payment is taken.
      </PageHeader>
      <section className="mx-auto max-w-6xl px-5 md:px-8">
        <CheckoutForm
          onComplete={(order) => {
            setSnapshot(lines);
            setDemo(order);
            clearCart();
          }}
        />
      </section>
      <MobileOrderBar />
    </main>
  );
}
