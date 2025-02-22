import memeFund from "assets/images/meme-fund.png";
import whaleFund from "assets/images/whale-fund.png";
import metalFund from "assets/images/metal-fund.png";

export const userAssetsData = () => {
  return [
    {
      id: 1,
      icon: memeFund,
      title: "Meme Fund",
      type: "Potential Meme",
      status: "done",
      today_return: -2,
      total_return: 23,
      coin_type: "Meme coin",
      short_name: "Meme",
      unit: 124852,
      amount: 230,
      aum: 12456,
      fixed_fee: 1,
      performance_fee: 20,
      unit_price: 1,
      risk_type: "High Risk Strategy",
      lock_time: "3 Month",
      penalty: "3% of cache out",
    },
    {
      id: 2,
      icon: whaleFund,
      title: "Whale Fund",
      type: "Crypto Hold",
      status: "done",
      today_return: 3,
      total_return: 58,
      coin_type: "Alt coin",
      short_name: "Whale",
      unit: 124852,
      amount: 230,
      aum: 12456,
      fixed_fee: 2,
      performance_fee: 30,
      unit_price: 2,
      risk_type: "Low Risk Strategy",
      lock_time: "2 Month",
      penalty: "5% of cache out",
    },
    {
      id: 3,
      icon: metalFund,
      title: "Metal Fund",
      type: "Precious Metals",
      status: "pending",
      today_return: 0,
      total_return: 12,
      coin_type: "Metal coin",
      short_name: null,
      unit: null,
      amount: null,
      aum: 12456,
      fixed_fee: 3,
      performance_fee: 40,
      unit_price: 3,
      risk_type: "High Risk Strategy",
      lock_time: "1 Month",
      penalty: "8% of cache out",
    },
  ];
};

export const userTransactionsData = () => {
  return [
    { fund_name: "Meme", amount: 10000, type: "buy" },
    { fund_name: "Meme", amount: 10000, type: "sell" },
    { fund_name: "Meme", amount: 10000, type: "sell" },
  ];
};
