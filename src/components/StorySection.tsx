import Image from "next/image";
import Link from "next/link";

export function StorySection() {
  return (
    <section className="bg-white px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden bg-paper-deep">
          <Image
            src="/images/banh-mi.jpg"
            alt="Bánh mì prepared at PHO•NOM1NAL"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <div>
          <p className="font-display text-[12px] tracking-[0.28em] text-chili uppercase">About</p>
          <h2 className="mt-2 font-display text-4xl tracking-tight uppercase md:text-5xl">
            Our Story
          </h2>
          <p className="mt-6 text-[1.05rem] leading-8 text-ink-soft">
            A neighborhood kitchen on Cedar Crest for pho, bánh mì, vermicelli, and
            Vietnamese coffee — focused, fresh, and made to be eaten here in Allentown.
          </p>
          <Link
            href="/about"
            className="mt-7 inline-flex items-center justify-center border border-ink px-5 py-3 font-display text-[13px] tracking-[0.16em] uppercase hover:bg-ink hover:text-white"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
