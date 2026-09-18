import { useEffect, useState, type FormEvent } from "react";
import {
  CheckCircle2,
  ChevronRight,
  Clock,
  ExternalLink,
  Info,
  MapPin,
  Navigation,
  Phone,
  Send,
} from "lucide-react";
import {
  BUSINESS,
  DIRECTIONS_URL,
  MAP_EMBED_URL,
  hasPhone,
  telLink,
  waLink,
  WA_DEFAULT,
} from "../lib/config";
import { btn, Reveal, SectionHead, WhatsAppIcon } from "./ui";
import { cn } from "../utils/cn";

/* ── Location ─────────────────────────────────────────────────────────── */
function Location() {
  return (
    <section id="location" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <Reveal>
          <SectionHead
            eyebrow="Location"
            title="Visit Om Kapgate Agency"
            sub="We are right on the Main Road in Sadak Arjuni — easy to reach from the town and nearby villages."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-5 md:mt-12">
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col rounded-xl border border-line bg-white p-6 shadow-card">
              <address className="flex items-start gap-3 not-italic">
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-navy/5 text-navy">
                  <MapPin className="size-5" aria-hidden />
                </span>
                <span>
                  <span className="block font-display text-[15px] font-bold text-navy">Store Address</span>
                  <span className="mt-1 block text-sm leading-relaxed text-muted">
                    {BUSINESS.addressLine}
                  </span>
                </span>
              </address>

              <div className="mt-5 flex items-start gap-3 border-t border-line/70 pt-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-navy/5 text-navy">
                  <Clock className="size-5" aria-hidden />
                </span>
                <span>
                  <span className="block font-display text-[15px] font-bold text-navy">Store Timings</span>
                  <span className="mt-1 block text-sm text-muted">
                    Please call or message to confirm timings before a long trip.
                  </span>
                </span>
              </div>

              <div className="mt-5 flex items-start gap-3 border-t border-line/70 pt-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-navy/5 text-navy">
                  <Phone className="size-5" aria-hidden />
                </span>
                <span>
                  <span className="block font-display text-[15px] font-bold text-navy">Phone</span>
                  <span className="mt-1 block text-sm text-muted">
                    {hasPhone() ? BUSINESS.phoneDisplay : "Number will be updated here shortly."}
                  </span>
                </span>
              </div>

              <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
                <a href={DIRECTIONS_URL} target="_blank" rel="noreferrer" className={btn.primary}>
                  <Navigation className="size-4" aria-hidden />
                  Get Directions
                </a>
                <a
                  href={BUSINESS.justdial}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy underline decoration-accent decoration-2 underline-offset-4 transition hover:text-blue"
                >
                  Justdial listing
                  <ExternalLink className="size-3.5" aria-hidden />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-3">
            <div className="h-full overflow-hidden rounded-xl border border-line shadow-card">
              <iframe
                title="Map showing the Sadak Arjuni area — Om Kapgate Agency location to be verified"
                src={MAP_EMBED_URL}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[320px] w-full border-0 md:h-[420px]"
              />
            </div>
            <p className="mt-2.5 flex items-start gap-1.5 text-xs text-muted">
              <Info className="mt-0.5 size-3.5 shrink-0" aria-hidden />
              Map currently shows the Sadak Arjuni area. It will be linked to our verified Google Maps
              listing pin.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── Contact ──────────────────────────────────────────────────────────── */
const inputCls =
  "h-11 w-full rounded-lg border border-line bg-white px-3.5 text-sm text-ink placeholder:text-muted/60 focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/15";
const labelCls = "mb-1.5 block text-xs font-bold tracking-wide text-navy";

function Contact({ prefill }: { prefill: string }) {
  const [form, setForm] = useState({ name: "", phone: "", need: "", msg: "" });
  const [status, setStatus] = useState<null | "wa" | "manual">(null);

  useEffect(() => {
    if (prefill) setForm((f) => ({ ...f, need: prefill }));
  }, [prefill]);

  const callHref = telLink();
  const waHref = waLink(WA_DEFAULT);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const lines = [
      "Hello Om Kapgate Agency,",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.need && `Requirement: ${form.need}`,
      form.msg && `Message: ${form.msg}`,
    ].filter(Boolean);
    const link = waLink(lines.join("\n"));
    if (link) {
      window.open(link, "_blank", "noopener");
      setStatus("wa");
    } else {
      setStatus("manual");
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 border-y border-line bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <Reveal>
          <SectionHead
            eyebrow="Contact"
            title="Looking for Something Specific?"
            sub="Tell us what you need and we'll help you find the right product."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-5 md:mt-12">
          {/* Form */}
          <Reveal className="lg:col-span-3">
            <form
              onSubmit={onSubmit}
              className="rounded-xl border border-line bg-paper p-6 shadow-card md:p-7"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="c-name" className={labelCls}>
                    Name
                  </label>
                  <input
                    id="c-name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label htmlFor="c-phone" className={labelCls}>
                    Phone Number
                  </label>
                  <input
                    id="c-phone"
                    required
                    type="tel"
                    inputMode="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="Your mobile number"
                    className={inputCls}
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="c-need" className={labelCls}>
                  Product / Requirement
                </label>
                <input
                  id="c-need"
                  value={form.need}
                  onChange={(e) => setForm({ ...form, need: e.target.value })}
                  placeholder="e.g. 1 HP monoblock pump, CPVC pipes, tap set…"
                  className={inputCls}
                />
              </div>
              <div className="mt-4">
                <label htmlFor="c-msg" className={labelCls}>
                  Message
                </label>
                <textarea
                  id="c-msg"
                  rows={4}
                  value={form.msg}
                  onChange={(e) => setForm({ ...form, msg: e.target.value })}
                  placeholder="Sizes, quantities or anything else we should know."
                  className="w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:border-blue focus:ring-2 focus:ring-blue/15 focus:outline-none"
                />
              </div>

              <button type="submit" className={cn(btn.primary, "mt-5 h-12 w-full sm:w-auto sm:px-8")}>
                <Send className="size-4" aria-hidden />
                Send Enquiry
              </button>

              {status === "wa" && (
                <p className="mt-4 flex items-start gap-2 rounded-lg border border-wa/30 bg-wa/8 px-3.5 py-2.5 text-[13px] text-ink">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-wa-dark" aria-hidden />
                  Opening WhatsApp with your enquiry filled in. If nothing opened, please call us
                  instead.
                </p>
              )}
              {status === "manual" && (
                <p className="mt-4 flex items-start gap-2 rounded-lg border border-accent/40 bg-accent/8 px-3.5 py-2.5 text-[13px] text-ink">
                  <Info className="mt-0.5 size-4 shrink-0 text-accent-dark" aria-hidden />
                  Our WhatsApp number is being updated. Meanwhile, please call us or visit the
                  store with your requirement.
                </p>
              )}
              <p className="mt-4 text-xs leading-relaxed text-muted">
                Submitting opens WhatsApp with your details filled in. Nothing is stored on this
                website.
              </p>
            </form>
          </Reveal>

          {/* Quick actions */}
          <Reveal delay={100} className="lg:col-span-2">
            <div className="flex h-full flex-col gap-3">
              {callHref ? (
                <a
                  href={callHref}
                  className="group flex items-center gap-4 rounded-xl border border-line bg-white p-4 shadow-card transition hover:border-blue/40 hover:shadow-lift"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-blue text-white">
                    <Phone className="size-5" aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-[15px] font-bold text-navy">Call Us</span>
                    <span className="block truncate text-[13px] text-muted">
                      {BUSINESS.phoneDisplay || "Tap to call the store"}
                    </span>
                  </span>
                  <ChevronRight className="ml-auto size-4 text-muted transition group-hover:text-navy" aria-hidden />
                </a>
              ) : (
                <div className="flex items-center gap-4 rounded-xl border border-dashed border-line bg-white p-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-blue/15 text-blue">
                    <Phone className="size-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block font-display text-[15px] font-bold text-navy">Call Us</span>
                    <span className="block text-[13px] text-muted">Store number will be added here.</span>
                  </span>
                </div>
              )}

              {waHref ? (
                <a
                  href={waHref}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-line bg-white p-4 shadow-card transition hover:border-wa/50 hover:shadow-lift"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-wa text-white">
                    <WhatsAppIcon className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-[15px] font-bold text-navy">WhatsApp Us</span>
                    <span className="block truncate text-[13px] text-muted">
                      Chat with us about any product
                    </span>
                  </span>
                  <ChevronRight className="ml-auto size-4 text-muted transition group-hover:text-navy" aria-hidden />
                </a>
              ) : (
                <div className="flex items-center gap-4 rounded-xl border border-dashed border-line bg-white p-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-wa/15 text-wa-dark">
                    <WhatsAppIcon className="size-5" />
                  </span>
                  <span>
                    <span className="block font-display text-[15px] font-bold text-navy">WhatsApp Us</span>
                    <span className="block text-[13px] text-muted">WhatsApp will be linked here.</span>
                  </span>
                </div>
              )}

              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-line bg-white p-4 shadow-card transition hover:border-accent/60 hover:shadow-lift"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-navy text-white">
                  <Navigation className="size-5" aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-[15px] font-bold text-navy">Get Directions</span>
                  <span className="block truncate text-[13px] text-muted">{BUSINESS.addressShort}</span>
                </span>
                <ChevronRight className="ml-auto size-4 text-muted transition group-hover:text-navy" aria-hidden />
              </a>

              <div className="mt-1 rounded-xl bg-navy p-5">
                <p className="text-sm leading-relaxed text-white/80">
                  <span className="font-semibold text-white">Prefer to talk in person?</span> Walk
                  in with your requirement — describing the work is enough; we'll help with the
                  rest.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function ContactBlock({ prefill }: { prefill: string }) {
  return (
    <>
      <Location />
      <Contact prefill={prefill} />
    </>
  );
}
