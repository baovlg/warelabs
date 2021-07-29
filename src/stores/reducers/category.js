import { createSlice } from "@reduxjs/toolkit";
import categories from "../../_mocks_/categories";

export const categorySlice = createSlice({
  name: "categories",
  initialState: { list: categories, categoryIdSelected: 1 },
  reducers: {
    setCategoryIdSelected: (state, { payload }) => {
      state.categoryIdSelected = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCategoryIdSelected } = categorySlice.actions;

export default categorySlice.reducer;
