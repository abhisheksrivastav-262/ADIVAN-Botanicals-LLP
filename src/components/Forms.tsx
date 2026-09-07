import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
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
}

function buildWhatsAppLink(context: string, values: Record<string, string>): string {
  const lines = [`Namaste! New ${context} — Adivan Botanicals website:`];
  Object.entries(values).forEach(([k, v]) => {
    if (v.trim()) lines.push(`${k}: ${v.trim()}`);
  });
  return `https://wa.me/919977963311?text=${encodeURIComponent(lines.join("\n"))}`;
}

export default function EnquiryForm({ fields, context, submitLabel = "Send Enquiry" }: Props) {
  const initial = Object.fromEntries(fields.map((f) => [f.label, ""]));
  const [values, setValues] = useState<Record<string, string>>(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

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
    setStatus("sending");
    window.setTimeout(() => {
      setStatus("sent");
      setValues(initial);
    }, 1100);
  };

  if (status === "sent") {
    return (
      <div className="rounded-3xl border border-pine-700/20 bg-pine-50 p-10 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-pine-700" />
        <h3 className="mt-4 font-display text-2xl font-medium text-pine-950">Thank you — enquiry received</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-600">
          Our team will connect with you shortly on your submitted details. For an immediate conversation, reach us on{" "}
          <a href={COMPANY.phoneHref} className="font-semibold text-pine-800 underline">
            {COMPANY.phoneDisplay}
          </a>
          .
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={COMPANY.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-pine-800 px-6 py-2.5 text-sm font-semibold text-cream hover:bg-pine-900"
          >
            Continue on WhatsApp
          </a>
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
          className="inline-flex items-center gap-2 rounded-full bg-pine-800 px-8 py-3.5 text-sm font-semibold text-cream transition-all hover:bg-pine-900 disabled:opacity-70"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Sending…
            </>
          ) : (
            <>
              <Send className="h-4 w-4" /> {submitLabel}
            </>
          )}
        </button>
        <a
          href={buildWhatsAppLink(context, values)}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-semibold text-pine-700 underline-offset-4 hover:underline"
        >
          Or send these details over WhatsApp
        </a>
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
