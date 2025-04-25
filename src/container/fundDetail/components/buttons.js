import { Button } from "antd";

const Buttons = ({ data, onClick }) => {
  return (
    <div
      className={`fixed w-full max-w-lg bottom-0 p-5 bg-[#0F0F0F] grid ${
        data?.unit ? "grid-cols-2" : "grid-cols-1"
      } gap-5 `}
    >
      {data?.balance_unit_available && (
        <Button
          disabled
          onClick={() => onClick()}
          block
          size="large"
          className=" border-none !bg-[#9a9a9a] rounded-lg text-[16px] font-normal leading-7"
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
        className="border-none !bg-[#9a9a9a] rounded-lg text-[16px] font-normal leading-7"

        // className="border-none bg-[#4F378A]  rounded-lg text-white text-[16px] font-normal leading-7"
      >
        Buy
      </Button>
    </div>
  );
};
export default Buttons;
