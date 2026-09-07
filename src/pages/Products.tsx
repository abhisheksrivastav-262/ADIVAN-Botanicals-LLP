import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, ChevronRight, Info, Phone, Package } from "lucide-react";
import { COMPANY } from "../data/site";
import { PRODUCTS, CATEGORIES, PACK_NOTE_TEXT, productBySlug, productsOf, type Product } from "../data/products";
import {
  Reveal,
  SectionHead,
  PageHero,
  PrimaryButton,
  ProductCard,
  ProductImage,
  CtaBand,
  LeafDivider,
  useSeo,
} from "../components/ui";
import EnquiryForm, { productFields } from "../components/Forms";

/* ============ ALL PRODUCTS ============ */
export function ProductsIndex() {
  useSeo("Products — Adivan Botanicals LLP", "Explore the Adivan Botanicals portfolio: hair care, Ayurvedic & wellness syrups, and nutrition & wellness products.");
  return (
    <>
      <PageHero
        eyebrow="Our portfolio"
        title={
          <>
            Products crafted with <span className="text-gold-200 italic">intent</span>
          </>
        }
        intro="Hair care, Ayurvedic & wellness syrups, and nutrition — 17 products under one quality promise. Refer to product pack for specific information."
      />
      {CATEGORIES.map((cat, ci) => (
        <section key={cat.slug} className={ci % 2 === 1 ? "bg-parchment/60" : ""}>
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
            <div className="flex flex-wrap items-end justify-between gap-5">
              <SectionHead eyebrow={`${productsOf(cat.slug).length} products`} title={cat.title} intro={cat.blurb} />
              <Reveal delay={100}>
                <Link to={cat.path} className="inline-flex items-center gap-2 text-sm font-semibold text-pine-800 hover:text-pine-900">
                  Open category <ArrowRight className="h-4 w-4" />
                </Link>
              </Reveal>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {productsOf(cat.slug).map((p, i) => (
                <ProductCard key={p.slug} product={p} delay={(i % 3) * 100} />
              ))}
            </div>
          </div>
        </section>
      ))}
      <CtaBand />
    </>
  );
}

/* ============ CATEGORY PAGE FACTORY ============ */
function CategoryPage({ slug }: { slug: string }) {
  const cat = CATEGORIES.find((c) => c.slug === slug);
  const items = productsOf(slug);
  useSeo(`${cat?.title || "Category"} — Adivan Botanicals LLP`, cat?.blurb || "");
  if (!cat) return null;
  return (
    <>
      <PageHero eyebrow={slug === "hair-care" ? "Hair wellness" : "Portfolio"} title={<>{cat.title}</>} intro={cat.blurb} />
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
        <nav className="mb-8 flex items-center gap-2 text-sm text-ink-500" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-pine-800">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link to="/products" className="hover:text-pine-800">Products</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="font-semibold text-pine-800">{cat.title}</span>
        </nav>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <ProductCard key={p.slug} product={p} delay={(i % 3) * 100} />
          ))}
        </div>
        <Reveal className="mt-12 flex items-center gap-3 rounded-3xl border border-pine-800/10 bg-cream p-6">
          <Info className="h-5 w-5 shrink-0 text-pine-700" />
          <p className="text-sm text-ink-600">
            {PACK_NOTE_TEXT} Product images shown are the company's supplied pack photography, displayed without
            cropping or distortion.
          </p>
        </Reveal>
      </section>
      <CtaBand />
    </>
  );
}

export function HairCare() {
  return <CategoryPage slug="hair-care" />;
}
export function Syrups() {
  return <CategoryPage slug="syrups" />;
}
export function Nutrition() {
  return <CategoryPage slug="nutrition" />;
}

/* ============ PRODUCT DETAIL ============ */
function Related({ current }: { current: Product }) {
  const related = PRODUCTS.filter((p) => p.category === current.category && p.slug !== current.slug).slice(0, 3);
  if (related.length === 0) return null;
  return (
    <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
      <SectionHead eyebrow="Keep exploring" title="Related products" />
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((p, i) => (
          <ProductCard key={p.slug} product={p} delay={i * 100} />
        ))}
      </div>
    </section>
  );
}

