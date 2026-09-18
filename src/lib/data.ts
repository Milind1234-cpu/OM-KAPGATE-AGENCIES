import IMG from "./images";

/* ── Navigation ─────────────────────────────────────────────────────── */
export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

/* ── Product categories ─────────────────────────────────────────────── */
export interface Category {
  id: string;
  name: string;
  tag: string;
  desc: string;
  img: string;
  alt: string;
}

export const CATEGORIES: Category[] = [
  {
    id: "pumps",
    name: "Motor & Water Pumps",
    tag: "Motor & Water Pumps",
    desc: "Domestic monoblock, borewell and openwell pumps for home and farm water needs.",
    img: IMG.catPumps,
    alt: "Blue self-priming water pump on a shop floor",
  },
  {
    id: "pipes",
    name: "Pipes & Fittings",
    tag: "Pipes & Fittings",
    desc: "PVC, CPVC and SWR pipes with matching elbows, tees, couplers and adapters.",
    img: IMG.catPipes,
    alt: "Stacked PVC and CPVC pipe bundles in a store",
  },
  {
    id: "sanitary",
    name: "Sanitary Ware",
    tag: "Sanitary Ware",
    desc: "Wash basins, water closets, cisterns and ceramic ware for bathrooms.",
    img: IMG.catSanitary,
    alt: "White ceramic wash basin and toilet on display",
  },
  {
    id: "bathroom",
    name: "Bathroom Fittings",
    tag: "Bathroom Fittings",
    desc: "Taps, faucets, showers, mixers and everyday bathroom hardware.",
    img: IMG.catBathroom,
    alt: "Row of chrome taps and faucets on a display board",
  },
  {
    id: "plumbing",
    name: "Plumbing Materials",
    tag: "Plumbing Materials",
    desc: "Valves, connectors, PTFE tapes, solvent cement and repair essentials.",
    img: IMG.catPlumbing,
    alt: "Assorted plumbing valves, elbows and tapes on a counter",
  },
];

/* ── Sample product list (for search / filter) ─────────────────────── */
export interface CatalogItem {
  id: number;
  name: string;
  cat: string;
  desc: string;
  img: string;
}

export const CATALOG_FILTERS = [
  "All",
  "Pumps",
  "Pipes",
  "Sanitary",
  "Bathroom",
  "Plumbing",
];

export const CATALOG: CatalogItem[] = [
  { id: 1, name: "Self-Priming Monoblock Pump", cat: "Pumps", desc: "Common choice for lifting water to overhead tanks at home.", img: IMG.catPumps },
  { id: 2, name: "Borewell Submersible Pump", cat: "Pumps", desc: "For borewell water supply; selected by depth and stages.", img: IMG.catPumps },
  { id: 3, name: "Openwell & Mini Pumps", cat: "Pumps", desc: "Compact pumps for sumps, open wells and garden use.", img: IMG.catPumps },

  { id: 4, name: "PVC / UPVC Pipes", cat: "Pipes", desc: "Cold water and general plumbing lines in common sizes.", img: IMG.catPipes },
  { id: 5, name: "CPVC Pipes", cat: "Pipes", desc: "Hot and cold water lines for bathrooms and kitchens.", img: IMG.catPipes },
  { id: 6, name: "Fittings — Elbows, Tees & Couplers", cat: "Pipes", desc: "Matching joints and connectors for every pipe type.", img: IMG.catPipes },

  { id: 7, name: "Wash Basins & Pedestals", cat: "Sanitary", desc: "Wall-hung and pedestal basins for bathrooms and wash areas.", img: IMG.catSanitary },
  { id: 8, name: "Water Closets (EWC & Squatting)", cat: "Sanitary", desc: "Floor-mount and wall-hung options for new bathrooms.", img: IMG.catSanitary },
  { id: 9, name: "Cisterns & Flush Tanks", cat: "Sanitary", desc: "External and concealed cisterns with flush fittings.", img: IMG.catSanitary },

  { id: 10, name: "Taps & Bib Cocks", cat: "Bathroom", desc: "Everyday taps for bathrooms, kitchens and wash areas.", img: IMG.catBathroom },
  { id: 11, name: "Basin & Sink Mixers", cat: "Bathroom", desc: "Hot–cold mixers for basins and kitchen sinks.", img: IMG.catBathroom },
  { id: 12, name: "Showers & Health Faucets", cat: "Bathroom", desc: "Overhead showers, hand showers and health faucet sets.", img: IMG.catBathroom },

  { id: 13, name: "Ball, Gate & Check Valves", cat: "Plumbing", desc: "Flow control for overhead tanks and supply lines.", img: IMG.catPlumbing },
  { id: 14, name: "Solvent Cement & PTFE Tape", cat: "Plumbing", desc: "Jointing material for leak-free pipe connections.", img: IMG.catPlumbing },
  { id: 15, name: "Hoses, Clamps & Connectors", cat: "Plumbing", desc: "Flexible connections for pumps and fittings.", img: IMG.catPlumbing },
];

/* ── Gallery ─────────────────────────────────────────────────────────── */
export interface GalleryItem {
  id: number;
  img: string;
  cat: string;
  caption: string;
}

export const GALLERY_FILTERS = ["All", "Store", "Pumps", "Pipes", "Sanitary", "Bathroom Fittings", "Products"];

export const GALLERY: GalleryItem[] = [
  { id: 1, img: IMG.storeFront, cat: "Store", caption: "Om Kapgate Agency — Main Road, Sadak Arjuni" },
  { id: 2, img: IMG.catPipes, cat: "Pipes", caption: "PVC and CPVC pipe bundles" },
  { id: 3, img: IMG.catPumps, cat: "Pumps", caption: "Self-priming monoblock pump" },
  { id: 4, img: IMG.catSanitary, cat: "Sanitary", caption: "Sanitary ware on display" },
  { id: 5, img: IMG.catBathroom, cat: "Bathroom Fittings", caption: "Taps and faucet range" },
  { id: 6, img: IMG.galPipesWork, cat: "Pipes", caption: "Joining a CPVC line on site" },
  { id: 7, img: IMG.catPlumbing, cat: "Products", caption: "Valves, tapes and fittings" },
  { id: 8, img: IMG.galBathroom, cat: "Bathroom Fittings", caption: "A recently fitted bathroom" },
];
