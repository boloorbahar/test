import config from "utils/globals";
import memeFund from "assets/images/meme-fund.jpeg";
import whaleFund from "assets/images/whale-fund.jpeg";

const UserAssets = ({ onFundClick, data }) => {
  const efficiencyType = (name, value) => {
    // return item?.status === "pending" ? (
    //   <span className="text-[#B2A216] font-light text-sm leading-4">
    //     Pending...
    //   </span>
    // ) :
    return (
      <span className="text-sm leading-4 font-extralight ">
        {name}
        <span
          className={`${value?.includes("-") ? "text-[#FB4162]" : "text-[#16B24B]"
            } font-light ml-2`}
        >
          {value}
        </span>
      </span>
    );
  };

  const renderType = (type) => {
    return (
      <div className="flex flex-col space-y-3">
        {type?.map((item) => (
          <span className="rounded-2xl border border-[#292E33] py-1 px-2 before:content-['•'] font-light text-sm leading-4 text-center">
            <span className="ml-1">{item}</span>
          </span>
        ))}
      </div>
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

  const renderAssets = () => {
    return (
      data?.length > 0 &&
      config.sortArray(data, "priority")?.map((item) => (
        <div
          key={item?.id}
          className="rounded-xl bg-[#0F0F0F] border border-[#58545f] p-6 grid grid-cols-12 "
          onClick={() => onFundClick(item?.id)}
        >
          <img
            src={renderImages(item?.id)}
            className="rounded-full h-14 w-14 col-span-3"
          />
          <div className="flex flex-col items-start text-[#E9EBF8] w-full col-span-5 ">
            <span className="font-bold text-xl leading-6">
              {item?.dynamic_name}
            </span>
            <div className="flex justify-between items-center mt-[10px] w-full">
              {renderType(item?.feature)}
            </div>
          </div>
          <div className="flex flex-col items-start text-[#E9EBF8] w-full col-span-4 justify-between my-2">
            {efficiencyType("Today", item?.daily_return)}
            {efficiencyType("Monthly", item?.monthly_return)}
          </div>
        </div>
      ))
    );
  };
  return <div className="flex flex-col space-y-3 mt-8">{renderAssets()}</div>;
};
export default UserAssets;
