import config from "utils/globals";

export const FundInfoListData = (data) => {
  return [
    { name: "Total AUM", value: `${config.numberSeparator(data?.aum)} USDT` },
    { name: "Fixed Fee", value: `${data?.fixed_fee}%` },
    { name: "Performance Fee", value: `${data?.performance_fee}%` },
    { name: "Unit Price", value: `${config.numberSeparator(data?.unit_price)} USDT` },
    { name: "Risk Type", value: data?.risk_type },
    { name: "Lock Time", value: data?.lock_time },
    { name: "Penalty", value: data?.penalty },
  ];
};
