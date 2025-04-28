import { createSlice } from "@reduxjs/toolkit";

const fund = {
  data: null,
  id: null,
  detail: null,
};

const fundSlice = createSlice({
  name: "fund",
  initialState: fund,
  reducers: {
    setFundData: (state, action) => {
      state.data = action.payload;
    },
    setFundDetailData: (state, action) => {
      state.detail = action.payload;
    },
    setFundIdData: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const fundReducer = fundSlice.reducer;
export const { setFundData, setFundIdData, setFundDetailData } =
  fundSlice.actions;
