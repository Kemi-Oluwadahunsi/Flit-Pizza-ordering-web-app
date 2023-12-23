"use client";

import Link from "next/link";
import { IoFilter } from "react-icons/io5";
import Specials from "../app/Specials";
import { useState } from "react";
import axios from "axios";



export default function ProductsClientSide({pproducts}) {
 
  const [products, setProducts] = useState(pproducts);
  const [filterByName, setFilterByName] = useState("");

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
                onClick={handleFilterButtonClick}
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

        
      </>
    );
}
