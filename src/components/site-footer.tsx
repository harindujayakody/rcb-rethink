import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { CONTACT, NAV_LINKS, SOCIAL } from "@/lib/data";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-brand-deep text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center bg-white font-display text-2xl text-brand">
              R
            </span>
            <span className="leading-none">
              <span className="block font-display text-2xl tracking-wide">RCB</span>
              <span className="block font-mono text-[10px] tracking-[0.18em] opacity-70">
                HOLDINGS (PVT) LTD
              </span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed opacity-80">
            Construction machinery, block making machines, interlock paving and
            cement blocks — {CONTACT.tagline.toLowerCase()}.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-white/10 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-white/90 transition-colors hover:bg-white/20 hover:text-white"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg uppercase tracking-wide">Explore</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="opacity-80 transition-opacity hover:opacity-100 hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/quote" className="font-bold opacity-100 hover:underline">
                Request a Quote
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg uppercase tracking-wide">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 opacity-70" />
              <span className="opacity-80">{CONTACT.address.join(" ")}</span>
            </li>
            {CONTACT.phones.map((p) => (
              <li key={p} className="flex gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 opacity-70" />
                <a href={`tel:${p.replace(/\s/g, "")}`} className="opacity-80 hover:opacity-100 hover:underline">
                  {p}
                </a>
              </li>
            ))}
            {CONTACT.emails.map((e) => (
              <li key={e} className="flex gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 opacity-70" />
                <a href={`mailto:${e}`} className="opacity-80 hover:opacity-100 hover:underline">
                  {e}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg uppercase tracking-wide">Visit Us</h3>
          <div className="mt-4 flex gap-2.5 text-sm">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 opacity-70" />
            <span className="opacity-80">{CONTACT.hours}</span>
          </div>
          <p className="mt-4 text-sm opacity-80">
            <span className="font-bold text-white">SDLG Lanka (Pvt) Ltd</span>
            <br />
            {CONTACT.sdlgLanka.address.join(" ")}
            <br />
            {CONTACT.sdlgLanka.phone}
          </p>
        </div>
      </div>

      <Separator className="bg-white/15" />
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 font-mono text-[11px] tracking-wider opacity-70 sm:flex-row sm:px-6">
        <span>© {year} RCB Holdings (Pvt) Ltd. All rights reserved.</span>
        <span>
          Built by <span className="font-bold">INFIAX</span>
        </span>
      </div>
    </footer>
  );
}
