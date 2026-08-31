import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { useSEO } from "../hooks/useSEO";
import { buildLodgingBusinessSchema, buildWebsiteSchema } from "../lib/seo";
import { Hero } from "../components/Hero";
import { QuickSummary } from "../components/QuickSummary";
import { FeatureChecklist } from "../components/FeatureChecklist";
import { RoomSection } from "../components/RoomSection";
import { AmenitiesSection } from "../components/AmenitiesSection";
import { GalleryPreviewSection } from "../components/GalleryPreviewSection";
import { ShopSection } from "../components/ShopSection";
import { LocationSection } from "../components/LocationSection";
import { GoogleReviews } from "../components/GoogleReviews";
import { ContactSection } from "../components/ContactSection";

export function Home() {
  const location = useLocation();

  const jsonLd = useMemo(() => [buildLodgingBusinessSchema(), buildWebsiteSchema()], []);

  useSEO({
    title: "SKI Towers | Monthly Rooms Near Erode Railway Station",
    description:
      "Looking for affordable monthly rooms near Erode Railway Station? SKI Towers offers clean single and double rooms for students and working professionals. Enquire today.",
    path: "/",
    jsonLd,
  });

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
      }
    }
  }, [location.hash]);

  return (
    <>
      <Hero />
      <QuickSummary />
      <FeatureChecklist />
      <RoomSection />
      <AmenitiesSection />
      <GalleryPreviewSection />
      <ShopSection />
      <LocationSection />
      <GoogleReviews />
      <ContactSection
        eyebrowKey="contact.eyebrow"
        titleKey="contact.homeCtaTitle"
        descriptionKey="contact.homeCtaDescription"
      />
    </>
  );
}
