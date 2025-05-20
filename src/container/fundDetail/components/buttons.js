import { Button } from "antd";
import { WarningTwoTone } from "@ant-design/icons";

const Buttons = ({ data, onClick }) => {
  const renderHint = () => {
    return (
      !data?.balance_unit_available && (
        <div className=" text-white col-span-12 ">
          <WarningTwoTone className="mr-2" />
          Full, message the{" "}
          <a href="https://t.me/SatsFundSupport" className="text-blue-400">
            admin
          </a> .
        </div>
      )
    );
  };

  return (
    <div
      className={`fixed w-full max-w-lg bottom-0 p-5 bg-[#0F0F0F] grid grid-cols-12 gap-5 `}
    >
      {renderHint()}
      {data?.balance_unit_available && (
        <Button
          disabled
          onClick={() => onClick()}
          block
          size="large"
          className=" border-none !bg-[#9a9a9a] rounded-lg text-[16px] font-normal leading-7 col-span-6"
        // className=" bg-transparent border border-[#E8DEF8] text-[#E8DEF8]  rounded-lg text-[16px] font-normal leading-7"
        >
          Sell
        </Button>
      )}
      <Button
        disabled
        onClick={() => onClick()}
        block
        size="large"
        className={`border-none !bg-[#9a9a9a] rounded-lg text-[16px] font-normal leading-7 ${data?.balance_unit_available ? "col-span-6" : "col-span-12"
          }`}

      // className="border-none bg-[#4F378A]  rounded-lg text-white text-[16px] font-normal leading-7"
      >
        Buy
      </Button>
    </div>
  );
};
export default Buttons;
