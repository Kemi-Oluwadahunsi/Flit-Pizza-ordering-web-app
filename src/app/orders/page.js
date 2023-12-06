"use client"
import React, { useState } from "react";
import Image from "next/image";
import styles from '../orders/orders.module.css'
import { FaCircleCheck } from "react-icons/fa6"; 
import { useCart } from "../cartContext/page";

const Order = () => {

  const { cartItems } = useCart();

  const statusClass = (index) => {
    const status = 0;

    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.unDone;
  }

  const [userDetails, setUserDetails] = useState({
    name: "John Doe", // Example default values, replace with actual values
    phoneNumber: "+234 708 73627",
    address: "Block A2-07, Halal Quarters, Oda road, Akure.",
  });

  const calculateSubtotal = (cartItems) => {
    const subtotal = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return subtotal.toFixed(2);
  };

  const calculateTotal = (cartItems) => {
    return calculateSubtotal(cartItems);
  };
  return (
    <>
      <div className=" flex-col-reverse  lg:flex-row flex pageMargin">
        <div className=" pt-4 lg:pt-0 flex flex-col lg:flex-row lg:flex-grow lg:flex-wrap lg:w-2/5 text-left">
          <div className="hidden lg:flex w-full ml-7 pt-7">
            <table className="w-full">
              <tr className="text-md">
                <th className=" w-2/5">Order ID</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Total</th>
              </tr>

              <tr className="border border-t-1 border-b-1 border-l-0 border-r-0 h-16">
                <td>
                  <span className="text-lg">1238119489144</span>
                </td>

                <td>
                  <span>{userDetails.phoneNumber}</span>
                </td>

                <td>
                  <span>{userDetails.address}</span>
                </td>

                <td>
                  <span className="">${calculateTotal(cartItems)}</span>
                </td>
              </tr>
            </table>
          </div>
          <div className="lg:hidden ">
            <tr className="flex flex-col h-44 leading-10 ml-10">
              <td>
                <span className="text-lg">Order ID: 1238119489144</span>
              </td>

              <td>
                <span>Customer: {userDetails.phoneNumber}</span>
              </td>

              <td>
                <span>Address: {userDetails.address}</span>
              </td>

              <td>
                <span className="">Total: ${calculateTotal(cartItems)}</span>
              </td>
            </tr>
          </div>
          <div className="flex justify-around lg:justify-between align-middle md:pb-4 lg:pb-0 lg:mt-5 w-5/6 ml-10">
            <div className={`${statusClass(0)}`}>
              <Image
                src="/images/payment.svg"
                width={70}
                height={70}
                className=" w-10 h-10 lg:w-20 lg:h-20"
                alt="paid"
              />
              <span className="block text-sm lg:text-base pt-3">Payment</span>
              <div className="pt-1">
                <FaCircleCheck className="checkedIcon text-green-700 text-2xl lg:text-4xl" />
              </div>
            </div>

            <div className={statusClass(1)}>
              <Image
                src="/images/preparing.png"
                width={70}
                height={70}
                alt="preparing"
                className="w-10 h-10 lg:w-20 lg:h-20"
              />
              <span className="block text-sm lg:text-base pt-3">Preparing</span>
              <div className="pt-1">
                <FaCircleCheck className="checkedIcon text-green-700 text-2xl lg:text-4xl" />
              </div>
            </div>

            <div className={statusClass(2)}>
              <Image
                src="/images/bike-delivery.png"
                width={70}
                height={70}
                alt="on the way"
                className="w-10 h-10 lg:w-20 lg:h-20"
              />
              <span className="block text-sm lg:text-base pt-3">
                On the way
              </span>
              <div className="pt-1">
                <FaCircleCheck className="checkedIcon text-green-700 text-2xl lg:text-4xl" />
              </div>
            </div>

            <div className={statusClass(3)}>
              <Image
                src="/images/on-the-way.svg"
                width={70}
                height={70}
                alt="delivered"
                className="w-10 h-10 lg:w-20 lg:h-20"
              />
              <span className="block text-sm lg:text-base pt-3">Delivered</span>
              <div className="pt-1">
                <FaCircleCheck className="checkedIcon text-green-700 text-2xl lg:text-4xl" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-1 lg:ml-2 ">
          <div className="flex flex-col w-3/4 md:w-3/5 lg:w-10/12 max-h-80 text-white bg-slate-800 p-12 mx-auto lg:mx-0">
            <h2 className="font-extrabold text-2xl mb-7">CART TOTAL</h2>
            <div className="">
              <b className="mr-5">Subtotal:</b>${calculateTotal(cartItems)}
            </div>

            <div>
              <b className="mr-5">Discount:</b>$0.00
            </div>

            <div>
              <b className="mr-5">Total:</b>${calculateTotal(cartItems)}
            </div>

            <button
              disabled
              className="mt-10 bg-yellow-500 h-12 rounded-3xl font-extrabold text-xl cursor-not-allowed "
            >
              PAID
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
