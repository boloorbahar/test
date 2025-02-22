import { createSlice } from "@reduxjs/toolkit";

const profile = {
  profile: null,
  pass: null,
  nextRoute: null,
  permissions: [],
};

const profileSlice = createSlice({
  name: "profile",
  initialState: profile,
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
    setPassInfo: (state, action) => {
      state.pass = action.payload;
    },
    setPassNextRouteInfo: (state, action) => {
      state.nextRoute = action.payload;
    },
    setPermissionsInfo: (state, action) => {
      state.permissions = action.payload;
    },
  },
});

export const profileReducer = profileSlice.reducer;
export const {
  setProfile,
  setPassInfo,
  setPassNextRouteInfo,
  setPermissionsInfo,
} = profileSlice.actions;
