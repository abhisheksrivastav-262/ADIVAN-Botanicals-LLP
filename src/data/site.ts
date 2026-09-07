export const COMPANY = {
  name: "Adivan Botanicals LLP",
  tagline: "From Tribal Wisdom to Modern Wellness",
  intro:
    "Adivan Botanicals LLP is an Indian Ayurvedic and Herbal Wellness brand focused on quality-oriented wellness products, professional branding, responsible communication and customer trust.",
  phoneDisplay: "+91 9977963311",
  phoneHref: "tel:+919977963311",
  whatsapp:
    "https://wa.me/919977963311?text=" +
    encodeURIComponent("Namaste! I would like to enquire about Adivan Botanicals products."),
  email: "narayan3311patel@gmail.com",
  email2: "adivanbatanicalsllp@gmail.com",
  addressLines: [
    "Plot No. 1401/1, Amlai Road,",
    "Purani Basti, Ward No. 06,",
    "Burhar, Shahdol,",
    "Madhya Pradesh – 484110",
  ],
  addressShort: "Burhar, Shahdol, Madhya Pradesh – 484110",
  closingTagline: "Building a Healthier Tomorrow with the Trust of Ayurveda.",
  vision:
    "To become a trusted and innovative Indian brand delivering high-quality Ayurvedic and herbal wellness solutions for healthier lives.",
  mission:
    "To provide safe, quality-focused and accessible Ayurvedic wellness products by combining traditional knowledge with modern standards and customer-centric innovation.",
};

export interface NavLink {
  label: string;
  path: string;
  children?: { label: string; path: string }[];
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", path: "/" },
  {
    label: "About",
    path: "/about",
    children: [
      { label: "About Us", path: "/about" },
      { label: "Vision & Mission", path: "/vision-mission" },
      { label: "Founders", path: "/founders" },
      { label: "Growth Roadmap", path: "/roadmap" },
    ],
  },
  {
    label: "Products",
    path: "/products",
    children: [
      { label: "All Products", path: "/products" },
      { label: "Hair Care", path: "/hair-care" },
      { label: "Wellness Syrups", path: "/syrups" },
      { label: "Nutrition & Wellness", path: "/nutrition" },
    ],
  },
  { label: "Quality", path: "/quality" },
  {
    label: "Manufacturing",
    path: "/manufacturing",
    children: [
      { label: "Our Model", path: "/manufacturing" },
      { label: "Partner With Us", path: "/manufacturing-partners" },
    ],
  },
  { label: "Distribution", path: "/distribution" },
  { label: "Contact", path: "/contact" },
];

export const MANUFACTURING_STEPS = [
  { no: "01", title: "Product Concept", text: "Wellness need identified and product concept shaped around Ayurvedic orientation." },
  { no: "02", title: "Formulation / Development", text: "Formulation and product development coordinated with quality requirements." },
  { no: "03", title: "Manufacturing Partner", text: "Production through a suitable quality-focused third-party manufacturing partner." },
  { no: "04", title: "Quality & Testing", text: "Quality coordination and testing capabilities applied before release." },
  { no: "05", title: "Packaging", text: "Professional, informative packaging under the Adivan brand." },
  { no: "06", title: "Adivan Brand", text: "Brand building, responsible communication and market readiness." },
  { no: "07", title: "Distribution", text: "Retail, distributor and digital channels carry products to market." },
  { no: "08", title: "Customer", text: "Long-term customer relationships supported by responsive support." },
];

export const SEO_KEYWORDS =
  "Adivan Botanicals LLP, Ayurvedic wellness, Herbal wellness products, Ayurvedic products India, Herbal products, Hair wellness, Ayurvedic syrups, Wellness brand India";
