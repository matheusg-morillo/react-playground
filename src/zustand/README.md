# E-commerce POC with Zustand

This project is a Proof of Concept (POC) for a small e-commerce application, developed to study and apply the concepts of the **Zustand** state management library. The application allows users to interact with a shopping cart by adding and removing products, featuring real-time stock validation.

## ✨ Key Features

-   **Product Listing**: Displays a list of available products for purchase.
-   **Interactive Shopping Cart**: Easily add or remove products from the cart with an intuitive interface.
-   **State Management with Zustand**: The cart's state (items, quantity, open/closed status) is fully managed by a Zustand store.
-   **Stock Validation**: The system checks in real-time if the quantity of a product (selected amount + items already in the cart) exceeds the available stock, disabling the "add" button when necessary.
-   **Responsive UI**: A modern and adaptive design built with Tailwind CSS.

## 🚀 Technologies Used

This project was built using the following technologies:

-   [**React**](https://reactjs.org/) - A JavaScript library for building user interfaces.
-   [**Zustand**](https://github.com/pmndrs/zustand) - For simple, powerful, and scalable global state management.
-   [**React Context API**](https://reactjs.org/docs/context.html) - Used strategically to provide specific actions and data from the Zustand store to the components that need them, avoiding prop drilling.
-   [**Tailwind CSS**](https://tailwindcss.com/) - For rapid and efficient styling based on utility-first classes.

## 🎯 Learning Goals

The main objective of this POC was to explore how Zustand can be a lightweight and effective alternative to Redux or the Context API for managing complex global states in a React application.

The key concepts studied were:
-   Creating a centralized store for the shopping cart.
-   Defining and using actions to manipulate the state (add/remove items).
-   Selectively consuming state in different components.
-   Integrating Zustand's state with business logic (stock validation).
-   Using the Context API as a provider to distribute specific parts of the store, optimizing how components access functions and data.

## ⚡ Performance Optimization

To improve performance and prevent unnecessary re-renders, the cart's state was strategically separated.

The context for the cart's content (the items within it) was decoupled from the cart's UI state (whether it is open or closed). By doing this, only the components that need to be aware of the cart's open/closed status are wrapped within that specific context provider.

This architectural choice prevents a change in the UI state (e.g., opening the cart) from causing the entire application or unrelated components (like the product list) to re-render.

## ⚙️ Installation and Setup

To run this project locally, follow the steps below:

1.  **Install the dependencies:**
    ```bash
    npm install
    ```

1.  **Start the application:**
    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:5173` (or another port indicated in your terminal).
