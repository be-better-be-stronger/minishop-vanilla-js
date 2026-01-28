import { els } from "./dom.js";
import { money } from "../utils.js";
import { byId } from "../products.js";
import { setSelectedProductId, getState } from "../state.js";

export function openModal(id) {
  const p = byId(id);
  if (!p) return;

  setSelectedProductId(id);

  els.mName.textContent = p.name;
  els.mImg.textContent = p.category;
  els.mPrice.textContent = money(p.price);
  els.mCategory.textContent = `Category: ${p.category}`;
  els.mDesc.textContent = p.desc;
  els.mQty.value = 1;

  els.modal.classList.remove("hidden");
}

export function closeModal() {
  els.modal.classList.add("hidden");
  setSelectedProductId(null);
}

export function getModalQty() {
  return els.mQty.value;
}

export function getSelectedProductId() {
  return getState().selectedProductId;
}
