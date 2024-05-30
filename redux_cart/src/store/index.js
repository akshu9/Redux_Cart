import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/card_slice";

const store=configureStore({
    reducer:{
        cart:cartReducer
    }
})

export default store