import memeFund from "assets/images/meme-fund.jpeg";
import whaleFund from "assets/images/whale-fund.jpeg";
import config from "utils/globals";

const UserFunds = ({ onFundClick, data }) => {
  const renderImages = (name) => {
    switch (name) {
      case "6804eff18a4f0138c1320654":
        return memeFund;
      case "6804f04e8a4f0138c1320655":
        return whaleFund;
      default:
        return memeFund;
    }
  };

  const renderFunds = () => {
    return (
      // .filter((i) => i.status !== "pending")
      data?.balances?.map((item) => (
        <div
          className="rounded-xl bg-[#0F0F0F] border border-[#58545f] px-6 py-3 grid grid-cols-12 gap-2"
          onClick={() => onFundClick(item?.chest)}
        >
          <img
            src={renderImages(item?.chest)}
            className="w-10 h-10 rounded-full col-span-2"
          />
          <div className="col-span-10 text-[#E9EBF8]">
            <div className="flex justify-between items-center">
              <span className="font-bold text-sm leading-4">
                {item?.dynamic_name}
              </span>
              <span className="font-extralight text-sm leading-3">
                {config?.numberSeparator(parseInt(item?.balance_unit_usdt))}{" "}
                <span className="ml-1 text-[10px] ">unit</span>
              </span>
            </div>
            <div className="flex justify-between items-center mt-2">
              {item?.feature?.map((i) => (
                <span className="font-extralight text-xs leading-3">{i}</span>
              ))}
              <span className="font-extralight text-xs leading-3">
                {config?.numberSeparator(
                  parseInt(item?.balance_unit_available)
                )}{" "}
                <span>$</span>
              </span>
            </div>
          </div>
        </div>
      ))
    );
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
