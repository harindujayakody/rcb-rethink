import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, ChevronRight, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CtaBand, SectionHeading } from "@/components/sections";
import { ALL_MODELS, getCategory, getModel } from "@/lib/data";

export function generateStaticParams() {
  return ALL_MODELS.map((m) => ({ category: m.categorySlug, model: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; model: string }>;
}) {
  const { category, model } = await params;
  const m = getModel(category, model);
  if (!m) return { title: "Machine | RCB Holdings" };
  return {
    title: `${m.brand} ${m.name} | RCB Holdings Sri Lanka`,
    description: m.tagline,
  };
}

export default async function ModelPage({
  params,
}: {
  params: Promise<{ category: string; model: string }>;
}) {
  const { category, model } = await params;
  const cat = getCategory(category);
  const m = getModel(category, model);
  if (!cat || !m) notFound();

  const related = cat.models.filter((x) => x.slug !== m.slug);
  const hasSpecs = m.specs.length > 0;

  return (
    <>
      {/* Slim navy breadcrumb strip (no duplicate hero heading) */}
      <section className="bg-brand">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
          <nav className="flex flex-wrap items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-white/70">
            <Link href="/" className="hover:text-white hover:underline">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/machinery" className="hover:text-white hover:underline">
              Machinery
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link
              href={`/machinery/${cat.slug}`}
              className="hover:text-white hover:underline"
            >
              {cat.name}
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white">{m.name}</span>
          </nav>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            {/* Left: image + key spec boxes */}
            <div>
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-mist">
                <Image
                  src={m.image}
                  alt={`${m.brand} ${m.name}`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {hasSpecs ? (
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {m.specs.slice(0, 4).map((spec) => (
                    <div
                      key={spec.label}
                      className="rounded-md border border-line bg-mist p-4"
                    >
                      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-steel">
                        {spec.label}
                      </p>
                      <p className="mt-1 text-lg font-extrabold text-brand-ink">
                        {spec.value}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-6 rounded-md border border-dashed border-line bg-mist/60 p-5">
                  <p className="font-extrabold text-brand-ink">
                    Need the full spec sheet?
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-steel">
                    Our team will share the latest manufacturer brochure for
                    the {m.brand} {m.name}.
                  </p>
                  <Button
                    render={<a href="tel:+94771600600" />}
                    size="sm"
                    className="mt-4 rounded-md bg-brand font-bold hover:bg-brand-deep"
                  >
                    <Phone className="mr-2 h-4 w-4" /> Call Sales
                  </Button>
                </div>
              )}
            </div>

            {/* Right: brand, name, tagline, specs, features, CTAs */}
            <div>
              <p className="eyebrow">
                <span className="eyebrow-rule" />
                {m.brand} · {cat.name}
              </p>
              <h1 className="display mt-4 text-5xl text-brand-ink sm:text-6xl">
                {m.name}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-steel">
                {m.tagline}
              </p>

              {hasSpecs ? (
                <div className="mt-8">
                  <h2 className="text-xl font-extrabold text-brand-ink">
                    Technical Specifications
                  </h2>
                  <div className="mt-4 overflow-hidden rounded-md border border-line">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-mist">
                          <TableHead className="font-extrabold text-brand-ink">
                            Specification
                          </TableHead>
                          <TableHead className="text-right font-extrabold text-brand-ink">
                            Value
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {m.specs.map((spec) => (
                          <TableRow key={spec.label}>
                            <TableCell className="text-steel">
                              {spec.label}
                            </TableCell>
                            <TableCell className="text-right font-extrabold text-brand-ink">
                              {spec.value}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              ) : (
                <div className="mt-8 rounded-md border border-line bg-tint p-6">
                  <h2 className="text-xl font-extrabold text-brand-ink">
                    Specifications
                  </h2>
                  <p className="mt-2 leading-relaxed text-steel">
                    Full specifications available on request — contact our team
                    and we&apos;ll send the latest brochure for the {m.brand}{" "}
                    {m.name}.
                  </p>
                </div>
              )}

              {m.features.length > 0 && (
                <div className="mt-8">
                  <h2 className="text-xl font-extrabold text-brand-ink">
                    Key Features
                  </h2>
                  <ul className="mt-4 space-y-3">
                    {m.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-sm bg-brand">
                          <Check className="h-4 w-4 text-white" />
                        </span>
                        <span className="leading-relaxed text-brand-ink">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-10 flex flex-wrap gap-3">
                <Button
                  render={<Link href="/quote" />}
                  size="lg"
                  className="rounded-md bg-brand font-bold hover:bg-brand-deep"
                >
                  Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  render={<a href="tel:+94771600600" />}
                  size="lg"
                  variant="outline"
                  className="rounded-md font-bold"
                >
                  <Phone className="mr-2 h-4 w-4" /> Call +94 771 600 600
                </Button>
              </div>
            </div>
          </div>

          {/* Related models */}
          {related.length > 0 && (
            <div className="mt-20">
              <SectionHeading
                eyebrow={cat.name}
                title="Related models"
                description={`More ${cat.name.toLowerCase()} in the RCB range.`}
              />
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/machinery/${cat.slug}/${rel.slug}`}
                    className="group"
                  >
                    <Card className="h-full overflow-hidden rounded-lg transition-shadow duration-300 hover:shadow-xl">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={rel.image}
                          alt={`${rel.brand} ${rel.name}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <CardHeader>
                        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand">
                          {rel.brand}
                        </p>
                        <CardTitle className="display text-2xl text-brand-ink">
                          {rel.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm leading-relaxed text-steel">
                          {rel.tagline}
                        </p>
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
            </div>
          )}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
