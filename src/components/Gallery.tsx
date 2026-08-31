import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, ImageOff } from "lucide-react";
import type { GalleryCategory, GalleryImage } from "../types";
import { galleryImages } from "../data/gallery";
import { PlaceholderImage } from "./ui/PlaceholderImage";
import { cn } from "../lib/utils";

const CATEGORIES: GalleryCategory[] = [
  "All",
  "Rooms",
  "Exterior",
  "Bathrooms",
  "Common Areas",
  "Shops",
];

export function Gallery() {
  const [active, setActive] = useState<GalleryCategory>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered: GalleryImage[] =
    active === "All" ? galleryImages : galleryImages.filter((img) => img.category === active);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length));
      if (e.key === "ArrowLeft")
        setLightboxIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, filtered.length]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              active === cat
                ? "bg-accent text-ivory"
                : "bg-white text-charcoal-soft ring-1 ring-inset ring-border hover:ring-accent/40"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="mt-8 flex flex-col items-center gap-3 rounded-2xl border border-dashed border-border bg-white py-16 text-center">
          <ImageOff className="h-8 w-8 text-muted" strokeWidth={1.5} />
          <p className="text-sm text-muted">
            Photos for this category are coming soon.
          </p>
        </div>
      ) : (
        <div className="mt-8 columns-2 gap-4 sm:columns-3 [&>*]:mb-4">
          {filtered.map((img, i) => (
            <button
              key={img.src + i}
              type="button"
              onClick={() => setLightboxIndex(i)}
              className="block w-full overflow-hidden rounded-xl focus-visible:outline-2 focus-visible:outline-accent"
              aria-label={`Open photo: ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full transition-transform duration-300 hover:scale-[1.03]"
              />
            </button>
          ))}
        </div>
      )}

      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 animate-in"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            aria-label="Close photo viewer"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            onClick={() => setLightboxIndex(null)}
          >
            <X className="h-5 w-5" />
          </button>

          {filtered.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous photo"
                className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-4"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
                }}
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                aria-label="Next photo"
                className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-4"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length));
                }}
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          <img
            src={filtered[lightboxIndex].src}
            alt={filtered[lightboxIndex].alt}
            className="max-h-[85vh] max-w-full rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export function GalleryPreviewPlaceholder() {
  const labels = ["Rooms", "Exterior", "Bathrooms", "Common Areas"];
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {labels.map((label) => (
        <div key={label} className="aspect-square overflow-hidden rounded-xl">
          <PlaceholderImage label={label} compact />
        </div>
      ))}
    </div>
  );
}
