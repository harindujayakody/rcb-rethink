"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { CONTACT, NAV_LINKS } from "@/lib/data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="bg-brand-deep text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 font-mono text-[11px] tracking-wider sm:px-6">
          <span className="uppercase opacity-80">{CONTACT.tagline}</span>
          <div className="hidden items-center gap-5 sm:flex">
            <span className="opacity-80">{CONTACT.hours}</span>
            <a href={`tel:${CONTACT.phones[1].replace(/\s/g, "")}`} className="flex items-center gap-1.5 font-semibold hover:opacity-80">
              <Phone className="h-3 w-3" />
              {CONTACT.phones[1]}
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={cn(
          "border-b border-line bg-white/95 backdrop-blur transition-shadow",
          scrolled && "shadow-lift"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center bg-brand font-display text-2xl text-white">
              R
            </span>
            <span className="leading-none">
              <span className="block font-display text-2xl tracking-wide text-brand-ink">
                RCB
              </span>
              <span className="block font-mono text-[10px] tracking-[0.18em] text-steel">
                HOLDINGS (PVT) LTD
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[15px] font-bold text-brand-ink transition-colors hover:text-brand"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button render={<Link href="/quote" />} className="hidden rounded-md bg-brand px-5 font-bold text-white hover:bg-brand-deep sm:inline-flex">
              Request a Quote
            </Button>
            <Sheet>
              <SheetTrigger
                render={
                  <Button variant="outline" size="icon" className="rounded-md lg:hidden" aria-label="Open menu" />
                }
              >
                <Menu className="h-5 w-5" />
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-white">
                <div className="mt-2 flex items-center justify-between">
                  <span className="font-display text-xl text-brand-ink">RCB HOLDINGS</span>
                  <SheetClose
                    render={
                      <Button variant="ghost" size="icon" aria-label="Close menu" />
                    }
                  >
                    <X className="h-5 w-5" />
                  </SheetClose>
                </div>
                <nav className="mt-8 flex flex-col gap-1">
                  {NAV_LINKS.map((l) => (
                    <SheetClose
                      key={l.href}
                      render={
                        <Link
                          href={l.href}
                          className="border-b border-line py-3 font-display text-2xl uppercase text-brand-ink hover:text-brand"
                        />
                      }
                    >
                      {l.label}
                    </SheetClose>
                  ))}
                </nav>
                <SheetClose
                  render={
                    <Link
                      href="/quote"
                      className={buttonVariants({
                        className: "mt-8 w-full rounded-md bg-brand font-bold text-white hover:bg-brand-deep",
                      })}
                    />
                  }
                >
                  Request a Quote
                </SheetClose>
                <p className="mt-6 font-mono text-xs tracking-wider text-steel">
                  {CONTACT.phones[0]} · {CONTACT.phones[1]}
                </p>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
