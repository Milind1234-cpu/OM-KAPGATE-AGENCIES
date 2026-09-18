import { useMemo, useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import { CATALOG, CATALOG_FILTERS, CATEGORIES } from "../lib/data";
import { Reveal, SectionHead } from "./ui";
import { cn } from "../utils/cn";

interface Props {
  onEnquire: (productName: string) => void;
}

export default function Products({ onEnquire }: Props) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return CATALOG.filter((item) => {
      const inCat = filter === "All" || item.cat === filter;
      if (!inCat) return false;
      if (!q) return true;
      return q
        .split(/\s+/)
        .every((word) => `${item.name} ${item.cat} ${item.desc}`.toLowerCase().includes(word));
    });
  }, [query, filter]);

  return (
    <section id="products" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <Reveal>
          <SectionHead
            eyebrow="Our Products"
            title="Everything You Need Under One Roof"
            sub="Six broad categories covering most of what a home build, bathroom or water connection needs. Not sure what fits your work? Just ask at the counter."
          />
        </Reveal>

        {/* Category cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 md:mt-12">
          {CATEGORIES.map((cat, i) => (
            <Reveal key={cat.id} delay={(i % 3) * 70}>
              <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white shadow-card transition-shadow hover:shadow-lift">
                <div className="overflow-hidden">
                  <img
                    src={cat.img}
                    alt={cat.alt}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-[17px] font-bold text-navy">{cat.name}</h3>
                  <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted">{cat.desc}</p>
                  <button
                    type="button"
                    onClick={() => onEnquire(cat.tag)}
                    className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-lg border border-accent/40 bg-accent/8 px-3.5 py-2 text-[13px] font-bold text-accent-dark transition hover:bg-accent/15"
                  >
                    Enquire Now
                    <ArrowRight className="size-3.5" aria-hidden />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Search / filter */}
        <div className="mt-16 border-t border-line pt-12 md:mt-20 md:pt-14">
          <Reveal>
            <h3 className="font-display text-xl font-extrabold tracking-tight text-navy md:text-2xl">
              Search the Product List
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
              A sample list of what we commonly deal in. If you don't see your item, ask us — the
              store carries more than this list.
            </p>

            <div className="relative mt-6 max-w-xl">
              <Search
                className="pointer-events-none absolute top-1/2 left-4 size-[18px] -translate-y-1/2 text-muted"
                aria-hidden
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="What are you looking for?"
                aria-label="Search products"
                className="h-12 w-full rounded-lg border border-line bg-white pr-4 pl-11 text-[15px] text-ink placeholder:text-muted/70 focus:border-blue focus:ring-2 focus:ring-blue/15 focus:outline-none"
              />
            </div>

            <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Filter products by category">
              {CATALOG_FILTERS.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  aria-pressed={filter === f}
                  className={cn(
                    "h-9 rounded-full border px-4 text-[13px] font-semibold transition",
                    filter === f
                      ? "border-navy bg-navy text-white"
                      : "border-line bg-white text-muted hover:border-navy/40 hover:text-navy"
                  )}
                >
                  {f}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((item) => (
              <article
                key={item.id}
                className="flex flex-col overflow-hidden rounded-xl border border-line bg-white shadow-card"
              >
                <div className="flex items-start justify-between gap-3 p-4 pb-0">
                  <h4 className="font-display text-[15px] leading-snug font-bold text-navy">{item.name}</h4>
                  <span className="shrink-0 rounded bg-cream px-2 py-0.5 text-[10px] font-bold tracking-wide text-muted uppercase">
                    {item.cat}
                  </span>
                </div>
                <p className="flex-1 px-4 pt-1.5 pb-4 text-[13px] leading-relaxed text-muted">{item.desc}</p>
                <div className="border-t border-line/70 px-4 py-3">
                  <button
                    type="button"
                    onClick={() => onEnquire(item.name)}
                    className="inline-flex items-center gap-1.5 text-[13px] font-bold text-accent-dark transition-all hover:gap-2.5"
                  >
                    Enquire on WhatsApp
                    <ArrowRight className="size-3.5" aria-hidden />
                  </button>
                </div>
              </article>
            ))}

            {results.length === 0 && (
              <div className="col-span-full rounded-xl border border-dashed border-line bg-white p-10 text-center">
                <p className="font-display text-[15px] font-bold text-navy">
                  Nothing matches "{query}" in this sample list.
                </p>
                <p className="mx-auto mt-1.5 max-w-md text-sm text-muted">
                  The store carries more than what's listed here. Send us your requirement and we'll
                  check for you.
                </p>
                <button
                  type="button"
                  onClick={() => onEnquire(query.trim())}
                  className="mt-4 inline-flex items-center gap-1.5 rounded-lg border border-accent/40 bg-accent/8 px-4 py-2.5 text-[13px] font-bold text-accent-dark transition hover:bg-accent/15"
                >
                  Ask about "{query.trim()}"
                  <ArrowRight className="size-3.5" aria-hidden />
                </button>
              </div>
            )}
          </div>

          <p className="mt-4 text-xs text-muted">
            Showing {results.length} of {CATALOG.length} items · Prices and availability — please ask at the
            store or on WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
}
