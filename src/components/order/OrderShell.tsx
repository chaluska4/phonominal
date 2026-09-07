"use client";

import { CartDrawer } from "@/components/order/CartDrawer";
import { CartProvider } from "@/components/order/CartProvider";
import { ItemCustomizationModal } from "@/components/order/ItemCustomizationModal";

export function OrderShell({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      {children}
      <CartDrawer />
      <ItemCustomizationModal />
    </CartProvider>
  );
}
