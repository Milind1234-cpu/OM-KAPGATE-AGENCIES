// Image paths served from public/images.
// Replace public/images/hero-store.jpg to update the main storefront photo
// across the Hero, About, Gallery, and social preview.

const IMAGE_BASE = `${import.meta.env.BASE_URL}images/`;

const IMG = {
  heroStore: `${IMAGE_BASE}hero-store.jpg`,
  aboutStore: `${IMAGE_BASE}about-store.jpg`,

  // Main real-store photo slots
  storeFront: `${IMAGE_BASE}hero-store.jpg`,

  // Category and gallery photos
  catPumps: `${IMAGE_BASE}cat-pumps.jpg`,
  catPipes: `${IMAGE_BASE}cat-pipes.jpg`,
  catSanitary: `${IMAGE_BASE}cat-sanitary.jpg`,
  catBathroom: `${IMAGE_BASE}cat-bathroom.jpg`,
  catPlumbing: `${IMAGE_BASE}cat-plumbing.jpg`,
  galBathroom: `${IMAGE_BASE}gal-bathroom.jpg`,
  galPipesWork: `${IMAGE_BASE}gal-pipes-work.jpg`,
} as const;

export default IMG;
