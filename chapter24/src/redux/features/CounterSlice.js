import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "count",
  initialState: { value: 0 }, // State is now an object
  reducers: {
    // Immer safely tracks these object mutations!
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementbyAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementbyAmount } = counterSlice.actions;
export default counterSlice.reducer;