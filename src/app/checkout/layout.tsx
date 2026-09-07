import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout preview",
  description: "Front-end demo of a PHO•NOM1NAL pickup checkout. No orders are sent.",
  robots: { index: false, follow: false },
};

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
