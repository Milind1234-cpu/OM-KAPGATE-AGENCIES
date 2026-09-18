import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "../utils/cn";

/* ── Scroll reveal wrapper ─────────────────────────────────────────── */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-visible");
            io.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn("reveal", className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* ── Section heading ───────────────────────────────────────────────── */
export function SectionHead({
  eyebrow,
  title,
  sub,
  light = false,
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <p
        className={cn(
          "flex items-center gap-2.5 text-[11px] font-bold tracking-[0.2em] uppercase",
          light ? "text-accent" : "text-accent-dark"
        )}
      >
        <span aria-hidden className={cn("h-px w-7", light ? "bg-accent" : "bg-accent/80")} />
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-3 font-display text-[26px] font-extrabold tracking-tight text-pretty sm:text-[34px] sm:leading-[1.15]",
          light ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {sub && (
        <p className={cn("mt-3.5 text-[15px] leading-relaxed md:text-base", light ? "text-white/65" : "text-muted")}>
          {sub}
        </p>
      )}
    </div>
  );
}

/* ── Button styles ─────────────────────────────────────────────────── */
export const btn = {
  primary:
    "inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-blue px-5 text-sm font-semibold text-white shadow-card transition hover:bg-blue-dark",
  navy:
    "inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-navy px-5 text-sm font-semibold text-white shadow-card transition hover:bg-deep",
  accent:
    "inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-accent px-5 text-sm font-semibold text-white shadow-card transition hover:bg-accent-dark",
  wa:
    "inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-wa px-5 text-sm font-semibold text-white shadow-card transition hover:bg-wa-dark",
  outline:
    "inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-navy/25 bg-white px-5 text-sm font-semibold text-navy transition hover:border-navy/50 hover:bg-cream/60",
  outlineLight:
    "inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-white/25 px-5 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/5",
};

/* ── WhatsApp glyph (Lucide has no brand icon) ─────────────────────── */
export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

/* ── Instagram glyph (brand icon, not in Lucide) ───────────────────── */
export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

/* ── Brand / logo ──────────────────────────────────────────────────── */
/*
 * Placeholder monogram shown until the official logo is supplied.
 * To use the real logo: add the file (e.g. public/logo.png) and set
 * logoImage: "/logo.png" in src/lib/config.ts — it will render as-is.
 */
export function Brand({ light = false, onClick }: { light?: boolean; onClick?: () => void }) {
  return (
    <a href="#home" onClick={onClick} aria-label="Om Kapgate Agency — home" className="inline-flex shrink-0 items-center gap-2.5">
      <svg viewBox="0 0 48 48" className="h-10 w-10 md:h-11 md:w-11" aria-hidden="true">
        <rect width="48" height="48" rx="10" fill="#10314e" />
        <path
          d="M24 9.5c6.2 8.3 10.8 14 10.8 19.2a10.8 10.8 0 1 1-21.6 0c0-5.2 4.6-10.9 10.8-19.2z"
          fill="#ffffff"
        />
        <path d="M30.6 29.4a6.8 6.8 0 0 1-6.6 6.5" stroke="#dd8a1b" strokeWidth="2.6" strokeLinecap="round" fill="none" />
      </svg>
      <span className="leading-none">
        <span className={cn("block font-display text-[17px] font-extrabold tracking-tight md:text-lg", light ? "text-white" : "text-navy")}>
          Om Kapgate
        </span>
        <span className="mt-1 block text-[10px] font-bold tracking-[0.26em] uppercase" style={{ color: light ? "#dd8a1b" : "#bd730f" }}>
          Agency
        </span>
      </span>
    </a>
  );
}
