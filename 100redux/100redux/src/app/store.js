import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slice/CartSlice";
import productReducer from "../slice/ProductSlice"
export const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productReducer
    }
});