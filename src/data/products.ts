export type ProductCategory =
  | "Hair Care"
  | "Ayurvedic & Wellness Syrups"
  | "Nutrition & Wellness";

export interface Product {
  slug: string;
  name: string;
  category: ProductCategory;
  /** sub-folder under /public/products holding the actual PPT-extracted pack photo */
  folder: "hair" | "syrups" | "nutrition";
  /** exact file of the supplied pack photo */
  image: string;
  tagline: string;
  overview: string;
  /** front-of-pack facts, transcribed from the supplied pack artwork */
  packSize: string;
  packLine: string;
  composition: string;
  usage: string;
  /** pack's own wording, quoted and attributed — not a website claim */
  packWording?: string;
}

export const PRODUCTS: Product[] = [
  {
    slug: "hair-pure-shampoo",
    name: "Hair Pure Shampoo",
    category: "Hair Care",
    folder: "hair",
    image: "/products/hair/hair-pure-shampoo.png",
    tagline: "Sulphate-free shampoo · 200 ml · enriched with Amla, Ritha, Shikakai & Flax Seed.",
    overview:
      "Adivan Hair Pure is a sulphate-free shampoo in the Adivan Botanicals hair-care portfolio, presented as an Ayurvedic proprietary medicine. The front of the pack highlights Amla, Ritha, Shikakai, Flax Seed and other exotic herbs.",
    packSize: "200 ml",
    packLine: "Sulphate Free Shampoo — Enriched with Amla, Ritha, Shikakai, Flax Seed & Other Exotic Herbs. Organic–Ayurvedic.",
    composition:
      "Each 100 ml contains: Amla, Reetha, Shikakai, Flax Seed, Methi, Curry Leaf, Hibiscus Flower, Fenugreek Leaves, Neem Leaves, Bhringraj, Onion, Kalonji — 50 mg each (as printed on pack).",
    usage:
      "Gently apply the shampoo to the scalp and hair. Massage the scalp and hair for a few minutes and rinse off using normal water. For external use only (as printed on pack).",
    packWording:
      "Pack states: controls hair fall, smoothens hair, controls dandruff, moisturizes and nourishes hair, conditions hair, supports scalp health, cleanses hair, maintains natural colour and strengthens hair.",
  },
  {
    slug: "hair-conditioner",
    name: "Hair Conditioner",
    category: "Hair Care",
    folder: "hair",
    image: "/products/hair/hair-conditioner.png",
    tagline: "For smooth, shining & silkier hair · 100 gm · pure extracts & exotic herbs.",
    overview:
      "Adivan Hair Conditioner complements the brand's hair-cleansing range. The pack presents it as an Ayurvedic proprietary medicine enriched with Shikakai, Jojoba, Henna, Reetha and Nimbu.",
    packSize: "100 gm",
    packLine: "For Smooth, Shining & Silkier Hair — Enriched with Shikakai, Jojoba, Henna, Reetha & Nimbu. Pure Extracts & Exotic Herbs.",
    composition:
      "Aloevera gel with Bhringraj, Amla, Shikakai, Hibiscus, Fenugreek and Henna extracts, plus Coconut, Almond and Argan oils (full proportions as printed on pack).",
    usage: "Refer to the usage directions printed on the pack. For external use only.",
  },
  {
    slug: "hair-grow-tablets",
    name: "Hair Grow Tablets",
    category: "Hair Care",
    folder: "hair",
    image: "/products/hair/hair-grow-tablets.png",
    tagline: "Biotin, amino acids, minerals & vitamins · 60 tablets · ultra-strength supplement.",
    overview:
      "Adivan Hair Grow Tablets belong to the Adivan Hair Grow range. The pack presents them as a nutraceutical ultra-strength hair-growth supplement with biotin, amino acids, minerals and vitamins.",
    packSize: "60 Tablets",
    packLine: "Biotin, Amino Acids, Minerals & Vitamins — Ultra Strength Hair Growth Supplement (Nutraceutical).",
    composition:
      "Biotin, amino acids, minerals and vitamins — full supplement facts table printed on pack.",
    usage:
      "Take 1–2 tablets a day after a meal with lukewarm water, or as directed by a healthcare professional. Dietary food supplement — not for medicinal use (as printed on pack).",
    packWording:
      "Pack states: helps strengthen, stimulate and nourish; helps promote existing hair growth.",
  },
  {
    slug: "hair-grow-shampoo",
    name: "Hair Grow Shampoo",
    category: "Hair Care",
    folder: "hair",
    image: "/products/hair/hair-grow-shampoo.png",
    tagline: "For strong, smooth & healthier hair · 200 ml · Amla, Ritha, Bhringraj & exotic herbs.",
    overview:
      "Adivan Hair Grow Shampoo is part of the Adivan Hair Grow range, presented as an Ayurvedic proprietary medicine for strong, smooth and healthier hair.",
    packSize: "200 ml",
    packLine: "For Strong, Smooth & Healthier Hair — Enriched with Amla, Ritha, Bhringraj & Other Exotic Herbs. Organic–Ayurvedic.",
    composition:
      "Each 10 ml contains: Amla 65 mg, Japa 70 mg, Ritha 145 mg, Methi 30 mg, Henna 10 mg, Badam 4 mg, Mulethi 50 mg, Bhringraj 50 mg, Rosemary 50 mg, Kumari 50 mg (as printed on pack).",
    usage:
      "Gently apply the shampoo to the scalp and hair. Massage the scalp and hair for a few minutes and rinse off using normal water. For external use only (as printed on pack).",
    packWording:
      "Pack states: controls hair fall, smoothens hair, controls dandruff, moisturizes and nourishes hair, supports scalp health, maintains natural colour and strengthens hair.",
  },
  {
    slug: "hair-grow-serum",
    name: "Hair Grow Serum",
    category: "Hair Care",
    folder: "hair",
    image: "/products/hair/hair-grow-serum.png",
    tagline: "For smooth, shining & silkier hair · 100 ml · pure extracts & exotic herbs.",
    overview:
      "Adivan Hair Grow Serum extends the Hair Grow range in serum format. The pack presents it as an Ayurvedic proprietary medicine blending Argan, onion seed, black seed, olive, almond, jojoba and grape seed oils with herbal extracts.",
    packSize: "100 ml",
    packLine: "For Smooth, Shining & Silkier Hair — Enriched with Pure Extracts & Exotic Herbs.",
    composition:
      "Each 100 ml contains: Argan Oil, Red Onion Seed Oil, Black Seed Oil, Olive Oil, Almond Oil, Jojoba Oil, Grape Seed Oil, Bhringraj Ext., Amla Ext., Neem, Henna, Shikakai (as printed on pack).",
    usage:
      "Take a little amount of serum in the palm of the hand and apply evenly on damp hair. A patch test before first use is recommended; avoid contact with eyes. For external use only (as printed on pack).",
    packWording:
      "Pack states: makes hair soft, manageable and easy to detangle; smoothens roughness and frizz; helps prevent split ends and protects hair from damage.",
  },
  {
    slug: "hair-grow-oil",
    name: "Hair Grow Oil",
    category: "Hair Care",
    folder: "hair",
    image: "/products/hair/hair-grow-oil.png",
    tagline: "Pure and natural · 100 ml · for smooth & silky hair, for men and women.",
    overview:
      "Adivan Hair Grow Oil connects traditional hair-oiling wisdom with modern quality standards. The pack presents it as an Ayurvedic proprietary medicine, pure and natural, for men and women.",
    packSize: "100 ml",
    packLine: "Pure and Natural — For Smooth & Silky Hair. For Men and Women.",
    composition:
      "Each 100 ml oil contains: Bhringraj 5%, Amalaki 5%, Badam 3%, Karipatta 3%, Brahmi 5%, Shikakai 3%, Methi 6%, Pyaj 3%, Kalonji 5%, Rudrapushpa 2%, Nariyal 15%, Til Q.S. (as printed on pack).",
    usage:
      "Take sufficient amount of oil on the palm and rub on the scalp with the fingertips, massaging gently. Store in a cool, dry place. For external use only (as printed on pack).",
  },
  {
    slug: "uterine-syrup",
    name: "Uterine Syrup",
    category: "Ayurvedic & Wellness Syrups",
    folder: "syrups",
    image: "/products/syrups/uterine-syrup.png",
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
    image: "/products/syrups/multivitamin-syrup.png",
    tagline: "Mix fruit flavour · sugar free · 200 ml · Ayurvedic proprietary medicine.",
    overview:
      "Adivan Multivitamin Syrup belongs to the Ayurvedic and wellness syrup range, presented as an Ayurvedic proprietary medicine in mix fruit flavour.",
    packSize: "200 ml",
    packLine: "Mix Fruit Flavour — Sugar Free — An Ayurvedic Proprietary Medicine. 100% Natural.",
    composition: "Ayurvedic proprietary medicine — full multi-herb and vitamin composition table printed on pack.",
    usage:
      "5–10 ml once or twice/thrice a day, or as directed by the physician. Shake well before use (as printed on pack).",
  },
  {
    slug: "liver-3x-syrup",
    name: "Liver 3X Syrup",
    category: "Ayurvedic & Wellness Syrups",
    folder: "syrups",
    image: "/products/syrups/liver-3x-syrup.png",
    tagline: "Mix fruit flavour · sugar free · 200 ml · Ayurvedic liver care syrup.",
    overview:
      "Adivan Liver 3X Syrup is listed in the syrup portfolio as an Ayurvedic liver care syrup in mix fruit flavour.",
    packSize: "200 ml",
    packLine: "Mix Fruit Flavour — Sugar Free — An Ayurvedic Liver Care Syrup. 100% Natural.",
    composition: "Ayurvedic proprietary medicine — full multi-herb composition table printed on pack.",
    usage:
      "5–10 ml once or twice/thrice a day with lukewarm water, or as directed by the physician. Shake well before use (as printed on pack).",
    packWording:
      "Pack wording: herbal in Yakrit Vikar, Agnimandya, Aruchi; Deepan–Pachan; Kamala (as printed on pack).",
  },
  {
    slug: "liver-syrup",
    name: "Liver Syrup",
    category: "Ayurvedic & Wellness Syrups",
    folder: "syrups",
    image: "/products/syrups/liver-syrup.png",
    tagline: "Mix fruit flavour · sugar free · 200 ml · Ayurvedic liver care syrup.",
    overview:
      "Adivan Liver Syrup is part of the Ayurvedic and wellness syrup portfolio, presented as an Ayurvedic liver care syrup in mix fruit flavour.",
    packSize: "200 ml",
    packLine: "Mix Fruit Flavour — Sugar Free — An Ayurvedic Liver Care Syrup. 100% Natural.",
    composition: "Ayurvedic proprietary medicine — full multi-herb composition table printed on pack.",
    usage:
      "5–10 ml once or twice/thrice a day with lukewarm water, or as directed by the physician. Shake well before use (as printed on pack).",
    packWording:
      "Pack wording: herbal in Yakrit Vikar, Agnimandya, Aruchi; Deepan–Pachan; Kamala (as printed on pack).",
  },
  {
    slug: "iron-syrup",
    name: "Iron Syrup",
    category: "Ayurvedic & Wellness Syrups",
    folder: "syrups",
    image: "/products/syrups/iron-syrup.png",
    tagline: "Strawberry flavour · sugar free · 200 ml · an Ayurvedic iron tonic.",
    overview:
      "Adivan Iron Syrup belongs to the Ayurvedic and wellness syrup range, presented as an Ayurvedic iron tonic in strawberry flavour.",
    packSize: "200 ml",
    packLine: "Strawberry Flavour — Sugar Free — An Ayurvedic Iron Tonic. 100% Natural.",
    composition:
      "Each 5 ml contains: Sounth, Kali Mirch, Long, Bahoda, Amla, Ajwain, Vidang, Mustak, Chitramool, Black Pepper, Chavya, Loh Bhasam, Madhu, Pippali, Amalaki, Haritaki, Dhataki Pushp, Gud, Eranda (quantities as printed on pack).",
    usage:
      "5–10 ml once or twice, two or three times a day, or as directed by the physician. Shake well before use (as printed on pack).",
    packWording: "Pack wording: may be useful in Pandu Roga and Aruchi (as printed on pack).",
  },
  {
    slug: "enzyme-syrup",
    name: "Enzyme Syrup",
    category: "Ayurvedic & Wellness Syrups",
    folder: "syrups",
    image: "/products/syrups/enzyme-syrup.png",
    tagline: "Mix fruit flavour · sugar free · 200 ml · an Ayurvedic digestive syrup.",
    overview:
      "Adivan Enzyme Syrup is part of the Ayurvedic and wellness syrup portfolio, presented as an Ayurvedic digestive syrup in mix fruit flavour.",
    packSize: "200 ml",
    packLine: "Mix Fruit Flavour — Sugar Free — An Ayurvedic Digestive Syrup. 100% Natural.",
    composition: "Ayurvedic proprietary medicine — full multi-herb composition table printed on pack.",
    usage:
      "5–10 ml once or twice/thrice a day, or as directed by the physician. Shake well before use (as printed on pack).",
    packWording:
      "Pack wording: may be useful in Rochana, Yakritvriddhi, Deepana and Pachana (as printed on pack).",
  },
  {
    slug: "adilyco-syrup",
    name: "Adilyco Syrup",
    category: "Ayurvedic & Wellness Syrups",
    folder: "syrups",
    image: "/products/syrups/adilyco-syrup.png",
    tagline: "Fruit & herb extracts with lycopene · mix fruit · sugar free · 200 ml.",
    overview:
      "Adilyco Syrup is listed in the Adivan Botanicals product portfolio, presented as an Ayurvedic proprietary medicine containing extracts of fruits and herbs rich in lycopene, antioxidants, multivitamins and multiminerals.",
    packSize: "200 ml",
    packLine:
      "Mix Fruit Flavour — Sugar Free — Contains Extracts of Fruits and Herbs Rich in Lycopene, Antioxidants, Multivitamins, Multiminerals. 100% Natural.",
    composition: "Ayurvedic proprietary medicine — full fruit and herb extract composition table printed on pack.",
    usage:
      "5–10 ml once or twice/thrice a day with lukewarm water, or as directed by the physician. Shake well before use (as printed on pack).",
    packWording: "Pack wording: may be useful in Balya, Rasayana and Hridya (as printed on pack).",
  },
  {
    slug: "acidity-syrup",
    name: "Acidity Syrup",
    category: "Ayurvedic & Wellness Syrups",
    folder: "syrups",
    image: "/products/syrups/acidity-syrup.png",
    tagline: "Mix fruit flavour · sugar free · 200 ml · an Ayurvedic acidity care syrup.",
    overview:
      "Adivan Acidity Syrup is part of the syrup portfolio, presented as an Ayurvedic acidity care syrup in mix fruit flavour.",
    packSize: "200 ml",
    packLine: "Mix Fruit Flavour — Sugar Free — An Ayurvedic Acidity Care Syrup. 100% Natural.",
    composition: "Ayurvedic proprietary medicine — full multi-herb composition table printed on pack.",
    usage:
      "5–10 ml, one to two tablespoonfuls, two or three times a day, or as directed by the physician. Shake well before use (as printed on pack).",
    packWording:
      "Pack wording: useful in Amlapitta and Pachan; Pittashamak and Pittavirechak (as printed on pack).",
  },
  {
    slug: "piles-syrup",
    name: "Piles Syrup",
    category: "Ayurvedic & Wellness Syrups",
    folder: "syrups",
    image: "/products/syrups/piles-syrup.png",
    tagline: "Ayurvedic anti-piles herbal syrup · 200 ml · supports healthy bowel movement.",
    overview:
      "Adivan Piles Syrup is listed in the product portfolio as an Ayurvedic anti-piles herbal syrup. The pack highlights natural herbs and support for healthy bowel movement.",
    packSize: "200 ml",
    packLine: "Ayurvedic Anti-Piles Herbal Syrup — Relief from Piles; Supports Healthy Bowel Movement. Natural Herbs.",
    composition:
      "Each 10 ml contains: Arshoghni Vati Extract 200 mg, Nagkeshar 100 mg, Lajjalu 100 mg, Haritaki 150 mg, Baheda 100 mg, Amla 100 mg, Neem 100 mg, Daruharidra 75 mg, Kutaj 75 mg, Sonamukhi 50 mg, Mulethi 50 mg (as printed on pack).",
    usage:
      "10–20 ml with water three times a day, or as directed by the physician. Shake well before use (as printed on pack).",
  },
  {
    slug: "stone-syrup",
    name: "Stone Syrup",
    category: "Ayurvedic & Wellness Syrups",
    folder: "syrups",
    image: "/products/syrups/stone-syrup.png",
    tagline: "To support kidney & urinary tract health · 200 ml · natural herbs.",
    overview:
      "Adivan Stone Syrup is listed in the product portfolio to support kidney and urinary tract health. The pack highlights natural herbs, kidney health support and help in flushing stones.",
    packSize: "200 ml",
    packLine: "To Support Kidney & Urinary Tract Health — Supports Kidney Health; Helps Flush Stones. Natural Herbs.",
    composition:
      "Each 5 ml contains extract derived from: Kulattha 125 mg, Lajjalu 75 mg, Shilajeet 75 mg, Punarnava 150 mg, Varun 25 mg, Moolikshar 25 mg, Sajjikshar 25 mg, Gokhru 150 mg, Pashanbhed 125 mg, Sendha Namak 25 mg (as printed on pack).",
    usage:
      "10–20 ml with water three times a day, or as directed by the physician. Shake well before use (as printed on pack).",
  },
  {
    slug: "adivan-nutrition",
    name: "Adivan Nutrition",
    category: "Nutrition & Wellness",
    folder: "nutrition",
    image: "/products/nutrition/adivan-nutrition.png",
    tagline: "Co-Enzyme Q10, L-Carnitine, multivitamin & antioxidant softgel capsules.",
    overview:
      "Adivan Nutrition represents the company's nutrition and wellness offering: softgel capsules combining Co-Enzyme Q10, L-Carnitine L-Tartrate, multivitamins, multiminerals and antioxidants.",
    packSize: "10 × 1 × 10 Softgel Capsules (as printed)",
    packLine: "Co-Enzyme Q10, L-Carnitine L-Tartrate, Multivitamin, Multimineral & Antioxidant Softgel Capsules.",
    composition: "Full supplement facts table printed on pack.",
    usage: "Refer to the usage directions printed on the pack.",
  },
];

export const PACK_NOTE_TEXT =
  "On-pack information above is transcribed from the company's supplied pack artwork. Refer to the physical product pack for the complete and current details.";

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
    blurb: "Hair wellness and care portfolio — cleansers, conditioner, serum, oil and tablets.",
    productSlugs: [
      "hair-pure-shampoo",
      "hair-conditioner",
      "hair-grow-tablets",
      "hair-grow-shampoo",
      "hair-grow-serum",
      "hair-grow-oil",
    ],
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
      "piles-syrup",
      "stone-syrup",
    ],
  },
  {
    slug: "nutrition",
    path: "/nutrition",
    title: "Nutrition & Wellness",
    blurb: "Nutrition-oriented wellness offering from Adivan Botanicals.",
    productSlugs: ["adivan-nutrition"],
  },
];

export function productsOf(categorySlug: string): Product[] {
  const cat = CATEGORIES.find((c) => c.slug === categorySlug);
  if (!cat) return [];
  return cat.productSlugs
    .map((s) => productBySlug(s))
    .filter((p): p is Product => Boolean(p));
}
