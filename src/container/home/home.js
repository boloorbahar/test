import UserInfoCard from "components/userInfoCard/userInfoCard";
import UserAssets from "./components/userAssets";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const onFundClick = (id) => {
    navigate(`/fund/${id}`);
  };

  return (
    <div className="my-4 mx-5">
      <UserInfoCard />
      <UserAssets onFundClick={onFundClick} />
    </div>
  );
};
export default Home;
