import React from 'react'
import Image from 'next/image'
import styles from './blog.module.css'
import { IoMdTime } from "react-icons/io";
import { TfiPencilAlt } from "react-icons/tfi";

const BlogPage = () => {
  return (
    <div className="pageMargin  pb-20">
      <div className="flex flex-col lg:flex-row justify-evenly lg:mt-0 mt-20 mx-3 lg:mx-24 gap-14">
        <div className="flex-1">
          <h1 className=" text-2xl lg:text-4xl font-extrabold ">
            The Irresistible Pleasure of Pizza: A Culinary Delight
          </h1>
          <div
            className={`w-full mt-5 lg:mt-10 border ${styles.blogBackground}`}
          ></div>
          <figcaption className="flex flex-row gap-2 mt-5 text-sm text-gray-400">
            <IoMdTime className="text-xl" />
            17th December, 2023. <TfiPencilAlt className="text-lg" /> Kemi
            Oluwadahunsi
          </figcaption>

          <div className="flex flex-col gap-5 mt-10">
            <desc className="text-md lg:text-xl text-gray-500">
              Pizza, the universally loved dish that transcends cultural
              boundaries, is more than just a meal—it&apos;s a delightful
              experience that tantalizes our taste buds and brings people
              together. In this ode to the divine combination of crust, sauce,
              cheese, and toppings, let&apos;s explore the sheer deliciousness
              of pizza and savor the best ways to indulge in this culinary
              masterpiece.
            </desc>

            <h2 className="font-bold text-xl lg:text-3xl">
              A Symphony of Flavors: The Perfect Pizza
            </h2>
            <p className="text-gray-500 text-md">
              At its core, pizza is a harmonious blend of simple ingredients
              that come together to create a symphony of flavors. The crispy
              crust, the rich tomato sauce, the gooey cheese, and the carefully
              chosen toppings all contribute to the divine taste that has made
              pizza a global sensation.
            </p>

            <h3 className="font-bold text-lg lg:text-2xl">
              Crust: The Foundation of Goodness
            </h3>

            <p className="text-gray-500 text-md lg:text-lg">
              A great pizza begins with the crust—a delicate balance between
              crispy and chewy. Whether you prefer a thin, Neapolitan-style
              crust or a thick, doughy Chicago-style base, the crust sets the
              stage for the gastronomic journey ahead. Each bite should be a
              perfect marriage of texture and taste.
            </p>

            <h3 className="font-bold text-lg lg:text-2xl">
              Sauce: The Heart of the Matter
            </h3>

            <p className="text-gray-500 text-md lg:text-lg">
              The sauce, often made from sun-ripened tomatoes and seasoned with
              a blend of herbs and spices, adds a burst of freshness to every
              slice. From classic marinara to pesto or barbecue, the sauce is
              the heart of the pizza, infusing it with character and depth. A
              good pizza sauce is like a secret ingredient that ties everything
              together. Tangy, aromatic, and rich, it complements the crust and
              sets the stage for the toppings to shine.
            </p>

            <h3 className="font-bold text-lg lg:text-2xl">
              Cheese: Gooey Goodness
            </h3>

            <p className="text-gray-500 text-md lg:text-lg">
              Ah, the cheese! The gooey, melted layer that binds everything
              together. Whether you&apos;re a fan of the stretchy mozzarella on
              a Margherita or the bold flavors of gorgonzola on a gourmet pizza,
              the cheese transforms each bite into a luxurious experience. The
              stretchy, gooey texture of melted mozzarella or the sharpness of
              Parmesan, each bite is a testament to the art of cheese
              perfection.
            </p>

            <h3 className="font-bold text-lg lg:text-2xl">
              Toppings: A Personal Touch
            </h3>

            <p className="text-gray-500 text-md lg:text-lg">
              Toppings are where creativity takes center stage. From the
              simplicity of pepperoni to the exotic flair of artichokes and
              truffle oil, toppings allow you to tailor your pizza to your
              unique palate. Experimentation is not only allowed but encouraged!
              From classic Margherita to adventurous combinations like BBQ
              chicken or pineapple, pizza toppings offer a playground for
              creativity. Fresh vegetables, savory meats, and aromatic herbs
              come together to create a flavor explosion.
            </p>

            <h2 className="font-bold text-2xl lg:text-3xl">
              The Art of Eating Pizza
            </h2>

            <h3 className="font-bold text-lg lg:text-2xl">
              1. Embrace the Fold
            </h3>

            <p className="text-gray-500 text-md lg:text-lg">
              For New Yorkers, folding a slice is an art form. Embrace the fold
              to create a handheld masterpiece. The fold not only enhances the
              eating experience but also prevents toppings from sliding off.
            </p>

            <h3 className="font-bold text-lg lg:text-2xl">
              2. Experiment with Dipping Sauces
            </h3>

            <p className="text-gray-500 text-md lg:text-lg">
              Dare to venture beyond traditional pizza consumption by
              experimenting with dipping sauces. Ranch, garlic butter, or
              balsamic glaze can elevate your pizza experience to new heights.
            </p>

            <h3 className="font-bold text-lg lg:text-2xl">3. Savor Slowly</h3>

            <p className="text-gray-500 text-md lg:text-lg">
              In a world that moves at a fast pace, pizza encourages us to slow
              down and savor each bite. Take your time, appreciate the flavors,
              and indulge in the sheer joy that a well-made pizza brings.
            </p>

            <h2 className="font-bold text-lg lg:text-2xl">In Conclusion</h2>

            <p className="text-gray-500 text-md lg:text-lg">
              In conclusion, pizza is more than just a dish; it&apos;s a
              celebration of flavors, a testament to culinary creativity, and a
              source of joy for people worldwide. So, the next time you find
              yourself in the presence of a piping hot pizza, remember to
              embrace the moment, savor each bite, and revel in the magic that
              is pizza.
              <span className="block pt-10 italic text-xl font-bold">
                Buon appetito!
              </span>
            </p>
          </div>
        </div>

        <section className="flex flex-col gap-2">
          <h3 className="text-xl font-bold">Most Recent Blogs</h3>
          <div className="flex flex-col gap-2">
            <div className="border border-gray-300  cursor-pointer">
              <h4 className="font-bold px-3">
                DIY Pizza Party: Crafting the Perfect Homemade Pizza
              </h4>
              <Image
                src="/images/product3.jpg"
                alt=""
                width={100}
                height={100}
              />
            </div>
            <div className="border border-gray-300 cursor-pointer">
              <h4 className="font-bold px-3">
                Beyond Pepperoni: Unusual and Delicious Pizza Toppings
              </h4>
              <Image
                src="/images/pizza2Copy.png"
                alt=""
                width={100}
                height={100}
              />
            </div>
            <div className="border border-gray-300 cursor-pointer">
              <h4 className="font-bold px-3">
                The Evolution of Pizza: From Naples to New York
              </h4>
              <Image
                src="/images/pizza-pieces.png"
                alt=""
                width={100}
                height={100}
              />
            </div>
            <div className="border border-gray-300 cursor-pointer">
              <h4 className="font-bold px-3">
                Pizza Around the World: A Global Culinary Journey
              </h4>
              <Image
                src="/images/pizzona.png"
                alt=""
                width={100}
                height={100}
                className=""
              />
            </div>
          </div>
        </section>
        <section></section>
      </div>
    </div>
  );
}

export default BlogPage