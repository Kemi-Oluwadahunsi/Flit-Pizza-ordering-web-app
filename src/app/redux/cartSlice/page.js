import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
 
  reducers: {
    addProduct: (state, action) => {
      console.log('Add Product Action Payload:', action.payload);

      const { extras, ...productData } = action.payload;

      // If extras is an array, add it to the productData
      if (extras) {
        productData.extras = extras;
      }

      state.products.push(productData);
      state.quantity += 1;
      state.total += productData.price * productData.quantity;
    },

    reset: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const {addProduct, reset} = cartSlice.actions;
export default cartSlice.reducer;