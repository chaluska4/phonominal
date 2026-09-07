"use client";

import { itemNeedsCustomization, isOrderable } from "@/data/ordering";
import { useCart } from "@/components/order/CartProvider";
import type { MenuItem } from "@/data/menu";

export function AddToOrderButton({ item }: { item: MenuItem }) {
  const { addLine, openCustomize, setCartOpen } = useCart();

  if (!isOrderable(item)) return null;

  const customize = itemNeedsCustomization(item);

  return (
    <button
      type="button"
      className="mt-4 inline-flex items-center justify-center bg-chili px-4 py-2.5 font-display text-[12px] tracking-[0.14em] text-white uppercase hover:bg-chili-bright"
      onClick={() => {
        if (customize) {
          openCustomize(item);
          return;
        }
        addLine({ itemId: item.id, quantity: 1, selections: {}, instructions: "" });
        setCartOpen(true);
      }}
    >
      {customize ? "Customize & Add" : "Add to Order"}
    </button>
  );
}
