import React from "react";
import Image from "next/image";
import styles from '../orders/orders.module.css'
import { FaCircleCheck } from "react-icons/fa6"; 
import cart from "../redux/cartSlice/page";


const Order = () => {

  const statusClass = (index) => {
    const status = 0;

    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.unDone;
  }

  return (
    <>
      <div className=" flex-col-reverse  lg:flex-row flex pageMargin">
        <div className="flex  flex-grow flex-wrap w-2/5 text-left">
          <div className=" w-full ml-7 pt-7">
            <table className="w-full">
              <tr className="text-md">
                <th className=" w-2/4">Order ID</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Total</th>
              </tr>

              <tr className="border border-t-1 border-b-1 border-l-0 border-r-0 h-16">
                <td>
                  <span className="text-lg">1238119489144</span>
                </td>

                <td>
                  <span>08173635263</span>
                </td>

                <td>
                  <span>10, John Street</span>
                </td>

                <td>
                  <span className="">${cart.total}</span>
                </td>
              </tr>
            </table>
          </div>
          <div className="flex justify-around w-full">
            <div className={statusClass(0)}>
              <Image
                src="/images/payment.svg"
                width={70}
                height={70}
                className=""
              />
              <span>Payment</span>
              <div className="">
                <FaCircleCheck className="checkedIcon text-green-700 text-4xl" />
              </div>
            </div>

            <div className={statusClass(1)}>
              <Image
                src="/images/preparing.png"
                width={70}
                height={70}
                className=""
              />
              <span>Preparing</span>
              <div className="">
                <FaCircleCheck className="checkedIcon text-green-700 text-4xl" />
              </div>
            </div>

            <div className={statusClass(2)}>
              <Image
                src="/images/bike-delivery.png"
                width={70}
                height={70}
                className=""
              />
              <span>On the way</span>
              <div className="">
                <FaCircleCheck className="checkedIcon text-green-700 text-4xl" />
              </div>
            </div>

            <div className={statusClass(3)}>
              <Image
                src="/images/on-the-way.svg"
                width={70}
                height={70}
                className=""
              />
              <span>Delivered</span>
              <div className="">
                <FaCircleCheck className="checkedIcon text-green-700 text-4xl" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-1 ml-5">
          <div className="flex flex-col w-11/12 max-h-80 text-white bg-slate-800 p-12  ">
            <h2 className="font-extrabold text-2xl mb-7">CART TOTAL</h2>
            <div className="">
              <b className="mr-5">Subtotal:</b>${cart.total}
            </div>

            <div>
              <b className="mr-5">Discount:</b>$0.00
            </div>

            <div>
              <b className="mr-5">Total:</b>${cart.total}
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
