"use client"
import React, { useState, useEffect } from "react";

const Cart = () => {
  // State for the cart
  const [cart, setCart] = useState({
    products: [],
    quantity: 0,
    total: 0,
  });

  // Function to add a product to the cart
  const addProduct = (product) => {
    const { extras, ...productData } = product;

    // If extras is an array, add it to the productData
    if (extras) {
      productData.extras = extras;
    }

    setCart((prevCart) => ({
      ...prevCart,
      products: [...prevCart.products, productData],
      quantity: prevCart.quantity + 1,
      total: prevCart.total + productData.price * productData.quantity,
    }));
  };

  // Function to reset the cart
  const resetCart = () => {
    setCart({
      products: [],
      quantity: 0,
      total: 0,
    });
  };

  // Log the cart whenever it changes for demonstration purposes
  useEffect(() => {
    console.log("Cart Updated:", cart);
  }, [cart]);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <button
        onClick={() =>
          addProduct({ name: "Example Product", price: 10, quantity: 1 })
        }
      >
        Add Product
      </button>
      <button onClick={resetCart}>Reset Cart</button>

      <div>
        <h2>Cart Summary</h2>
        <p>Quantity: {cart.quantity}</p>
        <p>Total: ${cart.total.toFixed(2)}</p>
      </div>

      <div>
        <h2>Cart Items</h2>
        <ul>
          {cart.products.map((product, index) => (
            <li key={index}>
              {product.name} - ${product.price.toFixed(2)} - Quantity:{" "}
              {product.quantity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cart;


// cartSlice.js

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   cartItems: [],
//   quantity: 0,
//   total: 0,
// };

// const calculateSummary = (cartItems) => {
//   const quantity = cartItems.reduce((total, item) => total + item.quantity, 0);
//   const total = cartItems.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );
//   return { quantity, total };
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const { id, title, price, quantity } = action.payload;
//       const existingItem = state.cartItems.find((item) => item.id === id);

//       if (existingItem) {
//         existingItem.quantity += quantity;
//       } else {
//         state.cartItems.push({ id, title, price, quantity });
//       }

//       const { quantity: newQuantity, total: newTotal } = calculateSummary(
//         state.cartItems
//       );
//       state.quantity = newQuantity;
//       state.total = newTotal;
//     },
//     clearCart: (state) => {
//       state.cartItems = [];
//       state.quantity = 0;
//       state.total = 0;
//     },
//   },
// });

// export const { addToCart, clearCart } = cartSlice.actions;

// export default cartSlice.reducer;
