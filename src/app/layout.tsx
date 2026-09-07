import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Figtree, IBM_Plex_Mono, Newsreader } from "next/font/google";
import { Footer } from "@/components/Footer";
import { LightboxProvider } from "@/components/Lightbox";
import { Navbar } from "@/components/Navbar";
import { OrderShell } from "@/components/order/OrderShell";
import { restaurant } from "@/data/restaurant";
import { restaurantJsonLd } from "@/lib/jsonld";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin", "vietnamese"],
  style: ["normal", "italic"],
});

const plex = IBM_Plex_Mono({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://pho-nominal.com"),
  title: {
    default: "PHO•NOM1NAL | Vietnamese Restaurant in Allentown, PA",
    template: "%s | PHO•NOM1NAL",
  },
  description:
    "PHO•NOM1NAL serves pho, bánh mì, vermicelli bowls, and Vietnamese coffee at 319 S Cedar Crest Blvd in Allentown, PA. Open Tuesday–Sunday.",
  keywords: [
    "Vietnamese restaurant Allentown",
    "pho Allentown",
    "bánh mì Allentown",
    "PHO NOM1NAL",
  ],
  openGraph: {
    title: "PHO•NOM1NAL | Vietnamese Restaurant in Allentown, PA",
    description:
      "Authentic Vietnamese cuisine on Cedar Crest Blvd — pho, bánh mì, vermicelli, and cà phê.",
    type: "website",
    locale: "en_US",
    siteName: restaurant.name,
    images: [
      {
        url: "/images/special-pho.jpg",
        alt: "Special pho from PHO•NOM1NAL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PHO•NOM1NAL | Vietnamese Restaurant in Allentown, PA",
    description: "Pho, bánh mì, and Vietnamese coffee in Allentown, PA.",
    images: ["/images/special-pho.jpg"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/brand/logo-round.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = restaurantJsonLd();

  return (
    <html
      lang="en"
      className={`${figtree.variable} ${barlow.variable} ${newsreader.variable} ${plex.variable} h-full antialiased`}
    >
      <body className="m-0 block min-h-full w-full bg-paper text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LightboxProvider>
          <OrderShell>
            <div className="block w-full min-w-full">
              <Navbar />
              {children}
              <Footer />
            </div>
          </OrderShell>
        </LightboxProvider>
      </body>
    </html>
  );
}
