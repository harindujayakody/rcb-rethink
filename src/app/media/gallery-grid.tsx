"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { GALLERY } from "@/lib/data";

export function GalleryGrid() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openAt = (i: number) => {
    setIndex(i);
    setOpen(true);
  };
  const prev = () => setIndex((i) => (i - 1 + GALLERY.length) % GALLERY.length);
  const next = () => setIndex((i) => (i + 1) % GALLERY.length);
  const current = GALLERY[index];

  return (
    <>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {GALLERY.map((g, i) => (
          <button
            key={g.src + i}
            type="button"
            onClick={() => openAt(i)}
            className="group relative aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-lg border border-line text-left"
          >
            <Image
              src={g.src}
              alt={g.caption}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-ink/80 to-transparent px-4 pb-3 pt-10 text-sm font-bold text-white">
              {g.caption}
            </span>
          </button>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl rounded-lg p-2 sm:p-4">
          <DialogHeader className="px-4 pt-4 sm:px-6">
            <DialogTitle className="text-lg font-extrabold text-brand-ink">
              {current.caption}
            </DialogTitle>
            <DialogDescription className="font-mono text-[11px] uppercase tracking-[0.18em]">
              {index + 1} of {GALLERY.length}
            </DialogDescription>
          </DialogHeader>
          <div className="relative">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md">
              <Image
                src={current.src}
                alt={current.caption}
                fill
                className="object-cover"
                sizes="90vw"
                priority
              />
            </div>
            <Button
              type="button"
              variant="secondary"
              size="icon"
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-md bg-white/90 hover:bg-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              type="button"
              variant="secondary"
              size="icon"
              onClick={next}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md bg-white/90 hover:bg-white"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
