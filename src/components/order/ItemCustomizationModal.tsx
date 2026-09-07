"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { formatMoney, getModifierGroups, orderingConfig } from "@/data/ordering";
import { useCart } from "@/components/order/CartProvider";
import { QuantitySelector } from "@/components/order/QuantitySelector";
import { useBodyLock } from "@/components/order/useBodyLock";
import type { CartSelections } from "@/lib/cart";

function emptySelections(groups: ReturnType<typeof getModifierGroups>): CartSelections {
  const next: CartSelections = {};
  for (const group of groups) {
    next[group.id] = group.required && group.selection === "single" && group.options[0] ? [group.options[0].id] : [];
  }
  return next;
}

export function ItemCustomizationModal() {
  const { customize, closeCustomize, addLine, updateLine, setCartOpen } = useCart();
  const item = customize?.item;
  const groups = item ? getModifierGroups(item) : [];

  const [quantity, setQuantity] = useState(1);
  const [instructions, setInstructions] = useState("");
  const [selections, setSelections] = useState<CartSelections>({});

  useEffect(() => {
    if (!customize?.item) return;
    const nextGroups = getModifierGroups(customize.item);
    setQuantity(customize.line?.quantity ?? 1);
    setInstructions(customize.line?.instructions ?? "");
    setSelections(customize.line?.selections ?? emptySelections(nextGroups));
  }, [customize]);

  useBodyLock(Boolean(item));

  useEffect(() => {
    if (!item) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeCustomize();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [item, closeCustomize]);

  const unit = useMemo(() => {
    if (!item) return 0;
    return (
      item.price +
      groups.reduce((sum, group) => {
        const chosen = selections[group.id] ?? [];
        return (
          sum +
          group.options
            .filter((option) => chosen.includes(option.id))
            .reduce((inner, option) => inner + (option.priceDelta ?? 0), 0)
        );
      }, 0)
    );
  }, [item, groups, selections]);

  if (!item) return null;

  const requiredMissing = groups.some(
    (group) => group.required && (selections[group.id]?.length ?? 0) < (group.min ?? 1),
  );

  const toggle = (groupId: string, optionId: string, multiple: boolean) => {
    setSelections((current) => {
      const selected = current[groupId] ?? [];
      if (!multiple) return { ...current, [groupId]: [optionId] };
      const has = selected.includes(optionId);
      return {
        ...current,
        [groupId]: has ? selected.filter((id) => id !== optionId) : [...selected, optionId],
      };
    });
  };

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center md:items-center">
      <button
        type="button"
        className="absolute inset-0 bg-ink/50"
        aria-label="Close customization"
        onClick={closeCustomize}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="customize-title"
        className="relative z-10 flex max-h-[92svh] w-full max-w-xl flex-col overflow-hidden bg-paper md:max-h-[88vh]"
      >
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          <p className="text-xs text-muted">{orderingConfig.previewLabel}</p>
          <button type="button" onClick={closeCustomize} className="px-2 py-1 text-lg" aria-label="Close">
            ×
          </button>
        </div>
        <div className="overflow-y-auto px-4 py-4">
          {item.image ? (
            <div className="relative mb-4 aspect-[4/3] overflow-hidden bg-paper-deep">
              <Image src={item.image} alt={item.alt ?? item.name} fill className="object-cover" sizes="512px" />
            </div>
          ) : null}
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 id="customize-title" className="font-display text-3xl tracking-tight uppercase">
                {item.name}
              </h2>
              {item.vietnamese ? <p className="font-serif mt-1 italic text-ink-soft">{item.vietnamese}</p> : null}
            </div>
            <p className="price-ticket text-lg text-chili">{formatMoney(item.price)}</p>
          </div>
          <p className="mt-3 text-sm leading-6 text-ink-soft">{item.description}</p>

          {groups.map((group) => (
            <fieldset key={group.id} className="mt-6 border-t border-line pt-4">
              <legend className="font-display text-sm tracking-[0.12em] uppercase">
                {group.name}
                {group.required ? "" : " · optional"}
              </legend>
              {group.demo ? (
                <p className="mt-1 text-xs text-muted">Preview options. Not confirmed with the kitchen.</p>
              ) : null}
              <div className="mt-3 space-y-2">
                {group.options.map((option) => {
                  const checked = (selections[group.id] ?? []).includes(option.id);
                  return (
                    <label key={option.id} className="flex cursor-pointer items-center gap-3 text-sm">
                      <input
                        type={group.selection === "multiple" ? "checkbox" : "radio"}
                        name={group.id}
                        checked={checked}
                        onChange={() => toggle(group.id, option.id, group.selection === "multiple")}
                      />
                      <span>{option.name}</span>
                      {option.priceDelta ? (
                        <span className="price-ticket ml-auto text-chili">+{formatMoney(option.priceDelta)}</span>
                      ) : null}
                    </label>
                  );
                })}
              </div>
            </fieldset>
          ))}

          <div className="mt-6 border-t border-line pt-4">
            <p className="font-display text-sm tracking-[0.12em] uppercase">Quantity</p>
            <div className="mt-3">
              <QuantitySelector value={quantity} onChange={setQuantity} />
            </div>
          </div>

          <label className="mt-6 block border-t border-line pt-4">
            <span className="font-display text-sm tracking-[0.12em] uppercase">Special instructions</span>
            <textarea
              value={instructions}
              onChange={(event) => setInstructions(event.target.value)}
              rows={3}
              className="mt-2 w-full border border-line bg-white px-3 py-2 text-sm"
              placeholder="Allergies or notes for the kitchen"
            />
          </label>
        </div>
        <div className="border-t border-line p-4">
          <button
            type="button"
            disabled={requiredMissing}
            className="w-full bg-chili px-4 py-3 font-display text-[13px] tracking-[0.14em] text-white uppercase disabled:opacity-40"
            onClick={() => {
              if (customize?.line) {
                updateLine(customize.line.lineId, { quantity, selections, instructions });
              } else {
                addLine({ itemId: item.id, quantity, selections, instructions });
              }
              closeCustomize();
              setCartOpen(true);
            }}
          >
            Add to Order — {formatMoney(unit * quantity)}
          </button>
        </div>
      </div>
    </div>
  );
}
