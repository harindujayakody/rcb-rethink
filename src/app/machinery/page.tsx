import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  CircleDot,
  Forklift,
  Hammer,
  MoveHorizontal,
  Shovel,
  Truck,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CtaBand, PageHero } from "@/components/sections";
import { MACHINE_CATEGORIES } from "@/lib/data";

export const metadata = {
  title: "Wheel Loaders, Excavators & More | RCB Holdings Sri Lanka",
  description:
    "Heavy construction machinery in Sri Lanka: wheel loaders, excavators, road rollers, motor graders, block making machines, forklifts and stone crushers from SDLG, YINENG, Noah, Shengya, SHANTUI and Jinbaoshan.",
};

const CATEGORY_ICONS: Record<string, ReactNode> = {
  "wheel-loaders": <Truck className="h-7 w-7" />,
  excavators: <Shovel className="h-7 w-7" />,
  "road-rollers": <CircleDot className="h-7 w-7" />,
  "motor-graders": <MoveHorizontal className="h-7 w-7" />,
  "block-making-machines": <Boxes className="h-7 w-7" />,
  forklifts: <Forklift className="h-7 w-7" />,
  "stone-crushers": <Hammer className="h-7 w-7" />,
};

export default function MachineryIndex() {
  return (
    <>
      <PageHero
        eyebrow="Machinery"
        title="Machines for every site."
        description="Heavy construction machinery and industrial equipment from the brands Sri Lankan contractors trust — wheel loaders, excavators, rollers, graders, block plants and more, all backed by local after-sales service."
        crumbs={[{ label: "Home", href: "/" }, { label: "Machinery" }]}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {MACHINE_CATEGORIES.map((category) => (
              <Link
                key={category.slug}
                href={`/machinery/${category.slug}`}
                className="group"
              >
                <Card className="h-full overflow-hidden rounded-lg transition-shadow duration-300 hover:shadow-xl">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-3">
                      <CardTitle className="display text-2xl text-brand-ink">
                        {category.name}
                      </CardTitle>
                      <span className="shrink-0 text-brand">
                        {CATEGORY_ICONS[category.slug]}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-relaxed text-steel">
                      {category.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {category.brands.map((brand) => (
                        <Badge
                          key={brand}
                          variant="secondary"
                          className="rounded-sm font-mono text-[11px] uppercase tracking-wider"
                        >
                          {brand}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between border-t border-line bg-mist/60">
                    <span className="text-sm font-bold text-steel">
                      {category.models.length}{" "}
                      {category.models.length === 1 ? "model" : "models"}
                    </span>
                    <span className="flex items-center gap-1 text-sm font-extrabold text-brand transition-all group-hover:gap-2">
                      View range <ArrowRight className="h-4 w-4" />
                    </span>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
