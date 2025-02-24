import userImg from "assets/images/user.png";
import WebApp from "@twa-dev/sdk";
import { useEffect, useState } from "react";
import config from "utils/globals";
import { useLocation } from "react-router-dom";
import { Button } from "antd";

const UserInfoCard = () => {
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    WebApp?.ready();
    if (WebApp?.initDataUnsafe?.user) {
      setUser(WebApp?.initDataUnsafe?.user);
    }
  }, []);

  const renderBtn = () => {
    return (
      location.pathname === "/wallet" && (
        <Button type="primary" shape="round" size="large" className="mt-5 self-center py-2 px-14 w-full max-w-64 text-[16px] leading-5">
          Connect Ton Wallet
        </Button>
      )
    );
  };
  return (
    <div className="rounded-3xl bg-[#2B213E] p-6 border border-[#58545f] flex flex-col text-white">
      <div className="flex">
        <img src={userImg} className="w-14 h-14" />
        <div className="flex flex-col items-start ml-4">
          <span className="font-bold leading-6 text-xl">
            {user?.first_name || ""} {user?.last_name || ""}{" "}
          </span>
          <span className="mt-[10px] text-[16px] leading-5">
            Total Balance: {config.numberSeparator(178582)}
            <span className="text-xs leading-4 ml-2">USDT</span>{" "}
          </span>
        </div>
      </div>
      {renderBtn()}
    </div>
  );
};
export default UserInfoCard;
