import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf } from "lucide-react";
import type { Product } from "../data/products";
import { cn } from "../lib/cn";

/* ---------------- SEO ---------------- */
export function useSeo(title: string, description: string) {
  useEffect(() => {
    document.title = title;
    const ensure = (selector: string, attr: string, value: string) => {
      let el = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        const [k, v] = attr.split("=");
        if (k === "property") el.setAttribute("property", v);
        else el.setAttribute("name", v);
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };
    ensure('meta[name="description"]', "name=description", description);
    ensure('meta[property="og:title"]', "property=og:title", title);
    ensure('meta[property="og:description"]', "property=og:description", description);
  }, [title, description]);
}

/* ---------------- Scroll reveal ---------------- */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span";
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </Tag>
  );
}

/* ---------------- Typography blocks ---------------- */
export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={cn("eyebrow flex items-center gap-3", light ? "text-gold-200" : "text-pine-700")}>
      <span className={cn("inline-block h-px w-10", light ? "bg-gold-200" : "bg-gold-500")} aria-hidden />
      {children}
    </p>
  );
}

export function SectionHead({
  eyebrow,
  title,
  intro,
  light = false,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  light?: boolean;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <div className={cn(align === "center" && "flex justify-center")}>
        <Eyebrow light={light}>{eyebrow}</Eyebrow>
      </div>
      <h2
        className={cn(
          "mt-4 font-display text-3xl leading-[1.12] font-medium text-balance sm:text-4xl lg:text-[2.75rem]",
          light ? "text-cream" : "text-ink-900"
        )}
      >
        {title}
      </h2>
      {intro && (
        <p className={cn("mt-4 text-base leading-relaxed sm:text-lg", light ? "text-pine-100" : "text-ink-600")}>
          {intro}
        </p>
      )}
    </Reveal>
  );
}

export function LeafDivider({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-3" aria-hidden>
      <span className={cn("h-px w-16", light ? "bg-gold-200/60" : "bg-gold-500/70")} />
      <Leaf className={cn("h-4 w-4", light ? "text-gold-200" : "text-pine-700")} />
      <span className={cn("h-px w-16", light ? "bg-gold-200/60" : "bg-gold-500/70")} />
    </div>
  );
}

/* ---------------- Buttons ---------------- */
export function PrimaryButton({
  to,
  children,
  dark = false,
}: {
  to: string;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <Link
      to={to}
      className={cn(
        "group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300",
        dark
          ? "bg-gold-500 text-pine-950 hover:bg-gold-400 hover:shadow-[0_16px_36px_-12px_rgba(192,150,63,0.6)]"
          : "bg-pine-800 text-cream hover:bg-pine-900 hover:shadow-[0_16px_36px_-12px_rgba(11,31,20,0.55)]"
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}

export function GhostButton({ to, children, light = false }: { to: string; children: ReactNode; light?: boolean }) {
  return (
    <Link
      to={to}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300",
        light
          ? "border-cream/40 text-cream hover:border-cream hover:bg-cream/10"
          : "border-pine-800/30 text-pine-800 hover:border-pine-800 hover:bg-pine-800 hover:text-cream"
      )}
    >
      {children}
    </Link>
  );
}

/* ---------------- Product image — actual PPT-extracted pack photo ---------------- */
export function ProductImage({
  product,
  className,
  eager = false,
}: {
  product: Product;
  className?: string;
  eager?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={cn(
          "flex h-full w-full items-center justify-center bg-parchment p-6 text-center",
          className
        )}
        role="img"
        aria-label={product.name}
      >
        <span className="font-display text-lg text-pine-800 italic">{product.name}</span>
      </div>
    );
  }

  return (
    <div className={cn("pack-frame h-full w-full bg-cream", className)}>
      <img
        src={product.image}
        alt={`${product.name} — actual Adivan Botanicals pack, ${product.packSize}`}
        loading={eager ? "eager" : "lazy"}
        onError={() => setFailed(true)}
        className="h-full w-full"
      />
    </div>
  );
}

/* ---------------- Product card ---------------- */
export function ProductCard({ product, delay = 0 }: { product: Product; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <Link
        to={`/products/${product.slug}`}
        className="card-lift group flex h-full flex-col overflow-hidden rounded-3xl border border-pine-800/10 bg-cream"
      >
        <div className="relative h-[360px] overflow-hidden bg-cream p-4">
          <ProductImage product={product} className="rounded-2xl" />
          <span className="absolute top-4 left-4 rounded-full bg-pine-950/85 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.16em] text-gold-200 uppercase backdrop-blur">
            {product.category === "Ayurvedic & Wellness Syrups" ? "Wellness Syrup" : product.category}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-xl font-medium text-ink-900 transition-colors group-hover:text-pine-700">
            {product.name}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">{product.tagline}</p>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-pine-700">
            View Product
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

/* ---------------- Page hero ---------------- */
export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
}) {
  return (
    <section className="grain relative overflow-hidden bg-pine-950 text-cream">
      <div
        className="absolute inset-0 opacity-[0.14]"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 25%, #C0963F 0, transparent 32%), radial-gradient(circle at 85% 70%, #2E6B45 0, transparent 40%)",
        }}
      />
      <Leaf className="animate-drift absolute -top-6 right-[8%] h-40 w-40 text-pine-700/50" aria-hidden />
      <Leaf className="animate-drift-slow absolute bottom-[-3rem] left-[4%] h-52 w-52 -scale-x-100 text-pine-800/60" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 pt-36 pb-16 sm:px-8 sm:pt-40 sm:pb-20">
        <Reveal>
          <Eyebrow light>{eyebrow}</Eyebrow>
          <h1 className="mt-4 max-w-4xl font-display text-4xl leading-[1.08] font-medium text-balance sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {intro && <p className="mt-5 max-w-2xl text-base leading-relaxed text-pine-100 sm:text-lg">{intro}</p>}
          <div className="mt-8">
            <LeafDivider light />
          </div>
        </Reveal>
      </div>
      <div className="relative h-6 bg-ivory [clip-path:ellipse(60%_100%_at_50%_100%)]" aria-hidden />
    </section>
  );
}

/* ---------------- CTA band ---------------- */
export function CtaBand() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
      <Reveal>
        <div className="grain relative overflow-hidden rounded-[2rem] bg-pine-900 px-6 py-14 text-center sm:px-12 sm:py-16">
          <div
            className="absolute inset-0 opacity-20"
            aria-hidden
            style={{
              backgroundImage:
                "radial-gradient(circle at 15% 20%, #C0963F 0, transparent 30%), radial-gradient(circle at 85% 80%, #2E6B45 0, transparent 35%)",
            }}
          />
          <div className="relative">
            <p className="eyebrow justify-center text-gold-200">Begin the conversation</p>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-medium text-balance text-cream sm:text-4xl">
              Partner with a brand built on quality and trust
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pine-100">
              For customers, retailers, distributors and manufacturing partners — connect with Adivan Botanicals LLP.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <PrimaryButton to="/products" dark>
                Explore Products
              </PrimaryButton>
              <GhostButton to="/contact" light>
                Contact Us
              </GhostButton>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
