import { Store } from "lucide-react";
import { shops } from "../data/shops";
import { business } from "../data/business";
import { generateWhatsAppLink, isWhatsAppConfigured } from "../lib/whatsapp";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { Button } from "./ui/Button";
import { ShopCard } from "./ShopCard";

export function ShopSection() {
  const whatsappLink = generateWhatsAppLink();

  return (
    <section id="shops" className="bg-ivory-soft py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Commercial Spaces"
            title="Looking for a shop in Erode?"
            description={`Explore available commercial spaces at ${business.name}, or message us to ask what's open.`}
          />
        </Reveal>

        {shops.length === 0 ? (
          <Reveal className="mt-10">
            <div className="flex flex-col items-center gap-4 rounded-2xl border border-dashed border-border bg-white px-6 py-16 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-light text-accent">
                <Store className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <p className="max-w-sm text-sm text-muted">
                Shop listings will appear here as they become available. In the meantime, message us
                on WhatsApp to ask about commercial space at {business.name}.
              </p>
              {isWhatsAppConfigured ? (
                <Button href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Enquire on WhatsApp
                </Button>
              ) : (
                <Button href="/contact">Contact Us</Button>
              )}
            </div>
          </Reveal>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {shops.map((shop, i) => (
              <Reveal key={shop.id} delay={i * 80}>
                <ShopCard shop={shop} />
              </Reveal>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
