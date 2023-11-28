// import dbConnect from "../../utilities/page";
// import Product from "../../models/product/page";

// export default async function handler(req, res) {
//     console.log("API Route hit:", req.method, req.url);
//   const { method } = req;

//   //   const token = cookies.token;
//   // cookies

//   dbConnect();

//   //   if (method === "GET") {
//   //     try {
//   //       const products = await Product.find();
//   //       res.status(200).json(products);
//   //     } catch (err) {
//   //       res.status(500).json(err);
//   //     }
//   //   }

//   if (method === "POST") {
//     // if (!token || token !== process.env.token) {
//     //   return res.status(401).json("Not authenticated!");
//     // }
//     try {
//       const product = await Product.create(req.body);
//       console.log("Product created:", product);
//       res.status(201).json(product);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   }
// }
