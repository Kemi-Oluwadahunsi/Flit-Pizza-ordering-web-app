import React from 'react'
import {
  FaFacebookF,
  FaPinterestP,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className="grid  bg-yellow-50   grid-cols-2 lg:grid-cols-4  px-10  lg:px-11 py-7 lg:py-16">
        <section>
          <h5 className="font-bold text-md lg:text-xl mb-2 lg:mb-5">INFORMATION</h5>
          <ul className="flex flex-col mt-4 text-gray-500 text-sm lg:text-lg font-semibold gap-3 lg:gap-5">
            <li>Home</li>
            <li>Blog</li>
            <li>About us</li>
            <li>Menu</li>
            <li>Contact Us</li>
          </ul>
        </section>

        <section>
          <h5 className="font-bold text-md lg:text-xl mb-2 lg:mb-5">TOP ITEMS</h5>
          <ul className="flex flex-col mt-4 text-gray-500 text-sm lg:text-lg font-semibold gap-3 lg:gap-5">
            <li>Pepperoni</li>
            <li>Swiss Mushroom</li>
            <li>Berbeque Chicken</li>
            <li>Vegetarian</li>
            <li>Ham & Cheese</li>
          </ul>
        </section>

        <section className="mt-4 lg:mt-0">
          <h5 className="font-bold text-md lg:text-xl mb-2 lg:mb-5 pt-3">OTHERS</h5>
          <ul className="flex flex-col mt-4 text-gray-500 text-sm lg:text-lg font-semibold gap-3 lg:gap-5">
            <li>Checkout</li>
            <li>Cart</li>
            <li>Products</li>
            <li>Locations</li>
            <li>Legal</li>
          </ul>
        </section>

        <section className="mt-4 lg:mt-0">
          <h5 className="font-bold text-md lg:text-xl mb-2 lg:mb-5 pt-3">SOCIAL MEDIA</h5>
          <div className="flex flex-col mt-4 gap-5">
            <div className="flex flex-row gap-2 lg:gap-4">
              <FaFacebookF className="bg-blue-800 text-3xl lg:text-5xl text-white p-2" />
              <FaPinterestP className="bg-red-700 text-3xl lg:text-5xl text-white p-2" />
              <FaTwitter className="bg-blue-500  text-3xl lg:text-5xl text-white p-2" />
              <FaInstagram className="bg-red-500  text-3xl lg:text-5xl text-white p-2" />
            </div>

            <span className='text-xs lg:text-md'>SignUp and get exclusive offers and coupon codes</span>
            <button className="bg-yellow-500 text-sm lg:text-xl text-white font-bold py-1 lg:py-3  mr-4 mt-0 lg:mt-4  rounded-full w-24 lg:w-28 ">
              SIGN UP
            </button>
          </div>
        </section>
      </section>
    </>
  );
};

export default Footer;