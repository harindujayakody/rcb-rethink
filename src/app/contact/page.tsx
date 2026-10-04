import type { Metadata } from "next";
import {
  MapPin,
  Phone,
  Printer,
  Mail,
  User,
  Clock,
  Building2,
} from "lucide-react";
import { PageHero, SectionHeading, CtaBand } from "@/components/sections";
import { Card, CardContent } from "@/components/ui/card";
import { CONTACT } from "@/lib/data";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact RCB Holdings | Sri Lanka",
  description:
    "Contact RCB Holdings (Pvt) Ltd — Hokandara head office, SDLG Lanka, chairman and business hours.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk."
        description="Call, WhatsApp or send an enquiry — our team responds during business hours."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading
          eyebrow="Find us"
          title="Get in touch"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* Info cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <Card className="rounded-lg border-line">
              <CardContent className="p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-brand">
                  <Building2 className="h-5 w-5 text-white" />
                </div>
                <h3 className="display mt-4 text-xl text-brand-ink">
                  {CONTACT.company}
                </h3>
                <div className="mt-3 space-y-2 text-sm text-steel">
                  <p className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <span>
                      {CONTACT.address[0]}
                      <br />
                      {CONTACT.address[1]}
                    </span>
                  </p>
                  {CONTACT.phones.map((p) => (
                    <p key={p} className="flex items-center gap-2">
                      <Phone className="h-4 w-4 shrink-0 text-brand" />
                      <a href={`tel:${p.replace(/\s/g, "")}`} className="hover:underline">
                        {p}
                      </a>
                    </p>
                  ))}
                  <p className="flex items-center gap-2">
                    <Printer className="h-4 w-4 shrink-0 text-brand" />
                    {CONTACT.fax}
                  </p>
                  {CONTACT.emails.map((e) => (
                    <p key={e} className="flex items-center gap-2">
                      <Mail className="h-4 w-4 shrink-0 text-brand" />
                      <a href={`mailto:${e}`} className="hover:underline">
                        {e}
                      </a>
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-lg border-line">
              <CardContent className="p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-brand">
                  <Building2 className="h-5 w-5 text-white" />
                </div>
                <h3 className="display mt-4 text-xl text-brand-ink">
                  {CONTACT.sdlgLanka.name}
                </h3>
                <div className="mt-3 space-y-2 text-sm text-steel">
                  <p className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <span>
                      {CONTACT.sdlgLanka.address[0]}
                      <br />
                      {CONTACT.sdlgLanka.address[1]}
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4 shrink-0 text-brand" />
                    <a
                      href={`tel:${CONTACT.sdlgLanka.phone.replace(/\s/g, "")}`}
                      className="hover:underline"
                    >
                      {CONTACT.sdlgLanka.phone}
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4 shrink-0 text-brand" />
                    <a href={`mailto:${CONTACT.sdlgLanka.email}`} className="hover:underline">
                      {CONTACT.sdlgLanka.email}
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-lg border-line">
              <CardContent className="p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-brand">
                  <User className="h-5 w-5 text-white" />
                </div>
                <h3 className="display mt-4 text-xl text-brand-ink">
                  {CONTACT.chairman.name}
                </h3>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-steel">
                  {CONTACT.chairman.title}
                </p>
                <div className="mt-3 space-y-2 text-sm text-steel">
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4 shrink-0 text-brand" />
                    <a
                      href={`tel:${CONTACT.chairman.mobile.replace(/\s/g, "")}`}
                      className="hover:underline"
                    >
                      {CONTACT.chairman.mobile}
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4 shrink-0 text-brand" />
                    <a href={`mailto:${CONTACT.chairman.email}`} className="hover:underline">
                      {CONTACT.chairman.email}
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-lg border-line bg-brand">
              <CardContent className="p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-white/10">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <h3 className="display mt-4 text-xl text-white">
                  Opening hours
                </h3>
                <p className="mt-3 font-extrabold text-white">{CONTACT.hours}</p>
                <p className="mt-2 text-sm text-white/70">
                  Call or WhatsApp {CONTACT.phones[1]} for sales.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Enquiry form */}
          <ContactForm />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
