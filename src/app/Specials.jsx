import PropTypes from 'prop-types';
import Image from 'next/image'
import { FaCartShopping , FaStar} from "react-icons/fa6";


const Specials = ({img, linked, menu, price,description}) => {
    return (
      <>
        <div className="flex justify-center items-center">
          <div className=" flex  border-2 border-gray-300 w-full lg:w-[90%] rounded-lg font-medium  cursor-pointer lg:hover:transform lg:hover:scale-105 ">
            <section className="bg-white grid w-full lg:grid-rows-2 rounded-lg ">
              <div className=" place-self-center ">
                <Image
                  width={200}
                  height={100}
                  className="mt-5 lg:mt-0 "
                  src={img}
                  alt={`${menu} Image`}
                />
              </div>

              <div className=" flex flex-col lg:gap-4 w-full p-3 lg:px-6">
                <div className="grid grid-cols-3 w-full  ">
                  <h2 className="lg:text-xl col-span-2">{menu}</h2>
                  <span className="love place-self-end"> ${price} </span>
                </div>

                <div className="flex flex-col gap-4 ">
                  <div className=" flex flex-row  text-yellow-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <span className='text-xs'>{description}</span>
                  <button className="bg-yellow-500 lg:text-lg text-white flex flex-row text-center  px-2 py-2  mt-4 lg:mt-0 rounded-full w-36 lg:w-44">
                    <FaCartShopping className="mt-1 mx-auto" />{" "}
                    <span className=" -ml-2 mx-auto">ORDER NOW</span>
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </>
    );
};

Specials.propTypes = {
    id: PropTypes.string, 
    img: PropTypes.string,
    menu: PropTypes.string,
    link: PropTypes.string,
    linked: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string

    
};

export default Specials;
