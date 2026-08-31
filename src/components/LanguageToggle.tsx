import { useEffect, useRef, useState } from "react";
import { Languages } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { LANGUAGES } from "../i18n/types";
import { cn } from "../lib/utils";

/** Compact dropdown for switching site language, styled to match the current navbar (light or transparent-over-hero). */
export function LanguageToggle({ light = false }: { light?: boolean }) {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const current = LANGUAGES.find((l) => l.code === language) ?? LANGUAGES[0];

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t("language.label")}
        className={cn(
          "flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors",
          light
            ? "text-white/90 hover:bg-white/10"
            : "text-charcoal-soft hover:bg-ivory-soft"
        )}
      >
        <Languages className="h-3.5 w-3.5" strokeWidth={1.75} />
        {current.label}
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={t("language.label")}
          className="absolute right-0 top-full z-50 mt-2 w-32 overflow-hidden rounded-xl border border-border bg-white py-1 shadow-lg"
        >
          {LANGUAGES.map((l) => (
            <li key={l.code}>
              <button
                type="button"
                role="option"
                aria-selected={l.code === language}
                onClick={() => {
                  setLanguage(l.code);
                  setOpen(false);
                }}
                className={cn(
                  "flex w-full items-center px-3.5 py-2 text-left text-sm transition-colors",
                  l.code === language
                    ? "bg-accent-light font-semibold text-accent"
                    : "text-charcoal-soft hover:bg-ivory-soft"
                )}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
