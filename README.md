# MiniShop – Product Catalog & Cart (Vanilla JavaScript)

A small front-end project built with **pure JavaScript** to practice core web fundamentals such as
DOM manipulation, event handling, and client-side data persistence.

This project focuses on **understanding application flow and user interactions** without using any frameworks.

---

## 🔹 Features
- Product listing with search, category filter, and sorting
- Product detail modal
- Shopping cart:
  - Add items
  - Update quantity
  - Remove items
- Cart persistence using **LocalStorage**
- Simple and clean UI for learning purposes

---

## 🔹 Tech Stack
- HTML
- CSS
- JavaScript (ES6)
- LocalStorage

---

## 🔹 Application Flow (High-level)

User Interaction  
↓  
JavaScript Event Handling  
↓  
Update Application State (products / cart)  
↓  
Persist Data to LocalStorage  
↓  
Re-render UI  

---

## 🔹 Project Structure
```
minishop-vanilla-js/
│
├── index.html
├── styles.css
├── README.md
└── src/
    ├── main.js          # App entry point & event binding
    ├── state.js         # Application state
    ├── products.js      # Product data & helpers
    ├── cart.js          # Cart business logic
    ├── storage.js       # LocalStorage handling
    └── ui/              # UI rendering & interactions
```

---

## 🔹 Learning Objectives
- Practice JavaScript fundamentals (ES6)
- Understand how state flows in a front-end application
- Separate business logic from UI rendering
- Work with browser LocalStorage for data persistence

---

## 🔹 Live Demo
https://YOUR_USERNAME.github.io/minishop-vanilla-js/

---

## 🔹 Notes
This is a **learning-focused personal project** created to strengthen JavaScript basics and prepare for
entry-level or early career opportunities in IT and software development.

No frameworks or backend services are used.
