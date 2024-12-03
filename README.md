# 🛍️ E-commerce React Application

Welcome to the **E-commerce React Application**! Built using **React** with **Vite**, this application offers a modern and fast development experience. Explore a fully-featured e-commerce platform with functionalities like product listings, filtering, a cart system, and user authentication.

## ✨ Features

- **Product Listings**: Displays products with details such as name, description, price, and category.

- **Filtering**: Search and filter products by:

  - Name
  - Price range
  - Category

- **Pagination**: Smooth navigation through product pages with pagination controls.

- **User Authentication**: Basic login system with test credentials:

  - Email: `test@gmail.com`
  - Password: `password`

- **Cart System**: Add products to the cart, view cart items, and manage quantities.

- **Responsive Design**: Mobile-friendly and adaptive layout for seamless use across devices.

## 🛠️ Project Setup

### 📋 Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** (>=v14.0.0)
- **npm** (>=v6.0.0) or **yarn** (>=v1.0.0)

---

### 🚀 Getting Started

1.  **Clone the Repository**

    git clone https://github.com/JannaDilshan/E-commerce_react.git

2.  **Install Dependencies**
    Navigate to the project directory and install the required dependencies:

    - cd E-commerce_react
    - npm install

3.  **Run the Development Server**
    Start the development server:

    - npm run dev

By default, the app will be accessible at **http://localhost:5173/**.

4. **Test Login Credentials**
Use the following credentials to test the login functionality:

- Email: test@gamil.com
- Password: password

This simple credential check is implemented in the App.jsx file for testing purposes. Upon successful login, users are redirected to the home page.

### 🧩 Features & Design Decisions

1. Routing with React Router

   - Utilizes react-router-dom for navigation.

   - Public routes (e.g.,/, /login, /register, /products, /cart) are separated from protected routes (e.g., redirecting logged-in users from /login, /register).

2. ProductList Component

   - Dynamically renders products based on filters (search, price range, category).

   - Includes pagination with MDBPagination for a smooth browsing experience.

3. Cart System
   ### Users can:
   - Add items to the cart.
   - View and manage cart items (adjust quantities, remove items).

4. State Management

   - Redux manages global states for user authentication and cart data.
   - Supports persistent login state using localStorage.

5. Responsive Design

   - The application is optimized for both desktop and mobile devices.

6. UI Libraries

   - Styled using MDB React for a modern, clean, and consistent look.

7. Pagination
   - The product list is paginated using MDBPagination from mdb-react-ui-kit.

   📂 Project Structure
   src/
   ├── app/ # Store Redux slices and state management (e.g., authSlice.js,cartSlice.js)
   ├── components/ # Reusable components (e.g.,404page ,  ProductCard, Header, Footer, Cart,HomeProduct)
   ├── features/ # Features components (e.g.,authSlice.js,cartSlice.js)
   ├── pages/ # Page components (e.g., Login, Register, ProductList, Cart, Home)
   ├── App.jsx # Main application file
   🔍 Notes on Special Features

### Custom Product Filtering:

Real-time, case-insensitive filtering by:

- Product name
- Price range
- Category selection

### Login Redirection:
- Logged-in users are redirected from /login or /register to the home page.

### Persistent Login:
- User authentication data is saved in localStorage to maintain the login state across page refreshes.

