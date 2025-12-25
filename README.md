# The Pizza Slice Co.

**The Pizza Slice Co.** is an interactive pizza ordering web application built using modern React tools and practices. It delivers a clean, responsive, and user-friendly interface for browsing a pizza menu, managing a cart, and placing an order—all without authentication.

## 📸 Screenshots

<img width="2288" height="1375" alt="image" src="https://github.com/user-attachments/assets/e3b81767-292b-4a9a-9f5e-0714eb74487f" />

## 🧠 Overview

This project simulates an **online pizza ordering experience** with real-world features such as:

* Dynamic pizza menu fetched from a simulated API
* Cart functionality with add/remove behaviors
* Order creation with user delivery details
* Ability to mark an order as **priority**
* Order confirmation with a unique ID
* Order fetched from a REST API
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

* Works on variety of screen size
* Design with accessibility and responsiveness in mind


## 🛠 Technology Stack

| Layer            | Technology                      |
| ---------------- | ------------------------------- |
| UI               | React                           |
| Routing          | React Router                    |
| State Management | Redux Toolkit                   |
| Styling          | Vanilla CSS with CSS Modules    |
| Build Tool       | Vite                            |
| API Integration  | JSON server                     |


## 🧩 Key Concepts Used

* **React Components** – Reusable UI building blocks
* **Redux Toolkit** – Centralized state for cart & user info
* **React Router** – Page navigation with routes & loaders
* **CSS Module** – Local scoping
* **API Interaction** – Fetching menu items and submitting orders
* **Geolocation Integration** – Optional address auto-fill
* **Accessibility Web Design** – Website should be usable by everyone


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
````

## 🚀 Getting Started (Development)

To run this project locally:

1. Clone the repository

2. Install dependencies:
```bash
   npm install
```

3. Start the development server:
```bash
   npm run dev
```

4. Start the simulated API using JSON Server
```bash
   npm run server
```

5. Open in browser at `http://localhost:5173` (or shown port)

## 📡 API Integration

The app communicates with a backend API for menu and orders:

* **Base URL:** `https://react-fast-pizza-api.jonas.io/api`
* Endpoints:

  * `/menu` – Fetch pizza menu
  * `/order` – Create a new order
  * `/order/:id` – Fetch or update a specific order ([Awesome Ecosystem][3])

## 🎯 Purpose & Learning Value

This project is built as a **practical React learning exercise**, showcasing how to:
* Manage global application state using Redux Toolkit
* Build a connected UI with React Router and external APIs
* Handle asynchronous workflows using React Router actions and Redux Toolkit createAsyncThunk
* Apply strong frontend fundamentals, including:
   * Semantic HTML
   * Accessible and responsive CSS layouts
 
## 🙋‍♂️ Author

Long Pham

Feel free to reach out or fork the project for your own practice.

## 📜 License

This project is open source and available under the MIT License.
