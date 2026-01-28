import { els } from "./dom.js";

export function openCartDrawer() {
  els.drawer.classList.remove("hidden");
}

export function closeCartDrawer() {
  els.drawer.classList.add("hidden");
}
