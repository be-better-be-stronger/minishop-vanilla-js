import { getState, setCart } from "./state.js";
import { byId } from "./products.js";

export function addToCart(id, qty) {
  const p = byId(id);
  if (!p) return { ok: false, message: "Product not found." };

  const q = Number(qty);
  if (!Number.isFinite(q) || q < 1) return { ok: false, message: "Quantity must be >= 1." };

  const { cart } = getState();
  const next = [...cart];
  const item = next.find(x => x.id === id);
  if (item) item.qty += q;
  else next.push({ id, qty: q });

  setCart(next);
  return { ok: true, message: `Added: ${p.name}` };
}

export function updateQty(id, qty) {
  const q = Number(qty);
  if (!Number.isFinite(q) || q < 1) return { ok: false, message: "Quantity must be >= 1." };

  const { cart } = getState();
  const next = cart.map(it => it.id === id ? ({ ...it, qty: q }) : it);
  setCart(next);
  return { ok: true, message: "Quantity updated." };
}

export function removeFromCart(id) {
  const { cart } = getState();
  const next = cart.filter(x => x.id !== id);
  setCart(next);
  return { ok: true, message: "Removed item." };
}

export function cartSummary() {
  const { cart } = getState();
  let count = 0;
  let total = 0;

  for (const it of cart) {
    const p = byId(it.id);
    if (!p) continue;
    count += it.qty;
    total += p.price * it.qty;
  }
  return { count, total };
}


