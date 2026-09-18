import {
  BadgeCheck,
  Bath,
  Boxes,
  Building2,
  Hammer,
  Handshake,
  HardHat,
  House,
  HousePlus,
  Layers,
  Lightbulb,
  MapPin,
  PaintRoller,
  Quote,
  ShieldCheck,
  UsersRound,
  Wrench,
  Droplets,
  type LucideIcon,
} from "lucide-react";
import { USE_CASES } from "../lib/data";
import { waLink, WA_DEFAULT } from "../lib/config";
import { Reveal, SectionHead, WhatsAppIcon } from "./ui";

/* ── Trust strip ─────────────────────────────────────────────────────── */
const TRUST: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: BadgeCheck, title: "Quality Products", text: "Material we would trust in our own homes." },
  { icon: Boxes, title: "Wide Product Range", text: "Pumps to pipe fittings, all under one roof." },
  { icon: Handshake, title: "Helpful Guidance", text: "Tell us the work — we'll help you pick right." },
  { icon: MapPin, title: "Local Convenience", text: "Easy to reach on the Main Road, Sadak Arjuni." },
];

export function TrustStrip() {
  return (
    <section className="border-y border-line bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-6 px-4 py-8 sm:px-6 lg:grid-cols-4 lg:px-8">
        {TRUST.map((t) => (
          <div key={t.title} className="flex items-start gap-3">
            <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-accent/12 text-accent-dark">
              <t.icon className="size-5" aria-hidden />
            </span>
            <span>
              <span className="block font-display text-sm font-bold text-navy md:text-[15px]">{t.title}</span>
              <span className="mt-0.5 block text-[13px] leading-snug text-muted">{t.text}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Why choose us ───────────────────────────────────────────────────── */
const WHY: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: ShieldCheck,
    title: "Quality-focused products",
    text: "We keep material we can stand behind, and avoid the substandard stuff.",
  },
  {
    icon: Layers,
    title: "Wide selection",
    text: "Most day-to-day plumbing and construction essentials, under one roof.",
  },
  {
    icon: Lightbulb,
    title: "Helpful guidance",
    text: "Not sure about size or type? Describe the work and we'll figure it out together.",
  },
  {
    icon: MapPin,
    title: "Easy local access",
    text: "Right on the Main Road in Sadak Arjuni — no long trips to the city.",
  },
  {
    icon: UsersRound,
    title: "Homes & professionals",
    text: "Whether you are building your home or doing this work daily, we serve both.",
  },
  {
    icon: Handshake,
    title: "Customer-focused service",
    text: "Straight answers, fair dealing, and help even after the sale.",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="scroll-mt-24 bg-navy">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <Reveal>
          <SectionHead
            light
            eyebrow="Why Us"
            title="Why Choose Om Kapgate Agency?"
            sub="We keep things simple — dependable material, honest guidance, and a store that is easy to reach."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:mt-12">
          {WHY.map((w, i) => (
            <Reveal key={w.title} delay={i * 60}>
              <div className="h-full rounded-xl border border-white/10 bg-white/[0.04] p-5 md:p-6">
                <span className="grid size-10 place-items-center rounded-lg bg-accent/15 text-accent">
                  <w.icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-4 font-display text-[16px] font-bold text-white">{w.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/65">{w.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Who we serve ────────────────────────────────────────────────────── */
const SERVE: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: House,
    title: "Homeowners",
    text: "Building a new home or fixing a bathroom? Walk in with your requirement and leave with the right material.",
  },
  {
    icon: Wrench,
    title: "Plumbers",
    text: "Common sizes, everyday spares and quick counter service so your site work doesn't wait.",
  },
  {
    icon: HardHat,
    title: "Contractors",
    text: "One local stop for bulk plumbing and construction material across a project.",
  },
  {
    icon: Building2,
    title: "Builders",
    text: "A nearby source for plumbing, sanitary and finishing essentials on your sites.",
  },
];

export function WhoWeServe() {
  return (
    <section className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <Reveal>
          <SectionHead
            eyebrow="Who We Serve"
            title="Material and Support for Every Kind of Customer"
            sub="Different customers, same counter. Here is how we usually help."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 md:mt-12">
          {SERVE.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <div className="h-full rounded-xl border border-line bg-white p-5 shadow-card transition-colors hover:border-accent/50 md:p-6">
                <span className="grid size-11 place-items-center rounded-lg bg-navy/5 text-navy">
                  <s.icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-4 font-display text-[16px] font-bold text-navy">{s.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted md:text-sm">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Use cases ───────────────────────────────────────────────────────── */
const USE_CASE_ICONS: Record<string, LucideIcon> = {
  construction: HousePlus,
  bath: Bath,
  wrench: Wrench,
  water: Droplets,
  renovation: PaintRoller,
  repair: Hammer,
};

export function UseCases() {
  return (
    <section className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <Reveal>
          <SectionHead
            eyebrow="Common Requirements"
            title="What Customers Usually Come In For"
            sub="If your work falls under one of these, come by — we deal in this material every day."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:mt-12">
          {USE_CASES.map((u, i) => {
            const Icon = USE_CASE_ICONS[u.icon] ?? Wrench;
            return (
              <Reveal key={u.title} delay={i * 50}>
                <div className="flex h-full items-start gap-4 rounded-xl border border-line bg-paper p-5">
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-navy/5 text-navy">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <span>
                    <h3 className="font-display text-[15px] font-bold text-navy">{u.title}</h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-muted">{u.text}</p>
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── How it works ────────────────────────────────────────────────────── */
const STEPS = [
  {
    n: "01",
    title: "Tell Us What You Need",
    text: "Contact us through phone or WhatsApp — mention the item, or simply the work you are doing.",
  },
  {
    n: "02",
    title: "Get Guidance",
    text: "We help you identify the right product, size and the small parts that go with it.",
  },
  {
    n: "03",
    title: "Visit & Purchase",
    text: "Come to the store on the Main Road, check the material and take it with you.",
  },
];

export function HowItWorks() {
  const waHref = waLink(WA_DEFAULT) ?? "#contact";
  return (
    <section className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <Reveal>
          <SectionHead
            eyebrow="Simple Process"
            title="How It Works"
            sub="From a message to the right material in three steps."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3 md:mt-12">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 70}>
              <div className="relative h-full rounded-xl border border-line bg-white p-6 shadow-card">
                <span className="inline-flex rounded-md bg-navy/5 px-2.5 py-1 font-display text-sm font-extrabold tracking-wide text-navy">
                  {s.n}
                </span>
                <h3 className="mt-4 font-display text-[17px] font-bold text-navy">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-xl bg-navy px-5 py-4 md:px-6">
            <p className="text-sm leading-relaxed text-white/85">
              <span className="font-semibold text-white">Have a full material list?</span>{" "}
              Send it on WhatsApp and we will go through it with you.
            </p>
            <a
              href={waHref}
              className="inline-flex h-10 items-center gap-2 rounded-lg bg-wa px-4 text-sm font-semibold text-white transition hover:bg-wa-dark"
            >
              <WhatsAppIcon className="size-4" />
              Send List on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Reviews (placeholders only — no invented feedback) ─────────────── */
export function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <Reveal>
          <SectionHead
            eyebrow="Reviews"
            title="What Our Customers Say"
            sub="We are collecting genuine feedback from our customers. Real reviews will be published here soon."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3 md:mt-12">
          {[0, 1, 2].map((i) => (
            <Reveal key={i} delay={i * 60}>
              <figure className="flex h-full flex-col rounded-xl border border-dashed border-line bg-paper p-6">
                <Quote className="size-6 text-accent" aria-hidden />
                <figcaption className="mt-4 font-display text-[15px] font-bold text-navy">
                  Verified Customer Review
                </figcaption>
                <blockquote className="mt-1.5 flex-1 text-sm leading-relaxed text-muted">
                  Add genuine customer feedback here.
                </blockquote>
                <div className="mt-5 flex items-center justify-between border-t border-line/80 pt-4">
                  <span className="text-xs text-muted italic">— Customer Name</span>
                  <span className="rounded-full border border-line bg-white px-2 py-0.5 text-[10px] font-bold tracking-wider text-muted uppercase">
                    Placeholder
                  </span>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-muted">
          Placeholder cards — they will be replaced with real customer reviews.
        </p>
      </div>
    </section>
  );
}
