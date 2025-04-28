import UserInfoCard from "components/userInfoCard/userInfoCard";
import UserFunds from "./components/userFunds";
import UserTransactions from "./components/userTransactions";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAppContext } from "utils/context";
import { getTransactions } from "container/services/service";
import { useCallback, useEffect, useState } from "react";
import { setFundId } from "store/fund/action";
import Loading from "components/loading/loading";

const Wallet = () => {
  const { instance } = useAppContext();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state?.balanceReducer?.data);
  const fund = useSelector((state) => state?.fundReducer?.data);
  const profile = useSelector((state) => state?.profileReducer?.profile);
  const [transactions, setTransactions] = useState(null);
  const [loading, setLoading] = useState(false);

  const onGetTransactionsList = useCallback(async () => {
    setLoading(true);
    const response = await getTransactions(instance, profile?.id);
    if (response) {
      setTransactions(response);
    }
    setLoading(false);
  }, [instance, profile?.id]);

  useEffect(() => {
    onGetTransactionsList();
  }, [onGetTransactionsList]);

  const onFundClick = (id) => {
    dispatch(setFundId(id));
    navigate(`/fund/${id}`);
  };

  return (
    <div className="my-4 mx-5">
      <UserInfoCard />
      <UserFunds onFundClick={onFundClick} data={data} fund={fund} />
      {loading ? (
        <Loading />
      ) : (
        transactions?.length > 0 && <UserTransactions data={transactions} />
      )}
    </div>
  );
};
export default Wallet;