export function ProductDetail() {
  const { slug } = useParams();
  const product = productBySlug(slug);
  useSeo(
    product ? `${product.name} — Adivan Botanicals LLP` : "Product — Adivan Botanicals LLP",
    product ? `${product.name}: ${product.tagline} ${PACK_NOTE_TEXT}` : ""
  );

  if (!product) {
    return (
      <>
        <PageHero eyebrow="Not found" title={<>Product not available</>} intro="The product you are looking for does not exist in our portfolio." />
        <section className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8">
          <PrimaryButton to="/products">Back to Products</PrimaryButton>
        </section>
      </>
    );
  }

  const catPath = product.category === "Hair Care" ? "/hair-care" : product.category === "Nutrition & Wellness" ? "/nutrition" : "/syrups";

  return (
    <>
      <section className="grain relative overflow-hidden bg-pine-950 pt-32 pb-14 text-cream sm:pt-40">
        <div className="absolute inset-0 opacity-20" aria-hidden style={{ backgroundImage: "radial-gradient(circle at 85% 20%, #C0963F 0, transparent 32%), radial-gradient(circle at 10% 85%, #2E6B45 0, transparent 35%)" }} />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-pine-100/80" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-gold-200">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to="/products" className="hover:text-gold-200">Products</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to={catPath} className="hover:text-gold-200">{product.category}</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="font-semibold text-gold-200">{product.name}</span>
          </nav>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <div className="pack-frame aspect-square overflow-hidden rounded-[2rem] border border-pine-800/10 bg-cream p-6 shadow-[0_32px_64px_-28px_rgba(11,31,20,0.35)] sm:p-10">
                <ProductImage product={product} eager className="rounded-2xl" />
              </div>
              <p className="mt-4 flex items-center gap-2 text-xs text-ink-500">
                <Package className="h-4 w-4" /> Supplied company pack photography — shown without cropping or distortion.
              </p>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="rounded-full bg-pine-800 px-4 py-1.5 text-[0.7rem] font-bold tracking-[0.2em] text-gold-200 uppercase">
                {product.category}
              </span>
              <h1 className="mt-4 font-display text-4xl leading-tight font-medium text-balance sm:text-5xl">{product.name}</h1>
              <p className="mt-3 font-display text-xl text-pine-700 italic">{product.tagline}</p>
              <div className="mt-6">
                <LeafDivider />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 text-xs font-bold tracking-[0.24em] text-pine-700 uppercase">Product overview</h2>
              <p className="mt-3 leading-relaxed text-ink-600">{product.overview}</p>
            </Reveal>
            <Reveal delay={160}>
              <div className="mt-6 overflow-hidden rounded-3xl border border-gold-500/40">
                <div className="bg-pine-950 px-6 py-4">
                  <h2 className="flex items-center gap-2 text-xs font-bold tracking-[0.24em] text-gold-200 uppercase">
                    <Info className="h-4 w-4" /> On-pack information — as printed
                  </h2>
                </div>
                <dl className="space-y-5 bg-gold-100/50 px-6 py-6 text-sm leading-relaxed">
                  <div>
                    <dt className="text-xs font-bold tracking-[0.18em] text-pine-700 uppercase">Pack size</dt>
                    <dd className="mt-1 font-semibold text-ink-900">{product.packSize}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold tracking-[0.18em] text-pine-700 uppercase">Pack descriptor</dt>
                    <dd className="mt-1 text-ink-900">{product.packLine}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold tracking-[0.18em] text-pine-700 uppercase">Composition (as printed)</dt>
                    <dd className="mt-1 text-ink-600">{product.composition}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold tracking-[0.18em] text-pine-700 uppercase">Usage (as printed)</dt>
                    <dd className="mt-1 text-ink-600">{product.usage}</dd>
                  </div>
                  {product.packWording && (
                    <div>
                      <dt className="text-xs font-bold tracking-[0.18em] text-pine-700 uppercase">Pack wording</dt>
                      <dd className="mt-1 text-ink-600 italic">{product.packWording}</dd>
                    </div>
                  )}
                  <p className="border-t border-pine-800/10 pt-4 text-xs text-ink-500">
                    Transcribed from the company's supplied pack artwork. Refer to the physical product pack for
                    complete and current details. Nothing on this page is medical advice — for health concerns,
                    consult a qualified professional.
                  </p>
                </dl>
              </div>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href={COMPANY.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-pine-800 px-7 py-3.5 text-sm font-semibold text-cream hover:bg-pine-900">
                  <Phone className="h-4 w-4" /> {COMPANY.phoneDisplay}
                </a>
                <a href="#product-enquiry" className="inline-flex items-center gap-2 rounded-full border border-pine-800/30 px-7 py-3.5 text-sm font-semibold text-pine-800 hover:bg-pine-800 hover:text-cream">
                  Enquire About This Product
                </a>
              </div>
              <Link to="/products" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink-500 hover:text-pine-800">
                <ArrowLeft className="h-4 w-4" /> Back to all products
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="product-enquiry" className="bg-parchment/60 py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <SectionHead eyebrow="Product enquiry" title={<>Enquire about <span className="text-pine-700 italic">{product.name}</span></>} align="center" />
          <Reveal delay={120} className="mt-10 rounded-[2rem] border border-pine-800/10 bg-ivory p-7 sm:p-10">
            <EnquiryForm fields={productFields(product.name)} context={`Product Enquiry (${product.name})`} />
          </Reveal>
        </div>
      </section>

      <div className="pt-14">
        <Related current={product} />
      </div>
      <CtaBand />
    </>
  );
}
