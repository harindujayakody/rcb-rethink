import type { Metadata } from "next";
import { Phone, Clock, ListChecks } from "lucide-react";
import { PageHero, CtaBand } from "@/components/sections";
import { Card, CardContent } from "@/components/ui/card";
import { CONTACT } from "@/lib/data";
import { QuoteForm } from "./quote-form";

export const metadata: Metadata = {
  title: "Request a Quote | RCB Holdings",
  description:
    "Request a quote for machinery, interlock paving, cement blocks, steel construction, ready mix or spare parts from RCB Holdings (Pvt) Ltd.",
};

const STEPS = [
  {
    n: "01",
    title: "We receive your enquiry",
    text: "Your request lands with our sales team instantly via WhatsApp.",
  },
  {
    n: "02",
    title: "We confirm the details",
    text: "We call back to confirm specifications, quantities and site details.",
  },
  {
    n: "03",
    title: "You get your quotation",
    text: "A formal quotation with pricing and delivery terms follows.",
  },
];

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Request a Quote"
        title="Tell us what you're building."
        description="Machinery, paving, blocks or steel — describe your requirement and we'll get back with a quote."
        crumbs={[{ label: "Home", href: "/" }, { label: "Request a Quote" }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          <QuoteForm />

          {/* Side panel */}
          <div className="space-y-6">
            <Card className="rounded-lg border-line bg-brand">
              <CardContent className="p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-white/10">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <h3 className="display mt-4 text-xl text-white">
                  Prefer to call?
                </h3>
                <div className="mt-3 space-y-2">
                  {CONTACT.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/\s/g, "")}`}
                      className="block font-extrabold text-white hover:underline"
                    >
                      {p}
                    </a>
                  ))}
                </div>
                <p className="mt-4 flex items-start gap-2 text-sm text-white/70">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0" />
                  {CONTACT.hours}
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-lg border-line">
              <CardContent className="p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-brand">
                  <ListChecks className="h-5 w-5 text-white" />
                </div>
                <h3 className="display mt-4 text-xl text-brand-ink">
                  What happens next
                </h3>
                <ol className="mt-4 space-y-4">
                  {STEPS.map((s) => (
                    <li key={s.n} className="flex gap-4">
                      <span className="display text-2xl text-brand">
                        {s.n}
                      </span>
                      <div>
                        <p className="font-extrabold text-brand-ink">
                          {s.title}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-steel">
                          {s.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
