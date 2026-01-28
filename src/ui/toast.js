import { els } from "./dom.js";

export function showToast(msg) {
  els.toast.textContent = msg;
  els.toast.className = "toast show";
  setTimeout(() => (els.toast.className = "toast"), 1800);
}
