import { useNavigate } from "react-router-dom";
import UserInfoCard from "components/userInfoCard/userInfoCard";
import ProfileItems from "./components/profileItems";

const Profile = () => {
  const navigate = useNavigate();

  const handleItemClick = (link) => {
    link !== null && navigate(link);
  };
  return (
    <div className="my-4 mx-5">
      <UserInfoCard />
      <ProfileItems handleItemClick={handleItemClick} />
    </div>
  );
};
export default Profile;
