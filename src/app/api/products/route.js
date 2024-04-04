// export default async function handler(req, res) {
//   const data = req.body
//   const id = await createItem(data)
//   res.status(200).json({ _id })
// }


// export default function handler(req, res) {
//   if (req.method === 'GET') {
//     res.status(200).json(products);
//   } else if (req.method === 'POST') {
//     const pizzaData = req.body.newPizzaObject;
//     const newPizzaObject = {
//       img: pizzaData.img || "",
//       title: pizzaData.title,
//       prices: pizzaData.prices,
//       desc: pizzaData.desc,
//       extras: pizzaData.extras,
//       _id: Date.now(),
//       _v: 0,
//     };
//     products.push(newPizzaObject);
//     res.status(201).json(newPizzaObject);
//   }
// }

// import axios from "axios";

// const proxyHandler = async (req, res) => {
//   try {
//     const response = await axios({
//       method: req.method,
//       url: `http://localhost:8080/https://pizza-ordering-anno.onrender.com/api/products${req.url}`,
//       data: req.body,
//       headers: req.headers,
//     });
//     res.status(response.status).json(response.data);
//   } catch (error) {
//     res.status(error.response.status).json(error.response.data);
//   }
// };

// export default proxyHandler;



   

   