import { lazy } from "react";

const Home = lazy(() => {
  return import("container/home/home");
});

const Wallet = lazy(() => {
  return import("container/wallet/wallet");
});

const Profile = lazy(() => {
  return import("container/profile/profile");
});

const defaultRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/wallet",
    element: <Wallet />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
];

export default defaultRoutes;
