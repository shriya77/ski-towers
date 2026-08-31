import { usePageMeta } from "../hooks/usePageMeta";
import { PageHeader } from "../components/PageHeader";
import { ContactSection } from "../components/ContactSection";
import { LocationSection } from "../components/LocationSection";

export function Contact() {
  usePageMeta(
    "Contact | Ski Towers Erode",
    "Contact Ski Towers Erode by WhatsApp, phone or email. Find directions to our location in Erode, Tamil Nadu."
  );

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Contact Ski Towers Erode"
        description="Reach out on WhatsApp, call us, or find us on the map below."
      />
      <ContactSection />
      <LocationSection />
    </>
  );
}
