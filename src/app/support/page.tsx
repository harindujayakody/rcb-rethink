import type { Metadata } from "next";
import {
  Wrench,
  ShieldCheck,
  Cog,
  GraduationCap,
  HardHat,
  FileText,
  type LucideIcon,
} from "lucide-react";
import { PageHero, SectionHeading, CtaBand } from "@/components/sections";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WHY_RCB } from "@/lib/data";

export const metadata: Metadata = {
  title: "Parts & Support | RCB Holdings",
  description:
    "After-sales service, 1-year warranty, genuine spare parts, installation and leasing assistance from RCB Holdings (Pvt) Ltd.",
};

const ICONS: Record<string, LucideIcon> = {
  Wrench,
  ShieldCheck,
  Cog,
  GraduationCap,
  HardHat,
  FileText,
};

const FAQS = [
  {
    q: "Do you deliver islandwide?",
    a: "Delivery arrangements vary by product and site location. Contact our team with your delivery address and we will confirm the best option for your order.",
  },
  {
    q: "What does the warranty cover?",
    a: "Machinery supplied by RCB carries a 1-year warranty, handled locally by our own team. Contact us with your machine model and purchase details and we will confirm your cover.",
  },
  {
    q: "How do I order spare parts?",
    a: "We stock genuine spare parts and accessories at our Hokandara premises. Share your machine model and the part you need with our team — call +94 771 600 600 or send an enquiry through the contact page.",
  },
  {
    q: "Do you install block making machines?",
    a: "Yes. We provide installation and commissioning support for block making machines and plants. Contact our team to schedule installation for your project.",
  },
  {
    q: "Do you offer leasing facilities?",
    a: "We provide simple documentation and leasing assistance to help you get your machine working sooner. Contact our team to discuss the options available.",
  },
];

export default function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Parts & Support"
        title="Backed long after delivery."
        description="Our technicians know every machine we sell — and we stand behind them with warranty, genuine parts and installation support."
        crumbs={[{ label: "Home", href: "/" }, { label: "Parts & Support" }]}
      />

      {/* Service cards */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading
          eyebrow="Why RCB"
          title="Support that keeps you working"
          description="Six reasons our customers come back — from after-sales service to leasing assistance."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_RCB.map((s) => {
            const Icon = ICONS[s.icon] ?? Wrench;
            return (
              <Card key={s.title} className="rounded-lg border-line">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-brand">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="display mt-5 text-2xl text-brand-ink">
                    {s.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-steel">{s.text}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-mist">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions"
            align="center"
          />
          <Accordion className="mt-10">
            {FAQS.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="mb-3 rounded-md border border-line bg-white px-5"
              >
                <AccordionTrigger className="text-left font-extrabold text-brand-ink hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-steel">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
