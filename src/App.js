import { Suspense, useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { ConfigProvider } from "antd";
import { useDispatch } from "react-redux";
import { setRouterPath } from "store/router/action";
import DefaultLayout from "layouts/defaultLayout";
import defaultRoutes from "./utils/defaultRoutes";
import pageRoutes from "./utils/pageRoutes";
import PageLayout from "layouts/pageLayout";
import  WebApp  from '@twa-dev/sdk';

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

      // اگر در صفحه اول هستیم، دکمه Back رو مخفی می‌کنیم
      if (location.pathname === "/") {
        tg.BackButton.hide();
      } else {
        tg.BackButton.show();
      }

      return () => {
        tg.BackButton.offClick();  // حذف لیسنر
      };
    } else {
      console.warn("Telegram WebApp is not available");
    }
  }, [location]);

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;

      tg.BackButton.onClick(() => navigate(-1));  // عملکرد دکمه Back
    }
  }, [navigate]);


  return (
    <ConfigProvider direction="ltr">
      <Suspense>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
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
          <Route path="/" element={<PageLayout />}>
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
