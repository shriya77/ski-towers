import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { Container } from "./ui/Container";

export interface Crumb {
  label: string;
  path?: string;
}

/** Visible breadcrumb trail — pair with lib/seo's buildBreadcrumbSchema for matching JSON-LD (only where a visible trail exists). */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const { t } = useLanguage();
  const trail: Crumb[] = [{ label: t("breadcrumbs.home"), path: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="border-b border-border bg-ivory-soft pt-28 sm:pt-32">
      <Container>
        <ol className="flex flex-wrap items-center gap-1.5 py-3 text-xs text-muted">
          {trail.map((crumb, i) => (
            <li key={crumb.label} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="h-3 w-3 shrink-0" />}
              {crumb.path ? (
                <Link to={crumb.path} className="transition-colors hover:text-accent">
                  {crumb.label}
                </Link>
              ) : (
                <span className="font-medium text-charcoal-soft" aria-current="page">
                  {crumb.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </Container>
    </nav>
  );
}
