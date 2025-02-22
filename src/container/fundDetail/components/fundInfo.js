import { List } from "antd";
import { FundInfoListData } from "../services/data.transformers";

const FundInfo = ({data}) => {
  const renderListItems = (item) => {
    return (
      <List.Item className="flex justify-between  !text-white even:bg-[#E8DEF8] !px-5 even:!text-[#667685] text-xs font-normal leading-5">
        <div className="">{item.name}:</div>
        <div>{item.value}</div>
      </List.Item>
    );
  };

  return (
    <div className="rounded-3xl p-6 bg-[#1A1E28] border border-[#58545f] text-white mt-8">
      <span className="font-bold text-xl leading-6">
        What is {data?.title}?
      </span>
      <p className="my-10 font-normal text-[16px] leading-5">
        The main focus of "{data?.title}" is to create an investment portfolio
        in crypto {data?.coin_type}. In the "{data?.title}" portfolio, we
        allocate assets to smaller projects with higher growth potential so that
        we can take advantage of investment opportunities with high profits
      </p>

      <List
        itemLayout="horizontal"
        dataSource={FundInfoListData(data)}
        className="border border-[#4F378A] rounded-lg py-0.5 bg-[#4A4459]"
        renderItem={(item) => renderListItems(item)}
      />
    </div>
  );
};
export default FundInfo;
