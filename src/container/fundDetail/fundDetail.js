import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { userAssetsData } from "container/services/service";
import AssetInfo from "./components/assetInfo";
import ReturnChart from "./components/returnChart";
import FundInfo from "./components/fundInfo";
import Buttons from "./components/buttons";

const FundDetail = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [data, setData] = useState(null);

  useEffect(() => {
    const assets = userAssetsData()?.filter((i) => i.id === Number(id))[0];
    setData(assets);
  }, []);

  return (
    <div className="flex items-center bg-gradient-to-bl from-[#1E0E35] to-[#070B16] max-w-lg mx-auto h-screen overflow-y-auto overflow-x-hidden ">
      <div className=" my-24 mx-5 ">
        <AssetInfo data={data} />
        <ReturnChart data={data} />
        <FundInfo data={data} />
      </div>
      <Buttons data={data} />
    </div>
  );
};
export default FundDetail;
