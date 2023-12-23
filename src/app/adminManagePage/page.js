"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import styles from "./newItem.module.css";
// import { useRouter } from "next/router";
import { createProduct } from "@/app/products/page";
import Link from "next/link";

const OrdersSection = (props) => {
  const { id, customer, address, total, status, method } = props;
  
  return (
    <>
      
      <tbody className="text-sm md:text-base border-t border-b border-gray-300">
        <tr className="border-t border-b border-gray-300 text-xs md:text-base">
          <td className="py-2">{id.slice(0, 6)}...</td>
          <td className="py-2">{customer}</td>
          <td className="py-2">${total}</td>
          <td className="py-2">{method === 0 ? "PayPal" : "cash"} </td>
          <td className="py-2">{status}</td>
          <td className="py-2">
            <button className="bg-green-700 py-1 px-1 lg:px-3 text-white">
              Next stage
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
};

const AdminPage = () => {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  // const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://pizza-ordering-anno.onrender.com/api/orders")
      .then((response) => {
        setLoading(false);
        console.log("promise fulfilled", response.data);
        setOrders(response.data);
      });

    axios
      .get("https://pizza-ordering-anno.onrender.com/api/products")
      .then((response) => {
        setLoading(false);
        console.log("promise fulfilled", response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);
  const [isAddNewPopupVisible, setIsAddNewPopupVisible] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [options, setOptions] = useState([]);
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [prices, setPrices] = useState([0, 0, 0]);
  const [desc, setDescription] = useState("");
  const [extra, setExtra] = useState({ text: "", price: 0 });

  const toggleAddNewPopup = () => {
    setIsAddNewPopupVisible(!isAddNewPopupVisible);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleExtraInput = (e) => {
    setExtra({ ...extra, [e.target.name]: e.target.value });
  };

  const handleExtra = () => {
    setOptions([...options, extra]);
    setExtra({ text: "", price: 0 });
  };

  const handleChangePrice = (e, index) => {
    const currentPrices = [...prices];
    currentPrices[index] = e.target.value;
    setPrices(currentPrices);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleCreatePizza = async (e) => {
    e.preventDefault();

    try {
      const newPizzaObject = {
        title: title,
        desc: desc,
        prices: prices.map((price) => parseFloat(price)),
        img: file || "",
        extras: options,
      };

      console.log("New Pizza Object:", newPizzaObject);

      const createdPizza = await createProduct(newPizzaObject);

      console.log("Created Pizza:", createdPizza);

      setProducts([...products, createdPizza]);

      // Clear form fields
      setTitle("");
      setDescription("");
      setPrices([0, 0, 0]);
      setFile(null);
      setOptions([]);
    } catch (error) {
      console.error("Error creating pizza:", error.message);
    }
  };

  return (
    <div className="pageMargin">
      <div className="ml-10 mb-10">
        <button
          onClick={() => setIsAddNewPopupVisible(true)}
          className="bg-teal-600 text-sm md:text-xl text-white text-center px-3 lg:px-3 gap-0 py-2 lg:py-3 items-center mt-4 rounded-3xl lg:w-44 cursor-pointer lg:hover:bg-white lg:hover:text-black"
        >
          Add New Pizza
        </button>
      </div>
      {isAddNewPopupVisible && (
        <form
          onSubmit={handleCreatePizza}
          className={`flex align-middle justify-center relative ${styles.uploadNewBackground}`}
        >
          <div
            className={`flex justify-between flex-col w-2/6 rounded-2xl bg-white ${styles.index} px-20`}
          >
            <div className="flex pt-6 border border-t-0 border-r-0 border-l-0 border-b  px-5">
              <h1 className="flex-1 font-semibold text-2xl px-0">
                Add a new Pizza
              </h1>
              <span
                className="flex text-2xl -top-10 cursor-pointer  "
                onClick={toggleAddNewPopup}
              >
                X
              </span>
            </div>
            {/* Add Pizza */}
            <div className="text-gray-600 mt-5">
              <label className={styles.label}>Choose Pizza Image</label>
              <input
                className={styles.file}
                type="file"
                onChange={handleFileChange}
              />
            </div>

            <div className="flex flex-col text-lg">
              <label className={styles.label}>Pizza Title</label>
              <input
                className="h-10 border border-gray-300 rounded-lg mt-2"
                type="text"
                value={title}
                onChange={handleTitleChange}
              />
            </div>

            <div className="flex flex-col text-lg">
              <label className={styles.label}>Description</label>
              <textarea
                rows={4}
                type="text"
                value={desc}
                onChange={handleDescriptionChange}
                className="border border-gray-300 rounded-lg h-20"
              />
            </div>

            <div className="grid">
              <label className={styles.label}>Pizza Prices</label>
              <div className={styles.priceContainer}>
                <input
                  className={`${styles.input} ${styles.inputSm}`}
                  type="number"
                  placeholder="Small"
                  onChange={(e) => handleChangePrice(e, 0)}
                />

                <input
                  className={`${styles.input} ${styles.inputSm}`}
                  type="number"
                  placeholder="Medium"
                  onChange={(e) => handleChangePrice(e, 1)}
                />

                <input
                  className={`${styles.input} ${styles.inputSm}`}
                  type="number"
                  placeholder="Large"
                  onChange={(e) => handleChangePrice(e, 2)}
                />
              </div>
            </div>

            <div className="mt-5">
              <label className={`${styles.label}`}>Extra</label>
              <div className={styles.extra}>
                <input
                  className={`${styles.input} ${styles.inputSm}`}
                  type="text"
                  placeholder="Item"
                  name="text"
                  onChange={handleExtraInput}
                />

                <input
                  className={`${styles.input} ${styles.inputSm}`}
                  type="number"
                  placeholder="Price"
                  name="price"
                  onChange={handleExtraInput}
                />

                <button className="" onClick={handleExtra}>
                  Add
                </button>
              </div>

              <div className={styles.extraItems}>
                {options.map((option, index) => (
                  <span key={index} className={styles.extraItem}>
                    {option.text}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <button
                className={styles.closeButton}
                onClick={toggleAddNewPopup}
              >
                Close
              </button>

              <button type="submit" className={styles.addButton}>
                Create Pizza
              </button>
            </div>
          </div>
        </form>
      )}

      <div className="lg:flex">
        <div className="md:px-5 pl-5 flex flex-col flex-1">
          <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl ml-5">
            Products
          </h1>

          <div className="mt-2 lg:ml-7">
            <table className="text-sm md:text-base w-full">
              <thead>
                <tr className="">
                  <th className="w-3/4 flex align-self-start">Image</th>
                  <th className="text-start">Id</th>
                  <th className="text-start">Title</th>
                  <th className="text-start">Price</th>
                  <th className="w-3/4 flex align-middle lg:align-self-start">
                    Action
                  </th>
                </tr>
              </thead>

              {products.map((product) => (
                <tbody
                  className="border-t border-b border-gray-300"
                  key={product._id}
                >
                  {
                    <tr className="">
                      <td className="">
                        <Image
                          src={product.img}
                          width={100}
                          height={70}
                          objectFit="cover"
                          alt="Pizza-Image"
                          className="w-12 h-12 md:w-16 lg:w-20 md:h-16 lg:h-20 flex align-self-start"
                        />
                      </td>
                      <td className="pb-10 text-xs md:text-base justify-self-start">
                        {product._id}
                      </td>
                      <td className="pb-10 text-xs md:text-base">
                        Burga Pizza
                      </td>
                      <td className="pb-10 text-xs md:text-base">
                        {product.prices[0]}
                      </td>
                      <td className="pb-10 text-xs md:text-base">
                        <button className="bg-green-700 py-1 px-2 text-white text-xs md:text-base cursor-pointer">
                          Edit
                        </button>
                        <button className="ml-3 bg-red-600 py-1 px-2 text-white text-xs md:text-base cursor-pointer">
                          Delete
                        </button>
                      </td>
                    </tr>
                  }
                </tbody>
              ))}
            </table>
          </div>
        </div>
        <div className="flex flex-col flex-1 md:px-5 lg:pr-5">
          <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl ml-5 mt-14 lg:mt-0">
            Orders
          </h1>
          <div className="mt-2 ml-1 lg:ml-7 mr-5 lg:mr-0">
            <table className="text-xs md:text-base w-full">
              <thead>
                <tr className="text-start">
                  <th className="text-start">Id</th>
                  <th className="text-start">Customer</th>
                  <th className="text-start">Total</th>
                  <th className="text-start">Payment</th>
                  <th className="text-start">Status</th>
                  <th className="text-start">Action</th>
                </tr>
              </thead>
              {isLoading ? (
                <div>loading...</div>
              ) : (
                orders.map((order) => (
                  <OrdersSection
                    key={order._id}
                    id={order._id}
                    customer={order.customer}
                    address={order.address}
                    total={order.total}
                    status={order.status}
                    method={order.method}
                    __v={order.__v}
                  />
                ))
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
