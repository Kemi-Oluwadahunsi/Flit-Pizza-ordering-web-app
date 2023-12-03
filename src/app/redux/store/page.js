import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "../cartSlice/page";

  configureStore({
    reducer: {
        cart: cartReducer,
    },
})

export default configureStore