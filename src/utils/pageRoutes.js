import { lazy } from "react";

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

const FundDetail = lazy(() => {
  return import("container/fundDetail/fundDetail");
});

const Order = lazy(() => {
  return import("container/order/order");
});

const Terms = lazy(() => {
  return import("container/terms/terms");
});

const routes = [
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
  {
    path: "/terms",
    element: <Terms />,
  },
  {
    path: "/fund",
    element: <FundDetail />,
  },
  {
    path: "/order",
    element: <Order />,
  },
];

export default routes;
