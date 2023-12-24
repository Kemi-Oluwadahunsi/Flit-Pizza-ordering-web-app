import { ProductContent } from "@/app/ProductContent";

export async function generateStaticParams() {
  try {
    const products = await fetch(
      "https://pizza-ordering-anno.onrender.com/api/products"
    ).then((res) => res.json());

    // Check if products is an array before using map
    if (Array.isArray(products)) {
      return products.map((product) => ({
        singleproduct: product.singleproduct,
      }));
    } else {
      console.error("Products data is not an array:", products);
      return [];
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

async function getProduct(singleproduct) {
  try {
    const res = await fetch(
      `https://pizza-ordering-anno.onrender.com/api/products/${singleproduct}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

//   return products.map((product) => ({
//     singleproduct: product.singleproduct,
//   }));
// }

//  async function getProduct(singleproduct) {
//   const res = await fetch(
//     `https://pizza-ordering-anno.onrender.com/api/products/${singleproduct}`)
//     const data = await res.json();
//     return data
  
//  }

const Productpage = async ({ params }) => {
  const product = await getProduct(params.singleproduct)
  console.log(product);

  return (
    <>
      <ProductContent 
      img = {product.img}
      prices= {product.prices} 
      title = {product.title}  
      desc= {product.desc} 
      extraOptions={product.extraOptions}/>
    </>
  )
};


export default Productpage;
