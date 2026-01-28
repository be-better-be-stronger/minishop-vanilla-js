import { removeKey } from "./storage.js";
import { LS_PRODUCTS, LS_CART } from "./config.js";
import { getState } from "./state.js";
import { seedProducts } from "./products.js";

import { els } from "./ui/dom.js";
import { showToast } from "./ui/toast.js";
import { openModal, closeModal, getModalQty, getSelectedProductId } from "./ui/modal.js";
import { openCartDrawer, closeCartDrawer } from "./ui/drawer.js";
import { initCategoryOptions, renderCatalog } from "./ui/renderCatalog.js";
import { renderCart, renderCartBadge } from "./ui/renderCart.js";
import { addToCart, cartSummary } from "./cart.js";

// --- render all ---
function renderAll() {
  initCategoryOptions();
  renderCatalog();
  renderCartBadge();
  renderCart();
}

// --- events ---
function bindEvents() {
  // catalog controls
  els.q.addEventListener("input", renderCatalog);
  els.category.addEventListener("change", renderCatalog);
  els.sort.addEventListener("change", renderCatalog);

  els.btnSeed.addEventListener("click", () => {
    seedProducts();
    showToast("Seeded demo products.");
    renderAll();
  });

  els.btnClear.addEventListener("click", () => {
    removeKey(LS_PRODUCTS);
    removeKey(LS_CART);
    // reload state by refreshing page (simple)
    location.reload();
  });

  // cart drawer
  els.btnOpenCart.addEventListener("click", () => {
    openCartDrawer();
    renderCart();
  });
  els.btnCloseCart.addEventListener("click", closeCartDrawer);

  // modal
  els.btnCloseModal.addEventListener("click", closeModal);
  els.modal.addEventListener("click", (e) => { if (e.target === els.modal) closeModal(); });

  els.btnAddToCart.addEventListener("click", () => {
    const id = getSelectedProductId();
    if (!id) return;

    const res = addToCart(id, getModalQty());
    showToast(res.message);
    closeModal();
    renderCartBadge();
    renderCart();
  });

  // checkout demo
  els.btnCheckout.addEventListener("click", () => {
    const { total } = cartSummary();
    showToast(`Checkout demo: ${total.toLocaleString("vi-VN")} VND`);
  });
}

// --- init ---
(function init() {
  bindEvents();
  renderAll();
})();


