import { Check, ExternalLink, Navigation } from "lucide-react";
import { BUSINESS, DIRECTIONS_URL } from "../lib/config";
import IMG from "../lib/images";
import { btn, Reveal, SectionHead } from "./ui";

const SUPPLY_LIST = [
  "Motor & water pumps",
  "PVC & CPVC pipes",
  "Sanitary ware",
  "Taps & bathroom fittings",
  "Valves & connectors",
  "Construction essentials",
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 border-y border-line bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal className="relative order-2 lg:order-1">
            <div
              aria-hidden
              className="absolute -top-3 -left-3 h-full w-full rounded-xl border border-line bg-cream md:-top-4 md:-left-4"
            />
            <figure className="relative">
              <img
                src={IMG.storeFront}
                alt="Om Kapgate Agency — store and signage on Main Road, Sadak Arjuni"
                loading="lazy"
                className="aspect-[4/3] w-full rounded-xl border border-line object-cover shadow-lift"
              />
            </figure>
          </Reveal>

          <Reveal delay={120} className="order-1 lg:order-2">
            <SectionHead
              eyebrow="About Us"
              title="Your Local Partner for Construction & Plumbing Needs"
            />
            <div className="mt-4 space-y-3.5 text-[15px] leading-relaxed text-muted">
              <p>
                Om Kapgate Agency is a local plumbing and construction-material store on the Main
                Road in Sadak Arjuni, Gondia district. We supply the everyday material that goes
                into homes — from the pump that lifts your water to the last washer in a tap.
              </p>
              <p>
                Whether you are building a new house, redoing a bathroom or fixing a water line,
                you can walk in, describe the work and get the material you need — with a little
                guidance along the way. We serve customers in Sadak Arjuni and the surrounding
                towns and villages.
              </p>
            </div>

            <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
              {SUPPLY_LIST.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-ink/85">
                  <span className="grid size-5 shrink-0 place-items-center rounded-full bg-accent/12 text-accent-dark">
                    <Check className="size-3" strokeWidth={3} aria-hidden />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={DIRECTIONS_URL} target="_blank" rel="noreferrer" className={btn.accent}>
                <Navigation className="size-4" aria-hidden />
                Visit Our Store
              </a>
              <a
                href={BUSINESS.justdial}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy underline decoration-accent decoration-2 underline-offset-4 transition hover:text-blue"
              >
                See our Justdial listing
                <ExternalLink className="size-3.5" aria-hidden />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
