import {
  BadgeCheck,
  Boxes,
  Handshake,
  Layers,
  Lightbulb,
  MapPin,
  ShieldCheck,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import { Reveal, SectionHead } from "./ui";

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
