import { CalendarRange, CalendarClock, BedDouble } from "lucide-react";
import { Container } from "./ui/Container";
import { cn } from "../lib/utils";
import { useLanguage } from "../i18n/LanguageContext";

export function QuickSummary() {
  const { t } = useLanguage();

  const items = [
    { icon: CalendarRange, label: t("quickSummary.weekly") },
    { icon: CalendarClock, label: t("quickSummary.monthly") },
    { icon: BedDouble, label: t("quickSummary.singleDouble") },
  ];

  return (
    <section id="summary" className="border-b border-border bg-white py-8">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {items.map(({ icon: Icon, label }, i) => (
            <div
              key={label}
              className={cn(
                "flex items-center justify-center gap-3 px-3 py-4 text-center sm:justify-start sm:px-6 sm:text-left",
                i > 0 && "sm:border-l sm:border-border"
              )}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-light text-accent">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <span className="text-sm font-semibold text-charcoal-soft">{label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
