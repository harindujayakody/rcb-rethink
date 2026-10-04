import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { PageHero, SectionHeading, CtaBand } from "@/components/sections";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { INTERLOCK_PRODUCTS, BLOCK_PRODUCTS, INTERLOCK_COPY } from "@/lib/data";

export const metadata: Metadata = {
  title: "Interlock Paving & Cement Blocks | RCB Holdings",
};

const PAVER_IMAGES = ["/images/pavers-1.jpg", "/images/pavers-2.jpg", "/images/pavers-3.jpg"];

const SWATCH_COLORS: Record<string, string> = {
  White: "#FFFFFF",
  Red: "#C8102E",
  Black: "#1A1A1A",
};

export default function ConcreteProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Concrete Products"
        title="Paving & blocks, made since 1986."
        description="Interlock pavers and cement blocks manufactured in our own yard in Hokandara."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Concrete Products" },
        ]}
      />

      {/* Section 1 — Interlock paving */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Interlock Paving"
            title="Laid to last."
            description="In the interlock business since 1986 — four proven paver profiles, manufactured to consistent dimensions in our Hokandara yard and exported to the Maldives and India."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {INTERLOCK_PRODUCTS.map((p, i) => (
              <Card key={p.name} className="overflow-hidden rounded-lg border-line">
                <div className="relative h-44 w-full">
                  <Image
                    src={PAVER_IMAGES[i % PAVER_IMAGES.length]}
                    alt={`${p.name} interlock pavers`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-5">
                  <h3 className="display text-2xl text-brand-ink">{p.name}</h3>
                  <p className="mt-2 font-mono text-sm font-semibold text-brand">
                    {p.dims}
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    {p.colors.map((c) => (
                      <span
                        key={c}
                        title={c}
                        className="h-6 w-6 rounded-sm border border-line"
                        style={{ backgroundColor: SWATCH_COLORS[c] }}
                      />
                    ))}
                    <span className="ml-1 font-mono text-xs uppercase tracking-wider text-steel">
                      White / Red / Black
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 grid gap-6 rounded-lg border border-line bg-tint p-6 sm:p-8 lg:grid-cols-2">
            {INTERLOCK_COPY.map((p, i) => (
              <p key={i} className="leading-relaxed text-steel">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — Cement blocks */}
      <section className="bg-mist py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Cement Blocks"
            title="Blocks that build straight."
            description="Hollow and solid cement blocks in standard sizes, manufactured in our own yard."
          />
          <Card className="mt-10 overflow-hidden rounded-lg border-line">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="bg-tint">
                    <TableHead className="font-mono text-xs uppercase tracking-wider text-brand-ink">
                      Product
                    </TableHead>
                    <TableHead className="font-mono text-xs uppercase tracking-wider text-brand-ink">
                      Length
                    </TableHead>
                    <TableHead className="font-mono text-xs uppercase tracking-wider text-brand-ink">
                      Width
                    </TableHead>
                    <TableHead className="font-mono text-xs uppercase tracking-wider text-brand-ink">
                      Height
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {BLOCK_PRODUCTS.map((b) => {
                    const [length, width, height] = b.dims.split(" × ");
                    return (
                      <TableRow key={b.name}>
                        <TableCell className="font-extrabold text-brand-ink">
                          {b.name}
                        </TableCell>
                        <TableCell className="font-mono text-steel">
                          {length} mm
                        </TableCell>
                        <TableCell className="font-mono text-steel">
                          {width} mm
                        </TableCell>
                        <TableCell className="font-mono text-steel">
                          {height}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 3 — Colour & ordering note */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Card className="rounded-lg border-line bg-tint">
            <CardContent className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:p-8">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-brand">
                <CheckCircle2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="display text-2xl text-brand-ink">Colours & ordering</h3>
                <p className="mt-2 leading-relaxed text-steel">
                  Available colours: white, red, black. Contact us for current
                  pricing and delivery coverage.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
