
import React from 'react'
import Image from 'next/image';
// import axios from 'axios';

const AdminPage = () => {
  return (
    <div className="lg:flex  pageMargin">
      <div className=" md:px-5 pl-5 flex flex-col flex-1">
        <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl ml-5">Products</h1>

        <table className=" mt-2 lg:ml-7 ">
          <thead className="text-sm md:text-base">
            <tr className=" ">
              <th className="w-3/4  flex align-self-start">Image</th>
              <th className=" text-start">Id</th>
              <th className=" text-start">Title</th>
              <th className=" text-start">Price</th>
              <th className="w-3/4 flex align-middle lg:align-self-start">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="border-t border-b border-gray-300">
            <tr className="">
              <td className="">
                <Image
                  src="/images/loaf-pizza.jpg"
                  width={100}
                  height={70}
                  objectFit="cover"
                  alt="Pizza-Image"
                  className=" w-12 h-12 md:w-16 lg:w-20 md:h-16 lg:h-20 flex align-self-start"
                ></Image>
              </td>
              <td className="pb-10 text-xs md:text-base justify-self-start">
                {"6522a189348938".slice(0, 6)}...
              </td>
              <td className="pb-10 text-xs md:text-base">Burga Pizza</td>
              <td className="pb-10 text-xs md:text-base">$20</td>
              <td className="pb-10 text-xs md:text-base">
                <button className=" bg-green-700 py-1 px-2 text-white text-xs md:text-base cursor-pointer">
                  Edit
                </button>
                <button className=" ml-3 bg-red-600 py-1 px-2 text-white text-xs md:text-base  cursor-pointer">
                  Delete
                </button>
              </td>
            </tr>
            <tr className="border-t border-b border-gray-300">
              <td className="">
                <Image
                  src="/images/loaf-pizza.jpg"
                  width={100}
                  height={70}
                  objectFit="cover"
                  alt="Pizza-Image"
                  className=" w-12 h-12 lg:w-20 lg:h-20 flex align-self-start"
                ></Image>
              </td>
              <td className="pb-10  text-xs md:text-base justify-self-start">
                {"6522a389348938".slice(0, 6)}...
              </td>
              <td className="pb-10 text-xs md:text-base">Burga Pizza</td>
              <td className="pb-10 text-xs md:text-base">$20</td>
              <td className="pb-10 text-xs md:text-base">
                <button className=" bg-green-700 py-1 px-2 text-white text-xs md:text-base cursor-pointer">
                  Edit
                </button>
                <button className=" ml-3 bg-red-600 py-1 px-2 text-white text-xs md:text-base cursor-pointer">
                  Delete
                </button>
              </td>
            </tr>

            <tr className="border-t border-b border-gray-300">
              <td className="">
                <Image
                  src="/images/loaf-pizza.jpg"
                  width={100}
                  height={70}
                  objectFit="cover"
                  alt="Pizza-Image"
                  className=" w-12 h-12 lg:w-20 lg:h-20 flex align-self-start"
                ></Image>
              </td>
              <td className="pb-10  text-xs md:text-base justify-self-start">
                {"65247989348938".slice(0, 6)}...
              </td>
              <td className="pb-10 text-xs md:text-base">Burga Pizza</td>
              <td className="pb-10 text-xs md:text-base">$10</td>
              <td className="pb-10 text-xs md:text-base">
                <button className=" bg-green-700 py-1 px-2 text-white text-xs md:text-base cursor-pointer">
                  Edit
                </button>
                <button className=" ml-3 bg-red-600 py-1 px-2 text-white text-xs md:text-base cursor-pointer">
                  Delete
                </button>
              </td>
            </tr>

            <tr className="border-t border-b border-gray-300">
              <td className="">
                <Image
                  src="/images/loaf-pizza.jpg"
                  width={100}
                  height={70}
                  objectFit="cover"
                  alt="Pizza-Image"
                  className=" w-12 h-12 lg:w-20 lg:h-20 flex align-self-start"
                ></Image>
              </td>
              <td className="pb-10  text-xs md:text-base justify-self-start">
                {"652fe289348938".slice(0, 6)}...
              </td>
              <td className="pb-10 text-xs md:text-base">Burga Pizza</td>
              <td className="pb-10 text-xs md:text-base">$40</td>
              <td className="pb-10 text-xs md:text-base">
                <button className=" bg-green-700 py-1 px-2 text-white cursor-pointer text-xs md:text-base">
                  Edit
                </button>
                <button className=" ml-3 bg-red-600 py-1 px-2 text-white cursor-pointer text-xs md:text-base">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex flex-col flex-1 md:px-5 lg:pr-5">
        <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl ml-5 mt-14 lg:mt-0 ">
          Orders
        </h1>
        <table className="mt-2 ml-1 lg:ml-7 mr-5 lg:mr-0">
          <thead className="text-xs md:text-base">
            <tr className="text-start">
              <th className="text-start">Id</th>
              <th className="text-start">Customer</th>
              <th className="text-start">Total</th>
              <th className="text-start">Payment</th>
              <th className="text-start">Status</th>
              <th className="text-start">Action</th>
            </tr>
          </thead>

          <tbody className="text-sm md:text-base border-t border-b border-gray-300">
            <tr className="border-t border-b border-gray-300 text-xs md:text-base">
              <td className="py-2">{"65247a89348938".slice(0, 6)}...</td>
              <td className="py-2">07037283748</td>
              <td className="py-2">$175</td>
              <td className="py-2">Cash</td>
              <td className="py-2">Delivered</td>
              <td className="py-2">
                <button className=" bg-green-700 py-1 px-1 lg:px-3 text-white">
                  Next stage
                </button>
              </td>
            </tr>

            <tr className="border-t border-b border-gray-300 text-xs md:text-base">
              <td className="py-2">{"65254089348938".slice(0, 6)}...</td>
              <td className="py-2">07037283748</td>
              <td className="py-2">$140</td>
              <td className="py-2">Cash</td>
              <td className="py-2">On the way</td>
              <td className="py-2">
                <button className=" bg-green-700 py-1 px-1 lg:px-3 text-white">
                  Next stage
                </button>
              </td>
            </tr>

            <tr className="border-t border-b border-gray-300 text-xs md:text-base">
              <td className="py-2">{"65255089348938".slice(0, 6)}...</td>
              <td className="py-2">07037283748</td>
              <td className="py-2">$50</td>
              <td className="py-2">Cash</td>
              <td className="py-2">On the way</td>
              <td className="py-2">
                <button className=" bg-green-700 px-1 py-1 lg:px-3 text-white">
                  Next stage
                </button>
              </td>
            </tr>

            <tr className="border-t border-b border-gray-300 text-xs md:text-base">
              <td className="py-2">{"652fcf89348938".slice(0, 6)}...</td>
              <td className="py-2">07037283748</td>
              <td className="py-2">$150</td>
              <td className="py-2">Cash</td>
              <td className="py-2">Preparing</td>
              <td className="py-2">
                <button className=" bg-green-700 px-1 py-1 lg:px-3 text-white">
                  Next stage
                </button>
              </td>
            </tr>

            <tr className="border-t border-b border-gray-300 text-xs md:text-base">
              <td className="py-2">{"6553e989348938".slice(0, 6)}...</td>
              <td className="py-2">07037283748</td>
              <td className="py-2">$160</td>
              <td className="py-2">Cash</td>
              <td className="py-2">Preparing</td>
              <td className="py-2">
                <button className=" bg-green-700 px-1 py-1 lg:px-3 text-white">
                  Next stage
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminPage