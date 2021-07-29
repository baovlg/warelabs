import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    increment: (state, { payload }) => {
      let index = state?.findIndex((s) => s.id === payload.id);
      if (index === -1) {
        state.push({ ...payload, quantity: 1 });
      } else {
        state[index].quantity += 1;
      }
    },
    decrement: (state, { payload }) => {
      let index = state?.findIndex((s) => s.id === payload.id);
      if (state[index].quantity >= 1) {
        state[index].quantity -= 1;
      }
    },
    incrementByAmount: (state, { payload }) => {
      let index = state?.findIndex((s) => s.id === payload.item.id);
      state[index].quantity = parseInt(payload.amount);
    },
    remove: (state, { payload }) => {
      let index = state?.findIndex((s) => s.id === payload.id);
      if (index > -1) {
        state.splice(index, 1);
      }
    },
    clean: (state) => {
      state = [];
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, remove, clean } =
  cartSlice.actions;

export default cartSlice.reducer;
