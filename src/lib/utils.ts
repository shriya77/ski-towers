export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** Returns null when there's no rate, so callers show a translated "Contact for rate" fallback. */
export function formatPrice(amount: number | null): string | null {
  if (amount === null || Number.isNaN(amount)) return null;
  return `₹${amount.toLocaleString("en-IN")}`;
}
