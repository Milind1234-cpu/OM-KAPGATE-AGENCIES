import { ArrowRight, MapPin } from "lucide-react";
import { waLink, WA_DEFAULT } from "../lib/config";
import IMG from "../lib/images";
import { btn, Reveal, WhatsAppIcon } from "./ui";

const HERO_CHIPS = ["Pumps", "Pipes", "Sanitary", "Fittings", "Tanks"];

export default function Hero() {
  const waHref = waLink(WA_DEFAULT) ?? "#contact";

  return (
    <section id="home" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 pt-10 pb-14 sm:px-6 md:pt-16 md:pb-20 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
          <Reveal>
            <p className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1.5 text-[11px] font-bold tracking-wider text-muted uppercase">
              <MapPin className="size-3.5 text-accent-dark" aria-hidden />
              Main Road · Sadak Arjuni, Gondia
            </p>

            <h1 className="mt-5 font-display text-[34px] leading-[1.06] font-extrabold tracking-tight text-navy sm:text-[44px] lg:text-[50px]">
              Everything You Need for Your{" "}
              <span className="underline decoration-accent/70 decoration-[3px] underline-offset-6">
                Home &amp; Construction
              </span>{" "}
              Projects
            </h1>

            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-muted md:text-[17px]">
              Quality pumps, pipes, sanitary products, bathroom fittings and essential plumbing
              materials for your home and construction needs in Sadak Arjuni.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a href="#products" className={btn.primary}>
                Explore Products
                <ArrowRight className="size-4" aria-hidden />
              </a>
              <a href="#contact" className={btn.outline}>
                Contact Us
              </a>
              <a href={waHref} className={btn.wa}>
                <WhatsAppIcon className="size-4" />
                WhatsApp Us
              </a>
            </div>

            <p className="mt-6 flex items-center gap-2 text-sm text-muted">
              <MapPin className="size-4 shrink-0 text-accent-dark" aria-hidden />
              Serving customers in Sadak Arjuni and nearby areas.
            </p>
          </Reveal>

          <Reveal delay={140} className="relative">
            <div
              aria-hidden
              className="absolute -top-3 -right-3 h-full w-full rounded-xl border border-line bg-cream md:-top-4 md:-right-4"
            />
            <figure className="relative">
              <img
                src={IMG.storeFront1}
                alt="Om Kapgate Agency store on Main Road, Sadak Arjuni — Falcon pumps and Ashirvad pipes dealer"
                className="aspect-[4/3] w-full rounded-xl border border-line object-cover shadow-lift"
              />
              <div className="absolute right-3 bottom-3 left-3 flex flex-wrap gap-1.5">
                {HERO_CHIPS.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-md bg-navy/85 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
