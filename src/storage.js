export function loadJSON(key, fallback) {
  const raw = localStorage.getItem(key);
  if (!raw) return fallback;
  try { return JSON.parse(raw); } catch { return fallback; }
}

export function saveJSON(key, val) {
  localStorage.setItem(key, JSON.stringify(val));
}

export function removeKey(key) {
  localStorage.removeItem(key);
}
