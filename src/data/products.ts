export type ProductCategory = "Hair Care" | "Ayurvedic & Wellness Syrups";

export interface Product {
  slug: string;
  name: string;
  category: ProductCategory;
  /** sub-folder under /public/products holding the product photo */
  folder: "hair" | "syrups";
  /** exact file of the product photo */
  image: string;
  /** MRP as printed on pack (incl. of all taxes) */
  mrp: string;
  tagline: string;
  overview: string;
  /** front-of-pack facts, transcribed from the product photo */
  packSize: string;
  packLine: string;
  composition: string;
  usage: string;
  /** pack's own wording, quoted and attributed — not a website claim */
  packWording?: string;
}

export const PRODUCTS: Product[] = [
  {
    slug: "hair-grow-oil",
    name: "Hair Grow Oil",
    category: "Hair Care",
    folder: "hair",
    image: "/products/hair/hair-grow-oil.jpeg",
    mrp: "₹699",
    tagline: "Pure and natural · 100 ml · for smooth & silky hair, for men and women.",
    overview:
      "Adivan Hair Grow Oil is the hair-care offering in the current portfolio, presented as an Ayurvedic proprietary medicine — pure and natural, for men and women.",
    packSize: "100 ml",
    packLine: "Pure and Natural — For Smooth & Silky Hair. For Men and Women.",
    composition:
      "Each 100 ml oil contains: Bhringraj 5%, Amalaki 5%, Badam 3%, Karipatta 3%, Brahmi 5%, Shikakai 3%, Methi 6%, Pyaj 3%, Kalonji 5%, Rudrapushpa 2%, Nariyal 15%, Til Q.S. (as printed on pack).",
    usage:
      "Take sufficient amount of oil on the palm and rub on the scalp with the fingertips, massaging gently. Store in a cool, dry and dark place. For external use only (as printed on pack).",
  },
  {
    slug: "uterine-syrup",
    name: "Uterine Syrup",
    category: "Ayurvedic & Wellness Syrups",
    folder: "syrups",
    image: "/products/syrups/uterine-syrup.jpeg",
    mrp: "₹399",
    tagline: "Strawberry flavour · sugar free · 200 ml · a complete Ayurvedic uterine tonic.",
    overview:
      "Adivan Uterine Syrup is part of the Ayurvedic and wellness syrup portfolio, presented as an Ayurvedic proprietary medicine and a complete Ayurvedic uterine tonic in strawberry flavour.",
    packSize: "200 ml",
    packLine: "Strawberry Flavour — Sugar Free — A Complete Ayurvedic Uterine Tonic. 100% Natural.",
    composition: "Ayurvedic proprietary medicine — full multi-herb composition table printed on pack.",
    usage:
      "5–10 ml once or twice/thrice a day, or as directed by the physician. Shake well before use (as printed on pack).",
  },
  {
    slug: "multivitamin-syrup",
    name: "Multivitamin Syrup",
    category: "Ayurvedic & Wellness Syrups",
    folder: "syrups",
    image: "/products/syrups/multivitamin-syrup.jpeg",
    mrp: "₹299",
    tagline: "Sugar free · 200 ml · an Ayurvedic proprietary medicine.",
    overview:
      "Adivan Multivitamin Syrup belongs to the Ayurvedic and wellness syrup range, presented as an Ayurvedic proprietary medicine.",
    packSize: "200 ml",
    packLine: "Sugar Free — An Ayurvedic Proprietary Medicine. 100% Natural.",
    composition: "Ayurvedic proprietary medicine — full multi-herb and vitamin composition table printed on pack.",
    usage:
      "5–10 ml once or twice/thrice a day, or as directed by the physician. Shake well before use (as printed on pack).",
  },
  {
    slug: "liver-3x-syrup",
    name: "Liver 3X Syrup",
    category: "Ayurvedic & Wellness Syrups",
    folder: "syrups",
    image: "/products/syrups/liver-3x-syrup.jpeg",
    mrp: "₹349",
    tagline: "Sugar free · 200 ml · an Ayurvedic liver care syrup.",
    overview:
      "Adivan Liver 3X Syrup is listed in the syrup portfolio as an Ayurvedic liver care syrup.",
    packSize: "200 ml",
    packLine: "Sugar Free — An Ayurvedic Liver Care Syrup. 100% Natural.",
    composition: "Ayurvedic proprietary medicine — full multi-herb composition table printed on pack.",
    usage:
      "5–10 ml once or twice/thrice a day with lukewarm water, or as directed by the physician. Shake well before use (as printed on pack).",
  },
  {
    slug: "liver-syrup",
    name: "Liver Syrup",
    category: "Ayurvedic & Wellness Syrups",
    folder: "syrups",
    image: "/products/syrups/liver-syrup.jpeg",
    mrp: "₹299",
    tagline: "Sugar free · 200 ml · an Ayurvedic liver care syrup.",
    overview:
      "Adivan Liver Syrup is part of the Ayurvedic and wellness syrup portfolio, presented as an Ayurvedic liver care syrup.",
    packSize: "200 ml",
    packLine: "Sugar Free — An Ayurvedic Liver Care Syrup. 100% Natural.",
    composition: "Ayurvedic proprietary medicine — full multi-herb composition table printed on pack.",
    usage:
      "5–10 ml once or twice/thrice a day with lukewarm water, or as directed by the physician. Shake well before use (as printed on pack).",
  },
  {
    slug: "iron-syrup",
    name: "Iron Syrup",
    category: "Ayurvedic & Wellness Syrups",
    folder: "syrups",
    image: "/products/syrups/iron-syrup.jpeg",
    mrp: "₹299",
    tagline: "Strawberry flavour · sugar free · 200 ml · an Ayurvedic iron tonic.",
    overview:
      "Adivan Iron Syrup belongs to the Ayurvedic and wellness syrup range, presented as an Ayurvedic iron tonic in strawberry flavour.",
    packSize: "200 ml",
    packLine: "Strawberry Flavour — Sugar Free — An Ayurvedic Iron Tonic. 100% Natural.",
    composition: "Ayurvedic proprietary medicine — full multi-herb composition table printed on pack.",
    usage:
      "5–10 ml once or twice, two or three times a day, or as directed by the physician. Shake well before use (as printed on pack).",
  },
  {
    slug: "enzyme-syrup",
    name: "Enzyme Syrup",
    category: "Ayurvedic & Wellness Syrups",
    folder: "syrups",
    image: "/products/syrups/enzyme-syrup.jpeg",
    mrp: "₹299",
    tagline: "Sugar free · 200 ml · an Ayurvedic digestive syrup.",
    overview:
      "Adivan Enzyme Syrup is part of the Ayurvedic and wellness syrup portfolio, presented as an Ayurvedic digestive syrup.",
    packSize: "200 ml",
    packLine: "Sugar Free — An Ayurvedic Digestive Syrup. 100% Natural.",
    composition: "Ayurvedic proprietary medicine — full multi-herb composition table printed on pack.",
    usage:
      "5–10 ml once or twice/thrice a day, or as directed by the physician. Shake well before use (as printed on pack).",
  },
  {
    slug: "adilyco-syrup",
    name: "Adilyco Syrup",
    category: "Ayurvedic & Wellness Syrups",
    folder: "syrups",
    image: "/products/syrups/adilyco-syrup.jpeg",
    mrp: "₹299",
    tagline: "Fruit & herb extracts with lycopene · sugar free · 200 ml.",
    overview:
      "Adilyco Syrup is listed in the Adivan Botanicals product portfolio, presented as an Ayurvedic proprietary medicine containing extracts of fruits and herbs rich in lycopene, antioxidants, multivitamins and multiminerals.",
    packSize: "200 ml",
    packLine:
      "Sugar Free — Contains Extracts of Fruits and Herbs Rich in Lycopene, Antioxidants, Multivitamins, Multiminerals. 100% Natural.",
    composition: "Ayurvedic proprietary medicine — full fruit and herb extract composition table printed on pack.",
    usage:
      "5–10 ml once or twice/thrice a day with lukewarm water, or as directed by the physician. Shake well before use (as printed on pack).",
  },
  {
    slug: "acidity-syrup",
    name: "Acidity Syrup",
    category: "Ayurvedic & Wellness Syrups",
    folder: "syrups",
    image: "/products/syrups/acidity-syrup.jpeg",
    mrp: "₹249",
    tagline: "Sugar free · 200 ml · an Ayurvedic acidity care syrup.",
    overview:
      "Adivan Acidity Syrup is part of the syrup portfolio, presented as an Ayurvedic acidity care syrup.",
    packSize: "200 ml",
    packLine: "Sugar Free — An Ayurvedic Acidity Care Syrup. 100% Natural.",
    composition: "Ayurvedic proprietary medicine — full multi-herb composition table printed on pack.",
    usage:
      "5–10 ml, one to two tablespoonfuls, two or three times a day, or as directed by the physician. Shake well before use (as printed on pack).",
  },
  {
    slug: "appitizer-syrup",
    name: "Appitizer Syrup",
    category: "Ayurvedic & Wellness Syrups",
    folder: "syrups",
    image: "/products/syrups/appitizer-syrup.jpeg",
    mrp: "₹399",
    tagline: "Pineapple flavour · sugar free · 200 ml · for a healthy appetite.",
    overview:
      "Adivan Appitizer Syrup is part of the Ayurvedic and wellness syrup portfolio, presented as an Ayurvedic proprietary medicine in pineapple flavour — for a healthy appetite.",
    packSize: "200 ml",
    packLine: "Pineapple Flavour — Sugar Free — For a Healthy Appetite. 100% Natural.",
    composition: "Ayurvedic proprietary medicine — full multi-herb composition table printed on pack.",
    usage:
      "5–10 ml once or twice/thrice a day, or as directed by the physician. Shake well before use (as printed on pack).",
  },
  {
    slug: "adilyco-syrup-pack-2",
    name: "Adilyco Syrup",
    category: "Ayurvedic & Wellness Syrups",
    folder: "syrups",
    image: "/products/syrups/adilyco-syrup-2.jpeg",
    mrp: "₹299",
    tagline: "Fruit & herb extracts with lycopene · sugar free · 200 ml.",
    overview:
      "Adilyco Syrup is listed in the Adivan Botanicals product portfolio, presented as an Ayurvedic proprietary medicine containing extracts of fruits and herbs rich in lycopene, antioxidants, multivitamins and multiminerals.",
    packSize: "200 ml",
    packLine:
      "Sugar Free — Contains Extracts of Fruits and Herbs Rich in Lycopene, Antioxidants, Multivitamins, Multiminerals. 100% Natural.",
    composition: "Ayurvedic proprietary medicine — full fruit and herb extract composition table printed on pack.",
    usage:
      "5–10 ml once or twice/thrice a day with lukewarm water, or as directed by the physician. Shake well before use (as printed on pack).",
  },
];

