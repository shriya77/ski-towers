import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";

type Variant = "primary" | "secondary" | "outline" | "outlineLight" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-ivory hover:bg-accent-dark active:scale-[0.98] shadow-md shadow-accent/25 hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5",
  secondary: "bg-charcoal text-ivory hover:bg-charcoal-soft active:scale-[0.98] hover:-translate-y-0.5",
  outline:
    "border-2 border-charcoal/15 text-charcoal hover:border-accent hover:text-accent bg-white/60",
  // For use over dark/photo backgrounds (e.g. the hero) — kept as its own
  // variant rather than overriding `outline` via className, since Tailwind
  // resolves same-property conflicts by stylesheet order, not class order.
  outlineLight:
    "border-2 border-white/30 bg-white/10 text-white backdrop-blur-sm hover:border-white hover:bg-white/20",
  ghost: "text-charcoal hover:text-accent",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type Props = ButtonAsButton | ButtonAsAnchor;

/** Internal, same-tab links (e.g. "/rooms") render as a router <Link> for client-side navigation. */
function isInternalLink(href: string, target: string | undefined): boolean {
  return href.startsWith("/") && target !== "_blank";
}

export function Button({ variant = "primary", size = "md", className, children, ...props }: Props) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href !== undefined) {
    const { href, ...rest } = props;
    if (isInternalLink(href, rest.target)) {
      return (
        <Link to={href} className={classes} {...rest}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
