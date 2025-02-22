import { setProfile, setPassInfo,setPassNextRouteInfo,setPermissionsInfo } from "./slice";

export const setProfileData = (data) => (dispatch) => {
  dispatch(setProfile(data));
};

export const setPass = (data) => (dispatch) => {
  dispatch(setPassInfo(data));
};

export const setPassNextRoute = (data) => (dispatch) => {
  dispatch(setPassNextRouteInfo(data));
};
export const setPermissions = (data) => (dispatch) => {
  dispatch(setPermissionsInfo(data));
};
