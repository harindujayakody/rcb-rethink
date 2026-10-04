import type { Metadata } from "next";
import { PageHero, SectionHeading, CtaBand } from "@/components/sections";
import { GalleryGrid } from "./gallery-grid";

export const metadata: Metadata = {
  title: "Gallery | RCB Holdings",
  description:
    "Machinery, paving and project photography from RCB Holdings (Pvt) Ltd, Sri Lanka.",
};

export default function MediaPage() {
  return (
    <>
      <PageHero
        eyebrow="Media"
        title="Our world, through the lens."
        description="Machinery, paving and projects — a look at RCB Holdings at work."
        crumbs={[{ label: "Home", href: "/" }, { label: "Media" }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading
          eyebrow="Gallery"
          title="Project & machinery photography"
          description="Click any image to view it larger."
        />
        <div className="mt-10">
          <GalleryGrid />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
