import PropTypes from 'prop-types';
import Image from 'next/image'
import { FaCartShopping , FaStar} from "react-icons/fa6";


const Specials = ({img, linked, menu, price,description}) => {
    return (
      <>
        <div className=''>
          <div className=" border-2 border-gray-300 rounded-lg font-medium  cursor-pointer  ">
            <section className="bg-white grid  lg:grid-rows-2  rounded-lg">
              <div className=" place-self-center">
                <Image
                  width={250}
                  height={150}
                  className=""
                  src={img}
                  alt={`${menu} Image`}
                />
              </div>

              <div className=" flex flex-col lg:gap-6  p-3 lg:p-6 lg:mt-1">
                <div className="grid grid-cols-2 gap-16 lg:gap-10">
                  <h2 className="lg:text-xl ">{menu}</h2>
                  <span className="love"> ${price} </span>
                </div>

                <div className="flex flex-col gap-4 ">
                  <div className=" flex flex-row  text-yellow-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <span>{description}</span>
                  <button className="bg-yellow-500 lg:text-lg text-white flex flex-row text-center  px-2 lg:px-2 py-2 lg:py-4  mt-4 rounded-full w-36 lg:w-44">
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
    id: PropTypes.number, 
    img: PropTypes.string,
    menu: PropTypes.string,
    link: PropTypes.string,
    linked: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string

    
};

export default Specials;
