import { LS_PRODUCTS, LS_CART } from "./config.js";
import { loadJSON, saveJSON } from "./storage.js";

const state = {
  products: loadJSON(LS_PRODUCTS, []),
  cart: loadJSON(LS_CART, []), // [{id, qty}]
  selectedProductId: null
};

export function getState() {
  return state;
}

export function setProducts(products) {
  state.products = products;
  saveJSON(LS_PRODUCTS, state.products);
}

export function setCart(cart) {
  state.cart = cart;
  saveJSON(LS_CART, state.cart);
}

export function setSelectedProductId(id) {
  state.selectedProductId = id;
}
