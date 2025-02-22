import UserInfoCard from "components/userInfoCard/userInfoCard";
import TransactionItems from "./components/TransactionItems";

const Transactions = () => {
  return (
    <div className="my-4 mx-5">
      <UserInfoCard />
      <TransactionItems/>
    </div>
  );
};
export default Transactions;
