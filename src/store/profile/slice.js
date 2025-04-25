import { createSlice } from "@reduxjs/toolkit";

const profile = {
  profile: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState: profile,
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export const profileReducer = profileSlice.reducer;
export const { setProfile } = profileSlice.actions;
