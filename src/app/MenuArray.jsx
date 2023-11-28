import Cards from "../app/Specials";

const CardArray = [
  {
    id: 1,
    img: "loaf-pizza.jpg",
    menu: "Burga Pizza",
    price: "20",
    description: "This burga pizza",
  },

  {
    id: 2,
    img: "loaf-pizza.jpg",
    menu: "Burga pizza",
    price: "20",
    description: "This burga pizza",
  },

  {
    id: 3,
    img: "pizzaCOpy.png",
    menu: "New Pizza",
    price: "10",
    description: "This new pizza",
  },
  {
    id: 4,
    img: "pizza2Copy.png",
    menu: "Greek Pizza",
    price: "40",
    description: "This greek pizza",
  },
];

const Card = ({ product }) => {
  return (
    <Link href={`/product/${product.id}`} passHref>
      <Cards
        id={product.id}
        img={product.img}
        menu={product.menu}
        price={product.price}
        description={product.description}
      />
    </Link>
  );
};

export default CardArray;
