import { getState, setProducts } from "./state.js";

export function byId(id) {
    const { products } = getState();
    return products.find(p => p.id === id);
}

export function seedProducts() {
    const demo = [
        { id: 1, name: "Wireless Mouse", category: "Electronics", price: 189000, desc: "Silent click, ergonomic design, 2.4GHz." },
        { id: 2, name: "Mechanical Keyboard", category: "Electronics", price: 699000, desc: "Blue switch, durable keycaps." },
        { id: 3, name: "Water Bottle 1L", category: "Accessories", price: 99000, desc: "BPA-free, leak-proof." },
        { id: 4, name: "Basic T-Shirt", category: "Clothing", price: 149000, desc: "Cotton, breathable, daily wear." },
        { id: 5, name: "Notebook A5", category: "Books", price: 49000, desc: "100 pages, thick paper." },
        { id: 6, name: "USB-C Cable", category: "Electronics", price: 59000, desc: "Fast charging, durable braid." },
        { id: 7, name: "Backpack", category: "Accessories", price: 399000, desc: "Laptop compartment, light weight." },
        { id: 8, name: "Coffee Beans 500g", category: "Food", price: 215000, desc: "Medium roast, aromatic." },
    ];
    setProducts(demo);
}
