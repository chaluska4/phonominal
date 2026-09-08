import { restaurant } from "@/data/restaurant";

export function AwardSection() {
  const { award } = restaurant;

  return (
    <section className="bg-ink px-5 py-16 text-white md:px-8 md:py-20" aria-labelledby="award-heading">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center md:flex-row md:text-left">
        <div
          className="grid h-36 w-36 shrink-0 place-items-center rounded-full border-[3px] border-chili-bright text-chili-bright"
          aria-hidden="true"
        >
          <div className="rotate-[-8deg]">
            <p className="font-display text-[11px] tracking-[0.28em] uppercase">{award.year}</p>
            <p className="font-display text-3xl leading-none font-semibold tracking-wide uppercase">
              {award.title}
            </p>
          </div>
        </div>
        <div>
          <p className="font-display text-[12px] tracking-[0.28em] text-white/55 uppercase">
            Recognition
          </p>
          <h2 id="award-heading" className="mt-2 font-display text-3xl tracking-tight uppercase md:text-5xl">
            {award.full}
          </h2>
          <p className="mt-4 max-w-xl text-white/72">
            Named Best Pho by Lehigh Valley Style in 2026.
          </p>
        </div>
      </div>
    </section>
  );
}
