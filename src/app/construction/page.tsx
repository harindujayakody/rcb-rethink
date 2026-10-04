import type { Metadata } from "next";
import Image from "next/image";
import {
  DraftingCompass,
  Cog,
  Factory,
  Building2,
  Layers,
  Phone,
  MessageCircle,
  ClipboardList,
  type LucideIcon,
} from "lucide-react";
import { PageHero, SectionHeading, CtaBand } from "@/components/sections";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CONTACT, STEEL_COPY } from "@/lib/data";

export const metadata: Metadata = {
  title: "Steel Construction & Ready Mix Concrete Sri Lanka | RCB Holdings",
};

const STEEL_SERVICES: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: DraftingCompass,
    title: "Custom Design",
    text: "Steel structures designed around your site, span and load requirements.",
  },
  {
    icon: Cog,
    title: "Engineering",
    text: "Structural engineering support from concept through fabrication drawings.",
  },
  {
    icon: Factory,
    title: "Fabrication",
    text: "Structural steel fabrication carried out in our own workshops.",
  },
  {
    icon: Building2,
    title: "Steel-Frame Building Construction",
    text: "Complete steel-frame buildings — erected and finished by our crews.",
  },
  {
    icon: Layers,
    title: "Structural Steel Fabrication",
    text: "Islandwide structural steel fabrication with an established reputation.",
  },
];

const READY_MIX_CHECKLIST = [
  "Concrete grades available",
  "Batching capacity",
  "Delivery area",
  "Testing & QA process",
];

export default function ConstructionPage() {
  return (
    <>
      <PageHero
        eyebrow="Construction Solutions"
        title="We build, too."
        description="Steel construction and ready mix concrete — engineered and delivered islandwide."
        crumbs={[{ label: "Home", href: "/" }, { label: "Construction" }]}
      />

      {/* Section 1 — Open Steel Constructions */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Steel Construction"
                title="Open Steel Constructions"
              />
              <div className="mt-6 space-y-4 leading-relaxed text-steel">
                {STEEL_COPY.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {STEEL_SERVICES.map((s) => (
                  <Card key={s.title} className="rounded-lg border-line">
                    <CardContent className="p-5">
                      <div className="flex h-11 w-11 items-center justify-center rounded-md bg-brand">
                        <s.icon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="mt-4 font-extrabold text-brand-ink">
                        {s.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-steel">
                        {s.text}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div className="relative h-80 w-full overflow-hidden rounded-lg lg:h-[540px]">
              <Image
                src="/images/hero-site.jpg"
                alt="Steel construction site"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Ready Mix Concrete */}
      <section className="bg-mist py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Ready Mix Concrete"
            title="Concrete, delivered ready."
            description="Our ready mix plant serves sites across the island. Plant specifications are confirmed at the time of enquiry — talk to our team for the current details."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Card className="rounded-lg border-line">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-brand">
                    <ClipboardList className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="display text-2xl text-brand-ink">
                    What to ask for
                  </h3>
                </div>
                <ul className="mt-6 space-y-3">
                  {READY_MIX_CHECKLIST.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 bg-brand" />
                      <span className="font-semibold text-brand-ink">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 leading-relaxed text-steel">
                  Contact our team for current plant specifications — grades,
                  batching capacity, delivery area and testing/QA are confirmed
                  on every enquiry.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-lg border-line bg-brand">
              <CardContent className="flex h-full flex-col justify-center p-6 sm:p-8">
                <h3 className="display text-3xl text-white">Order ready mix</h3>
                <p className="mt-3 leading-relaxed text-white/85">
                  Call or message us with your site location, required grade and
                  pour volume — we'll confirm capacity and schedule your
                  delivery.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={`tel:${CONTACT.phones[0].replace(/\s/g, "")}`}
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "rounded-md bg-white font-bold text-brand hover:bg-tint"
                    )}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    {CONTACT.phones[0]}
                  </a>
                  <a
                    href={`https://wa.me/${CONTACT.phones[1].replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ size: "lg", variant: "outline" }),
                      "rounded-md border-white/40 bg-transparent font-bold text-white hover:bg-white/10 hover:text-white"
                    )}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp Us
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
