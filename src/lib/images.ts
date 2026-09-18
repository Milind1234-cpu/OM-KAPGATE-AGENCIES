// Image paths served from public/images.
// Replace public/images/hero-store.jpg to update the main storefront photo
// across the Hero, About, Gallery, and social preview.

const IMG = {
  heroStore: "/images/hero-store.jpg",
  aboutStore: "/images/about-store.jpg",

  // Main real-store photo slots
  storeFront1: "/images/hero-store.jpg",
  storeFront2: "/images/hero-store.jpg",

  // Category and gallery photos
  catPumps: "/images/cat-pumps.jpg",
  catPipes: "/images/cat-pipes.jpg",
  catSanitary: "/images/cat-sanitary.jpg",
  catBathroom: "/images/cat-bathroom.jpg",
  catPlumbing: "/images/cat-plumbing.jpg",
  catConstruction: "/images/cat-construction.jpg",
  galBathroom: "/images/gal-bathroom.jpg",
  galPipesWork: "/images/gal-pipes-work.jpg",
} as const;

export default IMG;
