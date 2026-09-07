import { getSamplePickupSlots, isOpenAt, type PickupSlot } from "@/data/ordering";
import { useMemo } from "react";

export function PickupTimeSelector({
  mode,
  onMode,
  slotId,
  onSlot,
}: {
  mode: "asap" | "later";
  onMode: (next: "asap" | "later") => void;
  slotId: string;
  onSlot: (id: string) => void;
}) {
  const open = isOpenAt(new Date());
  const slots = useMemo(() => getSamplePickupSlots(), []);

  return (
    <fieldset>
      <legend className="font-display text-sm tracking-[0.14em] uppercase">Pickup time</legend>
      <p className="mt-2 text-xs text-muted">
        {open ? "Ordering available during restaurant hours." : "Currently closed — schedule a future pickup."} Sample
        times for this preview only.
      </p>
      <label className="mt-3 flex items-center gap-3 text-sm">
        <input type="radio" name="pickup-mode" checked={mode === "asap"} disabled={!open} onChange={() => onMode("asap")} />
        As soon as possible
      </label>
      <label className="mt-2 flex items-center gap-3 text-sm">
        <input type="radio" name="pickup-mode" checked={mode === "later" || !open} onChange={() => onMode("later")} />
        Schedule for later
      </label>
      {mode === "later" || !open ? (
        <div className="mt-3 grid grid-cols-2 gap-2">
          {slots.map((slot: PickupSlot) => (
            <button
              key={slot.id}
              type="button"
              className={`border px-3 py-2 text-left text-sm ${slotId === slot.id ? "border-chili bg-white" : "border-line"}`}
              onClick={() => onSlot(slot.id)}
            >
              {slot.label}
            </button>
          ))}
        </div>
      ) : null}
    </fieldset>
  );
}
