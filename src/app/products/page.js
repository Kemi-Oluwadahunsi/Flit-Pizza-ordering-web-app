"use client";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// import { FaFilter} from "react-icons/fa6";
import { IoFilter } from "react-icons/io5";
import Cards from "../Specials";
import CardArray from "../MenuArray.jsx";
import axios from "axios";
// import { useRouter } from "next/navigation";
import styles from "../products/newItem.module.css";

export default function Products({ setClose }) {
  const [isAddNewPopupVisible, setIsAddNewPopupVisible] = useState(false);

  const toggleAddNewPopup = () => {
    setIsAddNewPopupVisible(!isAddNewPopupVisible);
  };

  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [prices, setPrices] = useState([]);
  const [extra, setExtra] = useState(null);
  const [options, setOptions] = useState([]);

  const handleExtraInput = () => {
    setExtra({ ...extra, [e.target.name]: e.target.value });
  };

  const handleExtra = () => {
    setOptions((prev) => [...prev, options]);
  };

  const changePrice = (e, index) => {
    const currentPrices = prices;
    currentPrices[index] = e.target.value;
    setPrices(currentPrices);
  };

  const handleCreate = async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "uploads");

    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dee9teadk/image/upload",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const { url } = uploadRes.data;
      const newProduct = {
        title,
        description,
        prices,
        extra,
        img: url,
      };
      await axios.post("http://localhost:3000/products", newProduct);
      //   setClose(true);
    } catch (err) {
      console.error("Error uploading to Cloudinary:", err);
      console.log("Cloudinary response:", err.response);
    }
  };

  const Cadd = CardArray.map((item) => (
    <Link key={item.id} href={`/products/1`}>
      <Cards
        id={item.id}
        img={item.img}
        menu={item.menu}
        price={item.price}
        description={item.description}
      />
    </Link>
  ));
  return (
    <>
      <main className=" text-center lg:text-start  px-4 lg:px-10 grid grid-rows-2 pb-0 h-96 lg:h-full pageMargin ">
        <div>
          <div>
            <button className="bg-yellow-500 text-white flex flex-row text-center px-3 py-1  gap-1 lg:gap-0 items-center  mt-10  rounded-full lg:w-32">
              <div className=" lg:text-4xl font-bold mx-auto ">
                <IoFilter />
              </div>
              <span className=" font-bold  lg:text-xl mx-auto lg:-ml-1">
                Filter
              </span>
            </button>
          </div>

          <div className=" flex  flex-col flex-1 lg:flex-row  gap-10 justify-end mt-8 lg:-mt-10">
            <span className="font-bold text-xl ">
              Showing all {CardArray.length} results
            </span>
            <div>
              <select
                type="search"
                placeholder="Default sorting"
                className=" w-80 md:w-3/4 lg:w-80 outline-none border-2 text-gray-800 border-gray-300 py-2  px-4 rounded-md text-md"
              >
                <option value="" className="">
                  Default Sorting
                </option>
                <option value="1"> Burga Pizza</option>
                <option value="2"> New Pizza</option>
              </select>
            </div>
          </div>

          <div>
            <button
              onClick={toggleAddNewPopup}
              className="bg-teal-600 text-sm md:text-xl text-white text-center px-3 lg:px-3  gap-0 py-2 lg:py-3 items-center mt-4 rounded-3xl lg:w-44 cursor-pointer lg:hover:bg-white lg:hover:text-black"
            >
              Add New Pizza
            </button>
          </div>
          {isAddNewPopupVisible && (
            <div
              className={`flex align-middle justify-center relative ${styles.uploadNewBackground}`}
            >
              <div
                className={`flex justify-between flex-col w-2/6 rounded-2xl bg-white ${styles.index} px-20`}
              >
                <div className="flex pt-6 border border-t-0 border-r-0 border-l-0 border-b  px-5">
                  <h1 className=" flex-1 font-semibold text-2xl px-0">
                    Add a new Pizza
                  </h1>
                  <span
                    className="flex text-2xl -top-10 cursor-pointer  "
                    onClick={toggleAddNewPopup}
                  >
                    X
                  </span>
                </div>

                <div className=" text-gray-600 mt-5">
                  <label className={styles.label}>Choose Pizza Image</label>
                  <input
                    className={styles.file}
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>

                <div className="flex flex-col text-lg">
                  <label className={styles.label}>Pizza Title</label>
                  <input
                    className="h-10 border border-gray-300 rounded-lg mt-2"
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                  ></input>
                </div>

                <div className="flex flex-col text-lg">
                  <label className={styles.label}>Description</label>
                  <textarea
                    rows={4}
                    type="text"
                    onChange={(e) => setDescription(e.target.value)}
                    className="border border-gray-300 rounded-lg h-20"
                  ></textarea>
                </div>

                <div className="grid">
                  <label className={styles.label}>Pizza Prices</label>
                  <div className={styles.priceContainer}>
                    <input
                      className={`${styles.input} ${styles.inputSm}`}
                      type="number"
                      placeholder="Small"
                      onChange={(e) => changePrice(e, 0)}
                    ></input>

                    <input
                      className={`${styles.input} ${styles.inputSm}`}
                      type="number"
                      placeholder="Medium"
                      onChange={(e) => changePrice(e, 1)}
                    ></input>

                    <input
                      className={`${styles.input} ${styles.inputSm}`}
                      type="number"
                      placeholder="Large"
                      onChange={(e) => changePrice(e, 2)}
                    ></input>
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
                    ></input>

                    <input
                      className={`${styles.input} ${styles.inputSm}`}
                      type="number"
                      placeholder="Price"
                      name="price"
                      onChange={handleExtraInput}
                    ></input>

                    <button className="" onClick={handleExtra}>
                      Add
                    </button>
                  </div>

                  <div className={styles.extraItems}>
                    {options.map((option) => (
                      <span key={option.text} className={styles.extraItem}>
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

                  <button className={styles.addButton} onClick={handleCreate}>
                    Create Pizza
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <section className=" mx-auto lg:mx-0 px-4  lg:-mt-16 ">
        <div className=" px-4 mt-10 lg:mt-0 grid grid-rows-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6">
          {Cadd}
        </div>
      </section>

      <div className="flex justify-end ">
        <Link href="/adminLogin" passHref>
          <button className=" m-4 border-2 border-teal-600 w-24 md:w-28 text-xs md:text-sm text-teal-600 py-1 px-2 rounded-3xl">
            Admin Login
          </button>
        </Link>
      </div>
    </>
  );
}
