# RCB Holdings — Website

Corporate website for **RCB Holdings (Pvt) Ltd** — construction machinery, block making machines, interlock paving and cement blocks. Hokandara, Sri Lanka.

Built with [Next.js](https://nextjs.org) (App Router), TypeScript, Tailwind CSS v4, shadcn/ui and Lucide icons.

## Design

- White + Booking.com blue (`#003580`) with deep navy
- Bold Anton display headlines, Inter body, JetBrains Mono spec labels
- Rectangular controls — no pill shapes

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Useful commands

```bash
npm run dev      # development server
npm run build    # production build (31 static pages)
npm run lint     # ESLint
npx tsc --noEmit # type check
```

## Structure

- `src/app/` — routes: home, machinery (7 categories, model detail pages), concrete-products, construction, about, support, projects, media, contact, quote
- `src/lib/data.ts` — central content: machine inventory with verified specs, interlock profiles, cement block sizes, projects, brands
- `src/components/` — site header/footer, shared sections, shadcn/ui components
- `public/images/` — site photography

## Notes

- Machine specifications come from the supplied RCB inventory; models without verified specs show "Full specifications available on request."
- Contact and quote forms open prefilled WhatsApp enquiries to +94 771 600 600.
