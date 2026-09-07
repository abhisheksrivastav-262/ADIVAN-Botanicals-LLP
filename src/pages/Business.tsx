import {
  FlaskConical,
  Factory,
  ClipboardCheck,
  Package,
  Award,
  Handshake,
  Timer,
  MessagesSquare,
  Store,
  Truck,
  Globe,
  ShoppingBag,
  Repeat,
  BadgeCheck,
  Leaf,
  Phone,
  Mail,
} from "lucide-react";
import { COMPANY, MANUFACTURING_STEPS } from "../data/site";
import {
  Reveal,
  SectionHead,
  PageHero,
  PrimaryButton,
  GhostButton,
  CtaBand,
  useSeo,
} from "../components/ui";
import EnquiryForm, { MANUFACTURING_FIELDS, DISTRIBUTION_FIELDS } from "../components/Forms";

/* ================= MANUFACTURING ================= */
export function Manufacturing() {
  useSeo("Manufacturing — Adivan Botanicals LLP", "Adivan Botanicals follows a quality-focused third-party manufacturing model: concept to customer in eight coordinated stages.");
  return (
    <>
      <PageHero
        eyebrow="Quality & manufacturing"
        title={
          <>
            From concept to customer, <span className="text-gold-200 italic">with care at every step</span>
          </>
        }
        intro="Adivan follows a quality-focused third-party manufacturing model — coordinated with clear requirements, documentation and timely supply."
      />
      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="relative">
          <span className="absolute top-0 bottom-0 left-[1.4rem] hidden w-px bg-gradient-to-b from-gold-500 via-pine-700 to-gold-500 sm:block" aria-hidden />
          <ol className="space-y-5">
            {MANUFACTURING_STEPS.map((s, i) => (
              <Reveal key={s.no} delay={Math.min(i * 60, 300)}>
                <li className="relative flex items-start gap-5 rounded-3xl border border-pine-800/10 bg-cream p-6 sm:ml-14 sm:p-7">
                  <span className="absolute top-1/2 -left-14 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-pine-800 font-display text-sm font-semibold text-gold-200 sm:flex" aria-hidden>
                    {s.no}
                  </span>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-pine-50 font-display text-sm font-semibold text-pine-800">
                    {s.no}
                  </span>
                  <span>
                    <h2 className="font-display text-xl font-medium text-ink-900">{s.title}</h2>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{s.text}</p>
                  </span>
                  {i < MANUFACTURING_STEPS.length - 1 && (
                    <span className="absolute -bottom-5 left-10 hidden font-display text-lg text-gold-500 sm:block" aria-hidden>↓</span>
                  )}
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
        <Reveal className="mt-12 rounded-[2rem] bg-pine-950 p-8 text-center sm:p-12">
          <p className="mx-auto max-w-3xl font-display text-xl leading-relaxed text-cream italic sm:text-2xl">
            “Our objective: long-term manufacturing partnerships with suitable manufacturers, supported by clear
            requirements, documentation, quality coordination and timely supply.”
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <PrimaryButton to="/manufacturing-partners" dark>
              Become a Manufacturing Partner
            </PrimaryButton>
            <GhostButton to="/quality" light>
              Our Quality Approach
            </GhostButton>
          </div>
        </Reveal>
      </section>
      <CtaBand />
    </>
  );
}

/* ================= MANUFACTURING PARTNERS ================= */
export function Partners() {
  useSeo("Partner With Adivan Botanicals — Manufacturing", "Manufacturing partnership expectations: quality, compliance, consistent production and long-term relationships.");
  const quality = [
    { icon: Award, title: "Appropriate manufacturing standards" },
    { icon: BadgeCheck, title: "Required licenses / approvals for relevant product category" },
    { icon: FlaskConical, title: "Quality testing capabilities" },
    { icon: ClipboardCheck, title: "Documentation support" },
  ];
  const partnership = [
    { icon: Package, title: "Consistent production" },
    { icon: Timer, title: "Timely supply" },
    { icon: MessagesSquare, title: "Professional communication" },
    { icon: Handshake, title: "Long-term business relationship" },
  ];
  return (
    <>
      <PageHero
        eyebrow="B2B · Manufacturing"
        title={
          <>
            Partner With <span className="text-gold-200 italic">Adivan Botanicals</span>
          </>
        }
        intro="We build long-term manufacturing partnerships with suitable manufacturers — grounded in quality, documentation and dependable supply."
      />
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHead eyebrow="What we expect" title="Quality & Compliance" />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {quality.map((q, i) => (
                <Reveal key={q.title} delay={i * 90}>
                  <div className="card-lift h-full rounded-3xl border border-pine-800/10 bg-cream p-6">
                    <q.icon className="h-6 w-6 text-pine-700" />
                    <p className="mt-3 text-sm leading-relaxed font-medium text-ink-900">{q.title}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div>
            <SectionHead eyebrow="How we work" title="Partnership" />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {partnership.map((q, i) => (
                <Reveal key={q.title} delay={i * 90}>
                  <div className="card-lift h-full rounded-3xl bg-pine-950 p-6 text-cream">
                    <q.icon className="h-6 w-6 text-gold-400" />
                    <p className="mt-3 text-sm leading-relaxed font-medium">{q.title}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <Reveal>
            <SectionHead
              eyebrow="Enquire"
              title={
                <>
                  Become a <span className="text-pine-700 italic">Manufacturing Partner</span>
                </>
              }
              intro="Share your capabilities and product categories. Our team will connect with you to explore a long-term fit."
            />
            <div className="mt-6 space-y-3 text-sm text-ink-600">
              <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-pine-700" /> <a href={COMPANY.phoneHref} className="font-semibold text-pine-800">{COMPANY.phoneDisplay}</a></p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-pine-700" /> <a href={`mailto:${COMPANY.email}`} className="font-semibold text-pine-800">{COMPANY.email}</a></p>
            </div>
          </Reveal>
          <Reveal delay={120} className="rounded-[2rem] border border-pine-800/10 bg-cream p-7 sm:p-10">
            <EnquiryForm fields={MANUFACTURING_FIELDS} context="Manufacturing Partnership" submitLabel="Become a Manufacturing Partner" />
          </Reveal>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

/* ================= DISTRIBUTION ================= */
export function Distribution() {
  useSeo("Distribution & Market — Adivan Botanicals LLP", "Growing through trusted distribution: pharmacies, wellness stores, distributors, retail partners and e-commerce.");
  const retail = [
    { icon: Store, title: "Pharmacies", text: "Neighbourhood pharmacies and medical stores." },
    { icon: Store, title: "Medical Stores", text: "Professional counters customers already trust." },
    { icon: Leaf, title: "Wellness Stores", text: "Ayurvedic and natural-wellness retail." },
    { icon: Truck, title: "Distributors", text: "Territory partners who move volume reliably." },
    { icon: Handshake, title: "Retail Partners", text: "Long-term shelf partnerships." },
  ];
  const digital = [
    { icon: ShoppingBag, title: "E-commerce", text: "Online storefronts and marketplaces." },
    { icon: Globe, title: "Social Media", text: "Brand storytelling and community." },
    { icon: Globe, title: "Direct Digital Channels", text: "Brand-owned digital touchpoints." },
    { icon: ShoppingBag, title: "Online Marketplaces", text: "Where wellness shoppers already buy." },
  ];
  const strategy = [
    { icon: Phone, title: "Direct Customer Sales", text: "One-to-one relationships and repeat trust." },
    { icon: ShoppingBag, title: "Online Marketplaces", text: "Digital reach across India." },
    { icon: Store, title: "Retail", text: "Physical availability where it matters." },
    { icon: Truck, title: "Distributor Network", text: "Territory-wise depth and supply." },
    { icon: Repeat, title: "Repeat Purchases", text: "Quality that brings customers back." },
  ];
  return (
    <>
      <PageHero
        eyebrow="B2B · Distribution"
        title={
          <>
            Growing Through <span className="text-gold-200 italic">Trusted Distribution</span>
          </>
        }
        intro="Health-conscious urban and semi-urban consumers interested in Ayurvedic, herbal and wellness products — reached through retail, professional and digital channels."
      />
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHead
          eyebrow="Retail & professional channels"
          title="Where customers meet Adivan"
          align="center"
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {retail.map((r, i) => (
            <Reveal key={r.title + i} delay={(i % 3) * 100} className={i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}>
              <article className="card-lift flex h-full items-start gap-4 rounded-3xl border border-pine-800/10 bg-cream p-7">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-pine-800">
                  <r.icon className="h-5 w-5 text-gold-200" />
                </span>
                <span>
                  <h3 className="font-display text-xl font-medium text-ink-900">{r.title}</h3>
                  <p className="mt-1 text-sm text-ink-600">{r.text}</p>
                </span>
              </article>
            </Reveal>
          ))}
          <Reveal delay={200}>
            <article className="card-lift flex h-full items-start gap-4 rounded-3xl bg-pine-950 p-7 text-cream">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold-500">
                <Factory className="h-5 w-5 text-pine-950" />
              </span>
              <span>
                <h3 className="font-display text-xl font-medium">Plus: your channel</h3>
                <p className="mt-1 text-sm text-pine-100/85">Tell us how you sell wellness — we will explore the fit.</p>
              </span>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="bg-parchment/60 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionHead eyebrow="Digital market" title="Online, everywhere it counts" />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {digital.map((d, i) => (
                  <Reveal key={d.title + i} delay={i * 90}>
                    <div className="card-lift h-full rounded-3xl bg-cream p-6">
                      <d.icon className="h-6 w-6 text-pine-700" />
                      <h3 className="mt-3 font-display text-lg font-medium text-ink-900">{d.title}</h3>
                      <p className="mt-1 text-sm text-ink-600">{d.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <div>
              <SectionHead eyebrow="Sales strategy" title="Five routes to the customer" />
              <div className="mt-8 space-y-4">
                {strategy.map((s, i) => (
                  <Reveal key={s.title} delay={i * 80}>
                    <div className="flex items-start gap-4 rounded-3xl bg-pine-950 p-5 text-cream">
                      <s.icon className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
                      <div>
                        <h3 className="font-display text-lg font-medium">{s.title}</h3>
                        <p className="text-sm text-pine-100/80">{s.text}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <Reveal>
              <SectionHead
                eyebrow="Distribution enquiry"
                title={
                  <>
                    Stock, distribute or <span className="text-pine-700 italic">retail Adivan</span>
                  </>
                }
                intro="Pharmacies, wellness stores, distributors and retail partners — start the conversation here."
              />
            </Reveal>
            <Reveal delay={120} className="rounded-[2rem] border border-pine-800/10 bg-ivory p-7 sm:p-10">
              <EnquiryForm fields={DISTRIBUTION_FIELDS} context="Distribution" submitLabel="Send Distribution Enquiry" />
            </Reveal>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

/* ================= FOUNDERS ================= */
export function Founders() {
  useSeo("Founders — Adivan Botanicals LLP", "Dr. Narayan Prasad Patel (Founder) and Dr. Hema Patel (Co-Founder) lead Adivan Botanicals LLP.");
  const founders = [
    {
      photo: "/founders/dr-narayan-prasad-patel.jpg",
      name: "Dr. Narayan Prasad Patel",
      role: "Founder · Adivan Botanicals LLP",
      tags: ["Health", "Wellness", "Business Development"],
      text: "Leads Adivan Botanicals with a focus on health, wellness and business development — shaping the company's products, partnerships and market direction.",
    },
    {
      photo: "/founders/dr-hema-patel.jpg",
      name: "Dr. Hema Patel",
      role: "Co-Founder · Adivan Botanicals LLP",
      tags: ["Wellness", "Product Development", "Brand Support"],
      text: "Supports the brand across wellness thinking, product development and brand building — nurturing the quality and care behind every Adivan product.",
    },
  ];
  const commitments = [
    {
      title: "To Manufacturing Partners",
      items: ["Clear product requirements", "Professional communication", "Quality-oriented production", "Documentation", "Timely coordination", "Long-term relationships"],
    },
    {
      title: "To Our Customers",
      items: ["Appropriate product information", "Quality-oriented products", "Professional packaging", "Responsible communication", "Responsive customer support", "Long-term trust"],
    },
  ];
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title={
          <>
            The people behind <span className="text-gold-200 italic">the promise</span>
          </>
        }
        intro="A founder-led company where accountability starts at the top."
      />
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-8 md:grid-cols-2">
          {founders.map((f, i) => (
            <Reveal key={f.name} delay={i * 140}>
              <article className="card-lift relative h-full overflow-hidden rounded-[2rem] bg-pine-950 p-9 text-cream">
                <div className="absolute inset-0 opacity-25" aria-hidden style={{ backgroundImage: `radial-gradient(circle at ${i === 0 ? "85%" : "15%"} 12%, #C0963F 0, transparent 36%)` }} />
                <div className="relative">
                  <img
                    src={f.photo}
                    alt={`${f.name} — ${f.role}`}
                    loading="lazy"
                    className="h-44 w-36 rounded-3xl object-cover object-top ring-1 ring-gold-400/50"
                  />
                  <p className="eyebrow mt-7 text-gold-200">{f.role}</p>
                  <h2 className="mt-3 font-display text-3xl font-medium">{f.name}</h2>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {f.tags.map((t) => (
                      <span key={t} className="rounded-full border border-cream/25 px-3.5 py-1 text-xs font-semibold text-pine-100">
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="mt-5 leading-relaxed text-pine-100/85">{f.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <SectionHead
            eyebrow="Customer commitment"
            title={
              <>
                Commitments we make, <span className="text-pine-700 italic">in writing</span>
              </>
            }
            align="center"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {commitments.map((c, i) => (
              <Reveal key={c.title} delay={i * 120}>
                <article className="h-full rounded-[2rem] border border-pine-800/10 bg-cream p-8">
                  <h3 className="font-display text-2xl font-medium text-pine-900">{c.title}</h3>
                  <span className="gold-rule mt-4 block w-full" aria-hidden />
                  <ul className="mt-5 space-y-3">
                    {c.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-ink-600">
                        <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-pine-700" /> {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
