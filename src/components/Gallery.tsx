import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { GALLERY, GALLERY_FILTERS } from "../lib/data";
import { Reveal, SectionHead } from "./ui";
import { cn } from "../utils/cn";

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const items = useMemo(
    () => GALLERY.filter((g) => filter === "All" || g.cat === filter),
    [filter]
  );

  const openItem = openIdx !== null ? items[openIdx] : null;

  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIdx(null);
      if (e.key === "ArrowRight") setOpenIdx((i) => (i === null ? null : (i + 1) % items.length));
      if (e.key === "ArrowLeft")
        setOpenIdx((i) => (i === null ? null : (i - 1 + items.length) % items.length));
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIdx, items.length]);

  return (
    <section id="gallery" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <Reveal>
          <SectionHead
            eyebrow="Gallery"
            title="A Look at Our Products & Store"
            sub="Sample images shown below represent the kind of material we deal in. Actual photographs of the store and stock will replace them."
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter gallery">
            {GALLERY_FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => {
                  setFilter(f);
                  setOpenIdx(null);
                }}
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
          {items.map((g, idx) => (
            <button
              key={g.id}
              type="button"
              onClick={() => setOpenIdx(idx)}
              aria-label={`Open image: ${g.caption}`}
              className="group block w-full overflow-hidden rounded-xl border border-line bg-white text-left shadow-card transition-shadow hover:shadow-lift"
            >
              <span className="relative block overflow-hidden">
                <img
                  src={g.img}
                  alt={g.caption}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute top-2 left-2 rounded bg-white/90 px-2 py-0.5 text-[10px] font-bold tracking-wide text-navy uppercase">
                  {g.cat}
                </span>
              </span>
              <span className="flex items-center justify-between gap-2 px-3.5 py-2.5">
                <span className="text-[13px] font-medium text-ink/80">{g.caption}</span>
                <Expand className="size-3.5 shrink-0 text-muted transition group-hover:text-navy" aria-hidden />
              </span>
            </button>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-muted italic">
          More photos will be added as they become available.
        </p>
      </div>

      {/* Lightbox */}
      {openItem && (
        <div
          className="lightbox fixed inset-0 z-50 flex items-center justify-center bg-deep/95 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`Image viewer — ${openItem.caption}`}
          onClick={() => setOpenIdx(null)}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpenIdx(null)}
            className="absolute top-4 right-4 grid size-10 place-items-center rounded-lg border border-white/20 text-white transition hover:bg-white/10"
          >
            <X className="size-5" />
          </button>

          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              setOpenIdx((i) => (i === null ? null : (i - 1 + items.length) % items.length));
            }}
            className="absolute top-1/2 left-3 grid size-10 -translate-y-1/2 place-items-center rounded-lg border border-white/20 text-white transition hover:bg-white/10 sm:left-6"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              setOpenIdx((i) => (i === null ? null : (i + 1) % items.length));
            }}
            className="absolute top-1/2 right-3 grid size-10 -translate-y-1/2 place-items-center rounded-lg border border-white/20 text-white transition hover:bg-white/10 sm:right-6"
          >
            <ChevronRight className="size-5" />
          </button>

          <figure className="max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img
              key={openItem.id}
              src={openItem.img}
              alt={openItem.caption}
              className="lightbox-img max-h-[74vh] w-full rounded-lg object-contain"
            />
            <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-2">
              <span className="text-sm text-white/85">
                <span className="mr-2 rounded bg-white/10 px-2 py-0.5 text-[10px] font-bold tracking-wide uppercase">
                  {openItem.cat}
                </span>
                {openItem.caption}
              </span>
              <span className="text-xs text-white/50">
                {openIdx! + 1} / {items.length}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
