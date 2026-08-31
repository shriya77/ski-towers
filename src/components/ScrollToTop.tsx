import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Resets scroll position on route change, except when navigating to an in-page hash. */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0 });
  }, [pathname, hash]);

  return null;
}
