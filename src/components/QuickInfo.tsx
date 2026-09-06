import { restaurant } from "@/data/restaurant";

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-chili" fill="none" aria-hidden="true">
      <path
        d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="10" r="2.3" fill="currentColor" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-chili" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 7.5V12l3.2 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-chili" fill="none" aria-hidden="true">
      <path
        d="M8.2 3.8h2.4l1.2 3.1-1.6 1.2a12.2 12.2 0 0 0 6.7 6.7l1.2-1.6 3.1 1.2v2.4c0 .8-.6 1.5-1.4 1.6-8 .9-14.6-5.7-13.7-13.7.1-.8.8-1.4 1.6-1.4Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function QuickInfo() {
  return (
    <section className="bg-paper px-5 py-8 md:px-8" aria-label="Restaurant information">
      <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
        <a
          href={restaurant.mapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-5 shadow-[0_0_0_1px_var(--line)] transition-transform hover:-translate-y-0.5"
        >
          <div className="flex items-center gap-2.5">
            <PinIcon />
            <p className="font-display text-[11px] tracking-[0.22em] text-chili uppercase">Location</p>
          </div>
          <p className="mt-3 font-display text-xl leading-tight tracking-tight uppercase">
            {restaurant.address.street}
          </p>
          <p className="mt-1 text-sm text-muted">
            {restaurant.address.city}, {restaurant.address.state} {restaurant.address.zip}
          </p>
        </a>
        <div className="bg-white p-5 shadow-[0_0_0_1px_var(--line)]">
          <div className="flex items-center gap-2.5">
            <ClockIcon />
            <p className="font-display text-[11px] tracking-[0.22em] text-chili uppercase">Hours</p>
          </div>
          <ul className="mt-3 space-y-1.5">
            {restaurant.hours.map((row) => (
              <li key={row.days} className="flex justify-between gap-4 text-sm">
                <span>{row.shortDays}</span>
                <span className="price-ticket">{row.time}</span>
              </li>
            ))}
          </ul>
        </div>
        <a
          href={`tel:${restaurant.phoneTel}`}
          className="bg-white p-5 shadow-[0_0_0_1px_var(--line)] transition-transform hover:-translate-y-0.5"
        >
          <div className="flex items-center gap-2.5">
            <PhoneIcon />
            <p className="font-display text-[11px] tracking-[0.22em] text-chili uppercase">Call</p>
          </div>
          <p className="mt-3 font-display text-xl tracking-tight uppercase">
            {restaurant.phoneDisplay}
          </p>
          <p className="mt-1 text-sm text-muted">Tap to call from your phone</p>
        </a>
      </div>
    </section>
  );
}
