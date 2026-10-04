import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CtaBand, PageHero } from "@/components/sections";
import { MACHINE_CATEGORIES, getCategory } from "@/lib/data";

export function generateStaticParams() {
  return MACHINE_CATEGORIES.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) return { title: "Machinery | RCB Holdings" };
  return {
    title: `${cat.name} Sri Lanka | RCB Holdings`,
    description: cat.description,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) notFound();

  return (
    <>
      <PageHero
        eyebrow="Machinery"
        title={cat.name}
        description={cat.description}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Machinery", href: "/machinery" },
          { label: cat.name },
        ]}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="mb-10 flex flex-wrap items-center gap-2">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-steel">
              Brands:
            </span>
            {cat.brands.map((brand) => (
              <Badge
                key={brand}
                variant="secondary"
                className="rounded-sm font-mono text-[11px] uppercase tracking-wider"
              >
                {brand}
              </Badge>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cat.models.map((model) => (
              <Link
                key={model.slug}
                href={`/machinery/${cat.slug}/${model.slug}`}
                className="group"
              >
                <Card className="h-full overflow-hidden rounded-lg transition-shadow duration-300 hover:shadow-xl">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={model.image}
                      alt={`${model.brand} ${model.name}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand">
                      {model.brand}
                    </p>
                    <CardTitle className="display text-3xl text-brand-ink">
                      {model.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-relaxed text-steel">{model.tagline}</p>
                    {model.specs.length > 0 ? (
                      <dl className="mt-5">
                        {model.specs.slice(0, 3).map((spec) => (
                          <div
                            key={spec.label}
                            className="flex items-baseline justify-between gap-4 border-b border-line py-2 text-sm last:border-b-0"
                          >
                            <dt className="text-steel">{spec.label}</dt>
                            <dd className="text-right font-extrabold text-brand-ink">
                              {spec.value}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    ) : (
                      <p className="mt-5 border border-dashed border-line bg-mist/60 p-3 text-sm text-steel">
                        Specifications on request — our team will share the
                        latest brochure.
                      </p>
                    )}
                  </CardContent>
                  <CardFooter className="border-t border-line bg-mist/60">
                    <span className="flex items-center gap-1 text-sm font-extrabold text-brand transition-all group-hover:gap-2">
                      View machine <ArrowRight className="h-4 w-4" />
                    </span>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-14 rounded-lg bg-tint p-8 sm:p-10">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div>
                <p className="eyebrow">
                  <span className="eyebrow-rule" />
                  Talk to our team
                </p>
                <h2 className="display mt-3 text-3xl text-brand-ink sm:text-4xl">
                  Not sure which machine fits your site?
                </h2>
                <p className="mt-3 max-w-xl leading-relaxed text-steel">
                  Tell us about your work — tonnage, site conditions, budget —
                  and our team will recommend the right machine from the range.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button
                  render={<a href="tel:+94771600600" />}
                  size="lg"
                  className="rounded-md bg-brand font-bold hover:bg-brand-deep"
                >
                  <Phone className="mr-2 h-4 w-4" /> Call +94 771 600 600
                </Button>
                <Button
                  render={<Link href="/quote" />}
                  size="lg"
                  variant="outline"
                  className="rounded-md font-bold"
                >
                  Request a Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
