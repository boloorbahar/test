import { createSlice } from "@reduxjs/toolkit";

const router = {
  activeMenu: "/welcome",
  prevMenu: null,
};

const routerSlice = createSlice({
  name: "router",
  initialState: router,
  reducers: {
    setPath: (state, action) => {
      state.prevMenu = state.activeMenu;
      state.activeMenu = action.payload;
    },
  },
});

export const routerReducer = routerSlice.reducer;
export const { setPath } = routerSlice.actions;
