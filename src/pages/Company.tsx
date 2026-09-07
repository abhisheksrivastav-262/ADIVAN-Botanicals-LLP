import {
  Sprout,
  ShieldCheck,
  HeartHandshake,
  Eye,
  Target,
  Package,
  Megaphone,
  Truck,
  Repeat,
  BadgeCheck,
  ClipboardCheck,
  FileCheck,
  MessagesSquare,
  Rocket,
  Store,
  Globe,
  FlaskConical,
} from "lucide-react";
import { COMPANY } from "../data/site";
import {
  Reveal,
  SectionHead,
  PageHero,
  PrimaryButton,
  CtaBand,
  LeafDivider,
  useSeo,
} from "../components/ui";

/* ================= ABOUT ================= */
export function About() {
  useSeo("About Us — Adivan Botanicals LLP", "Adivan Botanicals LLP is an Indian Ayurvedic and herbal wellness brand combining traditional knowledge with modern quality standards.");
  const pillars = [
    { icon: Sprout, title: "Traditional Ayurvedic Knowledge", text: "Wellness orientation rooted in India's Ayurvedic heritage and tribal botanical wisdom." },
    { icon: BadgeCheck, title: "Modern Quality Standards", text: "Quality-oriented sourcing, coordinated manufacturing and batch-to-batch consistency." },
    { icon: Package, title: "Professional Branding", text: "Thoughtful packaging, clear product information and responsible communication." },
    { icon: Repeat, title: "Evolving Customer Needs", text: "A portfolio shaped around real customer needs — hair care, syrups and nutrition." },
  ];
  const focus = [
    { icon: FlaskConical, title: "Product Development", text: "Concepts and formulations developed with quality requirements defined upfront." },
    { icon: ClipboardCheck, title: "Quality Coordination", text: "Manufacturing partners supported by documentation and testing coordination." },
    { icon: Megaphone, title: "Brand & Marketing", text: "Professional brand building with responsible, appropriate claims." },
    { icon: Truck, title: "Distribution", text: "Retail, distributor and digital channels carrying products to customers." },
    { icon: HeartHandshake, title: "Customer Relationships", text: "Responsive support and long-term trust with every stakeholder." },
  ];
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={
          <>
            About <span className="text-gold-200 italic">Adivan Botanicals</span> LLP
          </>
        }
        intro="An Indian Ayurvedic and Herbal Wellness brand focused on delivering quality-oriented wellness products under its own brand."
      />
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <SectionHead
              eyebrow="Our story"
              title={
                <>
                  Where heritage meets <span className="text-pine-700 italic">rigour</span>
                </>
              }
            />
            <Reveal delay={100}>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-600">
                <p>
                  Adivan Botanicals LLP was founded on a simple conviction — that India's tribal and Ayurvedic
                  botanical wisdom deserves a place in modern wellness, presented with the quality standards,
                  branding and transparency today's customers expect.
                </p>
                <p>
                  The company focuses on product development, quality coordination, brand building, marketing and
                  distribution — building long-term customer relationships one trusted product at a time.
                </p>
              </div>
              <div className="mt-8">
                <LeafDivider />
              </div>
              <img
                src="/brand/adivan-logo.png"
                alt="Adivan Botanicals LLP official brand mark"
                loading="lazy"
                className="mt-8 w-full max-w-sm rounded-3xl border border-pine-800/10 bg-cream p-6"
              />
              <p className="mt-6 font-display text-xl text-pine-800 italic">“{COMPANY.closingTagline}”</p>
            </Reveal>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <article className="card-lift h-full rounded-3xl border border-pine-800/10 bg-cream p-7">
                  <p.icon className="h-7 w-7 text-pine-700" />
                  <h3 className="mt-3 font-display text-lg leading-snug font-medium text-ink-900">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">{p.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-parchment/60 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHead
            eyebrow="What we do"
            title="Five disciplines, one promise"
            intro="The business focus areas through which Adivan Botanicals delivers on its brand promise."
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {focus.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 110}>
                <article className="card-lift h-full rounded-3xl bg-pine-950 p-7 text-cream">
                  <f.icon className="h-7 w-7 text-gold-400" />
                  <h3 className="mt-4 font-display text-xl font-medium">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-pine-100/85">{f.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <PrimaryButton to="/vision-mission">Our Vision & Mission</PrimaryButton>
          </Reveal>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

/* ================= VISION & MISSION ================= */
export function VisionMission() {
  useSeo("Vision & Mission — Adivan Botanicals LLP", COMPANY.vision);
  const priorities = [
    { icon: ShieldCheck, title: "Quality", text: "Quality-oriented sourcing and manufacturing in everything we ship." },
    { icon: Repeat, title: "Consistency", text: "Attention to batch-to-batch consistency customers can rely on." },
    { icon: FileCheck, title: "Transparency", text: "Clear, honest product information — on pack and on this website." },
    { icon: MessagesSquare, title: "Responsible Communication", text: "Appropriate claims, responsibly made. No exaggeration." },
    { icon: HeartHandshake, title: "Customer Trust", text: "Long-term relationships over short-term sales, always." },
  ];
  return (
    <>
      <PageHero eyebrow="Vision & Mission" title={<>What guides <span className="text-gold-200 italic">every decision</span></>} />
      <section className="grid overflow-hidden lg:grid-cols-2">
        <div className="grain relative bg-pine-950 px-6 py-16 text-cream sm:px-12 lg:px-16 lg:py-24">
          <Reveal>
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-500">
              <Eye className="h-6 w-6 text-pine-950" />
            </span>
            <p className="eyebrow mt-6 text-gold-200">Vision</p>
            <p className="mt-4 font-display text-3xl leading-snug font-medium text-balance sm:text-4xl">
              “{COMPANY.vision}”
            </p>
          </Reveal>
        </div>
        <div className="bg-gold-100 px-6 py-16 sm:px-12 lg:px-16 lg:py-24">
          <Reveal delay={120}>
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pine-800">
              <Target className="h-6 w-6 text-gold-200" />
            </span>
            <p className="eyebrow mt-6 text-pine-700">Mission</p>
            <p className="mt-4 font-display text-3xl leading-snug font-medium text-balance text-pine-950 sm:text-4xl">
              “{COMPANY.mission}”
            </p>
          </Reveal>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHead
          eyebrow="Priorities"
          title={
            <>
              Five commitments we <span className="text-pine-700 italic">live by</span>
            </>
          }
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {priorities.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 110} className={i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}>
              <article className="card-lift h-full rounded-3xl border border-pine-800/10 bg-cream p-8 text-center">
                <p.icon className="mx-auto h-8 w-8 text-pine-700" />
                <h3 className="mt-4 font-display text-2xl font-medium text-ink-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{p.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}

/* ================= QUALITY ================= */
export function Quality() {
  useSeo("Quality & Product Approach — Adivan Botanicals LLP", "Quality-oriented sourcing, batch consistency, transparency, compliance and trust at Adivan Botanicals LLP.");
  const pillars = [
    { icon: Sprout, title: "Quality", text: "Quality-oriented sourcing and manufacturing form the foundation of every Adivan product." },
    { icon: Repeat, title: "Consistency", text: "Attention to batch-to-batch consistency, coordinated with manufacturing partners." },
    { icon: FileCheck, title: "Transparency", text: "Clear and responsible product information — refer to the product pack for specific details." },
    { icon: ClipboardCheck, title: "Compliance", text: "Applicable regulatory requirements considered during development and launch." },
    { icon: HeartHandshake, title: "Trust", text: "Professional packaging, communication and customer support that earn long-term confidence." },
  ];
  return (
    <>
      <PageHero
        eyebrow="Quality & product approach"
        title={
          <>
            Quality you can <span className="text-gold-200 italic">verify</span>, not just believe
          </>
        }
        intro="Five pillars shape how Adivan Botanicals develops, manufactures and communicates every product."
      />
      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="relative">
          <span className="absolute top-0 bottom-0 left-[1.65rem] hidden w-px bg-gradient-to-b from-gold-500 via-pine-700 to-gold-500 sm:block" aria-hidden />
          <div className="space-y-6">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <article className="card-lift relative flex flex-col gap-5 rounded-3xl border border-pine-800/10 bg-cream p-7 sm:ml-16 sm:flex-row sm:items-start">
                  <span className="absolute top-7 -left-16 hidden h-8 w-8 items-center justify-center rounded-full bg-pine-800 font-display text-sm font-semibold text-gold-200 sm:flex" aria-hidden>
                    {i + 1}
                  </span>
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-pine-800">
                    <p.icon className="h-6 w-6 text-gold-200" />
                  </span>
                  <span>
                    <h2 className="font-display text-2xl font-medium text-ink-900">{p.title}</h2>
                    <p className="mt-2 leading-relaxed text-ink-600">{p.text}</p>
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal className="mt-12 rounded-3xl bg-pine-950 p-8 text-center sm:p-10">
          <p className="font-display text-xl leading-relaxed text-cream italic sm:text-2xl">
            “Refer to the product pack for specific information” — our promise to never overstate, and to always
            inform.
          </p>
        </Reveal>
      </section>
      <CtaBand />
    </>
  );
}

/* ================= ROADMAP ================= */
export function Roadmap() {
  useSeo("Growth Roadmap — Adivan Botanicals LLP", "Adivan Botanicals growth roadmap: foundation first, then expansion across pharmacy, retail, distributors and e-commerce.");
  const phases = [
    {
      phase: "Phase 1",
      title: "Foundation",
      icon: Rocket,
      items: ["Product development", "Manufacturing partnerships", "Testing & packaging", "Initial market launch"],
    },
    {
      phase: "Phase 2",
      title: "Expansion",
      icon: Globe,
      items: ["Pharmacy & retail", "Distributor network", "E-commerce", "New product categories", "Wider market presence"],
    },
  ];
  return (
    <>
      <PageHero
        eyebrow="Growth roadmap"
        title={
          <>
            Built to last, <span className="text-gold-200 italic">grown with care</span>
          </>
        }
        intro="A disciplined two-phase journey — foundation first, then expansion."
      />
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="relative grid gap-8 lg:grid-cols-2">
          <span className="absolute top-10 right-1/2 left-1/2 hidden h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent lg:block" aria-hidden />
          {phases.map((ph, i) => (
            <Reveal key={ph.phase} delay={i * 140}>
              <article className="card-lift relative h-full overflow-hidden rounded-[2rem] bg-pine-950 p-9 text-cream">
                <div className="absolute inset-0 opacity-25" aria-hidden style={{ backgroundImage: `radial-gradient(circle at ${i === 0 ? "15%" : "85%"} 10%, #C0963F 0, transparent 35%)` }} />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-gold-500 px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-pine-950 uppercase">
                      {ph.phase}
                    </span>
                    <ph.icon className="h-8 w-8 text-gold-400" />
                  </div>
                  <h2 className="mt-5 font-display text-4xl font-medium">{ph.title}</h2>
                  <span className="gold-rule mt-6 block w-full" aria-hidden />
                  <ul className="mt-6 space-y-4">
                    {ph.items.map((item, j) => (
                      <li key={item} className="flex items-center gap-4">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold-400/40 font-display text-sm font-semibold text-gold-200">
                          {j + 1}
                        </span>
                        <span className="text-pine-50">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex items-center gap-2 text-sm text-pine-100/70">
                    {ph.phase === "Phase 1" ? <Store className="h-4 w-4" /> : <Globe className="h-4 w-4" />}
                    {ph.phase === "Phase 1" ? "Laying strong roots" : "Reaching new markets"}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
