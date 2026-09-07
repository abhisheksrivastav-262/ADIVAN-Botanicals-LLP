import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { COMPANY } from "../data/site";
import { Reveal, SectionHead, PageHero, useSeo } from "../components/ui";
import EnquiryForm, { GENERAL_FIELDS } from "../components/Forms";

export function Contact() {
  useSeo("Contact — Adivan Botanicals LLP", "Reach Adivan Botanicals LLP: +91 9977963311, Burhar, Shahdol, Madhya Pradesh. General, product, manufacturing and distribution enquiries welcome.");
  const cards = [
    { icon: Phone, label: "Mobile", value: COMPANY.phoneDisplay, href: COMPANY.phoneHref },
    { icon: Mail, label: "Email", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
    { icon: MessageCircle, label: "WhatsApp", value: "Chat with us instantly", href: COMPANY.whatsapp },
  ];
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title={
          <>
            Let's start a <span className="text-gold-200 italic">healthy conversation</span>
          </>
        }
        intro={COMPANY.closingTagline}
      />
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-5 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.label} delay={i * 100}>
              <a
                href={c.href}
                target={c.label === "WhatsApp" ? "_blank" : undefined}
                rel={c.label === "WhatsApp" ? "noreferrer" : undefined}
                className="card-lift flex h-full items-center gap-4 rounded-3xl border border-pine-800/10 bg-cream p-7"
              >
                <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-pine-800 p-3.5">
                  <c.icon className="h-5 w-5 text-gold-200" />
                </span>
                <span>
                  <span className="block text-xs font-bold tracking-[0.22em] text-pine-700 uppercase">{c.label}</span>
                  <span className="mt-1 block font-display text-lg font-medium break-all text-ink-900">{c.value}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:items-start">
          <div className="space-y-6">
            <Reveal>
              <div className="rounded-[2rem] bg-pine-950 p-8 text-cream sm:p-10">
                <p className="eyebrow text-gold-200">Registered address</p>
                <h2 className="mt-3 font-display text-2xl font-medium">{COMPANY.name}</h2>
                <address className="mt-4 flex items-start gap-3 text-sm leading-relaxed text-pine-100 not-italic">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
                  <span>
                    {COMPANY.addressLines.map((l) => (
                      <span key={l} className="block">{l}</span>
                    ))}
                  </span>
                </address>
                <p className="mt-5 flex items-center gap-2 text-sm text-pine-100/80">
                  <Clock className="h-4 w-4 text-gold-400" /> We respond to enquiries promptly during business hours.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="overflow-hidden rounded-[2rem] border border-pine-800/10">
                <iframe
                  title="Adivan Botanicals LLP location — Burhar, Shahdol, Madhya Pradesh"
                  src="https://www.google.com/maps?q=Burhar,+Shahdol,+Madhya+Pradesh+484110&output=embed"
                  className="h-72 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
          <Reveal delay={100} className="rounded-[2rem] border border-pine-800/10 bg-cream p-7 sm:p-10">
            <SectionHead eyebrow="General enquiry" title="Send us a message" />
            <div className="mt-8">
              <EnquiryForm fields={GENERAL_FIELDS} context="General Enquiry" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export function NotFound() {
  useSeo("Page not found — Adivan Botanicals LLP", "The page you requested could not be found.");
  return (
    <section className="grain relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-pine-950 px-5 pt-28 pb-16 text-center text-cream">
      <div className="absolute inset-0 opacity-20" aria-hidden style={{ backgroundImage: "radial-gradient(circle at 50% 30%, #C0963F 0, transparent 35%)" }} />
      <Reveal className="relative">
        <p className="font-display text-8xl font-semibold text-gold-200">404</p>
        <h1 className="mt-4 font-display text-3xl font-medium sm:text-4xl">This path leads off the trail</h1>
        <p className="mx-auto mt-3 max-w-md text-pine-100">The page you are looking for has moved or never existed. Let's guide you back.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/" className="rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-pine-950 hover:bg-gold-400">
            Back to Home
          </Link>
          <Link to="/products" className="rounded-full border border-cream/40 px-7 py-3.5 text-sm font-semibold text-cream hover:bg-cream/10">
            Explore Products
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
