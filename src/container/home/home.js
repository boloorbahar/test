import UserInfoCard from "components/userInfoCard/userInfoCard";
import UserAssets from "./components/userAssets";
import Loading from "components/loading/loading";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createUser,
  getFunds,
  getUser,
  getUserBalance,
} from "container/services/service";
import { useAppContext } from "utils/context";
import { setProfile } from "store/profile/slice";
import { setBalance } from "store/balance/action";
import WebApp from "@twa-dev/sdk";

const Home = () => {
  const { instance } = useAppContext();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const profile = useSelector((state) => state?.profileReducer?.profile);

  const onGetFundsList = useCallback(async () => {
    setLoading(true);
    const response = await getFunds(instance);
    if (response) {
      setData(response);
    }
    setLoading(false);
  }, [instance]);

  useEffect(() => {
    onGetFundsList();
  }, [onGetFundsList]);

  const onCreateUser = async () => {
    const data = {
      username: WebApp?.initDataUnsafe?.user?.username,
      user_id:
        WebApp?.initDataUnsafe?.user?.id &&
        String(WebApp?.initDataUnsafe?.user?.id),
      additionalProp1: {},
    };
    const response =
      WebApp?.initDataUnsafe?.user?.id && (await createUser(instance, data));
    if (response) {
      dispatch(setProfile(response));
    }
  };

  const onGetUser = useCallback(async () => {
    setLoading(true);
    const result = await getUser(instance, WebApp?.initDataUnsafe?.user?.id);
    if (result?.data) {
      dispatch(setProfile(result?.data));
    } else if (
      result?.response?.data?.error === "user not found" &&
      result?.status
    ) {
      await onCreateUser();
    }
    setLoading(false);
  }, [instance]);

  useEffect(() => {
    onGetUser();
  }, [onGetUser]);

  const onUserBalance = useCallback(async () => {
    setLoading(true);
    const response =
      profile?.id && (await getUserBalance(instance, profile?.id));
    if (response) {
      dispatch(setBalance(response));
    }
    setLoading(false);
  }, [instance, profile?.id]);

  useEffect(() => {
    onUserBalance();
  }, [onUserBalance]);

  const onFundClick = (id) => {
    navigate(`/fund/${id}`);
  };

  return (
    <div className="my-4 mx-5">
      <UserInfoCard />
      {loading ? (
        <Loading />
      ) : (
        <UserAssets data={data} onFundClick={onFundClick} />
      )}
    </div>
  );
};
export default Home;
