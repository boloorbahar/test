import { Suspense, useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { ConfigProvider } from "antd";
import { useDispatch } from "react-redux";
import { setRouterPath } from "store/router/action";
import DefaultLayout from "layouts/defaultLayout";
import defaultRoutes from "./utils/defaultRoutes";
import pageRoutes from "./utils/pageRoutes";
import PageLayout from "layouts/pageLayout";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(setRouterPath(location.pathname));
  }, [location.pathname]);

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;

      if (location.pathname === "/") {
        tg.BackButton.hide();
      } else {
        tg.BackButton.show();
      }

      return () => {
        tg.BackButton.offClick();
      };
    } else {
      console.warn("Telegram WebApp is not available");
    }
  }, [location]);

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;

      tg.BackButton.onClick(() => navigate(-1));
    }
  }, [navigate]);

  return (
    <ConfigProvider direction="ltr">
      <Suspense>
        <Routes>
          <Route element={<DefaultLayout />}>
            {defaultRoutes.map((route) => {
              return (
                <Route
                  path={route.path}
                  key={route.path}
                  element={route.element}
                />
              );
            })}
          </Route>
          <Route element={<PageLayout />}>
            {pageRoutes.map((route) => {
              return (
                <Route
                  path={route.path}
                  key={route.path}
                  element={route.element}
                />
              );
            })}
          </Route>
        </Routes>
      </Suspense>
    </ConfigProvider>
  );
}

export default App;
