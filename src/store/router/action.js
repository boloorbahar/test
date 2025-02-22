import { setPath } from "./slice";

export const setRouterPath = (data) => (dispatch) => {
  dispatch(setPath(data));
};
