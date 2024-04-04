"use client"

// ProductContext.js
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductsContext = createContext();
const baseUrl = "https://pizza-ordering-anno.onrender.com/api/products";
const ordersUrl = "https://pizza-ordering-anno.onrender.com/api/orders";

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
   const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetch products
        const productsResponse = await axios.get(baseUrl);
        setProducts(productsResponse.data);

        // Fetch orders
        const ordersResponse = await axios.get(ordersUrl);
        setOrders(ordersResponse.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const postOrder = async (orderDetails) => {
    try {
      const response = await axios.post(ordersUrl, orderDetails);
      console.log("Order placed successfully:", response.data);
      // Assuming response.data contains the newly created order
      setOrders([...orders, response.data]); // Update orders state with the new order
      return response.data;
    } catch (error) {
      console.error("Error placing order:", error.message);
      throw error;
    }
  };

  return (
    <ProductsContext.Provider value={{ products, orders ,loading , setProducts, postOrder}}>
      {children}
    </ProductsContext.Provider>
  );
};
