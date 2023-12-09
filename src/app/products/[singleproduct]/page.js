import { ProductContent } from "@/ProductContent";
export async function generateStaticParams() {
  const products = await fetch(
    "https://pizza-ordering-anno.onrender.com/api/products"
  ).then((res) => res.json());

  return products.map((product) => ({
    singleproduct: product.singleproduct,
  }));
}

 async function getProduct(singleproduct) {
  const res = await fetch(
    `https://pizza-ordering-anno.onrender.com/api/products/${singleproduct}`)
    const data = await res.json();
    return data
  
 }

const Productpage = async ({ params }) => {
  const product = await getProduct(params.singleproduct)
  console.log(product);

  return (
    <>
      <ProductContent img = {product.img} prices= {product.prices} title = {product.title}  desc= {product.desc} extraOptions={product.extraOptions}/>
     
    </>
  )
};


export default Productpage;
