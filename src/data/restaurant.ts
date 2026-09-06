export const restaurant = {
  name: "PHO•NOM1NAL",
  shortName: "PHO•NOM1NAL",
  tagline: "Authentic Vietnamese Cuisine in Allentown",
  cuisine: "Vietnamese",
  phoneDisplay: "610-477-1144",
  phoneTel: "+16104771144",
  instagramHandle: "pho.nom1nal",
  instagramUrl: "https://www.instagram.com/pho.nom1nal/",
  websiteUrl: "https://pho-nominal.com",
  googleReviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=PHO%20NOM1NAL%20319%20S%20Cedar%20Crest%20Blvd%20Allentown%20PA",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=319%20S%20Cedar%20Crest%20Blvd%2C%20Allentown%2C%20PA%2018103",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=319%20S%20Cedar%20Crest%20Blvd%2C%20Allentown%2C%20PA%2018103&z=16&output=embed",
  address: {
    street: "319 S Cedar Crest Blvd",
    city: "Allentown",
    state: "PA",
    zip: "18103",
    line: "319 S Cedar Crest Blvd, Allentown, PA 18103",
  },
  hours: [
    { days: "Tuesday–Saturday", shortDays: "Tue–Sat", time: "11 AM–9 PM" },
    { days: "Sunday", shortDays: "Sun", time: "11 AM–8 PM" },
    { days: "Monday", shortDays: "Mon", time: "Closed" },
  ],
  schemaHours: [
    "Tu 11:00-21:00",
    "We 11:00-21:00",
    "Th 11:00-21:00",
    "Fr 11:00-21:00",
    "Sa 11:00-21:00",
    "Su 11:00-20:00",
  ],
  // EDITABLE: Award / recognition copy
  award: {
    eyebrow: "Lehigh Valley Style",
    title: "Best Pho",
    year: "2026",
    source: "Lehigh Valley Style",
    full: "Best Pho – Lehigh Valley Style 2026",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/visit", label: "Visit" },
] as const;

export const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/visit", label: "Visit" },
] as const;
