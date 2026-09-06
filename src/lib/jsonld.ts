import { restaurant } from "@/data/restaurant";

export function restaurantJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: restaurant.name,
    image: ["/brand/logo.png", "/images/special-pho.jpg"],
    url: restaurant.websiteUrl,
    telephone: restaurant.phoneTel,
    servesCuisine: restaurant.cuisine,
    priceRange: "$",
    address: {
      "@type": "PostalAddress",
      streetAddress: restaurant.address.street,
      addressLocality: restaurant.address.city,
      addressRegion: restaurant.address.state,
      postalCode: restaurant.address.zip,
      addressCountry: "US",
    },
    openingHours: restaurant.schemaHours,
    sameAs: [restaurant.instagramUrl],
    menu: `${restaurant.websiteUrl}/menu`,
  };
}
