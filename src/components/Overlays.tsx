import { Navigation, Phone } from "lucide-react";
import { DIRECTIONS_URL, telLink, waLink, WA_DEFAULT } from "../lib/config";
import { WhatsAppIcon } from "./ui";

/** Floating WhatsApp button (sits above the mobile bottom bar). */
export function WhatsAppFab() {
  const href = waLink(WA_DEFAULT) ?? "#contact";
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      aria-label="Chat with Om Kapgate Agency on WhatsApp"
      className="fixed right-4 bottom-[84px] z-40 grid size-12 place-items-center rounded-full bg-wa text-white shadow-lift transition hover:scale-105 hover:bg-wa-dark md:right-6 md:bottom-6 md:size-13"
    >
      <WhatsAppIcon className="size-6" />
    </a>
  );
}

/** Fixed mobile action bar — Call · WhatsApp · Directions */
export function MobileActionBar() {
  const callHref = telLink() ?? "#contact";
  const waHref = waLink(WA_DEFAULT) ?? "#contact";
  const itemCls =
    "flex flex-col items-center justify-center gap-1 py-2.5 text-[11px] font-bold transition active:bg-cream";

  return (
    <nav
      aria-label="Quick contact actions"
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-line bg-white md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a href={callHref} className={`${itemCls} text-blue`}>
        <Phone className="size-5" aria-hidden />
        Call
      </a>
      <a href={waHref} className={`${itemCls} border-x border-line text-wa-dark`}>
        <WhatsAppIcon className="size-5" />
        WhatsApp
      </a>
      <a href={DIRECTIONS_URL} target="_blank" rel="noreferrer" className={`${itemCls} text-navy`}>
        <Navigation className="size-5" aria-hidden />
        Directions
      </a>
    </nav>
  );
}
