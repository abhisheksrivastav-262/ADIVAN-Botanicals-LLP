import { Link } from "react-router-dom";
import {
  Leaf,
  Sprout,
  ShieldCheck,
  HeartHandshake,
  ArrowRight,
  ArrowUpRight,
  FlaskConical,
  Factory,
  Truck,
  Phone,
  CheckCircle2,
} from "lucide-react";
import { COMPANY, MANUFACTURING_STEPS } from "../data/site";
import { productBySlug } from "../data/products";
import {
  Reveal,
  Eyebrow,
  SectionHead,
  LeafDivider,
  PrimaryButton,
  GhostButton,
  ProductCard,
  ProductImage,
  CtaBand,
  useSeo,
} from "../components/ui";

const TRUST_WORDS = ["Quality", "Transparency", "Ayurveda", "Trust"];

function Hero() {
  const featured = ["hair-grow-oil", "hair-pure-shampoo", "hair-grow-serum"]
    .map((s) => productBySlug(s))
    .filter((p) => p !== undefined);

  return (
    <section className="grain relative overflow-hidden bg-pine-950 text-cream">
      <div
        className="absolute inset-0 opacity-25"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 12% 20%, #C0963F 0, transparent 30%), radial-gradient(circle at 88% 30%, #2E6B45 0, transparent 38%), radial-gradient(circle at 55% 90%, #183E27 0, transparent 45%)",
        }}
      />
      <Leaf className="animate-drift absolute top-24 right-[6%] hidden h-44 w-44 text-pine-700/60 md:block" aria-hidden />
      <Leaf className="animate-drift-slow absolute bottom-10 left-[3%] hidden h-56 w-56 -scale-x-100 text-pine-800/50 md:block" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pt-32 pb-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pt-44 lg:pb-24">
        <Reveal>
          <p className="eyebrow text-gold-200">
            <span className="inline-block h-px w-10 bg-gold-400" aria-hidden /> Adivan Botanicals LLP · India
          </p>
          <h1 className="mt-5 font-display text-[2.6rem] leading-[1.06] font-medium text-balance sm:text-6xl lg:text-[4.4rem]">
            From Tribal Wisdom to <span className="text-gold-200 italic">Modern Wellness</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-pine-100 sm:text-lg">{COMPANY.intro}</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <PrimaryButton to="/products" dark>
              Explore Our Products
            </PrimaryButton>
            <GhostButton to="/contact" light>
              Connect With Us
            </GhostButton>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-pine-100/90">
            {["Ayurvedic & herbal orientation", "Quality-focused manufacturing", "Responsible communication"].map(
              (t) => (
                <span key={t} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-gold-400" /> {t}
                </span>
              )
            )}
          </div>
        </Reveal>

        <Reveal delay={150} className="relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="absolute -inset-4 rounded-[2.5rem] border border-gold-400/25" aria-hidden />
            <div className="grid grid-cols-2 gap-4">
              <div className="pack-frame aspect-[3/4] overflow-hidden rounded-3xl border border-cream/15 bg-cream p-3 shadow-2xl">
                {featured[0] && <ProductImage product={featured[0]} eager className="rounded-2xl" />}
              </div>
              <div className="flex flex-col gap-4 pt-10">
                <div className="pack-frame aspect-[3/3.4] overflow-hidden rounded-3xl border border-cream/15 bg-cream p-3 shadow-2xl">
                  {featured[1] && <ProductImage product={featured[1]} eager className="rounded-2xl" />}
                </div>
                <div className="pack-frame aspect-[3/3.4] overflow-hidden rounded-3xl border border-cream/15 bg-cream p-3 shadow-2xl">
                  {featured[2] && <ProductImage product={featured[2]} className="rounded-2xl" />}
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 left-1/2 w-max -translate-x-1/2 rounded-full border border-gold-400/30 bg-pine-950/90 px-6 py-2.5 text-xs font-semibold tracking-[0.2em] text-gold-200 uppercase backdrop-blur">
              Ayurveda · Quality · Trust
            </div>
          </div>
        </Reveal>
      </div>

      {/* trust marquee */}
      <div className="relative border-t border-cream/10 bg-pine-950/60 py-4 backdrop-blur">
        <div className="flex overflow-hidden" aria-hidden>
          <div className="animate-marquee flex shrink-0 items-center gap-10 pr-10 whitespace-nowrap">
            {[...TRUST_WORDS, ...TRUST_WORDS, ...TRUST_WORDS, ...TRUST_WORDS].map((w, i) => (
              <span key={i} className="flex items-center gap-10 text-xs font-bold tracking-[0.32em] text-gold-200/90 uppercase">
                {w} <Leaf className="h-3.5 w-3.5 text-gold-500" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Intro() {
  const cards = [
    {
      no: "01",
      icon: Sprout,
      title: "Ayurveda",
      text: "Traditional knowledge and Ayurvedic wellness orientation guide every product in the portfolio.",
    },
    {
      no: "02",
      icon: ShieldCheck,
      title: "Quality",
      text: "Quality-oriented sourcing and manufacturing, coordinated batch after batch.",
    },
    {
      no: "03",
      icon: HeartHandshake,
      title: "Trust",
      text: "Transparency, responsible communication and dependable customer support.",
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
        <SectionHead
          eyebrow="Who we are"
          title={
            <>
              Traditional Wisdom. <span className="text-pine-700 italic">Modern Quality.</span> Responsible Wellness.
            </>
          }
          intro="Adivan Botanicals connects traditional Ayurvedic knowledge with modern quality standards, professional branding and evolving customer needs."
        />
        <Reveal delay={100}>
          <LeafDivider />
        </Reveal>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {cards.map((c, i) => (
          <Reveal key={c.no} delay={i * 120}>
            <article className="card-lift group relative h-full overflow-hidden rounded-3xl border border-pine-800/10 bg-cream p-8">
              <span className="font-display text-6xl font-semibold text-pine-100 transition-colors group-hover:text-gold-200" aria-hidden>
                {c.no}
              </span>
              <c.icon className="mt-4 h-8 w-8 text-pine-700" />
              <h3 className="mt-3 font-display text-2xl font-medium text-ink-900">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{c.text}</p>
              <span className="gold-rule mt-6 block w-full opacity-60" aria-hidden />
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Featured() {
  const slugs = [
    "hair-pure-shampoo",
    "hair-conditioner",
    "hair-grow-tablets",
    "hair-grow-shampoo",
    "hair-grow-serum",
    "hair-grow-oil",
  ];
  const items = slugs.map((s) => productBySlug(s)).filter((p) => p !== undefined);
  return (
    <section className="bg-parchment/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            eyebrow="Featured products"
            title={
              <>
                The Adivan <span className="text-pine-700 italic">hair-care</span> portfolio
              </>
            }
            intro="Six formulations spanning cleansing, conditioning, serum, oil and tablets — presented in professional brand packaging."
          />
          <Reveal delay={120}>
            <Link to="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-pine-800 hover:text-pine-900">
              View all 17 products <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <ProductCard key={p.slug} product={p} delay={(i % 3) * 110} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Categories() {
  const tiles = [
    {
      path: "/hair-care",
      title: "Hair Care",
      text: "Hair wellness and care portfolio — shampoo, conditioner, serum, oil and tablets.",
      count: "6 products",
      icon: Sprout,
    },
    {
      path: "/syrups",
      title: "Ayurvedic & Wellness Syrups",
      text: "Uterine, Multivitamin, Liver 3X, Liver, Iron, Enzyme, Adilyco, Acidity, Piles and Stone syrups.",
      count: "10 products",
      icon: FlaskConical,
    },
    {
      path: "/nutrition",
      title: "Nutrition & Wellness",
      text: "Adivan Nutrition — the brand's nutrition-oriented wellness offering.",
      count: "1 product",
      icon: ShieldCheck,
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <SectionHead
        eyebrow="Portfolio"
        title={
          <>
            Three universes, <span className="text-pine-700 italic">one standard</span>
          </>
        }
        align="center"
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {tiles.map((t, i) => (
          <Reveal key={t.path} delay={i * 120}>
            <Link
              to={t.path}
              className="card-lift group relative flex h-full min-h-[22rem] flex-col justify-end overflow-hidden rounded-[2rem] bg-pine-900 p-8 text-cream"
            >
              <div
                className="absolute inset-0 opacity-30 transition-opacity duration-500 group-hover:opacity-45"
                aria-hidden
                style={{
                  backgroundImage: `radial-gradient(circle at ${20 + i * 30}% 15%, #C0963F 0, transparent 34%), radial-gradient(circle at 85% 85%, #2E6B45 0, transparent 40%)`,
                }}
              />
              <t.icon className="animate-drift absolute top-7 right-7 h-10 w-10 text-gold-400/50" aria-hidden />
              <div className="relative">
                <span className="rounded-full border border-gold-400/40 px-3 py-1 text-[0.68rem] font-semibold tracking-[0.18em] text-gold-200 uppercase">
                  {t.count}
                </span>
                <h3 className="mt-4 font-display text-3xl font-medium">{t.title}</h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-pine-100/90">{t.text}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-200">
                  Explore range <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function VisionTeaser() {
  return (
    <section className="grid overflow-hidden lg:grid-cols-2">
      <div className="grain relative flex items-center bg-pine-950 px-6 py-16 text-cream sm:px-12 lg:px-16 lg:py-24">
        <div className="absolute inset-0 opacity-20" aria-hidden style={{ backgroundImage: "radial-gradient(circle at 80% 20%, #C0963F 0, transparent 32%)" }} />
        <Reveal className="relative">
          <Eyebrow light>Our vision</Eyebrow>
          <p className="mt-5 font-display text-2xl leading-snug font-medium text-balance sm:text-3xl">
            “{COMPANY.vision}”
          </p>
          <div className="mt-8">
            <GhostButton to="/vision-mission" light>
              Vision & Mission
            </GhostButton>
          </div>
        </Reveal>
      </div>
      <div className="flex items-center bg-gold-100 px-6 py-16 sm:px-12 lg:px-16 lg:py-24">
        <Reveal delay={120}>
          <Eyebrow>Our mission</Eyebrow>
          <p className="mt-5 font-display text-2xl leading-snug font-medium text-balance text-pine-950 sm:text-3xl">
            “{COMPANY.mission}”
          </p>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {["Quality", "Consistency", "Transparency", "Responsible Communication", "Customer Trust"].map((p) => (
              <span key={p} className="rounded-full border border-pine-800/25 bg-cream/60 px-4 py-1.5 text-xs font-semibold text-pine-800">
                {p}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ManufacturingTeaser() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <SectionHead
        eyebrow="How we work"
        title={
          <>
            A quality-focused <span className="text-pine-700 italic">third-party</span> manufacturing model
          </>
        }
        intro="From product concept to customer — every stage coordinated with clear requirements, documentation and quality oversight."
        align="center"
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {MANUFACTURING_STEPS.map((s, i) => (
          <Reveal key={s.no} delay={(i % 4) * 100}>
            <div className="relative h-full rounded-3xl border border-pine-800/10 bg-cream p-6">
              <span className="text-xs font-bold tracking-[0.22em] text-gold-600">{s.no}</span>
              <h3 className="mt-2 font-display text-lg font-medium text-ink-900">{s.title}</h3>
              {i < MANUFACTURING_STEPS.length - 1 && (
                <span className="absolute top-1/2 -right-2 hidden h-px w-4 bg-gold-500/60 lg:block" aria-hidden />
              )}
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-10 text-center">
        <PrimaryButton to="/manufacturing">Inside Our Manufacturing</PrimaryButton>
      </Reveal>
    </section>
  );
}

function Promise() {
  const cards = [
    { icon: Sprout, title: "Pure Ingredients", text: "Quality-oriented sourcing and product approach." },
    { icon: ShieldCheck, title: "Trusted Quality", text: "Consistent and responsible manufacturing coordination." },
    { icon: FlaskConical, title: "Responsible Communication", text: "Clear product information and appropriate claims." },
    { icon: HeartHandshake, title: "Long-Term Relationships", text: "Customers, retailers, distributors and manufacturing partners." },
  ];
  return (
    <section className="bg-parchment/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          eyebrow="Brand promise"
          title={
            <>
              Quality · Transparency · <span className="text-pine-700 italic">Ayurveda</span> · Trust
            </>
          }
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <article className="card-lift h-full rounded-3xl bg-pine-950 p-7 text-cream">
                <c.icon className="h-7 w-7 text-gold-400" />
                <h3 className="mt-4 font-display text-xl font-medium">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-pine-100/85">{c.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function BusinessStrip() {
  const tiles = [
    { icon: Factory, title: "Manufacturing Partners", text: "Clear requirements, documentation and long-term partnerships.", to: "/manufacturing-partners" },
    { icon: Truck, title: "Distribution Network", text: "Pharmacies, wellness stores, distributors and e-commerce.", to: "/distribution" },
    { icon: Phone, title: "Talk to Us", text: `${COMPANY.phoneDisplay} · Burhar, Shahdol, MP`, to: "/contact" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
      <div className="grid gap-6 md:grid-cols-3">
        {tiles.map((t, i) => (
          <Reveal key={t.title} delay={i * 110}>
            <Link to={t.to} className="card-lift group flex h-full items-start gap-4 rounded-3xl border border-pine-800/10 bg-cream p-7">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-pine-800">
                <t.icon className="h-5 w-5 text-gold-200" />
              </span>
              <span>
                <span className="flex items-center gap-2 font-display text-xl font-medium text-ink-900">
                  {t.title} <ArrowRight className="h-4 w-4 text-pine-700 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="mt-1.5 block text-sm leading-relaxed text-ink-600">{t.text}</span>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
      <p className="mt-12 text-center font-display text-xl text-pine-800 italic sm:text-2xl">
        “{COMPANY.closingTagline}”
      </p>
    </section>
  );
}

export default function Home() {
  useSeo(
    "Adivan Botanicals LLP — From Tribal Wisdom to Modern Wellness",
    "Adivan Botanicals LLP is an Indian Ayurvedic and herbal wellness brand: quality-oriented hair-care, wellness syrups and nutrition products."
  );
  return (
    <>
      <Hero />
      <Intro />
      <Featured />
      <Categories />
      <VisionTeaser />
      <ManufacturingTeaser />
      <Promise />
      <BusinessStrip />
      <CtaBand />
    </>
  );
}
