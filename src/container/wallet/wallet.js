import UserInfoCard from "components/userInfoCard/userInfoCard";
import UserFunds from "./components/userFunds";
import UserTransactions from "./components/userTransactions";
import { useNavigate } from "react-router-dom";

const Wallet = () => {
  const navigate = useNavigate();

  const onFundClick = (id) => {
    navigate(`/fund/${id}`);
  };

  return (
    <div className="my-4 mx-5">
      <UserInfoCard />
      <UserFunds onFundClick={onFundClick} />
      <UserTransactions />
    </div>
  );
};
export default Wallet;
