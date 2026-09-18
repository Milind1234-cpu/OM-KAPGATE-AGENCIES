import { ExternalLink, MapPin, Phone } from "lucide-react";
import { BUSINESS, DIRECTIONS_URL, telLink } from "../lib/config";
import { CATEGORIES, NAV_LINKS } from "../lib/data";
import { Brand, InstagramIcon, WhatsAppIcon } from "./ui";

export default function Footer() {
  const callHref = telLink();
  return (
    <footer className="bg-deep text-white/70">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Brand light />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Pumps, pipes, sanitary ware, bathroom fittings and plumbing material for homes and
              construction work in Sadak Arjuni, Gondia.
            </p>
            <div className="mt-5 flex gap-2.5">
              <a
                href={BUSINESS.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid size-9 place-items-center rounded-lg border border-white/15 text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                <InstagramIcon className="size-4" />
              </a>
              <a
                href={BUSINESS.justdial}
                target="_blank"
                rel="noreferrer"
                aria-label="Justdial listing"
                className="grid size-9 place-items-center rounded-lg border border-white/15 text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                <ExternalLink className="size-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <h3 className="font-display text-sm font-bold tracking-wider text-white uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Products */}
          <div>
            <h3 className="font-display text-sm font-bold tracking-wider text-white uppercase">
              Products
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {CATEGORIES.map((c) => (
                <li key={c.id}>
                  <a href="#products" className="transition hover:text-white">
                    {c.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-bold tracking-wider text-white uppercase">
              Contact
            </h3>
            <ul className="mt-4 space-y-3.5 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                {BUSINESS.addressLine}
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                {callHref ? (
                  <a href={callHref} className="transition hover:text-white">
                    {BUSINESS.phoneDisplay}
                  </a>
                ) : (
                  <span>Phone number — to be updated</span>
                )}
              </li>
              <li className="flex items-start gap-2.5">
                <WhatsAppIcon className="mt-0.5 size-4 shrink-0 text-accent" />
                <span>WhatsApp — to be updated</span>
              </li>
            </ul>
            <div className="mt-5 flex flex-col gap-2 text-sm">
              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-white underline decoration-accent decoration-2 underline-offset-4 transition hover:text-accent"
              >
                Get Directions
              </a>
              <a
                href={BUSINESS.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 transition hover:text-white"
              >
                <InstagramIcon className="size-3.5" />
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-[13px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Om Kapgate Agency. All Rights Reserved.</p>
          <p>Main Road, Sadak Arjuni, Gondia, Maharashtra</p>
        </div>
      </div>
    </footer>
  );
}
