import { useEffect } from "react";

/** Lightweight per-route document title + meta description, no extra dependency needed. */
export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    let previousDescription: string | null = null;
    const meta = document.querySelector('meta[name="description"]');

    if (description && meta) {
      previousDescription = meta.getAttribute("content");
      meta.setAttribute("content", description);
    }

    return () => {
      document.title = previousTitle;
      if (description && meta && previousDescription !== null) {
        meta.setAttribute("content", previousDescription);
      }
    };
  }, [title, description]);
}
