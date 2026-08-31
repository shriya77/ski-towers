export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export function formatPrice(amount: number | null): string {
  if (amount === null || Number.isNaN(amount)) return "Contact for rate";
  return `₹${amount.toLocaleString("en-IN")}`;
}
