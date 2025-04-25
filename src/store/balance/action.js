import { setBalanceData } from "./slice";

export const setBalance = (data) => (dispatch) => {
  dispatch(setBalanceData(data));
};
