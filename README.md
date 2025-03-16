
---

```markdown
# Smart Home Store

Smart Home Store is a modern React-based e-commerce platform for smart home products. This application allows users to explore a catalog of products, view detailed descriptions, and manage their shopping cart. Additionally, it features a user authentication system with protected routes and local storage for session management.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Project Structure](#project-structure)
5. [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Usage](#usage)
6. [Authentication Workflow](#authentication-workflow)
7. [Contribution Guidelines](#contribution-guidelines)
8. [License](#license)

---

## Introduction

Smart Home Store is a project designed to showcase the following:

- **React fundamentals**: Functional components, hooks (`useState`, `useEffect`, and `useContext`), and Context API.
- **Global state management**: Managing a shopping cart and user authentication with local storage.
- **UI/UX principles**: Modularized components with individual styling for maintainability and scalability.
- **Protected routing**: Restricting access to certain pages based on user authentication status.

---

## Features

### General Features

- **Product Catalog**: Browse a diverse selection of smart home devices, with detailed descriptions and responsive layouts.
- **Shopping Cart**: Add, remove, increment, or decrement product quantities. Cart total is dynamically updated.
- **User Authentication**: Users must log in to access the app’s features. A dummy account (`username: admin`, `password: admin`) is pre-configured for demo purposes.
- **Protected Routes**: Certain pages are accessible only when logged in.
- **Local Storage Integration**: Login session is persisted even after refreshing the browser.
- **Responsive Design**: Ensures a seamless experience on desktop and mobile devices.

---

## Technologies Used

- **React**: Component-based UI development.
- **React Router**: Client-side routing.
- **Context API**: State management for shopping cart and authentication.
- **CSS**: Component-level styles for modularity and scalability.
- **Local Storage**: For persisting login state across sessions.
- **React Icons**: For visually appealing and intuitive UI elements.

---

## Project Structure

```
smart-home-store/
├── public/
│   └── index.html                  # Base HTML template
├── src/
│   ├── assets/                     # Static assets like images
│   ├── components/                 # Reusable components
│   │   ├── Header.jsx              # Header with navigation
│   │   ├── Footer.jsx              # Footer section
│   │   ├── ProductList.jsx         # Product listing grid
│   │   ├── ProductDetails.jsx      # Detailed view for a single product
│   │   ├── Cart.jsx                # Shopping cart functionality
│   │   └── RequireAuth.jsx         # Protects routes requiring login
│   ├── contexts/                   # React Contexts for state management
│   │   ├── CartContext.js          # State and actions for the shopping cart
│   │   └── AuthContext.js          # State and actions for user authentication
│   ├── hooks/                      # Custom hooks
│   │   └── useProducts.js          # Fetches and manages product data
│   ├── pages/                      # Application pages (views)
│   │   ├── HomePage.jsx            # Home page with product list
│   │   ├── ProductDetailsPage.jsx  # Product detail page
│   │   ├── CartPage.jsx            # Shopping cart page
│   │   └── LoginPage.jsx           # Login functionality
│   ├── services/                   # Static data and service files
│   │   └── products.js             # Mock product data
│   ├── styles/                     # CSS for components and pages
│   │   ├── App.css                 # Global styles
│   │   ├── HeaderComponent.css     # Styles for Header.jsx
│   │   ├── ProductListComponent.css# Styles for ProductList.jsx
│   │   ├── ProductDetailsComponent.css # Styles for ProductDetails.jsx
│   │   ├── CartComponent.css       # Styles for Cart.jsx
│   │   └── FooterComponent.css     # Styles for Footer.jsx
│   ├── App.jsx                     # Main application entry point
│   └── main.jsx                    # React rendering and app initialization
├── package.json                    # Dependencies and scripts
└── README.md                       # Project documentation
```

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v14 or higher) and npm
- **Git**
- A modern web browser
- Code editor (e.g., VS Code)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Sppgg/Proyecto-final-modulo-4-React
   ```
2. Navigate to the project directory:
   ```bash
   cd smart-home-store
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Usage

1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open the application in your browser at `http://localhost:3000`.

---

## Authentication Workflow

- Users must log in to access the app’s features. Use the following credentials to log in:
  ```
  Username: admin
  Password: admin
  ```
- Once logged in:
  - The session token is stored in **local storage**.
  - Protected routes (e.g., the cart or product details pages) become accessible.
  - You can log out at any time, clearing the session.

---

## Contribution Guidelines

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature: description"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

With the Smart Home Store project, you'll discover how to build modern React applications that are modular, maintainable, and scalable. Happy coding! 🚀
```

---

