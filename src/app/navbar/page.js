"use client"
import React from "react";
import Image from "next/image";
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {

  const quantity = useSelector(state => state.cart.quantity);

  return (
    <>
      <header className=" py-2   lg:px-8 h-28 lg:fixed grid bg-white lg:z-50  grid-cols-2 lg:grid-cols-5 w-full ">
        <div className="lg:col-span-2 grid grid-cols-2">
          <Image
            src="/images/pizza-logo_afsvzn.png"
            alt="pizzon logo"
            width={80}
            height={10}
            className="pt-1  pl-2 cursor-pointer  w-16 lg:w-24  h-14 lg:h-24"
          />

          <Image
            src="/images/pizza-header.png"
            alt=""
            width={120}
            height={30}
            className=" ml-4 lg:ml-2 lg:w-3/5 lg:h-24"
          />
        </div>

        <div className="lg:col-span-3 flex flex-row ">
          <ul className="hidden lg:flex flex-row w-full text-md justify-end   items-center text-black font-bold gap-12 ">
            <Link href="/" passHref>
              <li className="cursor-pointer"> HOME</li>
            </Link>
            <Link href="../products" passHref>
              <li className="cursor-pointer"> PRODUCTS</li>
            </Link>
            <Link href = "#" passHref>
              <li className="cursor-pointer"> PAGES</li>
            </Link>
            <Link href ="#" passHref>
            <li className="cursor-pointer">BLOG</li>
            </Link>
            <Link href = "#" passHref>
            <li className="cursor-pointer">CONTACTS</li>
            </Link>
            <FaSearch className=" cursor-pointer mr-7 text-black" />
          </ul>
          <Link href="../cart" passHref>
            <div className=" flex flex-row pt-6 relative  flex-grow  lg:pt-8 lg:items-center  lg:right-5 ml-64 lg:ml-2">
              <FaCartShopping className="text-blue-500 absolute cursor-pointer text-xl lg:text-3xl top-7 " />
              <span className=" absolute   top-5 md:top-5 -right-7 lg:-right-9 lg:top-5  text-xs lg:text-sm   text-white bg-red-600 rounded-full px-1">
                {quantity}
              </span>
            </div>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Navbar;
