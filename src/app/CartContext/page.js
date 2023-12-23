// // CartContext.js
"use client"
// import React, { createContext, useContext, useReducer } from "react";

// const CartContext = createContext();

// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       return {
//         ...state,
//         cartItems: [...state.cartItems, action.payload],
//       };
//     case "REMOVE_FROM_CART":
//       return {
//         ...state,
//         cartItems: state.cartItems.filter((item) => item.id !== action.payload),
//       };
//     case "CLEAR_CART":
//       return {
//         ...state,
//         cartItems: [],
//       };
//     default:
//       return state;
//   }
// };

// export const CartProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(cartReducer, { cartItems: [] });

//   const addToCart = (item) => {
//     dispatch({ type: "ADD_TO_CART", payload: item });
//   };

//   const removeFromCart = (itemId) => {
//     dispatch({ type: "REMOVE_FROM_CART", payload: itemId });
//   };

//   const clearCart = () => {
//     dispatch({ type: "CLEAR_CART" });
//   };

//   return (
//     <CartContext.Provider
//       value={{ ...state, addToCart, removeFromCart, clearCart }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

//  export const UsingCart = () => {
//   return useContext(CartContext);
// };

// CartContext.js
import React, { createContext, useContext, useReducer } from "react";

// Creating a context
const CartContext = createContext();

// Defining the cart reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    case "CLEAR_CART":
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

// Creating a CartProvider component
export const CartProvider = ({ children }) => {
  // Using useReducer to manage state with the cartReducer
  const [state, dispatch] = useReducer(cartReducer, { cartItems: [] });

  // Functions to interact with the cart state
  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const removeFromCart = (itemId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: itemId });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  // Providing the state and functions through the context
  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Creating a custom hook to use the cart context
export const UsingCart = () => {
  return useContext(CartContext);
};


