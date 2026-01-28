import { els } from "./dom.js";
import { getState } from "../state.js";
import { escapeHtml, money } from "../utils.js";
import { openModal } from "./modal.js";
import { addToCart } from "../cart.js";
import { showToast } from "./toast.js";
import { renderCartBadge, renderCart } from "./renderCart.js";

export function initCategoryOptions() {
  const { products } = getState();
  const current = els.category.value || "ALL";
  const cats = ["ALL", ...new Set(products.map(p => p.category))];

  els.category.innerHTML = cats.map(c => `<option value="${c}">${c}</option>`).join("");
  els.category.value = cats.includes(current) ? current : "ALL";
}

function selectProducts() {
  const { products } = getState();
  let list = [...products];

  const q = els.q.value.trim().toLowerCase();
  if (q) list = list.filter(p => p.name.toLowerCase().includes(q));

  const cat = els.category.value;
  if (cat !== "ALL") list = list.filter(p => p.category === cat);

  const sort = els.sort.value;
  if (sort === "price_asc") list.sort((a,b)=>a.price-b.price);
  if (sort === "price_desc") list.sort((a,b)=>b.price-a.price);
  if (sort === "name_asc") list.sort((a,b)=>a.name.localeCompare(b.name));

  return list;
}

export function renderCatalog() {
  const list = selectProducts();
  els.grid.innerHTML = "";
  els.empty.style.display = list.length ? "none" : "block";

  for (const p of list) {
    const card = document.createElement("div");
    card.className = "pcard";
    card.innerHTML = `
      <div class="pimg">${escapeHtml(p.category)}</div>
      <div class="pbody">
        <div class="pname">${escapeHtml(p.name)}</div>
        <div class="pmeta">${escapeHtml(p.category)}</div>
        <div class="pprice">${money(p.price)}</div>
        <div class="pactions">
          <button class="btn" data-act="view">View</button>
          <button class="btn primary" data-act="add">Add</button>
        </div>
      </div>
    `;

    card.querySelector('[data-act="view"]').addEventListener("click", (e) => {
      e.stopPropagation();
      openModal(p.id);
    });

    card.querySelector('[data-act="add"]').addEventListener("click", (e) => {
      e.stopPropagation();
      const res = addToCart(p.id, 1);
      showToast(res.message);
      renderCartBadge();
      renderCart();
    });

    card.addEventListener("click", () => openModal(p.id));
    els.grid.appendChild(card);
  }
}
