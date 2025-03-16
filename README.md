# Smart Home Store

Smart Home Store is a modern React-based e-commerce platform for smart home products. This application allows users to browse a catalog of smart home devices, view detailed product information, manage a shopping cart, and perform authentication (login/logout) with session persistence using local storage.

---

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
- [Authentication Workflow](#authentication-workflow)
- [Contribution Guidelines](#contribution-guidelines)
- [License](#license)

---

## Introduction

Smart Home Store demonstrates best practices in React development through:
- A dynamic product catalog for smart home devices.
- A shopping cart with functionality to add, remove, and update product quantities.
- Protected routes accessible only after login.
- Persistent authentication using local storage.

---

## Features

- **Product Catalog:** Browse a selection of smart home products with detailed descriptions.
- **Shopping Cart:** Add products to the cart, increase/decrease quantities, remove items, and see the total amount.
- **User Authentication:** Secure login (demo credentials: username `admin`, password `admin`), with a logout button.
- **Protected Routes:** Only logged-in users can access main pages (Home, Product Details, Cart).
- **Responsive Design:** Modular CSS applied at the component level.

---

## Technologies Used

- **React** for building a component-based UI.
- **React Router** for client-side routing.
- **Context API & Hooks** for state management (authentication & shopping cart).
- **Local Storage** for persisting login sessions.
- **CSS** for modular, component-specific styling.
- **Vite** for fast development and efficient builds.
- **React Icons** for attractive UI icons (e.g., shopping cart icon).

---

## Project Structure

```
smart-home-store/
├── public/
│   └── index.html                  # Base HTML template
├── src/
│   ├── assets/                     # (Optional) Static assets (images, etc.)
│   ├── components/                 # Reusable components
│   │   ├── Header.jsx              # Header with navigation and logout button
│   │   ├── Footer.jsx              # Footer component
│   │   ├── RequireAuth.jsx         # Component to protect routes
│   │   ├── ProductList.jsx         # Displays a grid of products
│   │   ├── ProductDetails.jsx      # Shows product details
│   │   └── Cart.jsx                # Shopping cart functionality
│   ├── contexts/                   # Contexts for managing state
│   │   ├── AuthContext.js          # Authentication logic (login/logout)
│   │   └── CartContext.js          # Shopping cart state management
│   ├── hooks/                      # Custom hooks
│   │   └── useProducts.js          # Fetches and manages product data
│   ├── pages/                      # Pages (views) of the application
│   │   ├── HomePage.jsx            # Home page featuring the product catalog
│   │   ├── ProductDetailsPage.jsx  # Page to view product details
│   │   ├── CartPage.jsx            # Page for the shopping cart
│   │   └── LoginPage.jsx           # Login page
│   ├── services/                   # Data and service files
│   │   └── products.js             # Mock product data
│   ├── styles/                     # CSS styles for components and pages
│   │   ├── App.css                 # Global styles
│   │   ├── HeaderComponent.css     # Styles for Header.jsx
│   │   ├── ProductListComponent.css# Styles for ProductList.jsx
│   │   ├── ProductDetailsComponent.css  # Styles for ProductDetails.jsx
│   │   ├── CartComponent.css       # Styles for Cart.jsx
│   │   ├── FooterComponent.css     # Styles for Footer.jsx
│   │   └── LoginPage.css           # Styles for LoginPage.jsx
│   ├── App.jsx                     # Main app with routing
│   └── main.jsx                    # React entry point file
├── package.json                    # Project metadata and dependencies
└── README.md                       # This file
```

---

## Getting Started

### Prerequisites

- Node.js (v14 or higher) and npm
- Git
- A modern web browser (Chrome, Firefox, etc.)
- A code editor (e.g., Visual Studio Code)

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Sppgg/Proyecto-final-modulo-4-React.git]
   ```

2. **Navigate to the project directory:**
   ```bash
   cd smart-home-store
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

### Usage

1. **Start the development server:**
   ```bash
   npm run dev
   ```
2. **Open your browser** and navigate to `http://localhost:3000`.

---

## Authentication Workflow

- **Login:**  
  Visit the `/login` page. For demo purposes, use these credentials:
  - Username: **admin**
  - Password: **admin**

- **Session Persistence:**  
  Once logged in, a token is stored in local storage, and all protected routes become accessible.

- **Logout:**  
  A logout button is available in the header. Clicking it will clear the session.

- **Protected Routes:**  
  The home page, product details page, and cart page are protected and require a valid login.

---

## Contribution Guidelines

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Describe your changes"
   ```
4. Push your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request with a description of your changes.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

Happy Coding! 🚀
```
