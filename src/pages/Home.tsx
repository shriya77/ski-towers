import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";
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

  usePageMeta(
    "Ski Towers Erode | Rooms & Accommodation in Erode",
    "Ski Towers Erode offers single and double rooms for daily, weekly and monthly stays in Erode, Tamil Nadu. Walkable to Erode Railway Station. Book directly on WhatsApp."
  );

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
        eyebrow="Contact"
        title="Looking for a room?"
        description="Get in touch with Ski Towers Erode and we'll help you find the right stay."
      />
    </>
  );
}
