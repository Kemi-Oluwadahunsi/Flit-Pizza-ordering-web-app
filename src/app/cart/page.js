"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import styles from "./cash.module.css";
import { UsingCart } from "../cartcontext.js";
// import resetCart  from "../redux/cartSlice";
import { useContext } from "react";
import axios from "axios";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Paypal from "../payPalPayment";

const Page = () => {
  // const { postOrder } = useContext(ProductsContext);

  const initialOptions = {
    clientId:
      "AYeX3NUN2fiJUeyAtI1SIIGSYTDc5priT_Sqx8MeLPiA89-AoSaQqXLY1FqOSwxAlFahPCCZhzus7ktx",
    currency: "USD",
    intent: "capture",
    "disable-funding": "credit,card,p24",
  };

  const { cartItems, clearCart } = UsingCart();
  const [open, setOpen] = useState(false);
  const [isCashOnDeliveryVisible, setIsCashOnDeliveryVisible] = useState(false);
  const [userDetails, setUserDetails] = useState({
    title: "",
    phoneNumber: "",
    address: "",
  });

  const cashOnDeliveryRef = useRef(null);

  const closeCashOnDelivery = () => {
    setIsCashOnDeliveryVisible(false);
  };

  useEffect(() => {
    // Check if window is defined before using it
    // if (typeof window !== "undefined") {
    const handleClickOutside = (event) => {
      if (
        cashOnDeliveryRef.current &&
        !cashOnDeliveryRef.current.contains(event.target)
      ) {
        closeCashOnDelivery();
      }
    };

    if (isCashOnDeliveryVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // }
  }, [isCashOnDeliveryVisible]);

  const calculateSubtotal = (cartItems) => {
    const subtotal = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return subtotal.toFixed(2);
  };

  //

  const handleInputChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const calculateTotal = (cartItems) => {
    // if (typeof window !== "undefined") {
    return calculateSubtotal(cartItems);
    // }
  };

  const toggleCashOnDelivery = () => {
    setIsCashOnDeliveryVisible(!isCashOnDeliveryVisible);
  };

  const amount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  // const currency = "USD";
  // const style = { layout: "vertical" };
  // const dispatch = useDispatch();
  const router = useRouter();

  const cashOrder = async () => {
    const totalCashOnDelivery = calculateSubtotal(cartItems);
    const orderDetails = {
      customer: userDetails.customer,
      address: userDetails.address,
      total: totalCashOnDelivery,
      status: 0,
      method: 0,
    };

    try {
      const response = await axios.post(
        "https://pizza-ordering-anno.onrender.com/api/orders",
        orderDetails
      );
      console.log("Order placed successfully:", response.data);
      clearCart();
      router.push("/orders");
    } catch (error) {
      console.error("Error placing cash order:", error.response.data);
      // Handle error appropriately
    }
  };

  return (
    <div className="flex pageMargin flex-col lg:flex-row mx-auto lg:m-0 max-w-[1600px] mx-auto">
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
            {cartItems.map((product) => (
              <tr
                className="border border-t-1 border-b-1 border-l-0 border-r-0 text-center h-32"
                key={product.id}
              >
                <td className="ml-7">
                  {/* <div className=" w-100 h-100 relative"> */}
                  <Image
                    src={product.img}
                    width={100}
                    height={100}
                    alt=""
                    className="ml-10 "
                  />
                  {/* </div> */}
                </td>

                <td>
                  <span className="font-bold text-xl">{product.title}</span>
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
      <div className="lg:hidden flex align-middle justify-center flex-1 w-screen leading-7 pageMargin mt-28 border-0">
        <table className="flex flex-col -m-12">
          {cartItems.map((product) => (
            <tr className="flex flex-col text-center" key={product.id}>
              <td className="mx-auto">
                <Image
                  src={product.img}
                  width={100}
                  height={100}
                  alt="pizza image"
                  className="w-44 md:w-6 "
                />
              </td>

              <td>
                <span className="md:text-2xl">Pizza Type: {product.title}</span>
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

      <div className="flex flex-1 justify-center mt-20 lg:mt-7">
        <div className="flex flex-col w-3/4 md:w-2/4 lg:w-2/3 max-h-80 text-white bg-slate-800 p-5">
          <h2 className="font-extrabold text-xl mb-7 pt-5">CART TOTAL</h2>
          <div className="">
            <b className="mr-5">Subtotal:</b>${calculateSubtotal(cartItems)}
          </div>

          <div>
            <b className="mr-5">Discount:</b>$0.00
          </div>

          <div>
            <b className="mr-5">Total:</b>${calculateTotal(cartItems)}
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
                  className={`flex flex-col place-items-center h-full bg-gray-300 ${styles.cashOnDelivery}`}
                >
                  <div
                    ref={cashOnDeliveryRef}
                    className={`w-3/4 lg:w-2/6 bg-white p-7 lg:p-10 leading-7 lg:leading-10 rounded-2xl ${styles.index}`}
                  >
                    <h1 className="text-2xl md:text-3xl lg:text-4xl text-black font-bold mb-5">
                      You will pay ${calculateSubtotal(cartItems)} on delivery.
                    </h1>
                    <div className="flex flex-col gap-3">
                      <label className="text-sm md:text-lg text-black">
                        Name Surname
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        name="customer"
                        className="border-2 border-gray-400 rounded-md text-sm lg:text-base text-black"
                        onChange={handleInputChange}
                      ></input>

                      {/* <label className="text-sm md:text-lg text-black">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        placeholder="+234 708 73627"
                        name="number"
                        className="border-2 border-gray-400 rounded-md text-sm lg:text-base text-black"
                        onChange={handleInputChange}
                      ></input> */}

                      <label className="text-sm md:text-lg text-black">
                        Address
                      </label>
                      <textarea
                        type="text"
                        placeholder="10 John street"
                        name="address"
                        rows={4}
                        className="border-2 border-gray-400 rounded-md h-24 md:h-32 text-sm lg:text-base text-black"
                        onChange={handleInputChange}
                      ></textarea>
                    </div>

                    <div className="mt-5 flex justify-center">
                      <button
                        onClick={cashOrder}
                        className="bg-yellow-500 w-20 lg:w-28 text-black text-sm lg:text-lg border-2 border-black p-2 rounded-2xl"
                      >
                        Order
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Uncomment the following code if you want to include PayPal integration */}

              <PayPalScriptProvider
                options={{
                  "client-id":
                    "AYeX3NUN2fiJUeyAtI1SIIGSYTDc5priT_Sqx8MeLPiA89-AoSaQqXLY1FqOSwxAlFahPCCZhzus7ktx",
                  currency: "USD",
                  components: "buttons",
                  intent: "capture",
                  "disable-funding": "credit,card,p24",
                }}
              >
                <PayPalButtons
                  style={{ layout: "vertical" }}
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            currency_code: "USD",
                            value: calculateSubtotal(cartItems),
                          },
                        },
                      ],
                    });
                  }}
                  onApprove={(data, actions) => {
                    return actions.order
                      .capture()
                      .then(async function (details) {
                        console.log("Payment successful:", details);

                        // Extract relevant information from the PayPal response
                        const { purchase_units } = details;
                        const { shipping } = purchase_units[0];

                        // Prepare the order details
                        const orderDetails = {
                          customer: shipping.name.full_name, // Assuming 'title' corresponds to the customer's name
                          address: shipping.address.address_line_1,
                          total: parseFloat(calculateSubtotal(cartItems)), // Convert subtotal to a float
                          status: 0,
                          method: 1, // Set the method to 1 for card payment
                          // Add any other necessary fields
                        };

                        try {
                          const response = await axios.post(
                            "https://pizza-ordering-anno.onrender.com/api/orders",
                            orderDetails
                          );
                          clearCart();

                          // Redirect the user to the orders page
                          router.push("/orders");
                        } catch (error) {
                          console.error(
                            "Error placing order:",
                            error.response.data
                          );
                          // Handle error appropriately
                        }
                      });
                  }}
                />
              </PayPalScriptProvider>
            </div>
          ) : (
            <button
              onClick={() => setOpen(true)}
              className="mt-10 bg-yellow-500 py-2 md:py-3 w-44 md:w-72 lg:w-80 mx-auto rounded-3xl font-extrabold text-sm lg:text-xl cursor-pointer"
            >
              CHECKOUT NOW!
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
