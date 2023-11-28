"use client"

import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"; 
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
// import axios from "axios";
// import { reset } from "../redux/cartSlice/page";



const Page = () => {
   const cart = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false)
  // const [cash, setCash] = useState(false);
  const amount = cart.total;
  const currency = "USD"
  const style = { layout: "vertical" };
  const dispatch = useDispatch();
  const router = useRouter();


  // const createOrder = async (data) => {
  //   try {
  //     const res = await axios.post("http://localhost:3000/api/orders", data);
  //     if (res.status === 201) {
  //       dispatch(reset());
  //       router.push(`/orders/${res.data._id}`);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // Custom component to wrap the PayPalButtons and handle currency changes
  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

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
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove= {(data, actions) => {
            return actions.order.capture().then(function (details) {
              router.push("/orders");
              // const shipping = details.purchase_units[0].shipping;
              // createOrder({
              //   customer: shipping.name.full_name,
              //   address: shipping.address.address_line_1,
              //   total: cart.total,
              //   method: 1,
              // });
            });
          }}
        />
      </>
    );
  };

  return (
    <div className="flex pageMargin flex-col h-screen lg:flex-row mx-auto lg:m-0">
      <div className="hidden lg:table flex-grow h-36 pt-6 w-5/12">
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
      <div className="lg:hidden  flex align-middle justify-center flex-1 w-screen leading-7">
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
                    className="w-44"
                  />
                </div>
              </td>

              <td>
                <span className="">Pizza Type: {product.name}</span>
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
                <span>Price: ${product.price}</span>
              </td>

              <td>
                <span>Quantity: {product.quantity}</span>
              </td>

              <td>
                <span className="font-bold">
                  Total: ${product.price * product.quantity}
                </span>
              </td>
            </tr>
          ))}
        </table>
      </div>

      <div className="flex flex-1 justify-center pb-14 mt-7">
        <div className="flex flex-col w-7/12 lg:w-11/12 max-h-80 text-white bg-slate-800 p-5">
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
              <button className="bg-white text-teal-800 font-semibold text-md mb-3 py-1 cursor-pointer">
                CASH ON DELIVERY
              </button>

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
              className="mt-10 bg-yellow-500 py-2 lg:w-60 rounded-3xl font-extrabold lg:text-xl cursor-pointer "
            >
              CHECKOUT NOW!
            </button>
          )}
        </div>
      </div>
      {/* {cash && (
        <orderDetails total={cart.total} createOrder = {createOrder} />
      )} */}
    </div>
  );
}

export default Page