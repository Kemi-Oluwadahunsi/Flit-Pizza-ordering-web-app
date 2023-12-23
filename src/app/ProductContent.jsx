"use client"
import Image from "next/image";
import { useState } from "react";
import  {UsingCart}  from "./cartContext/page";

export const ProductContent = ({ title, img, prices, desc, extraOptions }) => {
  const { addToCart, removeFromCart, clearCart, cartItems } = UsingCart();


  const pizza1 = {
    category: "Chicken, Launch, Pizza, Burger",
    tags: "Healthy, Oragnic, Chicken, Sauce",
  };

  const [price, setPrice] = useState(prices[0]);
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [extras, setExtras] = useState([]);
  

  const handleSize = (sizeIndex) => {
    setSize(sizeIndex);
    setPrice(prices[sizeIndex]);
  };

  const handleChange = (e, option) => {
    const checked = e.target.checked;

    if (checked) {
      setExtras((prev) => [...prev, option]);
      setPrice((prevPrice) => prevPrice + option.price);
    } else {
      setExtras((prev) => prev.filter((extra) => extra.id !== option.id));
      setPrice((prevPrice) => prevPrice - option.price);
    }
  };

  const handleClick = (products) => {
    const extrasText = extras.map((extra) => extra.text);
    const productToAdd = {
      ...pizza1,
      extras: extrasText.length > 0 ? extrasText : null,
      price,
      quantity,
      img,
      title,
    };

    addToCart(productToAdd);
    console.log("Product added to cart:", productToAdd);
  };

  return (
    <>
      <section className="pageMargin">
        <section className="flex flex-1 flex-col lg:flex-row lg:gap-10 mx-auto px-4 lg:px-10 mt-32">
          <section className="h-full align-middle justify-center">
            <Image
              src={img}
              alt={`${title} image`}
              width={600}
              height={600}
           
            />
          </section>

          <section className="flex-1 lg:pt-3 text-start">
            <h1 className="font-extrabold text-2xl md:text-3xl mt-2 lg:mt-0 lg:text-4xl">
              {title}
            </h1>
            <span className="font-extrabold text-xl md:text-2xl lg:text-xl text-red-600 mt-5 block">
              ${price}
              <span className="font-extrabold text-xl text-gray-500 ml-5">
                8 Reviews
              </span>
            </span>
            <p className="w-3/4 text-justify lg:w-full md:text-2xl lg:text-lg mt-2">
              {desc}
            </p>
            <p className="md:text-2xl lg:text-lg mt-2 lg:mt-5">
              Category: {pizza1.category}
            </p>
            <p className="md:text-2xl lg:text-lg mt-2 lg:mt-5">
              Tags: {pizza1.tags}
            </p>
            <h3 className="font-bold text-xl md:text-2xl mt-8 lg:mt-16">
              Choose Pizza Size
            </h3>
            <div className="flex h-32 lg:w-80 justify-around lg:justify-between align-middle mt-2 lg:mt-0">
              <div
                className="mt-4 cursor-pointer relative"
                onClick={() => handleSize(0)}
              >
                <span className="absolute bg-red-600 left-7 text-xs lg:text-sm rounded-xl px-1 border border-black text-white">
                  Small
                </span>
                <Image
                  src="/images/pizza-size.svg"
                  alt="small size"
                  className=""
                  width={50}
                  height={50}
                />
              </div>

              <div
                className="mt-2 cursor-pointer relative"
                onClick={() => handleSize(1)}
              >
                <span className="absolute bg-red-600 left-8 text-xs lg:text-sm rounded-xl px-1 border border-black text-white">
                  Medium
                </span>
                <Image
                  src="/images/pizza-size.svg"
                  alt="medium size"
                  className=""
                  width={70}
                  height={70}
                />
              </div>

              <div
                className="cursor-pointer relative"
                onClick={() => handleSize(2)}
              >
                <span className="absolute bg-red-600 left-12 text-xs lg:text-sm rounded-xl px-1 border border-black text-white">
                  Large
                </span>
                <Image
                  src="/images/pizza-size.svg"
                  alt="large size"
                  className=""
                  width={85}
                  height={85}
                />
              </div>
            </div>
            <h3 className="md:text-xl">Choose additional ingredients</h3>
            <div className="grid lg:grid-cols-3 lg:w-3/4">
              {extraOptions.map((option) => (
                <div
                  key={option._id}
                  className="inline align-start justify-center lg:justify-start gap-1 font-semibold text-md mt-2"
                >
                  <input
                    type="checkbox"
                    id={option._id}
                    name={option.text}
                    price={option.price}
                    className="w-4 h-4 mt-1"
                    onChange={(e) => handleChange(e, option)}
                  />
                  <label className="ml-1" htmlFor={option.text}>
                    {option.text}
                  </label>
                </div>
              ))}
            </div>
            <div className=" flex flex-row place-items-center lg:w-3/4 mt-5 lg:mt-6">
              <div className="">
                <input
                  onChange={(e) => setQuantity(e.target.value)}
                  type="number"
                  defaultValue={1}
                  className="w-10 pl-3 lg:w-full lg:mx-auto md:h-2 lg:h-10 border border-1 border-gray-500"
                />
              </div>
              <button
                className="cartButton h-14 lg:px-20 mx-auto lg:ml-7 my-4 lg:mt-0 bg-yellow-500 text-white font-bold text-sm md:text-xl rounded-full hover:bg-red-600"
                onClick={handleClick}
              >
                ADD TO CART
              </button>
              <button className="block lg:inline border border-gray-400 w-10 md:w-14 lg:w-20 h-10 md:h-14 lg:h-20 rounded-full lg:text-start mx-auto lg:mx-0">
                <Image
                  src="/images/heart-click.svg"
                  alt="like button"
                  className="mx-auto font-extrabold text-lg"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </section>
        </section>
      </section>
    </>
  );
};
