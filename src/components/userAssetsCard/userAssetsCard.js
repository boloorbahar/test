import config from "utils/globals";
import memeFund from "assets/images/meme-fund.jpeg";
import whaleFund from "assets/images/whale-fund.jpeg";

const UserAssetCard = ({ data, hasReturn, balance }) => {

  const handleReturn = () => {
    return (
      <span
        className={`${data?.daily_return?.includes("-")
          ? "text-[#FB4162]"
          : "text-[#16B24B]"
          } font-light `}
      >
        {data?.daily_return}
      </span>
    );
  };

  const renderImages = (name) => {
    switch (name) {
      case "680eab03c600cd283e3e4de6":
        return memeFund;
      case "680eab305c3b44f2299e69ce":
        return whaleFund;
      default:
        return memeFund;
    }
  };

  return (
    <div className="rounded-3xl bg-[#2B213E] p-6 border border-[#58545f] grid grid-cols-12 gap-1 text-white ">
      <img src={renderImages(data?.id)} className="w-20 h-20 col-span-4" />
      <div className="col-span-8 flex flex-col space-y-3">
        <span className="font-bold text-xl leading-6">{data?.dynamic_name}</span>
        <span className="font-normal text-[16px] leading-5">
          Total Balance :{" "}
          <span>
            {balance?.balance_unit_usdt
              ? config?.numberSeparator(parseInt(balance?.balance_unit_usdt))
              : 0}{" "}
            <span className="font-light text-xs leading-4">USDT</span>
          </span>
        </span>
        <span className="font-normal text-[16px] leading-5">
          Total Units :{" "}
          {balance?.balance_unit_available
            ? config?.numberSeparator(parseInt(balance?.balance_unit_available))
            : 0}
        </span>
        {hasReturn && (
          <span className="font-normal text-[16px] leading-5">
            Daily Return : {handleReturn()}
          </span>
        )}
      </div>
    </div>
  );
};
export default UserAssetCard;
