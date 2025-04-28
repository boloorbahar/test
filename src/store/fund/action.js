import { setFundData, setFundIdData, setFundDetailData } from "./slice";

export const setFund = (data) => (dispatch) => {
  dispatch(setFundData(data));
};

export const setFundId = (data) => (dispatch) => {
  dispatch(setFundIdData(data));
};

export const setFundDetail = (data) => (dispatch) => {
  dispatch(setFundDetailData(data));
};
