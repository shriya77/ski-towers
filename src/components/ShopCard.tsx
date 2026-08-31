import { MessageCircle } from "lucide-react";
import type { Shop } from "../types";
import { formatPrice } from "../lib/utils";
import { generateShopWhatsAppLink, isWhatsAppConfigured } from "../lib/whatsapp";
import { Button } from "./ui/Button";
import { PlaceholderImage } from "./ui/PlaceholderImage";

export function ShopCard({ shop }: { shop: Shop }) {
  const whatsappLink = generateShopWhatsAppLink(shop.name);
  const image = shop.images[0];

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-charcoal/10">
      <div className="aspect-[4/3] overflow-hidden">
        {image ? (
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <PlaceholderImage label={shop.name} />
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg">{shop.name}</h3>
          <span
            className={
              shop.available
                ? "shrink-0 rounded-full bg-accent-light px-3 py-1 text-xs font-semibold text-accent"
                : "shrink-0 rounded-full bg-charcoal/5 px-3 py-1 text-xs font-semibold text-muted"
            }
          >
            {shop.available ? "Available" : "Currently unavailable"}
          </span>
        </div>

        {shop.description && <p className="mt-2 text-sm text-muted">{shop.description}</p>}

        <div className="mt-4 space-y-1.5 border-t border-border pt-4 text-sm">
          {shop.size && (
            <div className="flex justify-between">
              <span className="text-muted">Size</span>
              <span className="font-medium text-charcoal-soft">{shop.size}</span>
            </div>
          )}
          {shop.floor && (
            <div className="flex justify-between">
              <span className="text-muted">Floor</span>
              <span className="font-medium text-charcoal-soft">{shop.floor}</span>
            </div>
          )}
          <div className="flex justify-between">
            <span className="text-muted">Monthly Rent</span>
            <span className="font-bold text-charcoal">{formatPrice(shop.monthlyRent)}</span>
          </div>
        </div>

        <div className="mt-6">
          {isWhatsAppConfigured ? (
            <Button href={whatsappLink} target="_blank" rel="noopener noreferrer" size="md" className="w-full">
              <MessageCircle className="h-4 w-4" />
              Enquire on WhatsApp
            </Button>
          ) : (
            <Button href="/contact" size="md" className="w-full">
              Enquire Now
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
