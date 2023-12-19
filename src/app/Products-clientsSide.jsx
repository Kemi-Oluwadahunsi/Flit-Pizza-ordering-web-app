"use client";

import Link from "next/link";
import { IoFilter } from "react-icons/io5";
import Specials from "../app/Specials";
import styles from "../app/products/newItem.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import {createProduct} from '@/app/products/page'


export default function ProductsClientSide({pproducts}) {
  const [isAddNewPopupVisible, setIsAddNewPopupVisible] = useState(false);
  const [products, setProducts] = useState(pproducts);
  const [filterByName, setFilterByName] = useState("");
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

  const handlePizzaByName = (e) => {
    setFilterByName(e.target.value);
  };

  const clearFilter = () => {
    setFilterByName("");
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(filterByName.toLowerCase())
  );

  const renderPizzas = filterByName ? filteredProducts : products;

  const handleFilterButtonClick = () => {
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(filterByName.toLowerCase())
    );
    setProducts(filteredProducts);
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
  }
    
  const Cadd = renderPizzas.map((item) => (
    <Link key={item._id} href={`/products/${item._id}`}>
        <Specials
          id={item._id}
          img={item.img}
          menu={item.title}
          price={item.prices[0]}
          description={item.desc}
        />
    </Link>
  ));
  
  
    return (
      <>
        <main className="text-center lg:text-start px-4 lg:px-10 grid grid-rows-2 pb-0 h-96 lg:h-full pageMargin">
          <div>
            <div>
              <button
                className="bg-yellow-500 text-white flex flex-row text-center px-3 py-1  gap-1 lg:gap-0 items-center  mt-10  rounded-full lg:w-32"
                onClick={toggleAddNewPopup}
              >
                <div className="lg:text-4xl font-bold mx-auto ">
                  <IoFilter />
                </div>
                <span className="font-bold lg:text-xl mx-auto lg:-ml-1">
                  Filter
                </span>
              </button>
            </div>

            <div className="flex flex-col flex-1 lg:flex-row  gap-10 justify-end mt-8 lg:-mt-10">
              <span className="font-bold text-xl">
                Showing all {products.length} results
              </span>
              <div>
                <input
                  type="search"
                  placeholder="Search for a pizza"
                  className="w-80 md:w-3/4 lg:w-80 outline-none border-2 text-gray-800 border-gray-300 py-2  px-4 rounded-md text-md"
                  onChange={handlePizzaByName}
                  value={filterByName}
                />
                {filterByName && (
                  <button className="text-teal-600 mt-2" onClick={clearFilter}>
                    Clear Filter
                  </button>
                )}
              </div>
            </div>

            <div>
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
          </div>
        </main>

        <section className="mx-auto lg:mx-0 lg:-mt-16">
          {/* <div className="px-4 mt-10 lg:mt-0 grid grid-rows-1 md:grid-cols-2 lg:grid-cols-3 gap-6 hover:transform scale-110">
          {Cadd}
        </div> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mt-10 lg:mt-0 ">
            {Cadd} {Cadd} {Cadd}
          </div>
        </section>

        <div className="flex justify-end">
          <Link href="/adminLogin" passHref>
            <button className="m-4 border-2 border-teal-600 w-24 md:w-28 text-xs md:text-sm text-teal-600 py-1 px-2 rounded-3xl">
              Admin Login
            </button>
          </Link>
        </div>
      </>
    );
}
