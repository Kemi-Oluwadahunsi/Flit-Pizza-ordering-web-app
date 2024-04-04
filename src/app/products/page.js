"use client";
import Link from "next/link";
import { IoFilter, IoFilterCircle } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
import Specials from "../Specials";
import { useState, useEffect, useContext } from "react";
import { ProductsContext } from "../../../ProductContext.jsx";
import axios from "axios";

export default function Products() {
  const { products, loading } = useContext(ProductsContext);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [showFilterPrices, setShowFilterPrices] = useState(false);
  const [clearFilter, setClearFilter] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleFilterButtonClick = () => {
    setShowFilterPrices(!showFilterPrices);
    setClearFilter(false)
  };

  const handlePriceRangeClick = (priceRange) => {
    setSelectedPriceRange(priceRange);
    setShowFilterPrices(false);
    setClearFilter(true)
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value)
  }

  const handleFilterRemoval = () => {
    setSelectedPriceRange(null)
    setClearFilter(false)
  }

 const filteredProducts = products.filter((product) => {
  const matchesPriceRange = !selectedPriceRange || 
  product.prices.some((price) => price >= selectedPriceRange.min && price <= selectedPriceRange.max);

  const matchesSearchQuery =
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (Number(searchQuery) &&
      product.prices.some((price) => price === Number(searchQuery)));


   return matchesPriceRange && matchesSearchQuery
 })


  const Cadd =  filteredProducts.map((item) => (
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
      <section className=" pt-60  flex sm:flex-col-reverse lg:flex-row items-center  md:justify-between w-full md:px-7 lg:px-10 sm:px-4 pb-10 justify-around gap-[1em] lg:gap-[2em] ">
        <div className="lg:w-[30%]">
          <div className="place-self-center lg:place-self-start">
            <button
              className="bg-yellow-500 w-fit text-white flex flex-row justify-around  gap-4 px-4 py-2 lg:py-2  lg: items-center  rounded-full  hover:bg-yellow-400 transition-all duration-300 ease-in-out "
              onClick={handleFilterButtonClick}
            >
              {!showFilterPrices ? (
                <IoFilter className="lg:text-4xl font-bold mx-auto " />
              ) : (
                <IoFilterCircle className="lg:text-2xl font-bold mx-auto " />
              )}

              <span className="font-bold lg:text-xl mx-auto lg:-ml-1">
                Filter By Prices
              </span>
            </button>
          </div>

          {clearFilter && (
            <div
              className="flex gap-2 justify-center items-center mt-3 cursor-pointer font-bold"
              onClick={handleFilterRemoval}
            >
              <IoIosCloseCircle color="red" className="text-xl" />
              <span>Clear filter</span>
            </div>
          )}
        </div>

        <div className="place-self-end">
          <input
            type="search"
            placeholder="Search for a pizza"
            className="w-80 outline-none lg:py-2 border-2 text-gray-800 border-gray-300  rounded-md text-md px-2"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
        </div>
      </section>
      <section className="ml-10 ">
        {showFilterPrices && (
          <ul className=" text-white w-40 -mt-10">
            <li
              className=" bg-slate-900 my-2 cursor-pointer rounded p-1 text-center"
              onClick={() => handlePriceRangeClick({ min: 50, max: 200 })}
            >
              $50 - $200
            </li>
            <li
              className=" bg-slate-900 my-2 cursor-pointer rounded p-1 text-center"
              onClick={() => handlePriceRangeClick({ min: 201, max: 400 })}
            >
              $201 - $400
            </li>
            <li
              className=" bg-slate-900 my-2 cursor-pointer rounded p-1 text-center"
              onClick={() => handlePriceRangeClick({ min: 401, max: 800 })}
            >
              $401 - $800
            </li>
            <li
              className=" bg-slate-900 my-2 cursor-pointer rounded p-1 text-center"
              onClick={() => handlePriceRangeClick({ min: 801, max: Infinity })}
            >
              $801 above
            </li>
          </ul>
        )}
      </section>

      <section className="mx-[2em] lg:mx-[8em] ">
        {loading && <div className="loader mx-auto my-10 "></div>}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2em] lg:gap-[4em] ">
         
            {Cadd.length === 0 ? (
              <div className="w-full">
                No products, kindly
                check back later
              </div>
            ) : (
              Cadd
            )}
          </div>
        )}
      </section>
    </>
  );
}

// const createProduct = async (newPizzaObject) => {
//   try {
//     const response = await fetch(baseUrl, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newPizzaObject),
//     });

//     console.log("Response Status:", response.status);

//     if (!response.ok) {
//       const errorMessage = await response.text();
//       console.error(`Error creating product: ${errorMessage}`);
//       throw new Error(`Error creating product: ${errorMessage}`);
//     }

//     const responseData = await response.json();
//     console.log("Response Data:", responseData);

//     return responseData;
//   } catch (error) {
//     console.error("Error in createProduct:", error.message);
//     throw error;
//   }
// };
