"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { CART_STORAGE_KEY } from "@/data/ordering";
import { cartCount, createLineId, type CartLine, type CartSelections } from "@/lib/cart";
import type { MenuItem } from "@/data/menu";

type CustomizeTarget = {
  item: MenuItem;
  line?: CartLine;
};

type CartContextValue = {
  ready: boolean;
  lines: CartLine[];
  count: number;
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  customize: CustomizeTarget | null;
  openCustomize: (item: MenuItem, line?: CartLine) => void;
  closeCustomize: () => void;
  addLine: (input: { itemId: string; quantity: number; selections: CartSelections; instructions: string }) => void;
  updateLine: (lineId: string, patch: Partial<Pick<CartLine, "quantity" | "selections" | "instructions">>) => void;
  removeLine: (lineId: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [ready, setReady] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [customize, setCustomize] = useState<CustomizeTarget | null>(null);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(CART_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as CartLine[];
        if (Array.isArray(parsed)) setLines(parsed);
      }
    } catch {
      /* ignore broken demo storage */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(lines));
  }, [lines, ready]);

  const addLine = useCallback(
    (input: { itemId: string; quantity: number; selections: CartSelections; instructions: string }) => {
      setLines((current) => [
        ...current,
        {
          lineId: createLineId(),
          itemId: input.itemId,
          quantity: input.quantity,
          selections: input.selections,
          instructions: input.instructions,
        },
      ]);
    },
    [],
  );

  const updateLine = useCallback(
    (lineId: string, patch: Partial<Pick<CartLine, "quantity" | "selections" | "instructions">>) => {
      setLines((current) =>
        current
          .map((line) => (line.lineId === lineId ? { ...line, ...patch } : line))
          .filter((line) => line.quantity > 0),
      );
    },
    [],
  );

  const removeLine = useCallback((lineId: string) => {
    setLines((current) => current.filter((line) => line.lineId !== lineId));
  }, []);

  const clearCart = useCallback(() => setLines([]), []);

  const openCustomize = useCallback((item: MenuItem, line?: CartLine) => {
    setCustomize({ item, line });
  }, []);

  const closeCustomize = useCallback(() => setCustomize(null), []);

  const value = useMemo(
    () => ({
      ready,
      lines,
      count: cartCount(lines),
      cartOpen,
      setCartOpen,
      customize,
      openCustomize,
      closeCustomize,
      addLine,
      updateLine,
      removeLine,
      clearCart,
    }),
    [ready, lines, cartOpen, customize, addLine, updateLine, removeLine, clearCart, openCustomize, closeCustomize],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