export const PACK_NOTE_TEXT =
  "On-pack information above is transcribed from the company's product photography. Refer to the physical product pack for the complete and current details.";

export function productBySlug(slug: string | undefined): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export interface CategoryInfo {
  slug: string;
  path: string;
  title: string;
  blurb: string;
  productSlugs: string[];
}

export const CATEGORIES: CategoryInfo[] = [
  {
    slug: "hair-care",
    path: "/hair-care",
    title: "Hair Care",
    blurb: "Hair wellness offering — Adivan Hair Grow Oil.",
    productSlugs: ["hair-grow-oil"],
  },
  {
    slug: "syrups",
    path: "/syrups",
    title: "Ayurvedic & Wellness Syrups",
    blurb: "Ayurvedic and wellness syrup portfolio across daily-wellness segments.",
    productSlugs: [
      "uterine-syrup",
      "multivitamin-syrup",
      "liver-3x-syrup",
      "liver-syrup",
      "iron-syrup",
      "enzyme-syrup",
      "adilyco-syrup",
      "acidity-syrup",
      "appitizer-syrup",
      "adilyco-syrup-pack-2",
    ],
  },
];

export function productsOf(categorySlug: string): Product[] {
  const cat = CATEGORIES.find((c) => c.slug === categorySlug);
  if (!cat) return [];
  return cat.productSlugs
    .map((s) => productBySlug(s))
    .filter((p): p is Product => Boolean(p));
}
