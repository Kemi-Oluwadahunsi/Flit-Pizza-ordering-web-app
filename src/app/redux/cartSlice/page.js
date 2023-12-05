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


// import {createSlice} from "@reduxjs/toolkit"

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     products: [],
//     quantity: 0,
//     total: 0,
//   },
 
//   reducers: {
//     addProduct: (state, action) => {
//       console.log('Add Product Action Payload:', action.payload);

//       const { extras, ...productData } = action.payload;

//       // If extras is an array, add it to the productData
//       if (extras) {
//         productData.extras = extras;
//       }

//       state.products.push(productData);
//       state.quantity += 1;
//       state.total += productData.price * productData.quantity;
//     },

//     reset: (state) => {
//       state.products = [];
//       state.quantity = 0;
//       state.total = 0;
//     },
//   },
// });

// export const {addProduct, reset} = cartSlice.actions;
// export default cartSlice.reducer;