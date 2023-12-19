import Homepage from "@/app/Homepage";



const getProductsData = async () => {
  const res = await fetch(
    "https://pizza-ordering-anno.onrender.com/api/products"
  );
  return res.json();
};


export default async function  ProductSection (){
  const  pproducts = await getProductsData();

  return (
    <>
      <Homepage pproducts={pproducts} />
    </>
  ); 
}



