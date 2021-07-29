import { createSlice } from "@reduxjs/toolkit";

export const buyerSlice = createSlice({
  name: "buyer",
  initialState: [],
  reducers: {
    addInform: (state, { payload }) => {
      state.push(payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addInform } = buyerSlice.actions;

export default buyerSlice.reducer;
