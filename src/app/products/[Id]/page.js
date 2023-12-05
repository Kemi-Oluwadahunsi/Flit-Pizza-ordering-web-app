"use client"
import React, { useState } from "react";
import Image from "next/image";

const Productpage = () => {
  const pizza1 = {
    id: 1,
    img: "/images/loaf-pizza.jpg",
    name: "BURGA PIZZA",
    price: [20, 28, 35],
    desc: "This is a burga pizza",
    category: "Chicken, Launch, Pizza, Burger",
    tags: "Healthy, Oragnic, Chicken, Sauce",
    options: [
      {
        id: 1,
        text: "Sauce",
        price: 2,
      },
    ],
  };

  const [price, setPrice] = useState(pizza1.price[0]);
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [extras, setExtras] = useState([]);

  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleSize = (sizeIndex) => {
    const difference = pizza1.price[sizeIndex] - pizza1.price[size];
    setSize(sizeIndex);
    changePrice(difference);
  };

  const handleChange = (e, option) => {
    const checked = e.target.checked;

    if (checked) {
      setExtras((prev) => [...prev, option]);
      changePrice(option.price);
    } else {
      setExtras((prev) => prev.filter((extra) => extra.id !== option.id));
      changePrice(-option.price);
    }
  };

  const handleClick = () => {
    const extrasText = extras.map((extra) => extra.text);
    // Instead of dispatching an action, you can handle the cart logic locally
    console.log("Product added to cart:", {
      ...pizza1,
      extras: extrasText.length > 0 ? extrasText : null,
      price,
      quantity,
    });
    // You can perform any other logic here, like updating a global context or local storage
  };

  return (
    <>
      <section className=" pageMargin">
        <section className="flex flex-col lg:flex-row gap-20 mt-32">
          <section className=" h-full lg:w-2/4">
            <div className="flex lg:flex-1 h-full items-center justify-center relative">
              <Image
                src={pizza1.img}
                alt={`${pizza1.name} image`}
                objectFit="cover"
                width={600}
                height={600}
              />
            </div>
          </section>
          <section className=" -mt-10  lg:pt-3 text-center lg:text-start lg:w-2/4">
            <h1 className="font-extrabold text-2xl md:text-3xl  lg:text-4xl">
              {pizza1.name}
            </h1>
            <span className="font-extrabold text-xl md:text-2xl lg:text-xl text-red-500 mt-5 block ">
              ${price}
              <span className="font-extrabold text-xl text-gray-300 ml-5">
                8 Reviews
              </span>
            </span>
            <p className=" md:text-2xl lg:text-lg mt-2">{pizza1.desc}</p>
            <p className="  md:text-2xl lg:text-lg mt-2 lg:mt-5">
              Category: {pizza1.category}
            </p>
            <p className=" md:text-2xl lg:text-lg mt-2 lg:mt-5">
              Tags: {pizza1.tags}
            </p>
            <h3 className="font-bold text-xl md:text-2xl mt-8 lg:mt-16">
              Choose Pizza Size
            </h3>
            <div className="flex h-32 lg:w-2/4 justify-around lg:justify-between align-middle mt-2 lg:mt-0">
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
            <div className="ing">
              {pizza1.options.map((option) => (
                <div
                  key={option.id}
                  className="flex align-middle justify-center lg:justify-start gap-1 font-semibold text-md mt-2"
                >
                  <input
                    type="checkbox"
                    id={option.id}
                    name={option.text}
                    className="w-4 h-4 mt-1"
                    onChange={(e) => handleChange(e, option)}
                  />
                  <label htmlFor={option.text}>{option.text}</label>
                </div>
              ))}
            </div>
            <div className="mt-5 lg:mt-0">
              <input
                onChange={(e) => setQuantity(e.target.value)}
                type="number"
                defaultValue={1}
                className="mx-auto  md:h-8 lg:h-12 border border-1 border-gray-500 pl-2"
              />
              <button
                className="block lg:inline  h-9 lg:h-12 w-32 md:w-40 lg:w-48 mx-auto lg:ml-7 my-4 lg:mt-0 bg-yellow-500 text-white font-bold text-sm  md:text-xl rounded-3xl hover:bg-red-600"
                onClick={handleClick}
              >
                ADD TO CART
              </button>
              <button className="block lg:inline border border-gray-400 w-10  md:w-14 lg:w-20 h-10 md:h-14 lg:h-20 lg:ml-7 rounded-full lg:text-center mx-auto lg:mx-0 ">
                <Image
                  src="/images/heart-click.svg"
                  alt="like button"
                  className=" mx-auto font-extrabold text-lg"
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

export default Productpage;
