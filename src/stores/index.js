import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reduxs/reducers";

export const store = configureStore({
  reducer: { cart: cartReducer },
});
