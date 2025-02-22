import { userTransactionsData } from "container/services/service";
import config from "utils/globals";

const TransactionItems = () => {
  const renderTransactions = () => {
    return userTransactionsData()?.map((item) => (
      <div className="rounded-xl bg-[#0F0F0F] border border-[#58545f] px-6 py-3  flex justify-between items-center">
        <div className="flex flex-col space-y-1 text-[#E9EBF8]">
          <span className="font-bold text-sm leading-4">{item?.fund_name}</span>
          <span className="font-light text-xs leading-4 ">
            {config.numberSeparator(item.amount)}{" "}
            <span className="font-extralight text-[10px] leading-3">USDT</span>
          </span>
        </div>
        <div className="pt-1 px-4 text-center rounded-lg border border-[#E8DEF8] text-[#E8DEF8] font-normal text-sm leading-4 w-16 h-7">
          {item?.type}
        </div>
      </div>
    ));
  };

  return (
    <div className="mt-8">
      <div className=" flex flex-col space-y-3">{renderTransactions()}</div>
    </div>
  );
};
export default TransactionItems;
