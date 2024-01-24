
import ProductsClientSide from "../Products-clientsSide";

const baseUrl = "https://pizza-ordering-anno.onrender.com/api/products";


const getProductsData = async () => {
  const res = await fetch(baseUrl);
  return res.json();
};

const createProduct = async (newPizzaObject) => {
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPizzaObject),
    });

    console.log("Response Status:", response.status);

    if (!response.ok) {
      const errorMessage = await response.text();
      console.error(`Error creating product: ${errorMessage}`);
      throw new Error(`Error creating product: ${errorMessage}`);
    }

    const responseData = await response.json();
    console.log("Response Data:", responseData);

    return responseData;
  } catch (error) {
    console.error("Error in createProduct:", error.message);
    throw error;
  }
};



export default async function  Product (){
  const pproducts = await getProductsData();



  return (
    <>
      <ProductsClientSide pproducts={pproducts} />
    </>
  );
}
export { getProductsData, createProduct };











  