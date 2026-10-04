import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  CircleDot,
  Cog,
  FileText,
  Forklift,
  GraduationCap,
  Hammer,
  HardHat,
  Layers,
  MapPin,
  MoveHorizontal,
  Phone,
  ShieldCheck,
  Shovel,
  Truck,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { SectionHeading, CtaBand } from "@/components/sections";
import { CONTACT, INTERLOCK_PRODUCTS, MACHINE_CATEGORIES, PROJECTS, WHY_RCB, BLOCK_PRODUCTS } from "@/lib/data";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "wheel-loaders": <Truck className="h-7 w-7" />,
  excavators: <Shovel className="h-7 w-7" />,
  "road-rollers": <CircleDot className="h-7 w-7" />,
  "motor-graders": <MoveHorizontal className="h-7 w-7" />,
  "block-making-machines": <Boxes className="h-7 w-7" />,
  forklifts: <Forklift className="h-7 w-7" />,
  "stone-crushers": <Hammer className="h-7 w-7" />,
};

const WHY_ICONS: Record<string, React.ReactNode> = {
  Wrench: <Wrench className="h-6 w-6" />,
  ShieldCheck: <ShieldCheck className="h-6 w-6" />,
  Cog: <Cog className="h-6 w-6" />,
  GraduationCap: <GraduationCap className="h-6 w-6" />,
  HardHat: <HardHat className="h-6 w-6" />,
  FileText: <FileText className="h-6 w-6" />,
};

const BRANDS = ["SDLG", "YINENG", "NOAH", "SHENGYA", "SHANTUI", "JINBAOSHAN"];

const FEATURED = [
  { categorySlug: "excavators", modelSlug: "lg6225e", highlight: "21,700 kg operating weight" },
  { categorySlug: "road-rollers", modelSlug: "rs7120", highlight: "12,000 kg · 98 kW" },
  { categorySlug: "wheel-loaders", modelSlug: "yn959g", highlight: "5,000 kg rated load" },
];

