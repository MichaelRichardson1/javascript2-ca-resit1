import { cartKey } from "../data/cartKey.js";


// saveCart function adds items to localStorage and
// stringifies the entries
export function saveCart(cart) {
    localStorage.setItem(cartKey, JSON.stringify(cart));
}
