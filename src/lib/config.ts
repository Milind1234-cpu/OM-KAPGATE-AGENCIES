/**
 * ─────────────────────────────────────────────────────────────────────
 *  BUSINESS CONFIG — edit everything here before going live.
 *
 *  ⚠️  PHONE & WHATSAPP are intentionally blank.
 *      Add the store's real numbers below (digits only, with country
 *      code, e.g. "919876543210") and every Call / WhatsApp button
 *      on the site will start working automatically.
 *
 *  ⚠️  LOGO — place the official logo at  public/logo.png  and set
 *      logoImage = "/logo.png" below. It will replace the placeholder
 *      mark in the header and footer as-is (never stretched).
 * ─────────────────────────────────────────────────────────────────────
 */

export const BUSINESS = {
  name: "Om Kapgate Agency",
  tagline: "Pumps · Pipes · Sanitary · Plumbing Materials",
  addressLine: "Main Road, Sadak Arjuni, Gondia, Maharashtra, India",
  addressShort: "Main Road, Sadak Arjuni, Gondia",
  area: "Sadak Arjuni, Gondia (Maharashtra)",

  phone: "", // ← UPDATE: e.g. "919876543210" (country code + number, digits only)
  phoneDisplay: "", // ← UPDATE: e.g. "+91 98765 43210" (shown on the site)

  whatsapp: "", // ← UPDATE: e.g. "919876543210" (country code + number, digits only)

  logoImage: "", // ← UPDATE when the official logo file is added, e.g. "/logo.png"

  instagram: "https://www.instagram.com/vakratund_misal_alandi/",
  justdial:
    "https://www.justdial.com/Gondia/Om-Kapgate-Agency-Front-Of-Dr-Kore-Sadak-Arjuni/9999P7184-7184-140720140712-B1E2_BZDET",
};

/* WhatsApp message templates (as specified by the business) */
export const WA_DEFAULT =
  "Hello Om Kapgate Agency, I would like to enquire about your products. Please help me with availability and details.";

export const waProductMsg = (productName: string) =>
  `Hello Om Kapgate Agency, I am interested in ${productName}. Please share availability and details.`;

/** Returns a wa.me link, or null until the WhatsApp number is configured. */
export function waLink(message: string): string | null {
  if (!BUSINESS.whatsapp) return null;
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Returns a tel: link, or null until the phone number is configured. */
export function telLink(): string | null {
  if (!BUSINESS.phone) return null;
  return `tel:+${BUSINESS.phone}`;
}

export const hasPhone = () => Boolean(BUSINESS.phone);
export const hasWhatsApp = () => Boolean(BUSINESS.whatsapp);

/** Google Maps — search-based links so no coordinates are invented. */
export const DIRECTIONS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "Om Kapgate Agency, Main Road, Sadak Arjuni, Gondia, Maharashtra"
)}`;

export const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  "Om Kapgate Agency, Main Road, Sadak Arjuni, Gondia, Maharashtra"
)}&output=embed`;
