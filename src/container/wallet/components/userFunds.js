import { userAssetsData } from "container/services/service";
import config from "utils/globals";

const UserFunds = ({ onFundClick }) => {
  const renderFunds = () => {
    return userAssetsData()
      .filter((i) => i.status !== "pending")
      ?.map((item) => (
        <div
          className="rounded-xl bg-[#0F0F0F] border border-[#58545f] px-6 py-3 grid grid-cols-12 gap-2"
          onClick={() => onFundClick(item?.id)}
        >
          <img src={item?.icon} className="w-10 h-10 rounded-full col-span-2" />
          <div className="col-span-10 text-[#E9EBF8]">
            <div className="flex justify-between items-center">
              <span className="font-bold text-sm leading-4">
                {item?.short_name}
              </span>
              <span className="font-extralight text-sm leading-3">
                {config?.numberSeparator(item?.unit)}{" "}
                <span className="ml-1 text-[10px] ">unit</span>
              </span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="font-extralight text-xs leading-3">
                {item?.coin_type}
              </span>
              <span className="font-extralight text-xs leading-3">
                {config?.numberSeparator(item?.amount)} <span>$</span>
              </span>
            </div>
          </div>
        </div>
      ));
  };
  return (
    <div className="mt-8">
      <span className="before:content-['•'] before:me-2 mt-3 text-[16px] leading-5 text-white">
        Funds
      </span>
      <div className="mt-3 flex flex-col space-y-3">{renderFunds()}</div>
    </div>
  );
};
export default UserFunds;
