import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "../cartSlice/page";

export default configureStore({
    reducer: {
        cart: cartReducer,
    },
})