import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import cartReducer from "./cartSlice";
import viewReducer from "./viewSlice";

const store = configureStore({
reducer:{
    // cart: cartSlice
    cart: cartReducer,
    view: viewReducer,
}
})

export default store;