import { setProfile } from "./slice";

export const setProfileData = (data) => (dispatch) => {
  dispatch(setProfile(data));
};
