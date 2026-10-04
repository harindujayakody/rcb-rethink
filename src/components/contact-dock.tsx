import { Mail, Phone, MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/data";
import { cn } from "@/lib/utils";

const ACTIONS = [
  {
    label: "Email us",
    detail: CONTACT.emails[0],
    href: `mailto:${CONTACT.emails[0]}`,
    Icon: Mail,
  },
  {
    label: "Call us",
    detail: CONTACT.phones[0],
    href: `tel:${CONTACT.phones[0].replace(/\s/g, "")}`,
    Icon: Phone,
  },
  {
    label: "WhatsApp",
    detail: CONTACT.phones[1],
    href: `https://wa.me/${CONTACT.phones[1].replace(/\D/g, "")}`,
    external: true,
    Icon: MessageCircle,
  },
];

/**
 * Floating contact dock — fixed to the right-center of the viewport,
 * in the spirit of Magic UI's Dock: icon buttons with hover magnification
 * and tooltips. Rectangular to match the site's design language.
 */
export function ContactDock() {
  return (
    <aside
      aria-label="Quick contact"
      className="fixed right-3 top-1/2 z-40 -translate-y-1/2 sm:right-5"
    >
      <div className="flex flex-col items-center gap-1 rounded-lg border border-white/10 bg-brand-deep/95 p-1.5 shadow-lift backdrop-blur">
        {ACTIONS.map(({ label, detail, href, external, Icon }, i) => (
          <div key={label}>
            {i > 0 && <div className="mx-auto my-1 h-px w-6 bg-white/15" />}
            <a
              href={href}
              aria-label={`${label} — ${detail}`}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className={cn(
                "group relative flex h-11 w-11 items-center justify-center rounded-md text-white",
                "transition-all duration-200 hover:scale-110 hover:bg-brand active:scale-95"
              )}
            >
              <Icon className="h-5 w-5" />
              {/* Tooltip — slides in from the left */}
              <span
                role="tooltip"
                className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 translate-x-2 whitespace-nowrap rounded-md bg-brand-ink px-3 py-2 opacity-0 shadow-lift transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
              >
                <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-white/60">
                  {label}
                </span>
                <span className="block text-sm font-bold text-white">
                  {detail}
                </span>
              </span>
            </a>
          </div>
        ))}
      </div>
    </aside>
  );
}
