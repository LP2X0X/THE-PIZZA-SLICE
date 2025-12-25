# The Pizza Slice Co.

**The Pizza Slice Co.** is an interactive pizza ordering web application built using modern React tools and practices. It delivers a clean, responsive, and user-friendly interface for browsing a pizza menu, managing a cart, and placing an order—all without authentication.


## 🧠 Overview

This project simulates an **online pizza ordering experience** with real-world features such as:

* Dynamic pizza menu fetched from an API simulated using json-server package
* Cart functionality with add/remove behaviors
* Order creation with user delivery details
* Ability to mark an order as **priority**
* Order confirmation with a unique ID
* Fully responsive, visually appealing UI

Users do **not need to log in or create an account**; it’s designed to be simple and accessible.


## 📦 Features

### 🍕 Menu Browsing

* View available pizzas with details like size, price, and toppings
* Select multiple items with quantity adjustments

### 🛒 Shopping Cart

* Add and remove pizzas
* Update quantities
* Display subtotal and total pricing

### 📝 Ordering

* Enter name, phone number, and delivery address
* Optionally use geolocation for address detection
* Submit orders using a REST API
* Get an order ID for tracking

### ⚡ Priority Orders

* Users can mark an order as **priority** for faster service
* Priority updates can be applied even after placing the order

### 📱 Responsive Design

* Works on both desktop and mobile screens
* Clean layout powered by utility styles


## 🛠 Technology Stack

| Layer            | Technology                      |
| ---------------- | ------------------------------- |
| UI               | React                           |
| Routing          | React Router                    |
| State Management | Redux Toolkit                   |
| Styling          | Vanilla CSS                     |
| Build Tool       | Vite                            |
| API Integration  | json-server                     |


## 🧩 Key Concepts Used

* **React Components** – Reusable UI building blocks
* **Redux Toolkit** – Centralized state for cart & user info
* **React Router** – Page navigation with routes & loaders
* **Tailwind CSS** – Utility-first styling
* **API Interaction** – Fetching menu items and submitting orders
* **Geolocation Integration** – Optional address auto-fill
* **Responsive Web Design** – Works across devices smoothly


## 📁 Typical Project Structure

````
src/
├── features/
│   ├── cart/            # Cart logic & components
│   ├── menu/            # Display and fetch pizzas
│   ├── order/           # Order submission & status
│   └── user/            # User details handling
├── ui/                  # Reusable UI components
├── services/            # API service functions
├── utils/               # Utility functions
└── App.jsx              # Main entry component
``` :contentReference[oaicite:4]{index=4}


## 🚀 Getting Started (Development)

To run this project locally:

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
````

3. Start the development server:

   ```bash
   npm run dev
   ```
4. Open in browser at `http://localhost:5173` (or shown port) ([GitHub][1])


## 📡 API Integration

The app communicates with a backend API for menu and orders:

* **Base URL:** `https://react-fast-pizza-api.jonas.io/api`
* Endpoints:

  * `/menu` – Fetch pizza menu
  * `/order` – Create a new order
  * `/order/:id` – Fetch or update a specific order ([Awesome Ecosystem][3])


## 🎯 Purpose & Learning Value

This project is built as a **practical React learning exercise**, showcasing how to:

* Manage global state using Redux Toolkit
* Build connected UI with router & API
* Handle asynchronous actions
* Build responsive layouts with Tailwind CSS
