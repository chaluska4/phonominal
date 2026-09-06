export function PageHeader({
  eyebrow,
  title,
  children,
  prominent = false,
  largeLede = false,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
  prominent?: boolean;
  largeLede?: boolean;
}) {
  return (
    <header className="px-5 pt-10 pb-6 md:px-8 md:pt-14">
      <div className="mx-auto max-w-6xl">
        <p
          className={`font-display tracking-[0.2em] text-chili uppercase ${
            prominent ? "text-lg md:text-2xl" : "text-[12px]"
          }`}
        >
          {eyebrow}
        </p>
        <h1 className="mt-2 font-display text-5xl tracking-tight uppercase md:text-6xl">{title}</h1>
        {children ? (
          <div
            className={
              largeLede
                ? "mt-5 max-w-4xl text-2xl leading-snug text-ink md:text-3xl md:leading-snug"
                : prominent
                  ? "mt-5 max-w-3xl text-xl leading-relaxed text-ink md:text-2xl md:leading-relaxed"
                  : "mt-4 max-w-2xl text-ink-soft"
            }
          >
            {children}
          </div>
        ) : null}
      </div>
    </header>
  );
}
