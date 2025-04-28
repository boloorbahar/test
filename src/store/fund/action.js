import { setFundData, setFundIdData } from "./slice";

export const setFund = (data) => (dispatch) => {
  dispatch(setFundData(data));
};

export const setFundId = (data) => (dispatch) => {
  dispatch(setFundIdData(data));
};