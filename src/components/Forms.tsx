import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, MessageCircle, Send } from "lucide-react";
import { COMPANY } from "../data/site";
import { PRODUCTS } from "../data/products";
import { cn } from "../lib/cn";

export interface FieldDef {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea" | "select";
  options?: string[];
  placeholder?: string;
  required?: boolean;
  span?: boolean;
}

interface Props {
  fields: FieldDef[];
  context: string;
  submitLabel?: string;
  /** pre-filled values, e.g. the product name on a product detail page */
  defaults?: Record<string, string>;
}

const WHATSAPP_NUMBER = "919977963311";

function buildMessage(context: string, values: Record<string, string>): string {
  const lines = ["Hello Adivan Botanicals LLP,"];
  if (context.toLowerCase().includes("product")) {
    lines.push("I am interested in your product.");
  } else {
    lines.push("I have sent an enquiry through your website.");
  }
  Object.entries(values).forEach(([label, value]) => {
    const v = value.trim();
    if (v) lines.push(`${label}: ${v}`);
  });
  lines.push("Please contact me regarding this enquiry.");
  return lines.join("\n");
}

function buildWhatsAppLink(context: string, values: Record<string, string>): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildMessage(context, values))}`;
}

export default function EnquiryForm({ fields, context, submitLabel = "Send Enquiry", defaults = {} }: Props) {
  const makeInitial = () => Object.fromEntries(fields.map((f) => [f.label, defaults[f.label] || ""]));
  const [values, setValues] = useState<Record<string, string>>(makeInitial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "blocked">("idle");
  const [waLink, setWaLink] = useState<string>("");

  const set = (label: string, v: string) => {
    setValues((p) => ({ ...p, [label]: v }));
    setErrors((p) => ({ ...p, [label]: "" }));
  };

  const validate = (): boolean => {
    const e: Record<string, string> = {};
    fields.forEach((f) => {
      const v = (values[f.label] || "").trim();
      if (f.required && !v) e[f.label] = `${f.label} is required.`;
      else if (f.type === "email" && v && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) e[f.label] = "Enter a valid email address.";
      else if (f.type === "tel" && v && !/^[+\d][\d\s-]{6,16}$/.test(v)) e[f.label] = "Enter a valid phone number.";
    });
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (status === "sending") return;
    if (!validate()) return;
    // Build the complete WhatsApp message first, then open it in the
    // submit handler itself so mobile/desktop popup blockers allow it.
    const link = buildWhatsAppLink(context, values);
    setWaLink(link);
    setStatus("sending");
    const win = window.open(link, "_blank", "noopener");
    window.setTimeout(() => {
      if (win) {
        setStatus("sent");
        setValues(makeInitial());
      } else {
        // Popup was blocked — do NOT show a fake success; ask the user
        // to open WhatsApp manually with the same pre-filled message.
        setStatus("blocked");
      }
    }, 600);
  };

  if (status === "blocked") {
    return (
      <div className="rounded-3xl border border-gold-500/50 bg-gold-100/60 p-10 text-center">
        <MessageCircle className="mx-auto h-12 w-12 text-pine-800" />
        <h3 className="mt-4 font-display text-2xl font-medium text-pine-950">WhatsApp was blocked by your browser</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-600">
          Your details are ready — tap below to open WhatsApp and send your enquiry to{" "}
          <a href={COMPANY.phoneHref} className="font-semibold text-pine-800 underline">
            {COMPANY.phoneDisplay}
          </a>
          .
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#1FA855] px-8 py-3 text-sm font-semibold text-white hover:brightness-95"
          >
            Tap to Open WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="rounded-full border border-pine-800/30 px-6 py-3 text-sm font-semibold text-pine-800 hover:bg-pine-800 hover:text-cream"
          >
            Back to Form
          </button>
        </div>
      </div>
    );
  }

  if (status === "sent") {
    return (
      <div className="rounded-3xl border border-pine-700/20 bg-pine-50 p-10 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-pine-700" />
        <h3 className="mt-4 font-display text-2xl font-medium text-pine-950">Enquiry sent to WhatsApp</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-600">
          Your complete enquiry has opened in WhatsApp to{" "}
          <a href={COMPANY.phoneHref} className="font-semibold text-pine-800 underline">
            {COMPANY.phoneDisplay}
          </a>{" "}
          — just press send there. Our team will connect with you shortly.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {waLink && (
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#1FA855] px-6 py-2.5 text-sm font-semibold text-white hover:brightness-95"
            >
              Open WhatsApp Again
            </a>
          )}
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="rounded-full border border-pine-800/30 px-6 py-2.5 text-sm font-semibold text-pine-800 hover:bg-pine-800 hover:text-cream"
          >
            Send another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      {fields.map((f) => (
        <div key={f.label} className={cn(f.span && "sm:col-span-2", f.type === "textarea" && "sm:col-span-2")}>
          <label htmlFor={`f-${context}-${f.name}`} className="mb-1.5 block text-sm font-semibold text-pine-950">
            {f.label} {f.required && <span className="text-clay-500">*</span>}
          </label>
          {f.type === "textarea" ? (
            <textarea
              id={`f-${context}-${f.name}`}
              rows={4}
              value={values[f.label]}
              onChange={(e) => set(f.label, e.target.value)}
              placeholder={f.placeholder}
              className="w-full resize-none rounded-2xl border border-pine-800/15 bg-cream px-4 py-3 text-sm text-ink-900 placeholder:text-ink-500/60 focus:border-pine-700 focus:ring-2 focus:ring-pine-700/20 focus:outline-none"
            />
          ) : f.type === "select" ? (
            <select
              id={`f-${context}-${f.name}`}
              value={values[f.label]}
              onChange={(e) => set(f.label, e.target.value)}
              className="w-full rounded-2xl border border-pine-800/15 bg-cream px-4 py-3 text-sm text-ink-900 focus:border-pine-700 focus:ring-2 focus:ring-pine-700/20 focus:outline-none"
            >
              <option value="">{f.placeholder || "Select an option"}</option>
              {f.options?.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          ) : (
            <input
              id={`f-${context}-${f.name}`}
              type={f.type || "text"}
              value={values[f.label]}
              onChange={(e) => set(f.label, e.target.value)}
              placeholder={f.placeholder}
              className="w-full rounded-2xl border border-pine-800/15 bg-cream px-4 py-3 text-sm text-ink-900 placeholder:text-ink-500/60 focus:border-pine-700 focus:ring-2 focus:ring-pine-700/20 focus:outline-none"
            />
          )}
          {errors[f.label] && <p className="mt-1.5 text-xs font-medium text-red-700">{errors[f.label]}</p>}
        </div>
      ))}
      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 rounded-full bg-[#1FA855] px-8 py-3.5 text-sm font-semibold text-white transition-all hover:brightness-95 disabled:opacity-70"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Opening WhatsApp…
            </>
          ) : (
            <>
              <MessageCircle className="h-4 w-4" /> {submitLabel} via WhatsApp
            </>
          )}
        </button>
        <span className="inline-flex items-center gap-1.5 text-xs text-ink-500">
          <Send className="h-3.5 w-3.5" /> Submitting opens WhatsApp with your complete details pre-filled.
        </span>
      </div>
    </form>
  );
}

export const GENERAL_FIELDS: FieldDef[] = [
  { name: "name", label: "Name", placeholder: "Your full name", required: true },
  { name: "phone", label: "Phone", type: "tel", placeholder: "+91 …", required: true },
  { name: "email", label: "Email", type: "email", placeholder: "you@example.com", required: true },
  { name: "subject", label: "Subject", placeholder: "How can we help?" },
  { name: "message", label: "Message", type: "textarea", placeholder: "Write your enquiry…", required: true },
];

export function productFields(preselected?: string): FieldDef[] {
  return [
    { name: "name", label: "Name", placeholder: "Your full name", required: true },
    { name: "phone", label: "Phone", type: "tel", placeholder: "+91 …", required: true },
    { name: "email", label: "Email", type: "email", placeholder: "you@example.com", required: true },
    {
      name: "product",
      label: "Product",
      type: "select",
      options: PRODUCTS.map((p) => p.name),
      placeholder: preselected || "Select a product",
    },
    { name: "message", label: "Message", type: "textarea", placeholder: "Quantity, location, questions…", required: true },
  ];
}

export const MANUFACTURING_FIELDS: FieldDef[] = [
  { name: "name", label: "Name", placeholder: "Your full name", required: true },
  { name: "company", label: "Company", placeholder: "Company / unit name", required: true },
  { name: "phone", label: "Phone", type: "tel", placeholder: "+91 …", required: true },
  { name: "email", label: "Email", type: "email", placeholder: "you@company.com", required: true },
  {
    name: "category",
    label: "Product Category",
    type: "select",
    options: ["Hair Care", "Ayurvedic & Wellness Syrups", "Nutrition & Wellness", "Other"],
    placeholder: "Select a category",
    required: true,
  },
  { name: "message", label: "Message", type: "textarea", placeholder: "Capabilities, licenses, capacities…", required: true },
];

export const DISTRIBUTION_FIELDS: FieldDef[] = [
  { name: "name", label: "Name", placeholder: "Your full name", required: true },
  { name: "company", label: "Company", placeholder: "Firm / store name", required: true },
  { name: "phone", label: "Phone", type: "tel", placeholder: "+91 …", required: true },
  { name: "email", label: "Email", type: "email", placeholder: "you@company.com", required: true },
  { name: "location", label: "Location", placeholder: "City, State", required: true },
  { name: "message", label: "Message", type: "textarea", placeholder: "Channel, territory, volumes…", required: true },
];
