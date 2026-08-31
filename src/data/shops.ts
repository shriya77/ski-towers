import type { Shop } from "../types";

/**
 * No commercial units are confirmed for listing yet. Add entries here as
 * they become available — ShopCard and the Shops page render straight from
 * this array, so the section stays empty (not fake) until then.
 */
export const shops: Shop[] = [];

export function getShopById(id: string): Shop | undefined {
  return shops.find((shop) => shop.id === id);
}
