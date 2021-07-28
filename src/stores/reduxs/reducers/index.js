import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [1, 2],
  reducers: {
    increment: (state, payload) => {
      state.filter((payload) => {});
      state.value += 1;
      state = [];
    },
    decrement: (state) => {
      state.filter((payload) => {});
      state.value -= 1;
      state = [];
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
      state = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = cartSlice.actions;

export default cartSlice.reducer;
