export function GoogleG({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.4h6.5c-.3 1.5-1.2 2.8-2.5 3.6v3h4c2.4-2.2 3.5-5.4 3.5-8.7Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.2 0 5.9-1.1 7.9-2.9l-4-3c-1.1.8-2.5 1.2-3.9 1.2-3 0-5.6-2-6.5-4.8H1.4v3.1C3.4 21.4 7.4 24 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.5 14.5c-.2-.7-.4-1.4-.4-2.1s.1-1.5.4-2.1V7.2H1.4C.5 8.9 0 10.4 0 12.4c0 1.9.5 3.5 1.4 5.2l4.1-3.1Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4C17.9 1.1 15.2 0 12 0 7.4 0 3.4 2.6 1.4 6.4l4.1 3.1C6.4 6.7 9 4.8 12 4.8Z"
      />
    </svg>
  );
}

export function GoogleStars({ value, className = "" }: { value: number; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-0.5 ${className}`} aria-hidden="true">
      {Array.from({ length: 5 }, (_, index) => {
        const filled = index + 1 <= Math.round(value);
        return (
          <svg key={index} viewBox="0 0 24 24" className="h-4 w-4">
            <path
              d="M12 17.3 18.2 21l-1.6-7L22 9.2l-7.2-.6L12 2 9.2 8.6 2 9.2 7.4 14 5.8 21 12 17.3Z"
              fill={filled ? "#FABB05" : "#E0E0E0"}
            />
          </svg>
        );
      })}
    </span>
  );
}

export function InstagramIcon({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <span
      className={`inline-grid place-items-center rounded-[11px] ${className}`}
      style={{
        background:
          "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
      }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="h-[58%] w-[58%] fill-white">
        <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
      </svg>
    </span>
  );
}
