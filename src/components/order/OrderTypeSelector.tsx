import { orderingConfig } from "@/data/ordering";

export function OrderTypeSelector({
  value,
  onChange,
}: {
  value: "pickup" | "delivery";
  onChange: (next: "pickup") => void;
}) {
  return (
    <fieldset>
      <legend className="font-display text-sm tracking-[0.14em] uppercase">Order type</legend>
      <label className="mt-3 flex items-center gap-3 text-sm">
        <input type="radio" name="order-type" checked={value === "pickup"} onChange={() => onChange("pickup")} />
        Pickup
      </label>
      <label className="mt-2 flex items-start gap-3 text-sm text-muted">
        <input type="radio" name="order-type" disabled />
        <span>
          Delivery
          <span className="mt-1 block text-xs">{orderingConfig.deliveryNote}</span>
        </span>
      </label>
    </fieldset>
  );
}
