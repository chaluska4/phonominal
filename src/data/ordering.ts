import { menuCategories, type MenuItem, type ModifierGroup } from "@/data/menu";

export const CART_STORAGE_KEY = "phonominal-demo-cart";

export const orderingConfig = {
  live: false,
  previewLabel: "Online Ordering Preview",
  deliveryEnabled: false,
  deliveryNote: "Delivery availability would be configured with the restaurant.",
  taxConfigured: false,
  taxRate: 0,
  taxLabel: "Tax (demo — rate not configured)",
  tipConfigured: false,
} as const;

/** Sunday = 0. Matches the restaurant hours file. Monday is closed. */
export const weekdayHours: Record<number, { openHour: number; closeHour: number } | null> = {
  0: { openHour: 11, closeHour: 20 },
  1: null,
  2: { openHour: 11, closeHour: 21 },
  3: { openHour: 11, closeHour: 21 },
  4: { openHour: 11, closeHour: 21 },
  5: { openHour: 11, closeHour: 21 },
  6: { openHour: 11, closeHour: 21 },
};

function group(
  id: string,
  name: string,
  options: string[],
  required = true,
): ModifierGroup {
  return {
    id,
    name,
    required,
    selection: "single",
    min: required ? 1 : 0,
    max: 1,
    options: options.map((option) => ({
      id: `${id}-${option.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
      name: option,
    })),
  };
}

/**
 * Choices already written on the printed menu. Not invented extras.
 */
const confirmedGroups: Record<string, ModifierGroup[]> = {
  pho: [group("pho-protein", "Choose protein", ["Eye of Round", "Brisket", "Beef Ball", "Chicken", "Shrimp"])],
  vermicelli: [group("bun-protein", "Choose protein", ["Chicken", "Pork", "Beef", "Shrimp"])],
  "fried-rice": [group("fried-rice-protein", "Choose protein", ["Chicken", "Pork", "Beef", "Shrimp", "Tofu"])],
  "grilled-rice": [group("rice-protein", "Choose protein", ["Pork", "Beef", "Chicken", "Shrimp", "Tofu"])],
  "banh-mi": [group("banh-mi-protein", "Choose protein", ["Chicken", "Pork", "Beef", "Tofu"])],
  "banh-mi-menu": [group("banh-mi-menu-protein", "Choose protein", ["Chicken", "Pork", "Beef", "Tofu"])],
  "viet-coffee": [group("coffee-temp", "Served", ["Iced", "Hot"])],
  "viet-coffee-menu": [group("coffee-menu-temp", "Served", ["Iced", "Hot"])],
  "bubble-tea": [group("bubble-base", "Tea", ["Black milk tea", "Thai tea"])],
  soda: [
    group("soda-choice", "Drink", [
      "Coke",
      "Diet Coke",
      "Orange Fanta",
      "Minute Maid lemonade",
      "Fuze raspberry iced tea",
      "Bottled water",
    ]),
  ],
  smoothies: [group("smoothie-flavor", "Flavor", ["Strawberry", "Mango", "Avocado"])],
  "bo-kho": [group("bo-kho-side", "Served with", ["French baguette", "As a pho bowl"])],
};

const phoExtras: ModifierGroup = {
  id: "pho-extras",
  name: "Extras",
  required: false,
  selection: "multiple",
  min: 0,
  max: 2,
  options: [
    { id: "extra-meat", name: "Extra meat", priceDelta: 3 },
    { id: "extra-noodles", name: "Extra noodles", priceDelta: 2 },
  ],
};

const phoExtraItemIds = new Set(["pho", "special-pho", "special-pho-entree", "veg-pho"]);

export function findMenuItem(itemId: string): MenuItem | undefined {
  for (const category of menuCategories) {
    const match = category.items.find((item) => item.id === itemId);
    if (match) return match;
  }
  return undefined;
}

export function getModifierGroups(item: MenuItem): ModifierGroup[] {
  const confirmed = item.modifierGroups ?? confirmedGroups[item.id] ?? [];
  const extras = phoExtraItemIds.has(item.id) ? [phoExtras] : [];
  return [...confirmed, ...extras];
}

export function itemNeedsCustomization(item: MenuItem): boolean {
  return getModifierGroups(item).length > 0;
}

export function isOrderable(item: MenuItem): boolean {
  return item.orderable !== false;
}

export function formatMoney(amount: number): string {
  return `$${amount.toFixed(amount % 1 === 0 ? 0 : 2)}`;
}

export function isOpenAt(date: Date): boolean {
  const hours = weekdayHours[date.getDay()];
  if (!hours) return false;
  const now = date.getHours() + date.getMinutes() / 60;
  return now >= hours.openHour && now < hours.closeHour;
}

export type PickupSlot = {
  id: string;
  label: string;
  iso: string;
  sample: true;
};

export function getSamplePickupSlots(from = new Date(), count = 8): PickupSlot[] {
  const slots: PickupSlot[] = [];
  const cursor = new Date(from);
  cursor.setMinutes(cursor.getMinutes() < 30 ? 30 : 60, 0, 0);

  for (let step = 0; step < 48 && slots.length < count; step += 1) {
    const hours = weekdayHours[cursor.getDay()];
    if (hours) {
      const value = cursor.getHours() + cursor.getMinutes() / 60;
      if (value >= hours.openHour && value < hours.closeHour) {
        slots.push({
          id: cursor.toISOString(),
          iso: cursor.toISOString(),
          sample: true,
          label: cursor.toLocaleString("en-US", {
            weekday: "short",
            hour: "numeric",
            minute: "2-digit",
          }),
        });
      }
    }
    cursor.setMinutes(cursor.getMinutes() + 30);
  }
  return slots;
}
