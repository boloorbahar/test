import config from "utils/globals";

const AssetInfo = ({ data }) => {
  const handleReturn = () => {
    return (
      <span
        className={`${
          data?.today_return < 0 ? "text-[#FB4162]" : "text-[#16B24B]"
        } font-light `}
      >
        {data?.today_return}%
      </span>
    );
  };

  return (
    <div className="rounded-3xl bg-[#2B213E] p-6 border border-[#58545f] grid grid-cols-12 gap-1 text-white ">
      <img src={data?.icon} className="w-20 h-20 col-span-4" />
      <div className="col-span-8 flex flex-col space-y-3">
        <span className="font-bold text-xl leading-6">{data?.title}</span>
        <span className="font-normal text-[16px] leading-5">
          Total Balance :{" "}
          <span>
            {config.numberSeparator(data?.amount)||0}{" "}
            <span className="font-light text-xs leading-4">USDT</span>
          </span>
        </span>
        <span className="font-normal text-[16px] leading-5">
          Total Units : {config.numberSeparator(data?.unit)||0}
        </span>
        <span className="font-normal text-[16px] leading-5">
          Daily Return : {handleReturn()}
        </span>
      </div>
    </div>
  );
};
export default AssetInfo;
