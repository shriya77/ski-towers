import { useEffect } from "react";
import { absoluteUrl } from "../lib/seo";

interface SEOOptions {
  title: string;
  description: string;
  /** Route path, e.g. "/rooms/single" — used for canonical + og:url. */
  path: string;
  /** One or more JSON-LD objects to inject as <script type="application/ld+json"> tags. */
  jsonLd?: object | object[];
}

function setMeta(selector: string, attr: string, value: string): () => void {
  const el = document.querySelector(selector);
  if (!el) return () => {};
  const previous = el.getAttribute(attr);
  el.setAttribute(attr, value);
  return () => {
    if (previous !== null) el.setAttribute(attr, previous);
  };
}

function setLink(rel: string, href: string): () => void {
  let el = document.querySelector(`link[rel="${rel}"]`);
  const existed = Boolean(el);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  const previous = el.getAttribute("href");
  el.setAttribute("href", href);
  return () => {
    if (!existed) {
      el?.remove();
    } else if (previous !== null) {
      el?.setAttribute("href", previous);
    }
  };
}

/** Per-route document title, meta description, canonical URL, OG/Twitter tags and JSON-LD. */
export function useSEO({ title, description, path, jsonLd }: SEOOptions) {
  useEffect(() => {
    const cleanups: Array<() => void> = [];
    const previousTitle = document.title;
    document.title = title;
    cleanups.push(() => {
      document.title = previousTitle;
    });

    const url = absoluteUrl(path);

    cleanups.push(setMeta('meta[name="description"]', "content", description));
    cleanups.push(setLink("canonical", url));
    cleanups.push(setMeta('meta[property="og:title"]', "content", title));
    cleanups.push(setMeta('meta[property="og:description"]', "content", description));
    cleanups.push(setMeta('meta[property="og:url"]', "content", url));
    cleanups.push(setMeta('meta[name="twitter:title"]', "content", title));
    cleanups.push(setMeta('meta[name="twitter:description"]', "content", description));

    const scripts: HTMLScriptElement[] = [];
    if (jsonLd) {
      const items = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      for (const item of items) {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.textContent = JSON.stringify(item);
        document.head.appendChild(script);
        scripts.push(script);
      }
    }

    return () => {
      cleanups.forEach((fn) => fn());
      scripts.forEach((s) => s.remove());
    };
  }, [title, description, path, jsonLd]);
}
