import type { ElementType, ReactNode } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { cn } from "../../lib/utils";

export function Reveal({
  children,
  className,
  as: Tag = "div",
  delay,
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  delay?: number;
}) {
  const ref = useScrollReveal<HTMLElement>();
  return (
    <Tag
      ref={ref}
      className={cn("animate-on-scroll", className)}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
