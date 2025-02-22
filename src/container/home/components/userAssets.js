import { userAssetsData } from "container/services/service";

const UserAssets = ({ onFundClick }) => {
  const statusType = (item) => {
    return item?.status === "pending" ? (
      <span className="text-[#B2A216] font-light text-sm leading-4">
        Pending...
      </span>
    ) : (
      <span className="text-sm leading-4 font-extralight">
        Today{"  "}
        <span
          className={`${
            item?.today_return < 0 ? "text-[#FB4162]" : "text-[#16B24B]"
          } font-light `}
        >
          {item?.today_return}%
        </span>
      </span>
    );
  };
  const renderAssets = () => {
    return userAssetsData()?.map((item) => (
      <div
        className="rounded-xl bg-[#0F0F0F] border border-[#58545f] p-6 grid grid-cols-12 gap-2"
        onClick={() => onFundClick(item?.id)}
      >
        <img src={item?.icon} className="rounded-full h-14 w-14  col-span-3" />
        <div className="flex flex-col items-start text-[#E9EBF8] w-full col-span-9 ">
          <span className="font-bold text-xl leading-6">{item?.title}</span>
          <div className="flex justify-between items-center mt-[10px] w-full">
            <span className="rounded-2xl border border-[#292E33] py-1 px-2 before:content-['•'] font-light text-sm leading-4 text-center">
              <span className="ml-1">{item.type}</span>
            </span>
            {statusType(item)}
          </div>
        </div>
      </div>
    ));
  };
  return <div className="flex flex-col space-y-3 mt-8">{renderAssets()}</div>;
};
export default UserAssets;
