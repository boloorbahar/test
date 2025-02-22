import { ProfileItemsData } from "../services/data.transformers";
import arrow from "assets/images/arrow-right.svg";

const ProfileItems = ({ handleItemClick }) => {
  const renderItems = () => {
    return ProfileItemsData()?.map((item) => (
      <div
        className="rounded-xl bg-[#0F0F0F] border border-[#58545f] px-6 py-3 flex items-center justify-between"
        onClick={() => handleItemClick(item?.link)}
      >
        <span className="font-medium text-[#E9EBF8] text-sm leading-4">
          {item?.title}
        </span>
        <img src={arrow} className="w-5 h-5" />
      </div>
    ));
  };
  return <div className="flex flex-col space-y-3 mt-8">{renderItems()}</div>;
};
export default ProfileItems;
