import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* Eyebrow + big Anton headline used on every section */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <p className={cn("eyebrow", dark && "eyebrow-light")}>
        <span className="eyebrow-rule" />
        {eyebrow}
      </p>
      <h2 className={cn("display mt-4 text-4xl text-brand-ink sm:text-5xl", dark && "text-white")}>
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 text-lg leading-relaxed text-steel", dark && "text-white/80")}>
          {description}
        </p>
      )}
    </div>
  );
}

/* Inner-page hero: navy band, bold headline, breadcrumb. No pills. */
export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  crumbs: { label: string; href?: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-brand">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0, #fff 2px, transparent 2px, transparent 18px)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <nav className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-white/70">
          {crumbs.map((c, i) => (
            <span key={c.label} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="h-3 w-3" />}
              {c.href ? (
                <Link href={c.href} className="hover:text-white hover:underline">
                  {c.label}
                </Link>
              ) : (
                <span className="text-white">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
        <p className="eyebrow mt-6 !text-white">
          <span className="eyebrow-rule bg-white" />
          {eyebrow}
        </p>
        <h1 className="display mt-4 max-w-4xl text-5xl text-white sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}

/* Navy CTA band used above the footer on inner pages */
export function CtaBand({
  title = "Let's talk about your project.",
  text = "Machines, blocks or paving — tell us what you're building and we'll get back with a quote.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-brand">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-14 sm:px-6 lg:flex-row lg:items-center">
        <div>
          <h2 className="display text-4xl text-white sm:text-5xl">{title}</h2>
          <p className="mt-3 max-w-xl text-white/80">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button render={<Link href="/quote" />} size="lg" className="rounded-md bg-white font-bold text-brand hover:bg-tint">
            Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button render={<Link href="/contact" />} size="lg" variant="outline" className="rounded-md border-white/40 bg-transparent font-bold text-white hover:bg-white/10 hover:text-white">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
