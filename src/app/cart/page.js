
"use client";
import React from "react";
import Image from "next/image";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// import axios from "axios";
import styles from "./cash.module.css";

const Page = () => {
  const [cart, setCart] = useState({
    products: [],
    total: 0,
  });
  const [open, setOpen] = useState(false);
  const [isCashOnDeliveryVisible, setIsCashOnDeliveryVisible] = useState(false);
  const amount = cart.total;
  const currency = "USD";
  const style = { layout: "vertical" };
  const router = useRouter();

  const toggleCashOnDelivery = () => {
    setIsCashOnDeliveryVisible(!isCashOnDeliveryVisible);
  };

  // Custom component to wrap the PayPalButtons and handle currency changes
  const ButtonWrapper = ({ currency, showSpinner }) => {
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner, dispatch, options]);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                return orderId;
              });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then(function (details) {
              router.push("/orders");
            });
          }}
        />
      </>
    );
  };

  const cashOrder = () => {
    return router.push("/orders");
  };

  return (
    <div className="flex pageMargin flex-col lg:flex-row mx-auto lg:m-0">
      <div className="hidden lg:table flex-grow h-36 pt-6 w-5/10">
        <table className="w-full">
          <thead className="">
            <tr className="text-md ">
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody className="">
            {cart.products.map((product) => (
              <tr
                className="border border-t-1 border-b-1 border-l-0 border-r-0 text-center h-32"
                key={product.id}
              >
                <td className="ml-7">
                  <div className=" w-100 h-100 relative">
                    <Image
                      src={product.img}
                      width={100}
                      height={100}
                      alt=""
                      className="ml-10"
                    />
                  </div>
                </td>

                <td>
                  <span className="font-bold text-xl">{product.name}</span>
                </td>

                <td>
                  <span>
                    {product.extras &&
                      product.extras.map((extraText, index) => (
                        <span key={index}> {extraText} </span>
                      ))}
                  </span>
                </td>

                <td>
                  <span>${product.price}</span>
                </td>

                <td>
                  <span>{product.quantity}</span>
                </td>

                <td>
                  <span className="font-bold">
                    ${product.price * product.quantity}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="lg:hidden flex align-middle justify-center flex-1 w-screen leading-7">
        <table className="flex flex-col -m-12">
          {cart.products.map((product) => (
            <tr
              className="flex flex-col border border-t-1 border-b-1 border-l-0 border-r-0 text-center"
              key={product.id}
            >
              <td className="mx-auto">
                <div className=" w-100 h-100 relative">
                  <Image
                    src={product.img}
                    width={100}
                    height={100}
                    alt=""
                    className="w-44 md:w-60"
                  />
                </div>
              </td>

              <td>
                <span className="md:text-2xl">Pizza Type: {product.name}</span>
              </td>

              <td>
                <span>
                  {product.extras &&
                    product.extras.map((extraText, index) => (
                      <span key={index}>Extra: {extraText} </span>
                    ))}
                </span>
              </td>

              <td>
                <span className="md:text-xl">Price: ${product.price}</span>
              </td>

              <td>
                <span className="md:text-xl">Quantity: {product.quantity}</span>
              </td>

              <td>
                <span className=" md:text-xl font-bold">
                  Total: ${product.price * product.quantity}
                </span>
              </td>
            </tr>
          ))}
        </table>
      </div>

      <div className="flex flex-1 justify-center mt-7">
        <div className="flex flex-col w-7/12 md:w-2/4 lg:w-2/3 max-h-80 text-white bg-slate-800 p-5">
          <h2 className="font-extrabold text-xl mb-7 pt-5">CART TOTAL</h2>
          <div className="">
            <b className="mr-5">Subtotal:</b>${cart.total}
          </div>

          <div>
            <b className="mr-5">Discount:</b>$0.00
          </div>

          <div>
            <b className="mr-5">Total:</b>${cart.total}
          </div>

          {open ? (
            <div className="flex flex-col  mt-7">
              <button
                onClick={toggleCashOnDelivery}
                className="bg-white text-teal-800 font-semibold text-md mb-3 py-1 cursor-pointer"
              >
                CASH ON DELIVERY
              </button>

              {isCashOnDeliveryVisible && (
                <div
                  className={` flex flex-col place-items-center h-full bg-gray-300 ${styles.cashOnDelivery}`}
                >
                  <div
                    className={` w-3/4 lg:w-2/6 bg-white  h-3/4 lg:h-full p-7 lg:p-10 leading-7 lg:leading-10 rounded-2xl  ${styles.index}`}
                  >
                    <h1 className="text-2xl md:text-3xl lg:text-4xl text-black font-bold mb-5">
                      You will pay $12 on delivery.
                    </h1>
                    <div className="flex flex-col gap-3">
                      <label className="text-sm md:text-lg text-black">
                        Name Surname
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        name="name"
                        className="border-2 border-gray-400 rounded-md text-sm lg:text-base"
                      ></input>

                      <label className="text-sm md:text-lg text-black">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        placeholder="+234 708 73627"
                        name="number"
                        className="border-2 border-gray-400 rounded-md text-sm lg:text-base"
                      ></input>

                      <label className="text-sm md:text-lg text-black">
                        Address
                      </label>
                      <textarea
                        typeof="text"
                        placeholder="10 John street"
                        rows={10}
                        type="text"
                        className="border-2 border-gray-400 rounded-md h-24 md:h-32 text-sm lg:text-base"
                      ></textarea>
                    </div>

                    <div className=" mt-5 flex justify-center ">
                      <button
                        onClick={cashOrder}
                        className=" bg-yellow-500 w-20 lg:w-28 text-black text-sm lg:text-lg border-2 border-black p-2 rounded-2xl"
                      >
                        Order
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <PayPalScriptProvider
                options={{
                  "client-id":
                    "AYWidwQe2-wMfZ9V2M4aYoCRtu2mecaEk9-nWgcFnix3rhilizuIlN4ytwSRiykK03Gx4R77K9jOIBz3",
                  components: "buttons",
                  currency: "USD",
                  "disable-funding": "credit,card,p24",
                }}
              >
                <ButtonWrapper currency={currency} showSpinner={false} />
              </PayPalScriptProvider>
            </div>
          ) : (
            <button
              onClick={() => setOpen(true)}
              className="mt-10 bg-yellow-500 py-2  md:py-3 w-44 md:w-72 lg:w-80  mx-auto rounded-3xl font-extrabold lg:text-xl cursor-pointer "
            >
              CHECKOUT NOW!
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Page