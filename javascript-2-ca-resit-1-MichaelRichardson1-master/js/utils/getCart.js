import { cartKey } from "../data/cartKey.js";

// pulls data from localStorage. Creates empty array if there
// are no items and parses the values if not
export function getCart() {
    const cart = localStorage.getItem(cartKey);

    if (cart === null) {
        return [];
    } else {
        return JSON.parse(cart);
    }
}
