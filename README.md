# Proyecto-final-modulo-4-React
# Smart Home Store - Final Project

## Table of Contents
- [Introduction](#introduction)
- [Objectives](#objectives)
- [Project Structure](#project-structure)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
- [Evaluation Criteria](#evaluation-criteria)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

## Introduction
This project is a responsive front-end web application built with React. It simulates an online smart home store where users can browse a list of smart home products, view product details, and manage a shopping cart. The project integrates local storage and a fake API call using mock data.

---

## Objectives
- **React Fundamentals:** Implement functional components, hooks (`useState`, `useEffect`, `useParams`), and routing with React Router.
- **Global State Management:** Use Context API with `useReducer` for managing the shopping cart state.
- **Fake API Integration:** Simulate API calls by fetching product data from local storage, with fallback to a fake API call.
- **Responsive Design:** Create a user-friendly interface with separate CSS files for modular styling.

---

## Project Structure

The project is structured as follows:

smart-home-store/
├── public/
│   └── index.html                  # HTML template for the React app
├── src/
│   ├── assets/                     # Static assets (images, etc.)
│   ├── components/                 # React components for the application
│   │   ├── Cart.jsx                # Shopping cart component
│   │   ├── Footer.jsx              # Footer component
│   │   ├── Header.jsx              # Header component
│   │   ├── ProductDetails.jsx      # Product details view
│   │   └── ProductList.jsx         # Product listing component
│   ├── contexts/                   # Context providers for global state
│   ├── hooks/                      # Custom hooks (e.g., useProducts.js)
│   ├── services/                   # Fake API data and services
│   │   └── Products.jsx            # Array of smart home products
│   ├── styles/                     # CSS files for modular styling
│   │   ├── App.css                 # Global application styles (imported in App.jsx)
│   │   ├── HeaderComponent.css     # Styles for the Header component
│   │   └── ProductListComponent.css# Styles for the ProductList component
│   ├── App.jsx                     # Main application component with routing
│   └── main.jsx                    # Entry point of the application
├── package.json                    # Project dependencies and scripts
└── README.md                       # Documentation file



---

## Features
- **Home Page (`/`):**  
  Displays a grid of smart home products with images, names, and prices.
- **Product Details (`/product/:id`):**  
  Shows detailed information of the selected product retrieved via URL parameters.
- **Shopping Cart (`/cart`):**  
  Allows adding and removing products, with global state management via Context API.
- **Fake API Call & Local Storage:**  
  The `useProducts` hook fakes an API call with a delay using `setTimeout`. It checks local storage for data and, if absent, stores the mock product data.
- **Modular CSS:**  
  Each component has its own CSS file under the `styles/` directory for better maintainability.

---

## Technologies Used
- **React & React Router:** For building the UI and managing navigation.
- **Hooks & Context API:** For local and global state management.
- **Local Storage:** To simulate API data caching.
- **CSS:** Modular styling with separate CSS files for each component.
- **Vite (optional):** For a fast development server and build tool.

---

## Getting Started

### Prerequisites
- **Node.js** (v14 or newer)
- **npm** or **yarn**
- **Git** for version control
- A code editor (e.g., Visual Studio Code)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/smart-home-store.git
Navigate to the project directory:

bash
cd smart-home-store
Install the dependencies:

bash
npm install
or

bash
yarn install
Usage
Start the development server:

bash
npm run dev
or

bash
yarn dev
Open your browser and navigate to http://localhost:3000 (or the port provided by your environment).

Evaluation Criteria
Criterion	Weight
Componentization & Code Structure	20%
Use of Hooks & Custom Hook	25%
Global State Management (Context)	20%
Routing & Navigation	15%
Fake API Integration & Local Storage	10%
Documentation (README & Comments)	10%
Contributing
Contributions are welcome! Follow these steps:

Fork the repository.

Create a new branch for your feature:

bash
git checkout -b feature/your-feature-name
Commit your changes with a descriptive message:

bash
git commit -m "Add feature: description"
Push to your branch:

bash
git push origin feature/your-feature-name
Open a pull request detailing your changes.

License
This project is licensed under the MIT License.

Acknowledgments
Codespace Academy: For the curriculum that inspired this project.

React & Community: For the tools and documentation that make development accessible.

Unsplash: For the dynamic product images.

Happy coding! 🚀
