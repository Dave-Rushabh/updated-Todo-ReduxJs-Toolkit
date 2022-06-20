import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    add: (state) => {
      state.count = state.count + 1;
    },
    sub: (state) => {
      state.count = state.count - 1;
    },
  },
});

export default counterSlice.reducer;
export const { add, sub } = counterSlice.actions;
