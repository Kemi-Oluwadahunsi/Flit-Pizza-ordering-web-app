import PropTypes from 'prop-types';
import Image from 'next/image';


const Testimonials = (props) => {
    return (
      <>
        <div className=''>
          <div className=" border-2 border-gray-300 p-6  rounded-lg cursor-pointer  ">
            <a href={props.linked} target="_blank" rel="noopener noreferrer">
              <section className="bg-white grid lg:grid-rows-2 mb-4 rounded-lg">
                <div className=" place-self-center">
                  <Image
                    width={120}
                    height={120}
                    className=" rounded-full"
                    src={`/images/${props.img}`}
                    alt={`${props.menu} Image`}
                  />
                  <span className=" mt-5 font-semibold text-xl lg:text-2xl  grid text-center">
                    {props.name}
                  </span>
                </div>
                <p className="p-2 text-md lg:text-xl leading-8 mx-auto text-center">
                  Lorem Ipsum is simply dummy text of the print book, it has
                  survived not only five centuries, but also the leap
                </p>
              </section>
            </a>
          </div>
        </div>
      </>
    );
};

Testimonials.propTypes = {
    id: PropTypes.number, // Change the prop type to number if it's an integer
    img: PropTypes.string,
    name : PropTypes.string,
    testimonial: PropTypes.string
    
};

export default Testimonials;
