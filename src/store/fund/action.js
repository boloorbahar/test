import { setFundData } from "./slice";

export const setFund = (data) => (dispatch) => {
  dispatch(setFundData(data));
};
