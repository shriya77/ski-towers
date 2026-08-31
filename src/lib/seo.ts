import { business } from "../data/business";

/**
 * Placeholder production domain — update once the site is deployed to its
 * real domain. Used to build absolute canonical/OG URLs and JSON-LD @id/url
 * fields, and referenced by robots.txt / sitemap.xml.
 */
export const SITE_URL = "https://skitowerserode.com";

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

interface JsonLdBase {
  "@context": "https://schema.org";
  "@type": string;
  [key: string]: unknown;
}

/**
 * LodgingBusiness schema — only includes fields backed by real, confirmed
 * data (data/business.ts). Never add a property here that isn't already
 * shown on the site.
 */
export function buildLodgingBusinessSchema(): JsonLdBase {
  const schema: JsonLdBase = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: business.name,
    url: SITE_URL,
  };

  if (business.addressLine1 && !business.addressLine1.startsWith("[")) {
    schema.address = {
      "@type": "PostalAddress",
      streetAddress: [business.addressLine1, business.addressLine2].filter(Boolean).join(", "),
      addressLocality: business.city,
      addressRegion: business.state,
      postalCode: business.pincode && !business.pincode.startsWith("[") ? business.pincode : undefined,
      addressCountry: "IN",
    };
  }

  if (business.phone) {
    schema.telephone = business.phone;
  }

  if (business.mapsUrl) {
    schema.hasMap = business.mapsUrl;
    schema.sameAs = [business.mapsUrl];
  }

  if (business.googleRating !== null && business.googleReviewCount !== null) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: business.googleRating,
      reviewCount: business.googleReviewCount,
    };
  }

  return schema;
}

export function buildWebsiteSchema(): JsonLdBase {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: business.name,
    url: SITE_URL,
  };
}

export interface BreadcrumbEntry {
  name: string;
  path: string;
}

export function buildBreadcrumbSchema(entries: BreadcrumbEntry[]): JsonLdBase {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: entries.map((entry, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: entry.name,
      item: absoluteUrl(entry.path),
    })),
  };
}
