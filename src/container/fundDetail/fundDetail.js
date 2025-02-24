import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { userAssetsData } from "container/services/service";
import { useDispatch } from "react-redux";
import { setFund } from "store/fund/action";
import ReturnChart from "./components/returnChart";
import FundInfo from "./components/fundInfo";
import Buttons from "./components/buttons";
import UserAssetCard from "components/userAssetsCard/userAssetsCard";

const FundDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [data, setData] = useState(null);

  useEffect(() => {
    const assets = userAssetsData()?.filter((i) => i.id === Number(id))[0];
    setData(assets);
    dispatch(setFund(assets));
  }, []);

  const onOrderClick = () => {
    navigate("/order");
  };
  return (
    <>
      <div className=" mb-8 mx-5 ">
        <UserAssetCard data={data} hasReturn={true} />
        <ReturnChart data={data} />
        <FundInfo data={data} />
      </div>
      <Buttons data={data} onClick={onOrderClick} />
    </>
  );
};
export default FundDetail;
