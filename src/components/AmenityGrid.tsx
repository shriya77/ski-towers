import type { Amenity } from "../types";
import { cn } from "../lib/utils";
import { useLanguage, useLocalized } from "../i18n/LanguageContext";

export function AmenityGrid({ amenities }: { amenities: Amenity[] }) {
  const visible = amenities.filter((a) => a.enabled || a.comingSoon);
  if (visible.length === 0) return null;

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {visible.map((amenity) => (
        <AmenityItem key={amenity.id} amenity={amenity} />
      ))}
    </div>
  );
}

export function AmenityItem({ amenity }: { amenity: Amenity }) {
  const { t } = useLanguage();
  const name = useLocalized(amenity.name);
  const Icon = amenity.icon;
  const isComingSoon = !amenity.enabled && amenity.comingSoon;

  return (
    <div
      className={cn(
        "flex items-center gap-2.5 rounded-xl border border-border bg-white px-4 py-3",
        isComingSoon && "opacity-60"
      )}
    >
      <span
        className={cn(
          "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
          isComingSoon ? "bg-charcoal/5 text-muted" : "bg-accent-light text-accent"
        )}
      >
        <Icon className="h-4 w-4" strokeWidth={1.75} />
      </span>
      <span className="text-sm font-medium text-charcoal-soft">
        {name}
        {isComingSoon && <span className="block text-xs font-normal text-muted">{t("amenities.comingSoon")}</span>}
      </span>
    </div>
  );
}
