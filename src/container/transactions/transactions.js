import UserInfoCard from "components/userInfoCard/userInfoCard";
import Loading from "components/loading/loading";
import TransactionItems from "./components/TransactionItems";
import { useAppContext } from "utils/context";
import { useCallback, useEffect, useState } from "react";
import { getTransactions } from "container/services/service";
import { useSelector } from "react-redux";

const Transactions = () => {
  const { instance } = useAppContext();
  const [transactions, setTransactions] = useState(null);
  const [loading, setLoading] = useState(false);
  const profile = useSelector((state) => state?.profileReducer?.profile);

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
  return (
    <div className="my-4 mx-5">
      <UserInfoCard />
      {loading ? <Loading /> : <TransactionItems data={transactions} />}
    </div>
  );
};
export default Transactions;
