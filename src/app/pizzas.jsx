import axios from "axios";
const baseUrl = "https://pizza-ordering-anno.onrender.com/api/orders";

const ordersApi = {
  create: (newPizzaOrder) => axios.post(baseUrl, newPizzaOrder),
  getAll: () => axios.get(`${baseUrl}/6566e3d12e705f9a58da7f84`),
  update: (_id, updatedPizzaOrder) =>
    axios.put(`${baseUrl}/${_id}`, updatedPizzaOrder),
};

export default ordersApi;
