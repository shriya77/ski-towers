import { cn } from "../../lib/utils";

/**
 * Branded stand-in used wherever a real photo hasn't been supplied yet —
 * a signature gradient + monogram rather than a generic "missing image" box,
 * so the site still reads as designed. Swap in a real <img> by adding
 * entries to the relevant data file; never falls back to stock photography
 * that could misrepresent the property.
 */
export function PlaceholderImage({
  label,
  className,
  compact = false,
}: {
  label?: string;
  className?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={cn("bg-mesh bg-grain relative flex h-full w-full items-center justify-center", className)}
      role="img"
      aria-label={label ? `${label} — photo coming soon` : "Photo coming soon"}
    >
      <div className="relative flex flex-col items-center gap-2.5">
        <span
          className={cn(
            "flex items-center justify-center rounded-full border text-ivory/90",
            compact ? "h-9 w-9 border-ivory/25" : "h-14 w-14 border-ivory/30 sm:h-16 sm:w-16"
          )}
        >
          <span className={cn("font-extrabold tracking-tight", compact ? "text-xs" : "text-base sm:text-lg")}>
            ST
          </span>
        </span>
        {!compact && (
          <span className="px-4 text-center text-[11px] font-medium uppercase tracking-[0.14em] text-ivory/50">
            Photo coming soon
          </span>
        )}
      </div>
    </div>
  );
}
