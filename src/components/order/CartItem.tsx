"use client";

import { findMenuItem, formatMoney } from "@/data/ordering";
import { lineTotal, selectionLabels, type CartLine } from "@/lib/cart";
import { useCart } from "@/components/order/CartProvider";
import { QuantitySelector } from "@/components/order/QuantitySelector";

export function CartItem({ line }: { line: CartLine }) {
  const { updateLine, removeLine, openCustomize } = useCart();
  const item = findMenuItem(line.itemId);
  if (!item) return null;

  const notes = selectionLabels(line);

  return (
    <article className="border-b border-line py-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-lg tracking-tight uppercase">{item.name}</h3>
          {notes.length ? <p className="mt-1 text-sm text-ink-soft">{notes.join(", ")}</p> : null}
          {line.instructions ? <p className="mt-1 text-sm text-muted">“{line.instructions}”</p> : null}
        </div>
        <p className="price-ticket text-chili">{formatMoney(lineTotal(line))}</p>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <QuantitySelector value={line.quantity} onChange={(quantity) => updateLine(line.lineId, { quantity })} />
        <button
          type="button"
          className="text-sm text-chili underline-offset-2 hover:underline"
          onClick={() => openCustomize(item, line)}
        >
          Edit
        </button>
        <button type="button" className="text-sm text-muted underline-offset-2 hover:underline" onClick={() => removeLine(line.lineId)}>
          Remove
        </button>
      </div>
    </article>
  );
}
