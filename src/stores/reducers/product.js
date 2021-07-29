import { createSlice } from "@reduxjs/toolkit";
import products from "../../_mocks_/products";

export const productSlice = createSlice({
  name: "products",
  initialState: products,
});

export default productSlice.reducer;
