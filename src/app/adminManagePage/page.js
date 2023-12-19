"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";

const OrdersSection = (props) => {
  const { id, customer, address, total, status, method } = props;
  return (
    <>
      <tbody className="text-sm md:text-base border-t border-b border-gray-300">
        <tr className="border-t border-b border-gray-300 text-xs md:text-base">
          <td className="py-2">{id.slice(0,6)}...</td>
          <td className="py-2">{customer}</td>
          <td className="py-2">${total}</td>
          <td className="py-2">{method === 0 ? "PayPal" :"cash"} </td>
          <td className="py-2">{status}</td>
          <td className="py-2">
            <button className="bg-green-700 py-1 px-1 lg:px-3 text-white">
              Next stage
            </button>
          </td>
        </tr>
      </tbody>
      </>
  );
};

const AdminPage = () => {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://pizza-ordering-anno.onrender.com/api/orders")
      .then((response) => {
        setLoading(false);
        console.log("promise fulfilled", response.data);
        setOrders(response.data);
      });

    axios
      .get("https://pizza-ordering-anno.onrender.com/api/products")
      .then((response) => {
        setLoading(false);
        console.log("promise fulfilled", response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="lg:flex pageMargin">
      <div className="md:px-5 pl-5 flex flex-col flex-1">
        <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl ml-5">
          Products
        </h1>

        <div className="mt-2 lg:ml-7">
          <table className="text-sm md:text-base">
            <thead>
              <tr className="">
                <th className="w-3/4 flex align-self-start">Image</th>
                <th className="text-start">Id</th>
                <th className="text-start">Title</th>
                <th className="text-start">Price</th>
                <th className="w-3/4 flex align-middle lg:align-self-start">
                  Action
                </th>
              </tr>
            </thead>

            {products.map((product) => (
             
             <tbody
                className="border-t border-b border-gray-300"
                key={product._id}
              >
               { <tr className="">
                  <td className="">
                    <Image
                      src={product.img}
                      width={100}
                      height={70}
                      objectFit="cover"
                      alt="Pizza-Image"
                      className="w-12 h-12 md:w-16 lg:w-20 md:h-16 lg:h-20 flex align-self-start"
                    />
                  </td>
                  <td className="pb-10 text-xs md:text-base justify-self-start">
                    {product._id}
                  </td>
                  <td className="pb-10 text-xs md:text-base">Burga Pizza</td>
                  <td className="pb-10 text-xs md:text-base">
                    {product.prices[0]}
                  </td>
                  <td className="pb-10 text-xs md:text-base">
                    <button className="bg-green-700 py-1 px-2 text-white text-xs md:text-base cursor-pointer">
                      Edit
                    </button>
                    <button className="ml-3 bg-red-600 py-1 px-2 text-white text-xs md:text-base cursor-pointer">
                      Delete
                    </button>
                  </td>
                </tr>}
              </tbody>
            ))}
          </table>
        </div>
      </div>

      <div className="flex flex-col flex-1 md:px-5 lg:pr-5">
        <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl ml-5 mt-14 lg:mt-0">
          Orders
        </h1>
        <div className="mt-2 ml-1 lg:ml-7 mr-5 lg:mr-0">
          <table className="text-xs md:text-base">
            <thead>
              <tr className="text-start">
                <th className="text-start">Id</th>
                <th className="text-start">Customer</th>
                <th className="text-start">Total</th>
                <th className="text-start">Payment</th>
                <th className="text-start">Status</th>
                <th className="text-start">Action</th>
              </tr>
            </thead>
            {isLoading ? (
              <div>loading...</div>
            ) : (
              orders.map((order) => (
                <OrdersSection
                  key={order._id}
                  id={order._id}
                  customer={order.customer}
                  address={order.address}
                  total={order.total}
                  status={order.status}
                  method={order.method}
                  __v={order.__v}
                />
              ))
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
