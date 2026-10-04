import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, CalendarDays, ArrowRight } from "lucide-react";
import { PageHero, SectionHeading, CtaBand } from "@/components/sections";
import { Card, CardContent } from "@/components/ui/card";
import { PROJECTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects | RCB Holdings",
  description:
    "Selected paving and construction project references from RCB Holdings (Pvt) Ltd, Sri Lanka.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Work that speaks."
        description="A selection of our paving and supply references. Our project portfolio is growing — ask us for recent references."
        crumbs={[{ label: "Home", href: "/" }, { label: "Projects" }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading
          eyebrow="Selected work"
          title="Project references"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <Card
              key={p.slug}
              className="overflow-hidden rounded-lg border-line"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="display text-2xl text-brand-ink">{p.name}</h3>
                <div className="mt-3 space-y-1.5 text-sm text-steel">
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-brand" />
                    {p.location}
                  </p>
                  {p.date && (
                    <p className="flex items-center gap-2">
                      <CalendarDays className="h-4 w-4 text-brand" />
                      {p.date}
                    </p>
                  )}
                </div>
                <p className="mt-3 rounded-md bg-tint px-3 py-2 font-semibold text-brand-ink">
                  {p.scope}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 rounded-lg border border-line bg-mist p-6 sm:p-8">
          <p className="text-lg font-bold text-brand-ink">
            Project portfolio growing — contact us for recent references.
          </p>
          <p className="mt-2 leading-relaxed text-steel">
            Machinery deliveries, steel construction and paving projects are
            completed across the island. Talk to our team for a reference list
            relevant to your project.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center font-extrabold text-brand hover:underline"
          >
            Contact our team <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
