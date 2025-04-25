import config from "utils/globals";

export const FundInfoListData = (data, chartData) => {
  return [
    { name: "Total AUM", value: `${data?.total_aum} USDT` },
    { name: "Fixed Fee", value: `${data?.fixed_fee}` },
    { name: "Performance Fee", value: `${data?.performance_fee}` },
    {
      name: "Unit Price",
      value: `${config.numberSeparator(
        chartData[chartData?.length - 1]?.price_per_unit
      )} USDT`,
    },
    { name: "Risk Type", value: data?.risk_type },
    { name: "Lock Time", value: data?.lock_time },
    { name: "Penalty", value: data?.penalty },
  ];
};
