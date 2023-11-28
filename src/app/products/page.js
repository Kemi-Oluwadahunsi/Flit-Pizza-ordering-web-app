import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { FaFilter} from "react-icons/fa6";
import { IoFilter } from "react-icons/io5";
import  Cards from '../Specials'
import  CardArray from '../MenuArray.jsx'



export default function Products() {
  const Cadd = CardArray.map((item) => (
    <Link key={item.id} href={`/products/${item.id}`}>
        <Cards
          id={item.id}
          img={item.img}
          menu={item.menu}
          price={item.price}
          description={item.description}
        />
    </Link>
  ));
  return (
    <>
      <main className=" text-center lg:text-start  px-4 lg:px-10 grid grid-rows-2 pb-0 h-96 lg:h-full pageMargin ">
        <div>
          <div>
            <button className="bg-yellow-500 text-white flex flex-row text-center px-3 py-1  gap-1 lg:gap-0 items-center  mt-10  rounded-full lg:w-32">
              <div className=" lg:text-4xl font-bold mx-auto ">
                <IoFilter />
              </div>
              <span className=" font-bold  lg:text-xl mx-auto lg:-ml-1">
                Filter
              </span>
            </button>
          </div>

          <div className=" flex  flex-col flex-1 lg:flex-row  gap-10 justify-end mt-8 lg:-mt-10">
            <span className="font-bold text-xl ">
              Showing all {CardArray.length} results
            </span>
            <div>
              <select
                type="search"
                placeholder="Default sorting"
                className=" w-80 outline-none border-2 text-gray-800 border-gray-300 py-2  px-4 rounded-md text-md"
              >
                <option value="" className="">
                  Default Sorting
                </option>
                <option value="1"> Burga Pizza</option>
                <option value="2"> New Pizza</option>
              </select>
            </div>
          </div>

          <div>
            <button className="bg-teal-600 text-sm  lg:text-lg text-white text-center px-3 lg:px-2  gap-0 py-2 lg:py-3 items-center mt-4 rounded-3xl lg:w-40 cursor-pointer lg:hover:bg-white lg:hover:text-black">
              Add New Pizza
            </button>
          </div>
        </div>
      </main>

      <section className=" mx-auto lg:mx-0 px-4  lg:-mt-16 ">
        <div className=" px-4 mt-10 lg:mt-0 grid grid-rows-1 lg:grid-cols-3 gap-6 lg:gap-6">
          {Cadd}
        </div>
      </section>
    </>
  );
}

