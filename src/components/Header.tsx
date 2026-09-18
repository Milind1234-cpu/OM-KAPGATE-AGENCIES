import { useEffect, useState } from "react";
import { MapPin, Menu, Phone, X } from "lucide-react";
import { BUSINESS, telLink, waLink, WA_DEFAULT } from "../lib/config";
import { NAV_LINKS } from "../lib/data";
import { Brand, btn, InstagramIcon, WhatsAppIcon } from "./ui";
import { cn } from "../utils/cn";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const callHref = telLink() ?? "#contact";
  const waHref = waLink(WA_DEFAULT) ?? "#contact";

  return (
    <>
      {/* Slim info bar */}
      <div className="hidden bg-deep text-white/75 sm:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 text-[12px] sm:px-6 lg:px-8">
          <p className="flex items-center gap-1.5">
            <MapPin className="size-3.5 text-accent" aria-hidden />
            {BUSINESS.addressShort}
          </p>
          <div className="flex items-center gap-4">
            <a
              href={BUSINESS.justdial}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              Find us on Justdial
            </a>
            <a
              href={BUSINESS.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="transition hover:text-white"
            >
              <InstagramIcon className="size-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={cn(
          "sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur transition-shadow",
          scrolled && "shadow-card"
        )}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 md:h-[72px] lg:px-8">
          <Brand onClick={() => setOpen(false)} />

          <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-semibold text-ink/80 underline-offset-4 transition hover:text-navy hover:underline hover:decoration-accent hover:decoration-2"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2.5 md:flex">
            <a href={callHref} className={cn(btn.outline, "h-10 px-4")}>
              <Phone className="size-4" aria-hidden />
              Call Now
            </a>
            <a href={waHref} className={cn(btn.wa, "h-10 px-4")}>
              <WhatsAppIcon className="size-4" />
              WhatsApp
            </a>
          </div>

          <button
            className="grid size-10 place-items-center rounded-lg border border-line bg-white text-navy lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="border-t border-line bg-paper shadow-lift lg:hidden">
            <nav aria-label="Mobile navigation" className="mx-auto grid max-w-6xl gap-1 px-4 py-4 sm:px-6">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-[15px] font-semibold text-navy transition hover:bg-cream"
                >
                  {l.label}
                </a>
              ))}
              <div className="mt-3 grid grid-cols-2 gap-2.5 border-t border-line pt-4">
                <a href={callHref} onClick={() => setOpen(false)} className={btn.outline}>
                  <Phone className="size-4" aria-hidden />
                  Call Now
                </a>
                <a href={waHref} onClick={() => setOpen(false)} className={btn.wa}>
                  <WhatsAppIcon className="size-4" />
                  WhatsApp
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
