"use client";
import React from "react";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./newItem.module.css";

const AddButton = ({ setClose }) => {
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
      const {url} = uploadRes.data;
      const newProduct = {
        title,description, prices, extra, img:url,
      };
      await axios.post("http://localhost:3000/products" , newProduct)
    //   setClose(true);
    } catch (err) {
      console.error("Error uploading to Cloudinary:", err);
      console.log("Cloudinary response:", err.response);
    }
  };

  return (
    <div className="flex align-middle justify-center uploadNewBackground max-h-full  relative">
      <div className=" flex justify-between flex-col w-2/6 rounded-2xl bg-white index">
        <div className="flex pt-6 border border-t-0 border-r-0 border-l-0 border-b  px-5 pb-5">
          <h1 className=" flex-1 font-semibold text-2xl px-0">
            Add a new Pizza
          </h1>
          <span
            className="flex text-2xl -top10  "
            onClick={() => setClose(false)}
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

        <div className="">
          <label className={styles.label}>Extra</label>
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

            <button className={styles.extraButton} onClick={handleExtra}>
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
          <button className={styles.closeButton} onClick={handleCreate}>
            Close
          </button>

          <button className={styles.addButton} onClick={handleCreate}>
            Create Pizza
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddButton;