export default function Home() {
  return (
    <>
      {/* ============ HERO — no pills, bold split ============ */}
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-2 lg:items-center lg:pt-20">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-rule" />
              RCB Holdings · Hokandara, Sri Lanka
            </p>
            <h1 className="display mt-5 text-6xl text-brand-ink sm:text-7xl xl:text-8xl">
              Heavy machines.
              <br />
              <span className="text-brand">Solid blocks.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-steel">
              Construction machinery, block making machines, interlock paving and
              cement blocks — from our yard in Hokandara to your site, backed by
              over 30 years in the industry.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button render={<Link href="/machinery" />} size="lg" className="rounded-md bg-brand px-7 py-6 text-base font-bold text-white hover:bg-brand-deep">
                Explore Machinery <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button render={<Link href="/concrete-products" />} size="lg" variant="outline" className="rounded-md border-2 border-brand px-7 py-6 text-base font-bold text-brand hover:bg-tint">
                Concrete Products
              </Button>
            </div>
            <div className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t-2 border-brand pt-6">
              {[
                ["30+", "Years in industry"],
                ["7", "Machine categories"],
                ["10", "Block & paver lines"],
              ].map(([n, label]) => (
                <div key={label}>
                  <p className="display text-4xl text-brand">{n}</p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-steel">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="shadow-hard overflow-hidden rounded-lg border-2 border-brand">
              <Image
                src="/images/hero-excavator.jpg"
                alt="Excavator at work on a construction site"
                width={1200}
                height={1400}
                className="h-[420px] w-full object-cover lg:h-[560px]"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-4 bg-brand px-5 py-4 text-white shadow-lift sm:-left-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] opacity-80">
                Featured
              </p>
              <p className="display mt-1 text-2xl">SDLG LG6225E</p>
              <p className="mt-1 text-sm opacity-85">21.7-tonne crawler excavator</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ BRANDS ============ */}
      <section className="border-y border-line bg-mist">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
          <p className="text-center font-mono text-[11px] uppercase tracking-[0.22em] text-steel">
            Authorized distributor in Sri Lanka
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {BRANDS.map((b) => (
              <span key={b} className="display text-3xl text-brand-ink/70">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ DIVISIONS ============ */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionHeading
          eyebrow="What we do"
          title={<>Three divisions. <span className="text-brand">One yard.</span></>}
          description="Everything for the ground you build on — the machines that move it, the structures that stand on it, and the blocks and pavers that finish it."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              n: "01",
              title: "Machinery",
              text: "Wheel loaders, excavators, rollers, graders, block machines, forklifts and crushers — with parts and service backup.",
              href: "/machinery",
              img: "/images/machinery-yard.jpg",
            },
            {
              n: "02",
              title: "Construction Solutions",
              text: "Open steel constructions and ready mix concrete — engineered, fabricated and delivered islandwide.",
              href: "/construction",
              img: "/images/hero-site.jpg",
            },
            {
              n: "03",
              title: "Concrete Products",
              text: "Interlock paving and cement blocks in standard sizes and colours — made since 1986.",
              href: "/concrete-products",
              img: "/images/pavers-1.jpg",
            },
          ].map((d) => (
            <Link key={d.n} href={d.href} className="group">
              <Card className="shadow-hard h-full overflow-hidden rounded-lg border-2 border-brand-ink/10 transition-transform duration-300 group-hover:-translate-y-1.5">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={d.img}
                    alt={d.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 bg-brand px-3 py-1 font-mono text-xs font-bold tracking-[0.18em] text-white">
                    {d.n}
                  </span>
                </div>
                <CardHeader>
                  <CardTitle className="display text-3xl text-brand-ink">{d.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-steel">{d.text}</p>
                  <span className="mt-4 inline-flex items-center font-bold text-brand">
                    Explore <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* ============ MACHINERY CATEGORIES ============ */}
      <section className="bg-mist py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Machinery"
            title={<>Machines for <span className="text-brand">every site.</span></>}
            description="Seven categories, stocked and supported from Hokandara. Talk to our team about current models and availability."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {MACHINE_CATEGORIES.map((c) => (
              <Link key={c.slug} href={`/machinery/${c.slug}`} className="group">
                <Card className="h-full rounded-lg border border-line bg-white p-2 transition-all duration-300 hover:border-brand hover:shadow-lift">
                  <CardContent className="p-5">
                    <div className="flex h-14 w-14 items-center justify-center bg-tint text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                      {CATEGORY_ICONS[c.slug]}
                    </div>
                    <h3 className="display mt-5 text-2xl text-brand-ink">{c.name}</h3>
                    <p className="mt-2 line-clamp-2 text-sm text-steel">{c.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {c.brands.map((b) => (
                        <Badge key={b} variant="secondary" className="rounded-sm bg-tint font-mono text-[11px] tracking-wider text-brand">
                          {b}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
            <Card className="flex h-full flex-col justify-between rounded-lg border-2 border-brand bg-brand p-2 text-white">
              <CardContent className="p-5">
                <h3 className="display text-3xl">Not sure what you need?</h3>
                <p className="mt-3 text-white/85">
                  Tell us about your site and workload — we&apos;ll recommend the right machine.
                </p>
              </CardContent>
              <CardContent className="p-5 pt-0">
                <Button render={<Link href="/quote" />} className="rounded-md bg-white font-bold text-brand hover:bg-tint">
                  Ask an expert <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ============ FEATURED MACHINES ============ */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Featured machines"
            title={<>Proven <span className="text-brand">workhorses.</span></>}
          />
          <Button render={<Link href="/machinery" />} variant="outline" className="rounded-md border-2 border-brand font-bold text-brand hover:bg-tint">
            All machinery <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {FEATURED.map((f) => {
            const cat = MACHINE_CATEGORIES.find((c) => c.slug === f.categorySlug)!;
            const m = cat.models.find((m) => m.slug === f.modelSlug)!;
            return (
              <Link key={m.slug} href={`/machinery/${cat.slug}/${m.slug}`} className="group">
                <Card className="h-full overflow-hidden rounded-lg border border-line transition-all duration-300 hover:border-brand hover:shadow-lift">
                  <div className="relative h-52 overflow-hidden bg-mist">
                    <Image src={m.image} alt={`${m.brand} ${m.name}`} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <CardHeader className="pb-2">
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand">{m.brand}</p>
                    <CardTitle className="display text-3xl text-brand-ink">{m.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-steel">{m.tagline}</p>
                    <Separator className="my-4" />
                    <p className="font-mono text-sm font-bold text-brand-ink">{f.highlight}</p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ============ WHY RCB ============ */}
      <section className="border-y border-line bg-brand-ink py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            dark
            eyebrow="Why choose RCB"
            title={<>Bought from us means <span className="text-white">backed by us.</span></>}
            description="Machines are only half the story. Here's what keeps our customers coming back for 30+ years."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_RCB.map((w) => (
              <div key={w.title} className="rounded-lg border border-white/15 bg-white/5 p-6">
                <div className="flex h-12 w-12 items-center justify-center bg-brand text-white">
                  {WHY_ICONS[w.icon]}
                </div>
                <h3 className="mt-4 text-lg font-extrabold">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONCRETE PRODUCTS PREVIEW ============ */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Concrete products"
              title={<>Paving & blocks, <span className="text-brand">made since 1986.</span></>}
              description="Interlock pavers in four profiles and three colours, plus six standard cement block sizes — manufactured in our own yard."
            />
            <div className="mt-8 flex flex-wrap gap-4">
              <Button render={<Link href="/concrete-products" />} className="rounded-md bg-brand px-6 font-bold text-white hover:bg-brand-deep">
                View all products <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {INTERLOCK_PRODUCTS.map((p) => (
                <div key={p.name} className="rounded-lg border border-line bg-mist p-4">
                  <p className="display text-2xl text-brand-ink">{p.name}</p>
                  <p className="mt-1 font-mono text-xs text-steel">{p.dims}</p>
                  <p className="mt-2 text-xs font-bold text-brand">{p.colors.join(" · ")}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["/images/pavers-1.jpg", "/images/pavers-2.jpg", "/images/pavers-3.jpg", "/images/industrial-1.jpg"].map((src, i) => (
              <div key={src} className={i % 2 === 1 ? "mt-8" : ""}>
                <Image
                  src={src}
                  alt="Interlock paving and block production"
                  width={600}
                  height={700}
                  className="shadow-hard h-64 w-full rounded-lg border-2 border-brand object-cover lg:h-80"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-wrap gap-2.5">
          {BLOCK_PRODUCTS.map((b) => (
            <span key={b.name} className="rounded-sm bg-tint px-3 py-2 font-mono text-xs font-bold tracking-wide text-brand">
              {b.name} · {b.dims}
            </span>
          ))}
        </div>
      </section>

      {/* ============ PROJECTS PREVIEW ============ */}
      <section className="bg-mist py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Projects"
              title={<>Work that <span className="text-brand">speaks.</span></>}
            />
            <Button render={<Link href="/projects" />} variant="outline" className="rounded-md border-2 border-brand font-bold text-brand hover:bg-tint">
              All projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PROJECTS.map((p) => (
              <Link key={p.slug} href="/projects" className="group">
                <Card className="h-full overflow-hidden rounded-lg border border-line transition-all duration-300 hover:border-brand hover:shadow-lift">
                  <div className="relative h-56 overflow-hidden">
                    <Image src={p.image} alt={p.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="display text-2xl text-brand-ink">{p.name}</h3>
                    <p className="mt-2 flex items-center gap-1.5 text-sm text-steel">
                      <MapPin className="h-3.5 w-3.5" /> {p.location}
                    </p>
                    <p className="mt-1 font-mono text-xs uppercase tracking-wider text-brand">{p.scope}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONTACT STRIP ============ */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: <Phone className="h-6 w-6" />, title: "Call us", lines: CONTACT.phones, href: (v: string) => `tel:${v.replace(/\s/g, "")}` },
            { icon: <MapPin className="h-6 w-6" />, title: "Visit us", lines: CONTACT.address, href: undefined },
            { icon: <Layers className="h-6 w-6" />, title: "Hours", lines: [CONTACT.hours], href: undefined },
          ].map((c) => (
            <Card key={c.title} className="rounded-lg border-2 border-brand-ink/10 p-2">
              <CardContent className="flex items-start gap-4 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-brand text-white">
                  {c.icon}
                </div>
                <div>
                  <h3 className="display text-xl text-brand-ink">{c.title}</h3>
                  {c.lines.map((l) =>
                    c.href ? (
                      <a key={l} href={c.href(l)} className="block font-bold text-brand hover:underline">
                        {l}
                      </a>
                    ) : (
                      <p key={l} className="font-bold text-brand-ink">{l}</p>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
