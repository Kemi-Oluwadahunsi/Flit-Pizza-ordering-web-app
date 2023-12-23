

"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import { CgMenu } from "react-icons/cg";
import { FaTimes } from "react-icons/fa";
import  {UsingCart}  from "../cartContext/page.js";

const Navbar = () => {
  const { cartItems } = UsingCart();
  const router = useRouter()
  const [showMobileContent, setShowMobileContent] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const toggleMobileContent = () => {
    setShowMobileContent(!showMobileContent);
  };

  const navigateToCart = () => {
    router.push("/cart");
  };

  return (
    <>
      <header className="py-2 lg:px-8 h-28 fixed grid bg-white lg:z-50  grid-cols-2 lg:grid-cols-5 w-full ">
        <div className="lg:col-span-2 grid grid-cols-2">
          <Image
            src="/images/pizza-logo_afsvzn.png"
            alt="pizzon logo"
            width={80}
            height={10}
            className="pt-2 pl-2 cursor-pointer w-16 lg:w-24  h-14 lg:h-28"
          />

          <Image
            src="/images/pizza-header.png"
            alt=""
            width={140}
            height={30}
            className="ml-4 lg:ml-2  lg:w-4/6 lg:h-28"
          />
        </div>
        <div className="lg:hidden relative w-10 h-10 top-2 left-40 md:left-72 flex items-center">
          <button
            onClick={toggleMobileContent}
            className="text-black underline text-3xl md:text-4xl fixMenu"
          >
            {showMobileContent ? <FaTimes /> : <CgMenu />}
          </button>
        </div>

        <div className="lg:col-span-3 flex w-screen lg:w-full lg:flex-row ">
          <ul
            className={`${
              showMobileContent ? "flex" : "hidden"
            }  lg:flex flex-col lg:flex-row lg:mt-0 fixed lg:relative py-4 lg:py-0 z-50 lg:z-0 w-screen lg:w-full text-md md:text-lg lg:text-sm bg-red-600 lg:bg-transparent justify-end items-center text-white lg:text-black font-bold gap-14 `}
          >
            <Link href="/" passHref>
              <li className="cursor-pointer"> HOME</li>
            </Link>
            <Link href="../products" passHref>
              <li className="cursor-pointer"> PRODUCTS</li>
            </Link>
            <Link href="../blog" passHref>
              <li className="cursor-pointer">BLOG</li>
            </Link>
            <Link href="../contact" passHref>
              <li className="cursor-pointer">CONTACTS</li>
            </Link>
            <FaSearch className=" hidden lg:block cursor-pointer  lg:mr-14 text-black" />
          </ul>

          <div
            onClick={navigateToCart}
            className="fixCart flex  flex-row fixed lg:absolute flex-grow items-end lg:pt-8 lg:items-center right-16 lg:right-5  top-4 lg:top-2 md:mr-10 lg:mr-5  md:ml-96 lg:ml-4"
          >
            <FaCartShopping className="text-blue-500 cursor-pointer text-xl md:text-2xl  ml-2 lg:text-3xl" />
            <span
              id="wotowoto"
              className=" cursor-pointer mb-4 lg:mb-0 lg:-mt-10 -ml-2 text-xs  md:text-sm   text-white bg-red-600 rounded-full px-1 y-1"
            >
              {cartItems.length}
            </span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
