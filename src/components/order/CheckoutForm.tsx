"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { restaurant } from "@/data/restaurant";
import { getSamplePickupSlots, isOpenAt, orderingConfig } from "@/data/ordering";
import { useCart } from "@/components/order/CartProvider";
import { OrderSummary } from "@/components/order/OrderSummary";
import { OrderTypeSelector } from "@/components/order/OrderTypeSelector";
import { PickupTimeSelector } from "@/components/order/PickupTimeSelector";

export type DemoOrder = {
  number: string;
  firstName: string;
  lastName: string;
  pickupLabel: string;
  placedAt: string;
};

export function CheckoutForm({ onComplete }: { onComplete: (order: DemoOrder) => void }) {
  const { lines } = useCart();
  const open = isOpenAt(new Date());
  const slots = useMemo(() => getSamplePickupSlots(), []);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [mode, setMode] = useState<"asap" | "later">(open ? "asap" : "later");
  const [slotId, setSlotId] = useState(slots[0]?.id ?? "");

  const pickupLabel =
    mode === "asap" && open
      ? "As soon as possible"
      : (slots.find((slot) => slot.id === slotId)?.label ?? "Scheduled sample time");

  const ready = Boolean(firstName && lastName && phone && email && lines.length);

  if (!lines.length) {
    return (
      <div className="py-10">
        <p className="text-ink-soft">Your cart is empty.</p>
        <Link href="/menu" className="mt-4 inline-block text-chili underline-offset-2 hover:underline">
          Back to menu
        </Link>
      </div>
    );
  }

  return (
    <form
      className="grid gap-10 lg:grid-cols-[1fr_360px]"
      onSubmit={(event) => {
        event.preventDefault();
        if (!ready) return;
        onComplete({
          number: `PN-${Math.floor(1000 + Math.random() * 9000)}`,
          firstName,
          lastName,
          pickupLabel,
          placedAt: new Date().toISOString(),
        });
      }}
    >
      <div className="space-y-10">
        <OrderTypeSelector value="pickup" onChange={() => undefined} />

        <fieldset>
          <legend className="font-display text-sm tracking-[0.14em] uppercase">Customer information</legend>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <label className="text-sm">
              First name
              <input
                required
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                className="mt-1 w-full border border-line bg-white px-3 py-2"
              />
            </label>
            <label className="text-sm">
              Last name
              <input
                required
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                className="mt-1 w-full border border-line bg-white px-3 py-2"
              />
            </label>
            <label className="text-sm">
              Phone
              <input
                required
                type="tel"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                className="mt-1 w-full border border-line bg-white px-3 py-2"
              />
            </label>
            <label className="text-sm sm:col-span-2">
              Email
              <input
                required
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="mt-1 w-full border border-line bg-white px-3 py-2"
              />
            </label>
          </div>
        </fieldset>

        <PickupTimeSelector mode={mode} onMode={setMode} slotId={slotId} onSlot={setSlotId} />

        <section>
          <h2 className="font-display text-sm tracking-[0.14em] uppercase">Payment</h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-ink-soft">
            Online payment will be securely processed when ordering is activated. No card is collected in this preview.
          </p>
          <div className="mt-4 border border-dashed border-line px-4 py-6 text-sm text-muted">
            Card payment integration placeholder
          </div>
        </section>
      </div>

      <aside className="border border-line bg-white p-5">
        <h2 className="font-display text-xl tracking-tight uppercase">Order summary</h2>
        <p className="mt-1 text-xs text-muted">Pickup at {restaurant.address.street}</p>
        <div className="mt-5">
          <OrderSummary lines={lines} showPlaceholders />
        </div>
        <button
          type="submit"
          disabled={!ready}
          className="mt-6 w-full bg-chili px-4 py-3 font-display text-[13px] tracking-[0.14em] text-white uppercase disabled:opacity-40"
        >
          Place Demo Order
        </button>
        <p className="mt-3 text-xs text-muted">This does not send an order to the kitchen.</p>
      </aside>
    </form>
  );
}
