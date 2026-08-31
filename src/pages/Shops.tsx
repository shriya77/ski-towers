import { usePageMeta } from "../hooks/usePageMeta";
import { PageHeader } from "../components/PageHeader";
import { ShopSection } from "../components/ShopSection";

export function Shops() {
  usePageMeta(
    "Shops & Commercial Spaces | Ski Towers Erode",
    "Commercial spaces and shops available for rent at Ski Towers Erode. Enquire on WhatsApp for size, rent and availability."
  );

  return (
    <>
      <PageHeader
        eyebrow="Commercial Spaces"
        title="Shops & Commercial Spaces"
        description="Looking for a shop or commercial space in Erode? Explore available spaces at Ski Towers."
      />
      <ShopSection />
    </>
  );
}
