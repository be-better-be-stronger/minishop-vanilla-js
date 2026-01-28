import { els } from "./dom.js";
import { getState } from "../state.js";
import { byId } from "../products.js";
import { escapeHtml, money } from "../utils.js";
import { cartSummary, updateQty, removeFromCart } from "../cart.js";
import { showToast } from "./toast.js";

export function renderCartBadge() {
  const { count } = cartSummary();
  els.cartCount.textContent = String(count);
}

export function renderCart() {
  const { cart } = getState();
  els.cartList.innerHTML = "";

  if (cart.length === 0) {
    els.cartList.innerHTML = `<div class="muted">Cart is empty.</div>`;
    els.cartTotal.textContent = money(0);
    return;
  }

  for (const it of cart) {
    const p = byId(it.id);
    if (!p) continue;

    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <div class="c-top">
        <div>
          <div class="c-name">${escapeHtml(p.name)}</div>
          <div class="c-sub">${escapeHtml(p.category)} • ${money(p.price)}</div>
        </div>
        <button class="btn danger" data-act="rm">Remove</button>
      </div>
      <div class="c-actions">
        <label class="muted">Qty</label>
        <input type="number" min="1" value="${it.qty}" />
        <span class="muted">=</span>
        <strong>${money(p.price * it.qty)}</strong>
      </div>
    `;

    div.querySelector('[data-act="rm"]').addEventListener("click", () => {
      const res = removeFromCart(it.id);
      showToast(res.message);
      renderCartBadge();
      renderCart();
    });

    div.querySelector("input").addEventListener("change", (e) => {
      const res = updateQty(it.id, e.target.value);
      if (!res.ok) showToast(res.message);
      renderCartBadge();
      renderCart();
    });

    els.cartList.appendChild(div);
  }

  const { total } = cartSummary();
  els.cartTotal.textContent = money(total);
}
