import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFund } from "store/fund/action";
import { useAppContext } from "utils/context";
import { getFundChart, getFundDetail } from "container/services/service";
import ReturnChart from "./components/returnChart";
import FundInfo from "./components/fundInfo";
import Buttons from "./components/buttons";
import UserAssetCard from "components/userAssetsCard/userAssetsCard";

const FundDetail = () => {
  const { id } = useParams();
  const { instance } = useAppContext();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [chartData, setChartData] = useState(false);
  const data = useSelector((state) => state?.fundReducer?.data);
  const balance = useSelector((state) => state?.balanceReducer?.data);
  const balanceData =
    balance?.balances?.length > 0 ?
      balance?.balances?.filter((item) => item.chest === id)[0] : null;

  console.log(id, data, balance, balanceData);
  const onGetFundDetail = useCallback(async () => {
    if (!id) {
      navigate("/"); // اگر id نیست، کاربر رو برگردون به صفحه اصلی
      return;
    }
    const response = await getFundDetail(instance, id);
    if (response) {
      dispatch(setFund(response));
    }
  }, [instance, id]);

  useEffect(() => {
    onGetFundDetail();
  }, [onGetFundDetail]);

  const onGetFundChart = useCallback(async () => {
    setLoading(true);
    const response = await getFundChart(instance, id);
    if (response) {
      setChartData(response);
    }
    setLoading(false);
  }, [instance, id]);

  useEffect(() => {
    onGetFundChart();
  }, [onGetFundChart]);

  const onOrderClick = () => {
    navigate("/order");
  };
  if (!id) {
    return <div className="text-center text-white mt-10">در حال بارگذاری...</div>;
  }
  return (
    <>
      <div className=" mb-8 mx-5 ">
        <UserAssetCard data={data} balance={balanceData} hasReturn={true} />
        <ReturnChart data={data} chartData={chartData} loading={loading} />
        <FundInfo data={data} chartData={chartData} />
      </div>
      <Buttons data={balanceData} onClick={onOrderClick} />
    </>
  );
};
export default FundDetail;
