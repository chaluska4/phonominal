import { formatMoney, orderingConfig } from "@/data/ordering";
import { cartSubtotal, lineTotal, selectionLabels, type CartLine } from "@/lib/cart";
import { findMenuItem } from "@/data/ordering";

export function OrderSummary({
  lines,
  showPlaceholders = false,
}: {
  lines: CartLine[];
  showPlaceholders?: boolean;
}) {
  const subtotal = cartSubtotal(lines);

  return (
    <div>
      <ul className="space-y-3">
        {lines.map((line) => {
          const item = findMenuItem(line.itemId);
          if (!item) return null;
          const notes = selectionLabels(line);
          return (
            <li key={line.lineId} className="flex justify-between gap-4 text-sm">
              <div>
                <p>
                  {item.name} × {line.quantity}
                </p>
                {notes.length ? <p className="text-muted">{notes.join(", ")}</p> : null}
              </div>
              <p className="price-ticket">{formatMoney(lineTotal(line))}</p>
            </li>
          );
        })}
      </ul>
      <dl className="mt-5 space-y-2 border-t border-line pt-4 text-sm">
        <div className="flex justify-between">
          <dt>Subtotal</dt>
          <dd className="price-ticket">{formatMoney(subtotal)}</dd>
        </div>
        {showPlaceholders ? (
          <>
            <div className="flex justify-between text-muted">
              <dt>{orderingConfig.taxLabel}</dt>
              <dd className="price-ticket">—</dd>
            </div>
            <div className="flex justify-between text-muted">
              <dt>Tip (not configured)</dt>
              <dd className="price-ticket">—</dd>
            </div>
            <div className="flex justify-between">
              <dt>Total</dt>
              <dd className="price-ticket">{formatMoney(subtotal)}</dd>
            </div>
          </>
        ) : null}
      </dl>
    </div>
  );
}
