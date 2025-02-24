import { createSlice } from "@reduxjs/toolkit";

const fund = {
  data: null,
};

const fundSlice = createSlice({
  name: "fund",
  initialState: fund,
  reducers: {
    setFundData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const fundReducer = fundSlice.reducer;
export const { setFundData } = fundSlice.actions;
