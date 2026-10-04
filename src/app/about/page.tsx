import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Award, Factory, CheckCircle2, ArrowRight } from "lucide-react";
import { PageHero, SectionHeading, CtaBand } from "@/components/sections";
import { Card, CardContent } from "@/components/ui/card";
import { CONTACT } from "@/lib/data";

export const metadata: Metadata = {
  title: "About RCB Holdings | Construction & Machinery Sri Lanka",
  description:
    "The story of RCB Holdings (Pvt) Ltd — 30 years of construction machinery, interlock paving and cement blocks in Sri Lanka.",
};

const BRANDS = ["SDLG", "YINENG", "Noah", "Shengya", "SHANTUI", "Jinbaoshan"];

const COMMITMENTS = [
  "Supply machines and materials our customers can rely on",
  "Stand behind every delivery with after-sales service and genuine parts",
  "Keep documentation simple and every dealing straightforward",
];

const AWARDS = [
  {
    name: "Shramabhimanee National Award",
    year: "2013",
    note: "National recognition for industrial contribution.",
  },
  {
    name: "Construction Exhibition Co-Sponsor Award",
    year: "2016",
    note: "Presented alongside the RCB Holdings Chairman.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Over 30 years pioneering the industry."
        description="From Sri Lanka's first locally manufactured cement block making machine to fully automated interlock paving plants — this is RCB Holdings."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Our story */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Our story"
              title="Built on blocks. Driven by machines."
            />
            <div className="mt-6 space-y-4 leading-relaxed text-steel">
              <p>
                The RCB story began nearly 30 years ago with the purchase of
                the first Sri Lankan manufactured cement block making machine.
                From that single machine grew a business that now spans cement
                blocks, interlock paving, construction machinery distribution
                and construction services.
              </p>
              <p>
                Along the way, RCB introduced a fully automated interlock
                paving machine in Sri Lanka under the RCB name — and has been
                in the interlock paving business since 1986, supplying and
                laying paving across the island.
              </p>
              <p>
                Today, RCB Holdings (Pvt) Ltd brings together heavy
                construction machinery, block making plants, steel
                construction, ready mix concrete and concrete products under one
                roof — backed by the after-sales service and technical
                knowledge the company has built over three decades.
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/hero-site.jpg"
              alt="RCB Holdings construction site"
              width={1200}
              height={900}
              className="shadow-lift aspect-[4/3] w-full rounded-lg object-cover"
            />
            <div className="absolute -bottom-6 left-6 hidden rounded-md bg-brand px-6 py-4 shadow-hard sm:block">
              <p className="display text-3xl text-white">1986</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-white/70">
                Interlock paving since
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chairman's message */}
      <section className="bg-mist">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
          <SectionHeading
            eyebrow="Chairman's message"
            title="A word from our Chairman"
            align="center"
          />
          <Card className="shadow-hard mx-auto mt-10 max-w-3xl rounded-lg border-line bg-white">
            <CardContent className="p-8 sm:p-12">
              <Factory className="h-8 w-8 text-brand" />
              <blockquote className="mt-6 text-xl font-medium leading-relaxed text-brand-ink sm:text-2xl">
                &ldquo;RCB is the result of more than 30 years of work. We
                began with the first Sri Lankan manufactured cement block
                making machine, and today we supply machinery and concrete
                products across the island — including fully automated
                interlock paving machines introduced under the RCB
                name.&rdquo;
              </blockquote>
              <div className="mt-8 border-t border-line pt-6">
                <p className="text-lg font-extrabold text-brand-ink">
                  {CONTACT.chairman.name}
                </p>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-steel">
                  {CONTACT.chairman.title}, {CONTACT.company}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Vision & mission */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading
          eyebrow="Vision & mission"
          title="What drives us"
          align="center"
        />
        <div className="mx-auto mt-10 max-w-3xl text-center">
          <p className="display text-4xl leading-tight text-brand sm:text-5xl">
            &ldquo;To Give the Best Product to Customers.&rdquo;
          </p>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-steel">
            Our vision
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-3xl">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-steel">
            Our commitments
          </p>
          <ul className="space-y-3">
            {COMMITMENTS.map((c) => (
              <li
                key={c}
                className="flex items-start gap-3 rounded-md border border-line bg-tint p-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <span className="font-semibold text-brand-ink">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Brands we supply */}
      <section className="bg-brand-deep">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
          <SectionHeading
            eyebrow="Our brands"
            title="Machinery brands we supply"
            description="A line-up of construction and industrial machinery brands we bring to Sri Lanka."
            align="center"
            dark
          />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {BRANDS.map((b) => (
              <div
                key={b}
                className="rounded-md border border-white/15 bg-white/5 px-4 py-6 text-center"
              >
                <p className="display text-2xl text-white">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading
          eyebrow="Achievements"
          title="Recognition along the way"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {AWARDS.map((a) => (
            <Card key={a.name} className="rounded-lg border-line">
              <CardContent className="flex items-start gap-5 p-6 sm:p-8">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-brand">
                  <Award className="h-7 w-7 text-white" />
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand">
                    {a.year}
                  </p>
                  <h3 className="display mt-2 text-2xl text-brand-ink">
                    {a.name}
                  </h3>
                  <p className="mt-2 text-steel">{a.note}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-10">
          <Link
            href="/media"
            className="inline-flex items-center font-extrabold text-brand hover:underline"
          >
            See our gallery <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
