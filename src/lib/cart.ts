import { findMenuItem, getModifierGroups } from "@/data/ordering";

export type CartSelections = Record<string, string[]>;

export type CartLine = {
  lineId: string;
  itemId: string;
  quantity: number;
  selections: CartSelections;
  instructions: string;
};

export function createLineId(): string {
  return `line-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export function lineUnitPrice(line: CartLine): number {
  const item = findMenuItem(line.itemId);
  if (!item) return 0;
  const extras = getModifierGroups(item).reduce((sum, group) => {
    const chosen = line.selections[group.id] ?? [];
    return (
      sum +
      group.options
        .filter((option) => chosen.includes(option.id))
        .reduce((inner, option) => inner + (option.priceDelta ?? 0), 0)
    );
  }, 0);
  return item.price + extras;
}

export function lineTotal(line: CartLine): number {
  return lineUnitPrice(line) * line.quantity;
}

export function cartSubtotal(lines: CartLine[]): number {
  return lines.reduce((sum, line) => sum + lineTotal(line), 0);
}

export function cartCount(lines: CartLine[]): number {
  return lines.reduce((sum, line) => sum + line.quantity, 0);
}

export function selectionLabels(line: CartLine): string[] {
  const item = findMenuItem(line.itemId);
  if (!item) return [];
  return getModifierGroups(item).flatMap((group) => {
    const chosen = new Set(line.selections[group.id] ?? []);
    return group.options.filter((option) => chosen.has(option.id)).map((option) => option.name);
  });
}
