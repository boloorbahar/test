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

const Transactions = lazy(() => {
  return import("container/transactions/transactions");
});

const ContactUs = lazy(() => {
  return import("container/contactUs/contactUs");
});

const AboutUs = lazy(() => {
  return import("container/aboutUs/aboutUs");
});

const Privacy = lazy(() => {
  return import("container/privacy/privacy");
});

const routes = [
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
  {
    path: "/history",
    element: <Transactions />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/privacy",
    element: <Privacy />,
  },
];

export default routes;
