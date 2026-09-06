import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { InstagramIcon } from "@/components/icons";
import { restaurant, footerLinks } from "@/data/restaurant";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink px-5 py-14 text-white md:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-4">
        <div>
          <div className="inline-block bg-paper px-3 py-2">
            <BrandLogo />
          </div>
          <p className="mt-4 text-sm leading-6 text-white/65">
            Vietnamese Cuisine on Cedar Crest Blvd in Allentown.
          </p>
        </div>
        <div>
          <p className="font-display text-[11px] tracking-[0.22em] text-white/45 uppercase">Explore</p>
          <ul className="mt-3 space-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/80 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-display text-[11px] tracking-[0.22em] text-white/45 uppercase">Visit</p>
          <p className="mt-3 text-sm leading-6 text-white/80">
            {restaurant.address.street}
            <br />
            {restaurant.address.city}, {restaurant.address.state} {restaurant.address.zip}
          </p>
          <a href={`tel:${restaurant.phoneTel}`} className="mt-3 inline-block text-sm text-white">
            {restaurant.phoneDisplay}
          </a>
        </div>
        <div>
          <p className="font-display text-[11px] tracking-[0.22em] text-white/45 uppercase">Hours</p>
          <ul className="mt-3 space-y-1 text-sm text-white/80">
            {restaurant.hours.map((row) => (
              <li key={row.days}>
                {row.days}: {row.time}
              </li>
            ))}
          </ul>
          <a
            href={restaurant.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
          >
            <InstagramIcon className="h-6 w-6" />
            Instagram
          </a>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-6xl flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row">
        <p>
          © {year} {restaurant.name}. All rights reserved.
        </p>
        <p>Vietnamese restaurant in Allentown, PA</p>
      </div>
    </footer>
  );
}
