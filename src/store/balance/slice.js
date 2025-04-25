import { createSlice } from "@reduxjs/toolkit";

const balance = {
  data: null,
};

const balanceSlice = createSlice({
  name: "balance",
  initialState: balance,
  reducers: {
    setBalanceData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const balanceReducer = balanceSlice.reducer;
export const { setBalanceData } = balanceSlice.actions;
